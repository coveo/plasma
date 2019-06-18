import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {ReduxConnect} from '../../utils/ReduxUtils';
import {FlatSelectConnected} from '../flatSelect/FlatSelectConnected';
import {IFlatSelectOptionProps} from '../flatSelect/FlatSelectOption';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {ISelectProps} from './SelectConnected';

export interface ISelectWithPredicateOwnProps {
    options: IFlatSelectOptionProps[];
    matchPredicate: (predicate: string, item: IItemBoxProps) => boolean;
}
const SelectWithPredicatePropsToOmit = keys<ISelectWithPredicateOwnProps>();

export interface ISelectWithPredicateProps extends ISelectWithPredicateOwnProps, ISelectProps {}

export const selectWithPredicate = (
    Component: React.ComponentClass<ISelectProps> | React.StatelessComponent<ISelectProps>
): React.ComponentClass<ISelectWithPredicateProps> => {
    const mapStateToProps = (state: IReactVaporState, ownProps: ISelectWithPredicateProps): Partial<ISelectProps> => {
        const flatSelect = _.findWhere(state.flatSelect, {id: ownProps.id});
        const predicate = (flatSelect && flatSelect.selectedOptionId) || ownProps.options[0].id;

        const items = _.map(ownProps.items, (item: IItemBoxProps) => {
            const visible = ownProps.matchPredicate(predicate, item);

            return {...item, hidden: !visible || item.hidden};
        });

        return {
            items,
        };
    };

    @ReduxConnect(mapStateToProps)
    class WrappedComponent extends React.Component<ISelectWithPredicateProps> {
        render() {
            return (
                <Component {..._.omit(this.props, SelectWithPredicatePropsToOmit)}>
                    <FlatSelectConnected
                        id={this.props.id}
                        classes={['full-content-x']}
                        options={this.props.options}
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
