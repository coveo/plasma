import {connect} from 'react-redux';

import {IReactVaporState} from '../../ReactVapor';
import {IDispatch} from '../../utils';
import {IJSONEditorDispatchProps, IJSONEditorProps, IJSONEditorStateProps, JSONEditor} from './JSONEditor';
import {JSONEditorActions} from './JSONEditorActions';
import {JSONEditorSelectors} from './JSONEditorSelectors';

const mapStateToProps = (state: IReactVaporState, ownProps: IJSONEditorProps): IJSONEditorStateProps => ({
    value: JSONEditorSelectors.getValue(state, ownProps.id),
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IJSONEditorProps): IJSONEditorDispatchProps => ({
    onMount: () => dispatch(JSONEditorActions.addJSONEditor(ownProps.id, ownProps.value)),
    onUnmount: () => dispatch(JSONEditorActions.removeJSONEditor(ownProps.id)),
    onChange: (value: string, inError: boolean) => {
        dispatch(JSONEditorActions.updateJSONEditorValue(ownProps.id, value));
        ownProps.onChange?.(value, inError);
    },
});

export const JSONEditorConnected = connect(mapStateToProps, mapDispatchToProps)(JSONEditor);
