import * as classNames from 'classnames';
import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {addStringList, addValueStringList, removeStringList} from '../../reusableState/customList/StringListActions';
import {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';
import {UUID} from '../../utils/UUID';
import {Button, IButtonProps} from '../button/Button';
import {FilterBoxConnected} from '../filterBox/FilterBoxConnected';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {Svg} from '../svg/Svg';
import {ISelectOwnProps, ISelectSpecificProps, ISelectStateProps} from './SelectConnected';
import {
    getCustomItems,
    getFilterText,
    getItemsWithFilter,
    getListBoxSelected,
    MatchFilter,
} from './SelectSelector';

export interface ISelectWithFilterOwnProps {
    matchFilter?: MatchFilter;
    customValues?: boolean;
    addValueText?: (filterText: string) => string;
    duplicateText?: string;
    noResultFilterText?: (filterText: string) => string;
    filterButton?: IButtonProps;
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

    const mapStateToProps = (state: IReactVaporState, ownProps: ISelectWithFilterProps): ISelectWithFilterStateProps => ({
        filterValue: getFilterText(state, ownProps),
        items: [...getItemsWithFilter(state, ownProps), ...getCustomItems(state, ownProps)],
        selected: getListBoxSelected(state, ownProps),
    });

    const mapDispatchToProps = (
        dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
        ownProps: ISelectOwnProps & ISelectSpecificProps,
    ): ISelectWithFilterDispatchProps => ({
        onRenderFilter: () => dispatch(addStringList(ownProps.id)),
        onDestroyFilter: () => dispatch(removeStringList(ownProps.id)),
        onSelectCustomValue: (filterValue: string) => dispatch(addValueStringList(ownProps.id, filterValue)),
    });

    @ReduxConnect(mapStateToProps, mapDispatchToProps)
    class WrappedComponent extends React.Component<ISelectWithFilterProps> {

        static defaultProps: Partial<ISelectWithFilterProps> = {
            duplicateText: 'Cannot add a duplicate value',
            noResultFilterText: (filterText: string) => `No results match "${filterText}"`,
            addValueText: (filterText: string) => `Add "${filterText}"`,
            filterButton: {
                enabled: true,
                tooltip: 'Add',
                tooltipPlacement: 'top',
            },
        };

        private dividerId: string = UUID.generate();

        componentWillMount() {
            this.props.onRenderFilter();
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
                    <Button classes={['p1']} onClick={() => this.handleOnClick()} {...this.props.filterButton}>
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
                items = [...this.addItemBoxCustomValue(), ...items];
            }

            const newProps = {..._.omit(this.props, [...SelectWithFilterPropsToOmit, 'selected']), items};

            return (
                <Component {...newProps} noResultItem={noResultItem}>
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
