import * as classNames from 'classnames';
import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {addStringList, addValueStringList, removeStringList} from '../../reusableState/customList/StringListActions';
import {convertStringListToItemsBox, IStringListState} from '../../reusableState/customList/StringListReducers';
import {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';
import {Button} from '../button/Button';
import {FilterBoxConnected} from '../filterBox/FilterBoxConnected';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {clearListBoxOption} from '../listBox/ListBoxActions';
import {Svg} from '../svg/Svg';
import {ISelectOwnProps, ISelectSpecificProps, ISelectStateProps} from './SelectConnected';

export interface ISelectWithFilterOwnProps {
    matchFilter?: (filterValue: string, item: IItemBoxProps) => boolean;
    customValues?: boolean;
}

export interface ISelectWithFilterStateProps extends ISelectStateProps {
    filterValue: string;
    selected: string[];
}

export interface ISelectWithFilterDispatchProps {
    onRenderFilter: () => void;
    onDestroyFilter: () => void;
    onSelectCustomValue: (filterValue: string) => void;
}

const SelectWithFilterPropsToOmit = keys<ISelectWithFilterOwnProps>();

export interface ISelectWithFilterProps extends ISelectWithFilterOwnProps,
    Partial<ISelectWithFilterStateProps>,
    Partial<ISelectWithFilterDispatchProps>,
    ISelectOwnProps {}

export const selectWithFilter = (Component: (React.ComponentClass<ISelectWithFilterProps> | React.StatelessComponent<ISelectWithFilterProps>)): React.ComponentClass<ISelectWithFilterProps> => {
    const defaultMatchFilter = (filterValue: string, item: IItemBoxProps) => {
        if (filterValue === '') {
            return true;
        }

        const regex = new RegExp(filterValue, 'gi');
        return regex.test(item.value) || regex.test(item.displayValue);
    };

    const mapStateToProps = (state: IReactVaporState, ownProps: ISelectWithFilterProps): ISelectWithFilterStateProps => {
        const filter = _.findWhere(state.filters, {id: ownProps.id});
        const filterValue = filter && filter.filterText || '';
        const listState: IStringListState = state.selectWithFilter[ownProps.id];
        const listbox = _.findWhere(state.listBoxes, {id: ownProps.id});

        let customItemBox: IItemBoxProps[] = [];
        if (listState && listState.list) {
            const valueToRemove: string[] = _.map(ownProps.items, (item: IItemBoxProps) => item.value);
            customItemBox = convertStringListToItemsBox(_.difference(listState.list, valueToRemove), {hidden: true, selected: true});
        }

        const items: IItemBoxProps[] = _.map(ownProps.items, (item: IItemBoxProps) => {
            const visible = _.isUndefined(ownProps.matchFilter)
                ? defaultMatchFilter(filterValue, item)
                : ownProps.matchFilter(filterValue, item);

            return {...item, hidden: !visible || item.hidden};
        });

        return {
            filterValue,
            items: [...items, ...customItemBox],
            selected: listbox && listbox.selected ? listbox.selected : [],
        };
    };

    const mapDispatchToProps = (
        dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
        ownProps: ISelectOwnProps & ISelectSpecificProps,
    ): ISelectWithFilterDispatchProps => ({
        onRenderFilter: () => dispatch(addStringList(ownProps.id)),
        onDestroyFilter: () => dispatch(removeStringList(ownProps.id)),
        onSelectCustomValue: (filterValue: string) => {
            if (!ownProps.multi) {
                dispatch(clearListBoxOption(ownProps.id));
            }
            dispatch(addValueStringList(ownProps.id, filterValue, !ownProps.multi));
        },
    });

    @ReduxConnect(mapStateToProps, mapDispatchToProps)
    class WrappedComponent extends React.Component<ISelectWithFilterProps> {

        componentWillMount() {
            this.props.onRenderFilter();
        }

        componentWillUnmount() {
            this.props.onDestroyFilter();
        }

        private addItemBoxCustomValue(): IItemBoxProps {
            return {
                displayValue: `Add "${this.props.filterValue}"`,
                value: this.props.filterValue,
                onOptionClick: () => this.props.onSelectCustomValue(this.props.filterValue),
            };
        }

        private noResultFilter(): IItemBoxProps {
            return {
                value: `No results match "${this.props.filterValue}"`,
            };
        }

        private duplicateValue(): IItemBoxProps {
            return {
                value: `Cannot add a duplicate value`,
            };
        }

        private handleOnClick() {
            if (!_.isEmpty(this.props.filterValue)) {
                this.props.onSelectCustomValue(this.props.filterValue);
            }
        }

        private getButton(): React.ReactNode {
            return this.props.customValues
                ? (<div className='ml1'>
                    <Button classes={['p1']} onClick={() => this.handleOnClick()} tooltip={'Add'} tooltipPlacement={'top'}>
                        <Svg svgName={'add'} className='icon mod-lg mod-align-with-text' />
                    </Button>
                </div>
                )
                : null;
        }

        private isDuplicateValue(): boolean {
            return _.chain(this.props.items)
                .pluck('value')
                .concat(this.props.selected)
                .indexOf(this.props.filterValue)
                .value() !== -1;
        }

        render() {
            const filterBoxClassNames: string = classNames({
                'flex flex-center': this.props.customValues,
                'mb2': !!this.props.children,
            });

            let noResultItem: React.ReactNode = this.props.noResultItem || this.noResultFilter();
            let items = [...this.props.items];

            if (this.isDuplicateValue()) {
                noResultItem = this.duplicateValue();
            } else if (!_.isEmpty(this.props.filterValue) && this.props.customValues) {
                items = [...items, this.addItemBoxCustomValue()];
            }

            const newProps = {..._.omit(this.props, [...SelectWithFilterPropsToOmit, 'selected']), items};

            return (
                <Component {...newProps}
                    noResultItem={noResultItem}
                >
                    <FilterBoxConnected
                        id={this.props.id}
                        onKeyDown={(this.props as any).onKeyDown}
                        onKeyUp={(this.props as any).onKeyUp}
                        className={filterBoxClassNames}
                        isAutoFocus
                    >
                        {this.getButton()}
                    </FilterBoxConnected>
                    {this.props.children}
                </Component>
            );
        }
    }

    return WrappedComponent;
};
