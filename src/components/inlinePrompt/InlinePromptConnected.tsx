import { IInlinePromptProps, IInlinePromptViewDispatchProps, InlinePrompt, IInlinePromptOwnProps } from './InlinePrompt';
import { ReduxUtils } from '../../utils/ReduxUtils';
import { removePrompt } from './InlinePromptActions';
import { connect } from 'react-redux';
import * as React from 'react';
import * as Redux from 'redux';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: (action: Redux.Action) => void,
  ownProps: IInlinePromptOwnProps): IInlinePromptViewDispatchProps => {
  return {
    onCancel: () => {
      dispatch(removePrompt(ownProps.id));
    }
  };
};

export const InlinePromptConnected: React.ComponentClass<IInlinePromptProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(InlinePrompt);
