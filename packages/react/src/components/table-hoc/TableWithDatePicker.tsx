import classNames from 'clsx';
import {Component, ComponentClass, ComponentType, ReactNode} from 'react';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {PlasmaState} from '../../PlasmaState';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils';
import {ReduxConnect} from '../../utils/ReduxUtils';
import {UrlUtils} from '../../utils/UrlUtils';
import {IDatePickerDropdownOwnProps} from '../datePicker/DatePickerDropdown';
import {DatePickerDropdownConnected} from '../datePicker/DatePickerDropdownConnected';
import {DatePickerSelectors} from '../datePicker/DatePickerSelectors';
import {ITableHOCOwnProps} from './TableHOC';
import {Params} from './TableWithUrlState';

export interface ITableWithDatePickerConfig
    extends WithServerSideProcessingProps,
        Partial<IDatePickerDropdownOwnProps> {
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

const TableWithFilterPropsToOmit = ['lowerLimit', 'upperLimit'];

export type FilterableTableComponent = ComponentClass<ITableWithDatePickerProps>;

const defaultMatchDates = () => true;

/**
 * @deprecated Use Mantine instead
 */
export const tableWithDatePicker =
    (supplier: ConfigSupplier<ITableWithDatePickerConfig> = {}) =>
    (WrappedComponent: ComponentType<any>): FilterableTableComponent => {
        const config = HocUtils.supplyConfig(supplier);

        const mapStateToProps = (
            state: PlasmaState,
            ownProps: ITableWithDatePickerProps,
        ): ITableWithDatePickerStateProps | ITableHOCOwnProps => {
            const [lowerLimit, upperLimit] = DatePickerSelectors.getDatePickerLimits(state, {id: ownProps.id});
            const matchDates = config.matchDates || defaultMatchDates;
            const filterData = () =>
                lowerLimit
                    ? _.filter(ownProps.data, (datum: any) => matchDates(datum, lowerLimit, upperLimit))
                    : ownProps.data;

            const urlParams = UrlUtils.getSearchParams();
            const lowerDateLimitFromUrl =
                urlParams[Params.lowerDateLimit] && new Date(urlParams[Params.lowerDateLimit]);
            const upperDateLimitFromUrl =
                urlParams[Params.upperDateLimit] && new Date(urlParams[Params.upperDateLimit]);
            return {
                lowerLimit: lowerLimit || lowerDateLimitFromUrl || config.initialDateRange?.[0],
                upperLimit: upperLimit || upperDateLimitFromUrl || config.initialDateRange?.[1],
                data: config.isServer || ownProps.isServer ? ownProps.data : ownProps.data && filterData(),
            };
        };

        @ReduxConnect(mapStateToProps)
        class TableWithDatePicker extends Component<ITableWithDatePickerProps> {
            static defaultProps: Partial<ITableWithDatePickerProps> = {
                actions: [],
            };

            componentDidUpdate(prevProps: ITableWithDatePickerProps) {
                if (
                    prevProps.lowerLimit?.valueOf() !== this.props.lowerLimit?.valueOf() ||
                    prevProps.upperLimit?.valueOf() !== this.props.upperLimit?.valueOf()
                ) {
                    this.props.onUpdate?.();
                }
            }

            render(): ReactNode {
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
                    <WrappedComponent {...newProps} actions={newActions}>
                        {this.props.children}
                    </WrappedComponent>
                );
            }
        }

        return TableWithDatePicker;
    };
