import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {Dropdown, IDropdownDispatchProps, IDropdownOwnProps, IDropdownProps, IDropdownStateProps} from './Dropdown';
import {addDropdown, closeDropdown, removeDropdown, toggleDropdown} from './DropdownActions';
import {IDropdownState} from './DropdownReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: IDropdownOwnProps): IDropdownStateProps => {
    const item: IDropdownState = _.findWhere(state.dropdowns, {id: ownProps.id});

    return {
        isOpened: item && item.opened,
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: IDropdownOwnProps
): IDropdownDispatchProps => ({
    onRender: () => dispatch(addDropdown(ownProps.id)),
    onDestroy: () => dispatch(removeDropdown(ownProps.id)),
    onClick: () => dispatch(toggleDropdown(ownProps.id)),
    onDocumentClick: () => dispatch(closeDropdown(ownProps.id)),
});

export const DropdownConnected: React.ComponentClass<IDropdownProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(Dropdown);
