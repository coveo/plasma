import classNames from 'classnames';
import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {IReactVaporState} from '../../ReactVapor';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils';
import {ReduxConnect} from '../../utils/ReduxUtils';
import {UrlUtils} from '../../utils/UrlUtils';
import {IDatePickerDropdownChildrenProps, IDatePickerDropdownOwnProps} from '../datePicker/DatePickerDropdown';
import {DatePickerDropdownConnected} from '../datePicker/DatePickerDropdownConnected';
import {DatePickerSelectors} from '../datePicker/DatePickerSelectors';
import {ITableHOCOwnProps} from './TableHOC';
import {Params} from './TableWithUrlState';

export interface ITableWithDatePickerConfig
    extends WithServerSideProcessingProps,
        Partial<IDatePickerDropdownOwnProps>,
        Partial<IDatePickerDropdownChildrenProps> {
    matchDates?: (data: any, lowerLimit: Date, upperLimit?: Date) => boolean;
}

export interface ITableWithDatePickerStateProps {
    lowerLimit: Date;
    upperLimit: Date;
}

export interface ITableWithDatePickerDispatchProps {
    onRender: () => void;
}

export interface ITableWithDatePickerProps
    extends Partial<ITableWithDatePickerStateProps>,
        Partial<ITableWithDatePickerDispatchProps>,
        ITableHOCOwnProps,
        WithServerSideProcessingProps {}

const TableWithFilterPropsToOmit = keys<ITableWithDatePickerStateProps>();

export type FilterableTableComponent = React.ComponentClass<ITableWithDatePickerProps>;

const defaultMatchDates = () => true;

export const tableWithDatePicker = (supplier: ConfigSupplier<ITableWithDatePickerConfig> = {}) => (
    Component: FilterableTableComponent
): FilterableTableComponent => {
    const config = HocUtils.supplyConfig(supplier);

    const mapStateToProps = (
        state: IReactVaporState,
        ownProps: ITableWithDatePickerProps
    ): ITableWithDatePickerStateProps | ITableHOCOwnProps => {
        const [lowerLimit, upperLimit] = DatePickerSelectors.getDatePickerLimits(state, {id: ownProps.id});
        const matchDates = config.matchDates || defaultMatchDates;
        const filterData = () =>
            lowerLimit
                ? _.filter(ownProps.data, (datum: any) => matchDates(datum, lowerLimit, upperLimit))
                : ownProps.data;

        const urlParams = UrlUtils.getSearchParams();
        const lowerDateLimitFromUrl = urlParams[Params.lowerDateLimit] && new Date(urlParams[Params.lowerDateLimit]);
        const upperDateLimitFromUrl = urlParams[Params.upperDateLimit] && new Date(urlParams[Params.upperDateLimit]);
        return {
            lowerLimit: lowerLimit || lowerDateLimitFromUrl || config.initialDateRange?.[0],
            upperLimit: upperLimit || upperDateLimitFromUrl || config.initialDateRange?.[1],
            data: config.isServer || ownProps.isServer ? ownProps.data : ownProps.data && filterData(),
        };
    };

    @ReduxConnect(mapStateToProps)
    class TableWithDatePicker extends React.Component<ITableWithDatePickerProps> {
        static defaultProps: Partial<ITableWithDatePickerProps> = {
            actions: [],
        };

        componentDidUpdate(prevProps: ITableWithDatePickerProps) {
            if (
                prevProps.lowerLimit.valueOf() !== this.props.lowerLimit.valueOf() ||
                prevProps.upperLimit.valueOf() !== this.props.upperLimit.valueOf()
            ) {
                this.props.onUpdate?.();
            }
        }

        render(): React.ReactNode {
            const datePickerAction = (
                <DatePickerDropdownConnected
                    {...(config as any)}
                    initialDateRange={[this.props.lowerLimit, this.props.upperLimit]}
                    id={this.props.id}
                    key={this.props.id}
                    className={classNames('coveo-table-actions', config.className)}
                    onRight
                    isLoading={this.props.isLoading}
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
