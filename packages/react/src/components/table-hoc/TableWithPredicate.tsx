import {ComponentType, ReactNode, Component, PropsWithChildren} from 'react';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing.js';
import {PlasmaState} from '../../PlasmaState.js';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils.js';
import {ReduxConnect} from '../../utils/ReduxUtils.js';
import {UrlUtils} from '../../utils/UrlUtils.js';
import {IItemBoxProps} from '../itemBox/ItemBox.js';
import {SelectSelector} from '../select/SelectSelector.js';
import {SingleSelectConnected} from '../select/SingleSelectConnected.js';
import {ITableHOCOwnProps} from './TableHOC.js';
import {TableHOCUtils} from './utils/TableHOCUtils.js';

export interface IPredicateComponentProps
    extends Partial<ITableWithPredicateStateProps>,
        ITableHOCOwnProps,
        WithServerSideProcessingProps {
    id: string;
}

type PredicateComponentType = ComponentType<PropsWithChildren<IPredicateComponentProps>>;

export interface ITableWithPredicateGenericConfig extends WithServerSideProcessingProps {
    id: string;
    matchPredicate?: (predicate: string, datum: any) => boolean;
}

export interface ITableWithPredicateStateProps {
    predicate: string;
    urlPredicate: string[];
    children?: ReactNode;
}

export interface ITableWithPredicateProps
    extends Partial<ITableWithPredicateStateProps>,
        ITableHOCOwnProps,
        WithServerSideProcessingProps {}

const TableWithPredicatePropsToOmit = ['predicate', 'urlPredicate'];

const defaultMatchPredicate = (predicate: string, datum: any) =>
    !predicate || _.some(_.values(datum), (value: string) => value === predicate);

type TableWithPredicateComponent = ComponentType<PropsWithChildren<ITableWithPredicateProps>>;
export const tableWithPredicateGeneric =
    (supplier: ConfigSupplier<ITableWithPredicateGenericConfig>) =>
    (PredicateComponent: PredicateComponentType) =>
    (TableComponent: TableWithPredicateComponent): TableWithPredicateComponent => {
        const config = HocUtils.supplyConfig(supplier);

        const mapStateToProps = (
            state: PlasmaState,
            ownProps: ITableWithPredicateProps
        ): ITableWithPredicateStateProps | ITableHOCOwnProps => {
            const predicate =
                SelectSelector.getListBoxSelected(state, {
                    id: TableHOCUtils.getPredicateId(ownProps.id, config.id),
                })[0] || '';
            const matchPredicate = config.matchPredicate || defaultMatchPredicate;
            const predicateData = () =>
                !ownProps.isServer && !config.isServer && predicate
                    ? _.filter(ownProps.data, (datum: any) => matchPredicate(predicate, datum))
                    : ownProps.data;

            const urlParams = UrlUtils.getSearchParams();
            const possiblePredicates = TableHOCUtils.getPredicateIds(ownProps.id, state);

            return {
                predicate: predicate,
                data: ownProps.data && predicateData(),
                urlPredicate: Object.keys(urlParams)
                    .filter((key) => possiblePredicates.includes(key))
                    .map((key) => urlParams[key]),
            };
        };

        @ReduxConnect(mapStateToProps)
        class TableWithPredicate extends Component<ITableWithPredicateProps> {
            componentDidUpdate(prevProps: ITableWithPredicateProps) {
                if (
                    prevProps.predicate !== this.props.predicate &&
                    !_.include(this.props.urlPredicate, this.props.predicate)
                ) {
                    this.props.onUpdate?.();
                }
            }

            render() {
                const key = TableHOCUtils.getPredicateId(this.props.id, config.id);
                const actions = this.props.actions || [];
                const newProps = _.omit(this.props, [...TableWithPredicatePropsToOmit]);

                const predicateComponentProps = {
                    ...newProps,
                    id: key,
                };

                const predicateAction = (
                    <div className="coveo-table-actions predicate-filters table-predicate-filters" key={key}>
                        <PredicateComponent {...predicateComponentProps} />
                    </div>
                );

                const newActions = [...actions, predicateAction];
                return (
                    <TableComponent {...newProps} actions={newActions}>
                        {this.props.children}
                    </TableComponent>
                );
            }
        }

        return TableWithPredicate;
    };

export interface ITableWithPredicateConfig extends WithServerSideProcessingProps {
    id: string;
    values: IItemBoxProps[];
    prepend?: ReactNode;
    matchPredicate?: (predicate: string, datum: any) => boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const tableWithPredicate = (supplier: ConfigSupplier<ITableWithPredicateConfig>) => {
    const config = HocUtils.supplyConfig(supplier);

    return tableWithPredicateGeneric({
        ...config,
    })((props) => (
        <SingleSelectConnected
            id={props.id}
            items={config.values}
            buttonPrepend={config.prepend}
            isLoading={props.isLoading}
        />
    ));
};
