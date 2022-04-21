import {connect} from 'react-redux';

import {PlasmaState} from '../../PlasmaState';
import {IDispatch} from '../../utils';
import {JSONEditor, JSONEditorDispatchProps, JSONEditorProps, JSONEditorStateProps} from './JSONEditor';
import {JSONEditorActions} from './JSONEditorActions';
import {JSONEditorSelectors} from './JSONEditorSelectors';

const mapStateToProps = (state: PlasmaState, ownProps: JSONEditorProps): JSONEditorStateProps => ({
    value: JSONEditorSelectors.getValue(state, ownProps.id),
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: JSONEditorProps): JSONEditorDispatchProps => ({
    onMount: () => dispatch(JSONEditorActions.addJSONEditor(ownProps.id, ownProps.defaultValue ?? ownProps.value)),
    onUnmount: () => dispatch(JSONEditorActions.removeJSONEditor(ownProps.id)),
    onChange: (value: string, inError: boolean) => {
        dispatch(JSONEditorActions.updateJSONEditorValue(ownProps.id, value));
        ownProps.onChange?.(value, inError);
    },
});

export const JSONEditorConnected = connect(mapStateToProps, mapDispatchToProps)(JSONEditor);
