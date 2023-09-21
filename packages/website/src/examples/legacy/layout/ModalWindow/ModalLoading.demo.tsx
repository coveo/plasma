import {useDispatch} from 'react-redux';
import {Button, IDispatch, openModal, ModalLoading} from '@coveord/plasma-react';

const Demo = () => {
    const dispatch: IDispatch = useDispatch();
    const open = () => dispatch(openModal('loading-modal'));
    return (
        <>
            <Button onClick={open}>Open Modal</Button>
            <ModalLoading id="loading-modal" title="My loading title" openOnMount={false} />
        </>
    );
};
export default Demo;
