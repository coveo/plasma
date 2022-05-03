import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
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
`;

const loading = `
import {useDispatch} from 'react-redux';
import {Button, IDispatch, openModal, closeModal, ModalLoading} from '@coveord/plasma-react';

export default () => {
    const dispatch: IDispatch = useDispatch();
    const open = () => dispatch(openModal('loading-modal'));
    const close = () => dispatch(closeModal('loading-modal'));
    return (
        <>
            <Button onClick={open}>Open Modal</Button>
            <ModalLoading id="loading-modal" title="My loading title" openOnMount={false} />
        </>
    );
};
`;

const prompts = `
import {useDispatch} from 'react-redux';
import {Button, IDispatch, openModal, closeModal, ModalCompositeConnected} from '@coveord/plasma-react';

export default () => {
    const dispatch: IDispatch = useDispatch();
    const open = (id) => () => dispatch(openModal(id));
    const close = (id) => () => dispatch(closeModal(id));
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
`;

const withAdditionalProps = `
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
`;

const withDirty = `
import {useSelector, useDispatch} from 'react-redux';
import {
    Button,
    IDispatch,
    Input,
    openModal,
    closeModal,
    ModalCompositeConnected,
    PlasmaState,
    UnsavedChangesModalProvider,
    WithDirtySelectors,
    WithDirtyActions,
} from '@coveord/plasma-react';

export default () => {
    const id = 'ModalWithDirty';
    const isDirty = useSelector((state: PlasmaState) => WithDirtySelectors.getIsDirty(state, {id}));
    const dispatch: IDispatch = useDispatch();
    const open = () => dispatch(openModal(id));
    const close = () => dispatch(closeModal(id));
    const toggleIsDirty = (dirty: boolean) => dispatch(WithDirtyActions.toggle(id, dirty));

    const handleClose = () => {
        close();
        toggleIsDirty(false);
    };
    const onInputChange = (value: string) => {
        toggleIsDirty(value !== '');
    };
    return (
        <>
            <Button onClick={open}>Open Modal</Button>
            <UnsavedChangesModalProvider isDirty={isDirty}>
                {({promptBefore}) => (
                    <ModalCompositeConnected
                        id={id}
                        title="A modal with a dirty change discard prevention"
                        classes={['mod-fade-in-scale']}
                        modalBodyChildren={
                            <div className="mt2">
                                <div className="mb2">
                                    <Input
                                        id="input"
                                        labelTitle="Try to close me with dirty changes."
                                        onChange={onInputChange}
                                    />
                                </div>
                            </div>
                        }
                        modalFooterChildren={<Button onClick={() => promptBefore(handleClose)}>Close</Button>}
                        validateShouldNavigate={() => promptBefore(handleClose)}
                        modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                        docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}
                    />
                )}
            </UnsavedChangesModalProvider>
        </>
    );
};
`;

const ModalWindowExamples = () => (
    <PageLayout
        id="ModalCompositeConnected"
        title="Modal Window"
        section="Layout"
        description="A modal appears over the current context to have users focus on a particular task or information."
        componentSourcePath="/modal/ModalComposite.tsx"
        code={code}
        examples={{
            prompts: {code: prompts, title: 'Prompts'},
            loading: {code: loading, title: 'Loading Modal'},
            withAdditionalProps: {code: withAdditionalProps, title: 'With Additional Props'},
            withDirty: {code: withDirty, title: 'With Dirty State Management'},
        }}
    />
);

export default ModalWindowExamples;
