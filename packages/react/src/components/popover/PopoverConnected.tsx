import {connect} from 'react-redux';
import {findWhere} from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {IPopoverDispatchProps, IPopoverProps, IPopoverState, Popover} from './Popover';
import {addPopover, removePopover, setPopoverIsOpen} from './PopoverActions';

const mapStateToProps = (state: PlasmaState, ownProps: IPopoverProps): IPopoverState => {
    const popoverState = findWhere(state.popovers, {id: ownProps.id});

    return {isOpen: popoverState && popoverState.isOpen};
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IPopoverProps): IPopoverDispatchProps => ({
    onToggle: (isOpen: boolean) => dispatch(setPopoverIsOpen(ownProps.id, isOpen)),
    onMount: (isOpen: boolean = false) => dispatch(addPopover(ownProps.id, isOpen)),
    onUnmount: () => dispatch(removePopover(ownProps.id)),
});

/**
 * @deprecated Use Mantine Popover instead: https://mantine.dev/core/popover/
 */
export const PopoverConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Popover);
