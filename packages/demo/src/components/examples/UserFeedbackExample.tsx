import * as React from 'react';
import {Button, Section, SyncFeedback, SyncFeedbackState, UserFeedback} from 'react-vapor';

import {ExampleComponent} from '../ComponentsInterface';

export const FeedBackExamples: ExampleComponent = () => (
    <Section title="FeedBack Examples">
        <UserFeedBackExamples />
        <SyncFeedBackExamples />
    </Section>
);

// start-print

const UserFeedBackExamples: React.FunctionComponent = () => (
    <Section
        level={2}
        title="UserFeedBacks"
        description="UserFeedBacks will render with these state but won't render while in 'VALID' state."
    >
        <Section level={3}>
            <Button name="Warning Feedback" enabled className="btn" />
            <UserFeedback
                extraClasses={['mt1']}
                state="WARNING"
                displayOnShow="block"
                feedbackText="UserFeedback on state WARNING"
            />
        </Section>
        <Section level={3}>
            <Button name="Error FeedBack" enabled className="btn" />
            <UserFeedback
                extraClasses={['mt1']}
                state="ERROR"
                displayOnShow="block"
                feedbackText="UserFeedback on state ERROR"
            />
        </Section>
        <Section level={3}>
            <Button name="Side FeedBack" enabled className="btn" />
            <UserFeedback
                extraClasses={['ml1']}
                state="WARNING"
                displayOnShow="inline-block"
                feedbackText="UserFeedback placed beside its related element"
            />
        </Section>
        <Section level={3}>
            <Button name="styled FeedBack" enabled className="btn" />
            <UserFeedback
                extraClasses={['ml2', 'bold', 'italic']}
                state="WARNING"
                displayOnShow="inline-block"
                feedbackText="extra classes for styling can be passed to the extraClasses prop"
            />
        </Section>
    </Section>
);

const SyncFeedBackExamples: React.FunctionComponent = () => (
    <Section
        level={2}
        title="SyncFeedBacks"
        description="SyncFeedBack will render with these states but won't render while in 'NONE' state."
    >
        <Section level={3} title="An invisible feedback" className={'mb3'}>
            <SyncFeedback state={SyncFeedbackState.NONE} />
        </Section>

        <Section level={3} title="SyncFeedBacks with their default messages">
            <SyncFeedback state={SyncFeedbackState.SYNCING} />
            <SyncFeedback state={SyncFeedbackState.SUCCESS} />
            <SyncFeedback state={SyncFeedbackState.ERROR} />
        </Section>

        <Section level={3} title="SyncFeedBack with custom messages">
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
        </Section>
    </Section>
);
