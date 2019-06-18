import * as React from 'react';
import {connect} from 'react-redux';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {IInlinePromptOwnProps, IInlinePromptProps, IInlinePromptViewDispatchProps, InlinePrompt} from './InlinePrompt';
import {removePrompt} from './InlinePromptActions';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: IInlinePromptOwnProps
): IInlinePromptViewDispatchProps => ({
    onCancel: () => dispatch(removePrompt(ownProps.id)),
});

export const InlinePromptConnected: React.ComponentClass<IInlinePromptProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(InlinePrompt);
