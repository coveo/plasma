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

const Demo = () => {
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
export default Demo;
