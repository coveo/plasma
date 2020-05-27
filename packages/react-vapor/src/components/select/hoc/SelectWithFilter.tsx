import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';
import {IReactVaporState} from '../../../ReactVapor';
import {addStringList, addValueStringList, removeStringList} from '../../../reusableState/customList/StringListActions';
import {IDispatch} from '../../../utils/ReduxUtils';
import {UUID} from '../../../utils/UUID';
import {Button, IButtonProps} from '../../button/Button';
import {IFilterBoxOwnProps} from '../../filterBox/FilterBox';
import {FilterBoxConnected} from '../../filterBox/FilterBoxConnected';
import {FilterBoxSelectors} from '../../filterBox/FilterBoxSelectors';
import {MatchFilter} from '../../filterBox/FilterBoxUtils';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {Svg} from '../../svg/Svg';
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
    filterButton?: IButtonProps;
    filter?: IFilterBoxOwnProps;
}

const SelectWithFilterPropsToOmit = keys<ISelectWithFilterOwnProps>();

export function selectWithFilter<P extends Omit<ISelectOwnProps, 'button'> & WithServerSideProcessingProps>(
    Component: React.ComponentType<P>
): React.ComponentClass<P & ISelectWithFilterOwnProps> {
    type OwnProps = P & ISelectWithFilterOwnProps;
    type Props = OwnProps & ReturnType<ReturnType<typeof makeMapStateToProps>> & ReturnType<typeof mapDispatchToProps>;

    const makeMapStateToProps = (initialState: IReactVaporState, initialOwnProps: OwnProps) =>
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
            filterButton: {
                enabled: true,
                tooltip: 'Add',
                tooltipPlacement: 'top',
            },
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

        private handleOnClick = () => {
            if (!_.isEmpty(this.props.filterValue)) {
                this.props.onSelectCustomValue(this.props.filterValue);
            }
        };

        private getAddValueButton(): React.ReactNode {
            return (
                this.props.customValues && (
                    <div className="ml1">
                        <Button classes={['p1']} onClick={this.handleOnClick} {...this.props.filterButton}>
                            <Svg svgName={'add'} className="icon mod-lg mod-align-with-text" />
                        </Button>
                    </div>
                )
            );
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
            return !_.chain(this.props.items)
                .pluck('value')
                .contains(this.props.selected)
                .value();
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

            return (
                <Component
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
                    >
                        {this.getAddValueButton()}
                    </FilterBoxConnected>
                    {this.props.children}
                </Component>
            );
        }
    }

    // @ts-ignore
    return connect(makeMapStateToProps, mapDispatchToProps)(WrappedComponent);
}
