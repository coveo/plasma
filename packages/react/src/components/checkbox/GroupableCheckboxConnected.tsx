import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState} from '../../PlasmaState';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {IInputDispatchProps, IInputStateProps} from '../input/Input';
import {Checkbox, ICheckboxProps} from './Checkbox';
import {ICheckboxState} from './CheckboxReducers';
import {
    addGroupedCheckbox,
    IGroupableCheckboxActionPayload,
    removeGroupedCheckbox,
    toggleGroupedCheckbox,
} from './GroupableCheckboxActions';
import {IGroupableCheckboxesState} from './GroupableCheckboxConstants';

export interface IGroupableCheckboxOwnProps extends ICheckboxProps {
    isParent?: boolean;
    parentId?: string;
}

const mapStateToProps = (state: PlasmaState, ownProps: IGroupableCheckboxOwnProps): IInputStateProps => {
    const groupableCheckboxesState: IGroupableCheckboxesState = _.findWhere(state.groupableCheckboxes, {
        parentId: ownProps.parentId || ownProps.id,
    });
    if (groupableCheckboxesState) {
        const checkbox: ICheckboxState = ownProps.isParent
            ? groupableCheckboxesState.parent
            : _.findWhere(groupableCheckboxesState.checkboxes, {id: ownProps.id});
        return {
            checked: checkbox ? checkbox.checked : !!ownProps.defaultChecked,
            disabled: checkbox ? checkbox.disabled : !!ownProps.defaultDisabled,
            indeterminate:
                ownProps.isParent &&
                groupableCheckboxesState.nbChecked > 0 &&
                groupableCheckboxesState.nbChecked < groupableCheckboxesState.total,
        };
    }

    return {
        checked: !!ownProps.defaultChecked,
        disabled: !!ownProps.defaultDisabled,
        indeterminate: false,
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IGroupableCheckboxActionPayload>) => void,
    ownProps: IGroupableCheckboxOwnProps,
): IInputDispatchProps => ({
    onRender: () =>
        dispatch(
            addGroupedCheckbox(
                ownProps.id,
                ownProps.defaultChecked,
                !!ownProps.defaultDisabled,
                ownProps.parentId,
                !!ownProps.isParent,
            ),
        ),
    onDestroy: () => dispatch(removeGroupedCheckbox(ownProps.id, ownProps.parentId, !!ownProps.isParent)),
    onClick: () => dispatch(toggleGroupedCheckbox(ownProps.id, ownProps.parentId, !!ownProps.isParent)),
});

/**
 * @deprecated Use Mantine Checkbox instead: https://mantine.dev/core/checkbox/
 */
export const GroupableCheckboxConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Checkbox);
