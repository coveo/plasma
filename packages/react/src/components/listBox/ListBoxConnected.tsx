import {connect} from 'react-redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState.js';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils.js';
import {IItemBoxProps} from '../itemBox/ItemBox.js';
import {IListBoxDispatchProps, IListBoxOwnProps, IListBoxStateProps, ListBox} from './ListBox.js';
import {addListBox, removeListBox, selectListBoxOption} from './ListBoxActions.js';
import {IListBoxState} from './ListBoxReducers.js';

const mapStateToProps = (state: PlasmaState, ownProps: IListBoxOwnProps): IListBoxStateProps => {
    const list: IListBoxState = _.findWhere(state.listBoxes, {id: ownProps.id});
    return {
        selected: list ? list.selected : [],
        active: list ? list.active : undefined,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IListBoxOwnProps): IListBoxDispatchProps => ({
    onRender: () => dispatch(addListBox(ownProps.id, ownProps.items, ownProps.multi)),
    onDestroy: () => dispatch(removeListBox(ownProps.id)),
    onOptionClick: (option: IItemBoxProps, index?: number) =>
        dispatch(selectListBoxOption(ownProps.id, ownProps.multi, option.value, index)),
});

/**
 * @deprecated Use Mantine Menu instead: https://mantine.dev/core/menu/
 */
export const ListBoxConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.defaultMergeProps)(ListBox);
