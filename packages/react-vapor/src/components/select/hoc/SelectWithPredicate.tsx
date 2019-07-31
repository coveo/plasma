import * as React from 'react';
import {connect} from 'react-redux';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';
import {IReactVaporState} from '../../../ReactVapor';
import {callIfDefined} from '../../../utils/FalsyValuesUtils';
import {FlatSelectConnected} from '../../flatSelect/FlatSelectConnected';
import {IFlatSelectOptionProps} from '../../flatSelect/FlatSelectOption';
import {FlatSelectSelectors} from '../../flatSelect/FlatSelectSelectors';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {ISelectProps} from '../SelectConnected';

export interface ISelectWithPredicateOwnProps {
    options: IFlatSelectOptionProps[];
    matchPredicate: (predicate: string, item: IItemBoxProps) => boolean;
}
const SelectWithPredicatePropsToOmit = keys<ISelectWithPredicateOwnProps>();
interface SelectWithPredicateStateProps {
    predicate: string;
    items: IItemBoxProps[];
}

export interface ISelectWithPredicateProps
    extends ISelectWithPredicateOwnProps,
        ISelectProps,
        Partial<SelectWithPredicateStateProps>,
        WithServerSideProcessingProps {}

export const selectWithPredicate = (
    Component: React.ComponentType<ISelectProps>
): React.ComponentType<ISelectWithPredicateProps> => {
    const WrappedComponent: React.FunctionComponent<ISelectWithPredicateProps> = (props) => {
        React.useEffect(() => {
            callIfDefined(props.onUpdate);
        }, [props.predicate, props.onUpdate]);

        return (
            <Component {..._.omit(props, SelectWithPredicatePropsToOmit)}>
                <FlatSelectConnected
                    id={props.id}
                    classes={['full-content-x']}
                    options={props.options}
                    group
                    optionPicker
                />
                {props.children}
            </Component>
        );
    };

    WrappedComponent.displayName = `withPredicate(${Component.displayName})`;

    return connect(mapStateToProps)(WrappedComponent);
};

function mapStateToProps(state: IReactVaporState, ownProps: ISelectWithPredicateProps): SelectWithPredicateStateProps {
    const predicate = FlatSelectSelectors.getSelectedOptionId(state, {id: ownProps.id}) || ownProps.options[0].id;

    const items = ownProps.isServer
        ? ownProps.items
        : _.map(ownProps.items, (item: IItemBoxProps) => {
              const visible = ownProps.matchPredicate(predicate, item);

              return {...item, hidden: !visible || item.hidden};
          });

    return {
        items,
        predicate,
    };
}
