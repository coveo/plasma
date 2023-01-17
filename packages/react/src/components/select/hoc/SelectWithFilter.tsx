import classNames from 'classnames';
import {Component, ComponentClass, ComponentType, ReactNode} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../../hoc/withServerSideProcessing/withServerSideProcessing.js';
import {PlasmaState} from '../../../PlasmaState.js';
import {
    addStringList,
    addValueStringList,
    removeStringList,
} from '../../../reusableState/customList/StringListActions.js';
import {IDispatch} from '../../../utils/ReduxUtils.js';
import {UUID} from '../../../utils/UUID.js';
import {IFilterBoxOwnProps} from '../../filterBox/FilterBox.js';
import {FilterBoxConnected} from '../../filterBox/FilterBoxConnected.js';
import {FilterBoxSelectors} from '../../filterBox/FilterBoxSelectors.js';
import {MatchFilter} from '../../filterBox/FilterBoxUtils.js';
import {IItemBoxProps} from '../../itemBox/ItemBox.js';
import {ISelectOwnProps} from '../SelectConnected.js';
import {SelectSelector} from '../SelectSelector.js';

export interface ISelectWithFilterOwnProps {
    defaultCustomValues?: string[];
    matchFilter?: MatchFilter;
    customValues?: boolean;
    addValueText?: (filterText: string) => string;
    duplicateText?: string;
    noResultFilterText?: (filterText: string) => string;
    noItemsText?: string;
    filter?: IFilterBoxOwnProps;
    children?: ReactNode;
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

/**
 * @deprecated Use Mantine Select instead: https://mantine.dev/core/select/
 */
export const selectWithFilter = <P extends Omit<ISelectOwnProps, 'button'> & WithServerSideProcessingProps>(
    WrappedComponent: ComponentType
): ComponentClass<P & ISelectWithFilterOwnProps> => {
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

    class Wrapper extends Component<Props> {
        static displayName = `withFilter(${WrappedComponent.displayName})`;
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

            let noResultItem: any = this.props.noResultItem || this.noResultFilter();
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

            return (
                <WrappedComponent
                    {...newProps}
                    noResultItem={noResultItem}
                    noDisabled={this.props.customValues}
                    hasFocusableChild
                >
                    <FilterBoxConnected
                        {...this.props.filter}
                        id={this.props.id}
                        onKeyDown={(this.props as any).onKeyDown}
                        onKeyUp={(this.props as any).onKeyUp}
                        className={filterBoxClassNames}
                        isAutoFocus
                    ></FilterBoxConnected>
                    {this.props.children}
                </WrappedComponent>
            );
        }
    }

    // @ts-ignore
    return connect(makeMapStateToProps, mapDispatchToProps)(Wrapper);
};
