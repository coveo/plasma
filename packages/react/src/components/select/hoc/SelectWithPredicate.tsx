import classNames from 'classnames';
import {ComponentType, FunctionComponent, PropsWithChildren, useEffect} from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../../hoc/withServerSideProcessing/withServerSideProcessing.js';
import {PlasmaState} from '../../../PlasmaState.js';
import {FlatSelectConnected} from '../../flatSelect/index.js';
import {IFlatSelectOptionProps} from '../../flatSelect/FlatSelectOption.js';
import {FlatSelectSelectors} from '../../flatSelect/FlatSelectSelectors.js';
import {IItemBoxProps} from '../../itemBox/ItemBox.js';
import {ISelectOwnProps} from '../SelectConnected.js';

export interface ISelectWithPredicateOwnProps {
    options: IFlatSelectOptionProps[];
    matchPredicate?: (predicate: string, item: IItemBoxProps) => boolean;
    initiallySelectedPredicateId?: string;
    disabledFlatSelectOptions?: boolean;
}
const SelectWithPredicatePropsToOmit = [
    'disabledFlatSelectOptions',
    'initiallySelectedPredicateId',
    'matchPredicate',
    'options',
];

/**
 * @deprecated Use Mantine Select instead: https://mantine.dev/core/select/
 */
export const selectWithPredicate = <P extends Omit<ISelectOwnProps, 'button'> & WithServerSideProcessingProps>(
    Component: ComponentType<P>
): FunctionComponent<P & ISelectWithPredicateOwnProps> => {
    type OwnProps = P & ISelectWithPredicateOwnProps;
    type Props = OwnProps & ReturnType<typeof mapStateToProps>;

    const mapStateToProps = (state: PlasmaState, ownProps: OwnProps) => {
        const predicate = FlatSelectSelectors.getSelectedOptionId(state, {id: ownProps.id});

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
    };

    const WrappedComponent: FunctionComponent<PropsWithChildren<Props>> = (props) => {
        const {onUpdate, predicate} = props;
        useEffect(() => {
            onUpdate?.();
        }, [predicate]);

        return (
            <Component {..._.omit(props, SelectWithPredicatePropsToOmit)}>
                <FlatSelectConnected
                    id={props.id}
                    classes={[classNames('full-content-x', {mb2: !!props.children})]}
                    options={props.options}
                    group
                    optionPicker
                    defaultSelectedOptionId={props.initiallySelectedPredicateId}
                    disabled={props.disabledFlatSelectOptions}
                />
                {props.children}
            </Component>
        );
    };

    WrappedComponent.displayName = `withPredicate(${Component.displayName})`;

    // @ts-ignore
    return connect(mapStateToProps)(WrappedComponent);
};
