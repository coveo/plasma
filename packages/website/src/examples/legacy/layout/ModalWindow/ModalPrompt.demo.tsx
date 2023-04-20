import {useDispatch} from 'react-redux';
import {Button, IDispatch, openModal, closeModal, ModalCompositeConnected} from '@coveord/plasma-react';

const Demo = () => {
    const dispatch: IDispatch = useDispatch();
    const open = (id: string) => () => dispatch(openModal(id));
    const close = (id: string) => () => dispatch(closeModal(id));
    return (
        <>
            <Button onClick={open('success')}>Success prompt</Button>
            <Button onClick={open('warning')}>Warning prompt</Button>
            <Button onClick={open('critical')}>Critical prompt</Button>
            <Button onClick={open('info')}>Info prompt</Button>
            <ModalCompositeConnected
                id="success"
                title="Prompt success"
                isPrompt
                modalHeaderClasses={['mod-success']}
                modalBodyChildren={<div className="mt2">Success message</div>}
                modalFooterChildren={
                    <Button small onClick={close('success')}>
                        Close
                    </Button>
                }
                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
            />

            <ModalCompositeConnected
                id="warning"
                title="Prompt warning"
                isPrompt
                modalHeaderClasses={['mod-warning']}
                modalBodyChildren={<div className="mt2">Warning message</div>}
                modalFooterChildren={
                    <Button small onClick={close('warning')}>
                        Close
                    </Button>
                }
                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
            />

            <ModalCompositeConnected
                id="critical"
                title="Prompt critical"
                isPrompt
                modalHeaderClasses={['mod-critical']}
                modalBodyChildren={<div className="mt2">Critical message</div>}
                modalFooterChildren={
                    <Button small onClick={close('critical')}>
                        Close
                    </Button>
                }
                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
            />

            <ModalCompositeConnected
                id="info"
                title="Prompt info"
                isPrompt
                modalHeaderClasses={['mod-info']}
                modalBodyChildren={<div className="mt2">Info message</div>}
                modalFooterChildren={
                    <Button small onClick={close('info')}>
                        Close
                    </Button>
                }
                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
            />
        </>
    );
};
export default Demo;
