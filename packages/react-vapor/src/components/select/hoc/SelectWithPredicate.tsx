import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';
import {IReactVaporState} from '../../../ReactVapor';
import {FlatSelectConnected} from '../../flatSelect/FlatSelectConnected';
import {IFlatSelectOptionProps} from '../../flatSelect/FlatSelectOption';
import {FlatSelectSelectors} from '../../flatSelect/FlatSelectSelectors';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {ISelectOwnProps} from '../SelectConnected';

export interface ISelectWithPredicateOwnProps {
    options: IFlatSelectOptionProps[];
    matchPredicate?: (predicate: string, item: IItemBoxProps) => boolean;
}
const SelectWithPredicatePropsToOmit = keys<ISelectWithPredicateOwnProps>();

export const selectWithPredicate = <P extends Omit<ISelectOwnProps, 'button'> & WithServerSideProcessingProps>(
    Component: React.ComponentType<P>
): React.FunctionComponent<P & ISelectWithPredicateOwnProps> => {
    type OwnProps = P & ISelectWithPredicateOwnProps;
    type Props = OwnProps & ReturnType<typeof mapStateToProps>;

    function mapStateToProps(state: IReactVaporState, ownProps: OwnProps) {
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

    const WrappedComponent: React.FunctionComponent<Props> = (props) => {
        React.useEffect(() => {
            props.onUpdate?.();
        }, [props.predicate, props.onUpdate]);

        return (
            <Component {..._.omit(props, SelectWithPredicatePropsToOmit)}>
                <FlatSelectConnected
                    id={props.id}
                    classes={[classNames('full-content-x', {mb2: !!props.children})]}
                    options={props.options}
                    group
                    optionPicker
                />
                {props.children}
            </Component>
        );
    };

    WrappedComponent.displayName = `withPredicate(${Component.displayName})`;

    // @ts-ignore
    return connect(mapStateToProps)(WrappedComponent);
};
