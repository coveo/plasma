import { IInlinePromptProps, IInlinePromptViewDispatchProps, InlinePrompt, IInlinePromptOwnProps } from './InlinePrompt';
import { ReduxUtils, IReduxAction, IReduxActionPayload } from '../../utils/ReduxUtils';
import { removePrompt } from './InlinePromptActions';
import { connect } from 'react-redux';
import * as React from 'react';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionPayload>) => void,
  ownProps: IInlinePromptOwnProps): IInlinePromptViewDispatchProps => {
  return {
    onCancel: () => dispatch(removePrompt(ownProps.id))
  };
};

export const InlinePromptConnected: React.ComponentClass<IInlinePromptProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(InlinePrompt);
