import {useDispatch} from 'react-redux';
import {Button, IDispatch, openModal, closeModal, ModalCompositeConnected} from '@coveord/plasma-react';

export default () => {
    const dispatch: IDispatch = useDispatch();
    const open = () => dispatch(openModal('additional-props'));
    const close = () => dispatch(closeModal('additional-props'));
    return (
        <>
            <Button onClick={open}>Open modal</Button>
            <ModalCompositeConnected
                id="additional-props"
                title="Modal with addtional ReactModal props"
                classes={['mod-fade-in-scale']}
                modalBodyChildren="This modal only closes by using the close button or the X."
                modalFooterChildren={<Button onClick={close}>Close</Button>}
                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}
                shouldCloseOnEsc={false}
                shouldCloseOnOverlayClick={false}
                onAfterOpen={() => alert('The modal content has mounted and is ready to open.')}
                closeCallback={() => alert('The modal has closed.')}
            />
        </>
    );
};
