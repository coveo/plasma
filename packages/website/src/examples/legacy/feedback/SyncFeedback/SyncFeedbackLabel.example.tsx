import {SyncFeedback, SyncFeedbackState} from '@coveord/plasma-react';

export default () => (
    <>
        <SyncFeedback state={SyncFeedbackState.SYNCING} feedback="There is something happening" />
        <SyncFeedback state={SyncFeedbackState.SUCCESS} feedback="There was a success" />
        <SyncFeedback state={SyncFeedbackState.ERROR} feedback="There was an error" />
    </>
);
