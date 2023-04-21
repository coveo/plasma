import {useDispatch} from 'react-redux';
import {addToast, Button, IDispatch, ToastContainerConnected} from '@coveord/plasma-react';

const ShowToastButton: React.FunctionComponent = () => {
    const dispatch: IDispatch = useDispatch();
    return (
        <Button
            onClick={() => {
                dispatch(
                    addToast('toast-container-id', 'Hello World!', {
                        dismiss: 3000,
                        type: 'error',
                    })
                );
            }}
        >
            Show toast
        </Button>
    );
};

const Demo = () => (
    <>
        <ToastContainerConnected id="toast-container-id" />
        <ShowToastButton />
    </>
);
export default Demo;
