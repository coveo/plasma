import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState, IReduxActionsPayload} from '../../PlasmaState';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {IOptionPickerDispatchProps, IOptionPickerOwnProps, IOptionPickerStateProps, OptionPicker} from './OptionPicker';
import {addOptionPicker, changeOptionPicker, removeOptionPicker} from './OptionPickerActions';
import {IOptionPickerState} from './OptionPickerReducers';

const mapStateToProps = (state: PlasmaState, ownProps: IOptionPickerOwnProps): IOptionPickerStateProps => {
    const item: IOptionPickerState = _.findWhere(state.optionPickers, {id: ownProps.id});

    return {
        activeLabel: item ? item.selectedLabel : '',
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: IOptionPickerOwnProps,
): IOptionPickerDispatchProps => ({
    onRender: () => dispatch(addOptionPicker(ownProps.id)),
    onDestroy: () => dispatch(removeOptionPicker(ownProps.id)),
    onClick: (value: string, label: string) => dispatch(changeOptionPicker(ownProps.id, label, value)),
});

/**
 * @deprecated Use Mantine instead
 */
export const OptionPickerConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(OptionPicker);
