import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {IListBoxDispatchProps, IListBoxOwnProps, IListBoxProps, IListBoxStateProps, ListBox} from './ListBox';
import {addListBox, removeListBox, selectListBoxOption} from './ListBoxActions';
import {IListBoxState} from './ListBoxReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: IListBoxOwnProps): IListBoxStateProps => {
    const list: IListBoxState = _.findWhere(state.listBoxes, {id: ownProps.id});

    return {
        selected: list ? list.selected : [],
        active: list ? list.active : undefined,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IListBoxOwnProps): IListBoxDispatchProps => ({
    onRender: () => dispatch(addListBox(ownProps.id, ownProps.items)),
    onDestroy: () => dispatch(removeListBox(ownProps.id)),
    onOptionClick: (option: IItemBoxProps, index: number) => dispatch(selectListBoxOption(ownProps.id, ownProps.multi, option.value, index)),
});

export const ListBoxConnected: React.ComponentClass<IListBoxProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.defaultMergeProps)(ListBox);
