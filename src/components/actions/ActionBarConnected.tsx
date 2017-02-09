import {
  IActionBarProps,
  ActionBar,
  IActionBarOwnProps,
  IActionBarDispatchProps,
  IActionBarStateProps
} from './ActionBar';
import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { addActionBar, removeActionBar } from './ActionBarActions';
import { InlinePromptConnected } from '../inlinePrompt/InlinePromptConnected';
import { IActionOptions } from './Action';
import { IActionBarState } from './ActionBarReducers';
import { IPromptState } from '../inlinePrompt/InlinePromptReducers';
import { IItemFilterState } from './filters/ItemFilterReducers';
import { filterItems, addItemFilter, removeItemFilter } from './filters/ItemFilterActions';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';

const mapStateToProps = (state: IReactVaporState, ownProps: IActionBarOwnProps): IActionBarStateProps => {
  let actionBar: IActionBarState = _.findWhere(state.actionBars, { id: ownProps.id });
  let prompt: IPromptState = _.findWhere(state.prompts, { id: ownProps.id });
  let itemFilter: IItemFilterState = _.findWhere(state.itemFilters, { id: ownProps.id });

  return {
    withReduxState: true,
    actions: actionBar && actionBar.actions ? _.filter(actionBar.actions, (action: IActionOptions) => _.result(action, 'enabled')) : [],
    prompt: prompt && prompt.options ?
      <div className='prompt'>
        <InlinePromptConnected
          id={prompt.id}
          options={prompt.options}
          />
      </div> :
      null,
    itemFilter: itemFilter ? itemFilter.item : ''
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void, ownProps: IActionBarOwnProps): IActionBarDispatchProps => ({
  onRender: () => {
    dispatch(addActionBar(ownProps.id));
    if (ownProps.itemFilterLabel) {
      dispatch(addItemFilter(ownProps.id));
    }
  },
  onDestroy: () => {
    dispatch(removeActionBar(ownProps.id));
    dispatch(removeItemFilter(ownProps.id));
  },
  clearItemFilter: () => {
    if (ownProps.onClearItemFilter) {
      ownProps.onClearItemFilter();
    }
    dispatch(filterItems(ownProps.id, ''));
  }
});

export const ActionBarConnected: React.ComponentClass<IActionBarProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ActionBar);
