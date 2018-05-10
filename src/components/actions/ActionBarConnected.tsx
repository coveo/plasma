import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {InlinePromptConnected} from '../inlinePrompt/InlinePromptConnected';
import {IPromptState} from '../inlinePrompt/InlinePromptReducers';
import {IActionOptions} from './Action';
import {
    ActionBar,
    IActionBarDispatchProps,
    IActionBarOwnProps,
    IActionBarProps,
    IActionBarStateProps,
} from './ActionBar';
import {addActionBar, removeActionBar} from './ActionBarActions';
import {IActionBarState} from './ActionBarReducers';
import {addItemFilter, filterItems, removeItemFilter} from './filters/ItemFilterActions';
import {IItemFilterState} from './filters/ItemFilterReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: IActionBarOwnProps): IActionBarStateProps => {
    const actionBar: IActionBarState = _.findWhere(state.actionBars, {id: ownProps.id});
    const prompt: IPromptState = _.findWhere(state.prompts, {id: ownProps.id});
    const itemFilter: IItemFilterState = _.findWhere(state.itemFilters, {id: ownProps.id});

    return {
        withReduxState: true,
        actions: actionBar && actionBar.actions ? _.filter(actionBar.actions, (action: IActionOptions) => action.enabled || action.hideDisabled === false) : [],
        isLoading: actionBar && actionBar.isLoading,
        tableYPosition: actionBar && actionBar.tableYPosition,
        prompt: prompt && prompt.options ?
            <div className='prompt'>
                <InlinePromptConnected
                    id={prompt.id}
                    options={prompt.options}
                />
            </div> :
            null,
        itemFilter: itemFilter ? itemFilter.item : '',
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
    },
});

export const ActionBarConnected: React.ComponentClass<IActionBarProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ActionBar);
