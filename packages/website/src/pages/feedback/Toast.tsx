import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {Toast} from "@coveord/plasma-react";

    export default () => <Toast title='Hello World!' type="success" />;
`;

const downloadToast = `
    import {Toast} from "@coveord/plasma-react";

    export default () => (
        <Toast title="Preparing file for download..." type="download">
            <div>some_file.csv</div>
        </Toast>
    );
`;

const notifier = `
    import { useDispatch } from 'react-redux';
    import { addToast, Button, IDispatch, ToastContainerConnected } from '@coveord/plasma-react';

    const ShowToastButton: React.FunctionComponent = () => {
        const dispatch: IDispatch = useDispatch();
        return (
            <Button
                onClick={() => {
                    dispatch(addToast('toast-container-id', 'Hello World!', {
                        dismiss: 3000,
                        type: 'error'
                    }));
                }}
            >
                Show toast
            </Button>
        );
    };

    export default () => (
        <>
            <ToastContainerConnected id="toast-container-id" />
            <ShowToastButton />
        </>
    );
`;

export const ToastExamples = () => (
    <PageLayout
        id="Toast"
        componentSourcePath="/toast/Toast.tsx"
        title="Toast"
        thumbnail="toast"
        section="Feedback"
        description="A toast displays a short message related to an action performed by a user."
        code={code}
        examples={{
            download: {code: downloadToast, title: 'Download Toast'},
            container: {code: notifier, title: 'Toast Notifier'},
        }}
    />
);
export default ToastExamples;
