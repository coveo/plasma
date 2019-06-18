import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {
    IOptionPickerDispatchProps,
    IOptionPickerOwnProps,
    IOptionPickerProps,
    IOptionPickerStateProps,
    OptionPicker,
} from './OptionPicker';
import {addOptionPicker, changeOptionPicker, removeOptionPicker} from './OptionPickerActions';
import {IOptionPickerState} from './OptionPickerReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: IOptionPickerOwnProps): IOptionPickerStateProps => {
    const item: IOptionPickerState = _.findWhere(state.optionPickers, {id: ownProps.id});

    return {
        activeLabel: item ? item.selectedLabel : '',
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: IOptionPickerOwnProps
): IOptionPickerDispatchProps => ({
    onRender: () => dispatch(addOptionPicker(ownProps.id)),
    onDestroy: () => dispatch(removeOptionPicker(ownProps.id)),
    onClick: (value: string, label: string) => dispatch(changeOptionPicker(ownProps.id, label, value)),
});

export const OptionPickerConnected: React.ComponentClass<IOptionPickerProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(OptionPicker);
