import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState, IReduxActionsPayload} from '../../PlasmaState';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {Dropdown, IDropdownDispatchProps, IDropdownOwnProps, IDropdownStateProps} from './Dropdown';
import {addDropdown, closeDropdown, removeDropdown, toggleDropdown} from './DropdownActions';
import {IDropdownState} from './DropdownReducers';

const mapStateToProps = (state: PlasmaState, ownProps: IDropdownOwnProps): IDropdownStateProps => {
    const item: IDropdownState = _.findWhere(state.dropdowns, {id: ownProps.id});

    return {
        isOpened: item && item.opened,
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: IDropdownOwnProps,
): IDropdownDispatchProps => ({
    onRender: () => dispatch(addDropdown(ownProps.id)),
    onDestroy: () => dispatch(removeDropdown(ownProps.id)),
    onClick: () => dispatch(toggleDropdown(ownProps.id)),
    onDocumentClick: () => dispatch(closeDropdown(ownProps.id)),
});

/**
 * @deprecated Use Mantine Menu instead https://mantine.dev/core/menu/
 */

export const DropdownConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Dropdown);
