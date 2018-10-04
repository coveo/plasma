import * as classNames from 'classnames';
import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {keyCode} from '../../utils/InputUtils';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {Button} from '../button/Button';
import {MatchFilter} from '../filterBox/FilterBoxActions';
import {FilterBoxConnected} from '../filterBox/FilterBoxConnected';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {updateListBoxOption} from '../listBox/ListBoxActions';
import {Svg} from '../svg/Svg';
import {toggleSelect} from './SelectActions';
import {ISelectWithPredicateAndFilterProps} from './SelectComponents';
import {ISelectOwnProps, ISelectProps, ISelectStateProps} from './SelectConnected';

export interface ISelectWithFilterOwnProps {
    customValues?: boolean;
    matchFilter?: MatchFilter;
}

export interface ISelectWithFilterDispatchProps {
    onAddCustomValue: (filterValue: string, items: IItemBoxProps[]) => void;
}

export interface ISelectWithFilterStateProps extends Partial<ISelectStateProps> {
    filterValue: string;
}

export interface ISelectWithFilterProps extends ISelectWithFilterOwnProps,
    Partial<ISelectWithFilterDispatchProps>,
    Partial<ISelectWithFilterStateProps>,
    ISelectProps {}

const SelectWithFilterPropsToOmit = keys<ISelectWithFilterOwnProps>();

export const selectWithFilter = (Component: (React.ComponentClass<ISelectProps> | React.StatelessComponent<ISelectProps>)): React.ComponentClass<ISelectWithPredicateAndFilterProps> => {
    const mapStateToProps = (state: IReactVaporState, ownProps: ISelectWithFilterProps): ISelectWithFilterStateProps => {
        const listbox = _.findWhere(state.listBoxes, {id: ownProps.id});
        const filter = _.findWhere(state.filters, {id: ownProps.id});
        const filterValue = filter && filter.filterText || '';

        return {
            items: listbox ? listbox.items : ownProps.items,
            filterValue,
        };
    };

    const mapDispatchToProps = (dispatch: IDispatch, ownProps: ISelectWithFilterOwnProps & ISelectOwnProps): ISelectWithFilterDispatchProps => ({
        onAddCustomValue: (filterValue: string, items: IItemBoxProps[]) => {
            dispatch(updateListBoxOption(
                ownProps.id,
                [
                    ...items, {
                        value: filterValue,
                        hidden: true,
                        selected: true,
                    },
                ],
            ));
            dispatch(toggleSelect(ownProps.id, false));
        },
    });

    @ReduxConnect(mapStateToProps, mapDispatchToProps)
    class WrappedComponent extends React.Component<ISelectWithPredicateAndFilterProps> {

        private handleOnClick() {
            if (this.props.customValues) {
                callIfDefined(this.props.onAddCustomValue, this.props.filterValue, this.props.items);
            }
        }

        private handleOnKeyUp(e: React.KeyboardEvent<HTMLElement>) {
            if (this.props.customValues) {
                if (_.contains([keyCode.enter, keyCode.tab], e.keyCode) &&
                    _.every(this.props.items, (item: IItemBoxProps) => item.hidden || item.disabled)) {
                    callIfDefined(this.props.onAddCustomValue, this.props.filterValue, this.props.items);
                }
            }
        }

        render() {
            const buttonAddCustomValues: React.ReactNode = (
                <Button classes={['p1', 'ml1']} onClick={() => this.handleOnClick()}>
                    <Svg svgName={'add'} className='icon mod-lg mod-align-with-text' />
                </Button>
            );

            const filterBoxContainerClassNames: string = classNames({
                'mb2': !!this.props.children,
            });

            const filterBoxClassNames: string = classNames({
                'flex flex-center': this.props.customValues,
            });

            return (
                <Component {..._.omit(this.props, SelectWithFilterPropsToOmit)}>
                    <FilterBoxConnected
                        id={this.props.id}
                        containerClasses={[filterBoxContainerClassNames]}
                        onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => callIfDefined((this.props as any).onKeyDown, e)}
                        onKeyUp={(e: React.KeyboardEvent<HTMLElement>) => {
                            callIfDefined((this.props as any).onKeyUp, e);
                            this.handleOnKeyUp(e);
                        }}
                        className={filterBoxClassNames}
                        matchFilter={this.props.matchFilter}
                        isAutoFocus
                    >
                        {this.props.customValues ? buttonAddCustomValues : null}
                    </FilterBoxConnected>
                    {this.props.children}
                </Component>
            );
        }
    }

    return WrappedComponent;
};
