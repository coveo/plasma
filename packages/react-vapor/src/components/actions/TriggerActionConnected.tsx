import * as React from 'react';
import {connect} from 'react-redux';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {closeDropdown} from '../dropdown/DropdownActions';
import {IUserChoice} from '../inlinePrompt/InlinePrompt';
import {addPrompt, removePrompt} from '../inlinePrompt/InlinePromptActions';
import {ITriggerActionDispatchProps, ITriggerActionOwnProps, ITriggerActionProps, TriggerAction} from './TriggerAction';

const mapStateToProps = () => ({});

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: ITriggerActionOwnProps
): ITriggerActionDispatchProps => ({
    onTriggerConfirm: (onClick: () => void, userChoice: IUserChoice, className: string) => {
        dispatch(addPrompt(ownProps.parentId, {onClick, userChoice, isOpened: false, className}));
    },
    onConfirm: () => dispatch(removePrompt(ownProps.parentId)),
    onCloseDropdown: () => dispatch(closeDropdown(ownProps.parentId)),
});

export const TriggerActionConnected: React.ComponentClass<ITriggerActionProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(TriggerAction);
