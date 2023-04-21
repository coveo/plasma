import {SyncFeedback, SyncFeedbackState} from '@coveord/plasma-react';

const Demo = () => (
    <>
        <SyncFeedback state={SyncFeedbackState.SYNCING} feedback="There is something happening" />
        <SyncFeedback state={SyncFeedbackState.SUCCESS} feedback="There was a success" />
        <SyncFeedback state={SyncFeedbackState.ERROR} feedback="There was an error" />
    </>
);
export default Demo;
