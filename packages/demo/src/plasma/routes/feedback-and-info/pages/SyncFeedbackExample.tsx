import * as React from 'react';
import {SyncFeedback, SyncFeedbackState} from 'react-vapor';

export class SyncFeedbackExample extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <label className="form-control-label">SyncFeedback</label>
                <div className="form-control">
                    <div className="mb2">
                        A SyncFeedback component on state NONE is invisible.
                        <SyncFeedback state={SyncFeedbackState.NONE} />
                    </div>
                    <div className="mb2">
                        There is a default feedback message for each state
                        <SyncFeedback state={SyncFeedbackState.SYNCING} />
                        <SyncFeedback state={SyncFeedbackState.SUCCESS} />
                        <SyncFeedback state={SyncFeedbackState.ERROR} />
                    </div>
                    <div className="mb2">
                        You can pass a custom feedback message
                        <SyncFeedback
                            state={SyncFeedbackState.SYNCING}
                            feedback="This message is a SyncFeedback component on state SYNCING"
                        />
                        <SyncFeedback
                            state={SyncFeedbackState.SUCCESS}
                            feedback="This message is a SyncFeedback component on state SUCCESS"
                        />
                        <SyncFeedback
                            state={SyncFeedbackState.ERROR}
                            feedback="This message is a SyncFeedback component on state ERROR"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
