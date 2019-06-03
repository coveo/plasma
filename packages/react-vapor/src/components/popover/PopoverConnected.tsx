import {connect} from 'react-redux';
import {findWhere} from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {
    IPopoverDispatchProps,
    IPopoverProps,
    IPopoverState,
    Popover,
} from './Popover';
import {addPopover, removePopover, setPopoverIsOpen} from './PopoverActions';

export const mapStateToProps = (state: IReactVaporState, ownProps: IPopoverProps): IPopoverState => {
    const popoverState = findWhere(state.popovers, {id: ownProps.id});

    return {isOpen: popoverState && popoverState.isOpen};
};

export const mapDispatchToProps = (dispatch: IDispatch, ownProps: IPopoverProps): IPopoverDispatchProps => ({
    onToggle: (isOpen: boolean) => dispatch(setPopoverIsOpen(ownProps.id, isOpen)),
    onMount: (isOpen: boolean = false) => dispatch(addPopover(ownProps.id, isOpen)),
    onUnmount: () => dispatch(removePopover(ownProps.id)),
});

export const PopoverConnected: React.ComponentClass<IPopoverProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Popover);
