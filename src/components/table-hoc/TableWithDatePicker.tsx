import * as classNames from 'classnames';
import * as React from 'react';
import {keys} from 'ts-transformer-keys/index';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils';
import {ReduxConnect} from '../../utils/ReduxUtils';
import {IDatePickerDropdownChildrenProps, IDatePickerDropdownOwnProps} from '../datePicker/DatePickerDropdown';
import {DatePickerDropdownConnected} from '../datePicker/DatePickerDropdownConnected';
import {DatePickerSelectors} from '../datePicker/DatePickerSelectors';
import {IMaybeServerConfig, ITableHOCOwnProps} from './TableHOC';

export interface ITableWithDatePickerConfig extends IMaybeServerConfig,
    Partial<IDatePickerDropdownOwnProps>,
    Partial<IDatePickerDropdownChildrenProps> {
    matchDates?: (data: any, lowerLimit: Date, upperLimit?: Date) => boolean;
}

export interface ITableWithDatePickerStateProps {
    lowerLimit: Date;
    upperLimit: Date;
}

export interface ITableWithFilterDispatchProps {
    onRender: () => void;
}

export interface ITableWithDatePickerProps extends Partial<ITableWithDatePickerStateProps>,
    Partial<ITableWithFilterDispatchProps>,
    ITableHOCOwnProps {}

const TableWithFilterPropsToOmit = keys<ITableWithDatePickerStateProps>();

export type FilterableTableComponent = React.ComponentClass<ITableWithDatePickerProps>;

const defaultMatchDates = () => true;

export const tableWithDatePicker = (supplier: ConfigSupplier<ITableWithDatePickerConfig> = {}) => (Component: FilterableTableComponent): FilterableTableComponent => {

    const mapStateToProps = (state: IReactVaporState, ownProps: ITableWithDatePickerProps): ITableWithDatePickerStateProps | ITableHOCOwnProps => {
        const config = HocUtils.supplyConfig(supplier);
        const [lowerLimit, upperLimit] = DatePickerSelectors.getDatePickerLimits(state, {id: ownProps.id});
        const matchDates = config.matchDates || defaultMatchDates;
        const filterData = () => lowerLimit
            ? _.filter(ownProps.data, (datum: any) => matchDates(datum, lowerLimit, upperLimit))
            : ownProps.data;
        return {
            lowerLimit,
            upperLimit,
            data: config.isServer ? ownProps.data : ownProps.data && filterData(),
        };
    };

    @ReduxConnect(mapStateToProps)
    class TableWithDatePicker extends React.Component<ITableWithDatePickerProps> {
        static defaultProps: Partial<ITableWithDatePickerProps> = {
            actions: [],
        };

        componentDidUpdate(prevProps: ITableWithDatePickerProps) {
            if (prevProps.lowerLimit !== this.props.lowerLimit
                || prevProps.upperLimit !== this.props.upperLimit) {
                callIfDefined(this.props.onUpdate);
            }
        }

        render(): React.ReactNode {
            const config = HocUtils.supplyConfig(supplier);
            const datePickerAction = (
                <DatePickerDropdownConnected
                    {...config as any}
                    id={this.props.id}
                    key={this.props.id}
                    className={classNames('coveo-table-actions', config.className)}
                    onRight
                />
            );
            const newActions = [...this.props.actions, datePickerAction];
            const newProps = _.omit(this.props, TableWithFilterPropsToOmit);
            return (
                <Component {...newProps} actions={newActions}>
                    {this.props.children}
                </Component>
            );
        }
    }

    return TableWithDatePicker;
};
