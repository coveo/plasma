import {useDispatch} from 'react-redux';
import {Button, IDispatch, openModal, closeModal, ModalCompositeConnected} from '@coveord/plasma-react';

export default () => {
    const dispatch: IDispatch = useDispatch();
    const open = () => dispatch(openModal('simple-modal'));
    const close = () => dispatch(closeModal('simple-modal'));
    return (
        <>
            <Button onClick={open}>Open modal</Button>
            <ModalCompositeConnected
                id="simple-modal"
                title="Simple Modal"
                modalBodyChildren={
                    <div className="mt2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper blandit volutpat.
                        Suspendisse nec lorem mauris. Nam faucibus vitae tellus eu aliquam. Vivamus non quam at lectus
                        pharetra gravida. In hac habitasse platea dictumst. Integer nec bibendum risus. Ut pulvinar
                        sodales erat, id sollicitudin nunc egestas vel. Aliquam lectus nisl, aliquam sed rutrum sed,
                        facilisis cursus lorem. Proin egestas justo erat, a rhoncus nulla pharetra et. In placerat
                        facilisis tellus eget sodales. Mauris eu neque est. Nam in odio pretium, ullamcorper orci nec,
                        ultricies arcu.
                    </div>
                }
                modalFooterChildren={
                    <Button small onClick={close}>
                        Close
                    </Button>
                }
                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
            />
        </>
    );
};
