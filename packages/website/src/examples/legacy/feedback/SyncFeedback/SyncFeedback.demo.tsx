import {SyncFeedback, SyncFeedbackState} from '@coveord/plasma-react';

const Demo = () => (
    <table className="table">
        <tr>
            <td>NONE</td>
            <td>
                <SyncFeedback state={SyncFeedbackState.NONE} />
            </td>
        </tr>
        <tr>
            <td>SYNCING</td>
            <td>
                <SyncFeedback state={SyncFeedbackState.SYNCING} />
            </td>
        </tr>

        <tr>
            <td>SUCCESS</td>
            <td>
                <SyncFeedback state={SyncFeedbackState.SUCCESS} />
            </td>
        </tr>

        <tr>
            <td>ERROR</td>
            <td>
                <SyncFeedback state={SyncFeedbackState.ERROR} />
            </td>
        </tr>
    </table>
);
export default Demo;
