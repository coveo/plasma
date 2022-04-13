import loadable from '@loadable/component';
import classNames from 'classnames';
import * as React from 'react';
// import {lazy, Suspense} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';
import {PlasmaState} from '../../../PlasmaState';
import {addStringList, addValueStringList, removeStringList} from '../../../reusableState/customList/StringListActions';
import {IDispatch} from '../../../utils/ReduxUtils';
import {UUID} from '../../../utils/UUID';
import {IFilterBoxOwnProps} from '../../filterBox/FilterBox';
import {FilterBoxSelectors} from '../../filterBox/FilterBoxSelectors';
import {MatchFilter} from '../../filterBox/FilterBoxUtils';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {ISelectOwnProps} from '../SelectConnected';
import {SelectSelector} from '../SelectSelector';

export interface ISelectWithFilterOwnProps {
    defaultCustomValues?: string[];
    matchFilter?: MatchFilter;
    customValues?: boolean;
    addValueText?: (filterText: string) => string;
    duplicateText?: string;
    noResultFilterText?: (filterText: string) => string;
    noItemsText?: string;
    filter?: IFilterBoxOwnProps;
}

const SelectWithFilterPropsToOmit = [
    'addValueText',
    'customValues',
    'defaultCustomValues',
    'duplicateText',
    'filter',
    'matchFilter',
    'noItemsText',
    'noResultFilterText',
];

export const selectWithFilter = <P extends Omit<ISelectOwnProps, 'button'> & WithServerSideProcessingProps>(
    Component: React.ComponentType<P>
): React.ComponentClass<P & ISelectWithFilterOwnProps> => {
    type OwnProps = P & ISelectWithFilterOwnProps;
    type Props = OwnProps & ReturnType<ReturnType<typeof makeMapStateToProps>> & ReturnType<typeof mapDispatchToProps>;

    const makeMapStateToProps = (initialState: PlasmaState, initialOwnProps: OwnProps) =>
        createStructuredSelector({
            filterValue: FilterBoxSelectors.getFilterText,
            items: initialOwnProps.isServer
                ? SelectSelector.getServerFilteredItems
                : SelectSelector.getCustomItemsWithFilter,
            selected: SelectSelector.getListBoxSelected,
        });

    const mapDispatchToProps = (dispatch: IDispatch, ownProps: OwnProps) => ({
        onRenderFilter: (items: string[]) => dispatch(addStringList(ownProps.id, items)),
        onDestroyFilter: () => dispatch(removeStringList(ownProps.id)),
        onSelectCustomValue: (filterValue: string) => dispatch(addValueStringList(ownProps.id, filterValue)),
    });

    class WrappedComponent extends React.Component<Props> {
        static displayName = `withFilter(${Component.displayName})`;
        static defaultProps: Partial<ISelectWithFilterOwnProps> = {
            duplicateText: 'Cannot add a duplicate value',
            noResultFilterText: (filterText: string) => `No results match "${filterText}"`,
            noItemsText: 'No items, enter a new value',
            addValueText: (filterText: string) => `Add "${filterText}"`,
            defaultCustomValues: [],
        };

        private dividerId: string = UUID.generate();

        componentDidMount() {
            this.props.onRenderFilter(this.props.defaultCustomValues);
        }

        componentDidUpdate(prevProps: Props) {
            if (prevProps.filterValue !== this.props.filterValue) {
                this.props.onUpdate?.();
            }
        }

        componentWillUnmount() {
            this.props.onDestroyFilter();
        }

        private addItemBoxCustomValue(): IItemBoxProps[] {
            const addItemBox: IItemBoxProps = {
                displayValue: this.props.addValueText(this.props.filterValue),
                value: this.props.filterValue,
                onOptionClick: () => this.props.onSelectCustomValue(this.props.filterValue),
            };
            const divider: IItemBoxProps[] = _.some(this.props.items, (item: IItemBoxProps) => !item.hidden)
                ? [{value: this.dividerId, divider: true, disabled: true}]
                : [];

            return [addItemBox, ...divider];
        }

        private noResultFilter(): IItemBoxProps {
            return {
                value: this.props.noResultFilterText(this.props.filterValue),
            };
        }

        private duplicateValue(): IItemBoxProps {
            return {
                value: this.props.duplicateText,
                disabled: true,
            };
        }

        private noItems(): IItemBoxProps {
            return {
                value: this.props.noItemsText,
                disabled: true,
            };
        }

        private isDuplicateValue(): boolean {
            return (
                _.chain(this.props.items)
                    .pluck('value')
                    .concat(this.props.selected)
                    .indexOf(this.props.filterValue)
                    .value() !== -1
            );
        }

        private allValuesAreSelected(): boolean {
            return !_.chain(this.props.items).pluck('value').contains(this.props.selected).value();
        }

        render() {
            const filterBoxClassNames: string = classNames({
                'flex flex-center': this.props.customValues,
                mb2: !!this.props.children,
            });

            let noResultItem: React.ReactNode = this.props.noResultItem || this.noResultFilter();
            let items = this.props.items.map(
                (item: IItemBoxProps): IItemBoxProps => ({...item, highlight: this.props.filterValue})
            );

            if (this.isDuplicateValue()) {
                noResultItem = this.duplicateValue();
            } else if (!_.isEmpty(this.props.filterValue) && this.props.customValues) {
                items = [...this.addItemBoxCustomValue(), ...items];
            } else if (this.props.customValues && _.every(items, (item) => item.hidden)) {
                noResultItem = this.noItems();
            } else if (items.length && this.allValuesAreSelected()) {
                noResultItem = this.noItems();
            }

            const newProps = {
                ..._.omit(this.props, [...SelectWithFilterPropsToOmit, 'selected']),
                items,
            };

            // const FilterBox = React.lazy(() => import('./../../filterBox/FilterBoxConnected'));

            // const FilterBox = lazy(() => import('./../../filterBox/FilterBoxConnected'));
            const FilterBox = loadable(() => import('./../../filterBox/FilterBoxConnected'), {
                ssr: false,
                resolveComponent: (mod: typeof import('./../../filterBox/FilterBoxConnected')) => mod.default,
            });
            return (
                <Component
                    {...newProps}
                    noResultItem={noResultItem}
                    noDisabled={this.props.customValues}
                    hasFocusableChild
                >
                    {/* <Suspense fallback={'patate'}> */}
                    <FilterBox
                        {...this.props.filter}
                        id={this.props.id}
                        onKeyDown={(this.props as any).onKeyDown}
                        onKeyUp={(this.props as any).onKeyUp}
                        className={filterBoxClassNames}
                        isAutoFocus
                    />
                    {/* </Suspense> */}

                    {this.props.children}
                </Component>
            );
        }
    }

    // @ts-ignore
    return connect(makeMapStateToProps, mapDispatchToProps)(WrappedComponent);
};
