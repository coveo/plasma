import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {FlatSelectConnected} from '../flatSelect/FlatSelectConnected';
import {IFlatSelectOptionProps} from '../flatSelect/FlatSelectOption';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {updateListBoxOption} from '../listBox/ListBoxActions';
import {ISelectWithPredicateAndFilterProps} from './SelectComponents';
import {ISelectOwnProps, ISelectProps, ISelectStateProps} from './SelectConnected';

export type MatchPredicate = (predicate: string, item: IItemBoxProps) => boolean;

export interface ISelectWithPredicateOwnProps {
    options: IFlatSelectOptionProps[];
    matchPredicate?: MatchPredicate;
}

export interface ISelectWithPredicateDispatchProps {
    updateItems: (predicate: string, items: IItemBoxProps[], matchPredicate: MatchPredicate) => void;
}

export interface ISelectWithPredicateProps extends ISelectWithPredicateOwnProps,
    Partial<ISelectWithPredicateDispatchProps>,
    ISelectProps {}

const SelectWithPredicatePropsToOmit = keys<ISelectWithPredicateOwnProps>();

export const selectWithPredicate = (Component: (React.ComponentClass<ISelectProps> | React.StatelessComponent<ISelectProps>)): React.ComponentClass<ISelectWithPredicateAndFilterProps> => {

    const mapStateToProps = (state: IReactVaporState, ownProps: ISelectWithPredicateProps): Partial<ISelectStateProps> => {
        const listbox = _.findWhere(state.listBoxes, {id: ownProps.id});
        return {
            items: listbox ? listbox.items : ownProps.items,
        };
    };

    const mapDispatchToProps = (dispatch: IDispatch, ownProps: ISelectWithPredicateOwnProps & ISelectOwnProps): ISelectWithPredicateDispatchProps => ({
        updateItems: (predicate: string, items: IItemBoxProps[], matchPredicate: MatchPredicate) => {
            const newItems = _.map(items, (item: IItemBoxProps) => {
                const visible = matchPredicate(predicate, item);
                return {...item, hidden: !visible};
            });
            dispatch(updateListBoxOption(
                ownProps.id,
                [...newItems],
            ));
        },
    });

    @ReduxConnect(mapStateToProps, mapDispatchToProps)
    class WrappedComponent extends React.Component<ISelectWithPredicateAndFilterProps> {

        private handleOnClick(option: IFlatSelectOptionProps) {
            callIfDefined(this.props.updateItems, option.id, this.props.items, this.props.matchPredicate);
        }

        componentWillMount() {
            callIfDefined(this.props.updateItems, this.props.options[0].id, this.props.items, this.props.matchPredicate);
        }

        render() {
            return (
                <Component {..._.omit(this.props, SelectWithPredicatePropsToOmit)}>
                    <FlatSelectConnected
                        id={this.props.id}
                        classes={['full-content-x']}
                        options={this.props.options}
                        onClick={(option: IFlatSelectOptionProps) => this.handleOnClick(option)}
                        group
                        optionPicker
                    />
                    {this.props.children}
                </Component>
            );
        }
    }

    return WrappedComponent;
};
