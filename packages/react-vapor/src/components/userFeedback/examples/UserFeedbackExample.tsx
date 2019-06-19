import * as React from 'react';
import {UserFeedback} from '../UserFeedback';

export class UserFeedbackExample extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <label className="form-control-label">UserFeedback</label>
                <div className="form-control">
                    <button type="button" className="btn">
                        UserFeedback 1
                    </button>
                    <UserFeedback
                        extraClasses={['mt1', 'mb2']}
                        state="WARNING"
                        displayOnShow="block"
                        feedbackText="This message is a UserFeedback component on state WARNING"
                    />
                    <button type="button" className="btn">
                        UserFeedback 2
                    </button>
                    <UserFeedback
                        extraClasses={['mt1', 'mb2']}
                        state="ERROR"
                        displayOnShow="block"
                        feedbackText="This message is a UserFeedback component on state ERROR"
                    />
                    <div className="mb2">
                        <button type="button" className="btn">
                            UserFeedback 3
                        </button>
                        <UserFeedback
                            extraClasses={['ml1']}
                            state="WARNING"
                            displayOnShow="inline-block"
                            feedbackText="This message is a UserFeedback component placed beside its related element"
                        />
                    </div>
                    <div className="mb2">
                        <button type="button" className="btn">
                            UserFeedback 4
                        </button>
                        <UserFeedback
                            extraClasses={['ml2', 'bold', 'italic']}
                            state="WARNING"
                            displayOnShow="inline-block"
                            feedbackText="extra classes for styling can be passed to the extraClasses prop"
                        />
                    </div>
                    <div className="mb2">A UserFeedback component on state VALID is invisible.</div>
                </div>
            </div>
        );
    }
}
