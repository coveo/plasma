import {loremIpsum} from 'lorem-ipsum';
import * as React from 'react';
import {connect} from 'react-redux';
import {
    Button,
    closeModal,
    IDispatch,
    Input,
    PlasmaState,
    ModalCompositeConnected,
    ModalLoading,
    openModal,
    Section,
    Svg,
    Tooltip,
    UnsavedChangesModalProvider,
    WithDirtyActions,
    WithDirtySelectors,
} from '@coveord/plasma-react';
import * as _ from 'underscore';

import {ExampleComponent} from '../../utils/ExamplesUtils';
import PlasmaComponent from '../../building-blocs/PlasmaComponent';
export interface ModalConnectedExampleProps {
    id: string;
}

const description =
    'Modal windows appear in front of the main page and disable it while they are visible. They act as a zoom in on an element of the main page that allows additionnal interaction or configuration. They make possible for users to focus on their content whilst avoiding leaving the context from which they have been called.';

// start-print
export const ModalWindowExamples: ExampleComponent = () => (
    <PlasmaComponent
        id="ModalComposite"
        title="Modal Window"
        usage="A modal appears over the current context to have users focus on a particular task or information."
        withSource
    >
        <Section>
            <ModalCompositeExampleConnected />
            <ModalWithDirtyChangeDiscardPrevention id="UnsavedChangeModal" />
            <ModalLoadingExample />
        </Section>
    </PlasmaComponent>
);

ModalWindowExamples.title = 'Modal Window';

// start-print

const mapDispatchToProps = (dispatch: IDispatch) => ({
    open: (id: string) => dispatch(openModal(id)),
    close: (id: string) => dispatch(closeModal(id)),
    toggleIsDirty: (id: string, isDirty: boolean) => dispatch(WithDirtyActions.toggle(id, isDirty)),
});

const ModalExampleDisconnected: React.FunctionComponent<ReturnType<typeof mapDispatchToProps>> = ({
    open,
    close,
    toggleIsDirty,
}) => {
    const handleClose = (id: string) => {
        close(id);
        toggleIsDirty(id, false);
    };
    const modalSuccessId = 'Modal-Success-Connected';
    const modalWarningId = 'Modal-Warning-Connected';
    const modalCriticalId = 'Modal-Critical-Connected';
    const modalInfoId = 'Modal-Info-Connected';
    const modalId = 'Modal-Connected-#1';
    return (
        <Section level={2} title="Modals connected to the redux store">
            <Section level={3} description="Success, warning, critical and info prompts" className="flex">
                <Button className="btn m0 mr1" onClick={() => open(modalSuccessId)}>
                    Prompt success
                </Button>

                <ModalCompositeConnected
                    id={modalSuccessId}
                    title="Prompt success"
                    isPrompt
                    modalHeaderClasses={['mod-success']}
                    modalBodyChildren={<div className="mt2">{loremIpsum({count: 3})}</div>}
                    modalFooterChildren={
                        <>
                            <Button primary small onClick={() => handleClose(modalSuccessId)}>
                                Confirm
                            </Button>
                            <Button small onClick={() => handleClose(modalSuccessId)}>
                                Close
                            </Button>
                        </>
                    }
                    modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                />
                <Button className="btn m0 mr1" onClick={() => open(modalWarningId)}>
                    Prompt warning
                </Button>

                <ModalCompositeConnected
                    id={modalWarningId}
                    title="Prompt warning"
                    isPrompt
                    modalHeaderClasses={['mod-warning']}
                    modalBodyChildren={<div className="mt2">{loremIpsum({count: 3})}</div>}
                    modalFooterChildren={
                        <>
                            <Button primary small onClick={() => handleClose(modalWarningId)}>
                                Confirm
                            </Button>
                            <Button small onClick={() => handleClose(modalWarningId)}>
                                Close
                            </Button>
                        </>
                    }
                    modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                />
                <Button className="btn m0 mr1" onClick={() => open(modalCriticalId)}>
                    Prompt critical
                </Button>

                <ModalCompositeConnected
                    id={modalCriticalId}
                    title="Prompt critical"
                    isPrompt
                    modalHeaderClasses={['mod-critical']}
                    modalBodyChildren={<div className="mt2">{loremIpsum({count: 3})}</div>}
                    modalFooterChildren={
                        <Button small onClick={() => handleClose(modalCriticalId)}>
                            Close
                        </Button>
                    }
                    modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                />
                <Button className="btn m0 mr1" onClick={() => open(modalInfoId)}>
                    Prompt info
                </Button>
                <ModalCompositeConnected
                    id={modalInfoId}
                    title="Prompt info"
                    isPrompt
                    modalHeaderClasses={['mod-info']}
                    modalBodyChildren={<div className="mt2">{loremIpsum({count: 3})}</div>}
                    modalFooterChildren={
                        <Button small onClick={() => handleClose(modalInfoId)}>
                            Close
                        </Button>
                    }
                    modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                />
            </Section>
            <Section level={3} description="A simple modal window connected">
                <Button onClick={() => open(modalId)}>Open Modal</Button>

                <ModalCompositeConnected
                    id={modalId}
                    title="Modal composite"
                    modalHeaderChildren={
                        <Tooltip title="A tooltip for the title">
                            <Svg svgName="help" className="icon documentation-link mod-2x ml1" />
                        </Tooltip>
                    }
                    modalBodyChildren={<div className="mt2">{loremIpsum({count: 10})}</div>}
                    modalFooterChildren={<Button onClick={() => handleClose(modalId)}>Close</Button>}
                    modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                />
            </Section>

            <Section level={3} description="A modal with additionnal configuration props">
                <Button onClick={() => open('example-4')}>Open Modal</Button>
                <ModalCompositeConnected
                    id="example-4"
                    title="Modal with addtional ReactModal props"
                    classes={['mod-fade-in-scale']}
                    modalBodyChildren="This modal only closes by using the close button or the X."
                    modalFooterChildren={<Button onClick={() => handleClose('example-4')}>Close</Button>}
                    modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                    docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}
                    shouldCloseOnEsc={false}
                    shouldCloseOnOverlayClick={false}
                    onAfterOpen={() => alert('The modal content has mounted and is ready to open.')}
                    closeCallback={() => alert('The modal has closed.')}
                />
            </Section>
        </Section>
    );
};

const ModalCompositeExampleConnected = connect(null, mapDispatchToProps)(ModalExampleDisconnected);

const mapStateToProps = (state: PlasmaState, ownProps: any) => ({
    isDirty: WithDirtySelectors.getIsDirty(state, {id: ownProps.id}),
});

const ModalWithDirtyChangeDiscardPreventionDisconnected: React.FunctionComponent<
    ModalConnectedExampleProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> = ({id, close, open, toggleIsDirty, isDirty}) => {
    const handleClose = () => {
        close(id);
        toggleIsDirty(id, false);
    };

    return (
        <Section
            level={3}
            description="A modal implemented with the <UnsavedChangesModalProvider/> and confirmation prompt"
        >
            <Button onClick={() => open(id)}>Open Modal</Button>
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
                                        onChange={(i) => toggleIsDirty(id, _.isEmpty(i) ? false : true)}
                                    />
                                </div>
                                {loremIpsum({count: 10})}
                            </div>
                        }
                        modalFooterChildren={
                            <Button onClick={() => promptBefore(() => handleClose()) && handleClose()}>Close</Button>
                        }
                        validateShouldNavigate={() => promptBefore(() => handleClose())}
                        modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                        docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}
                    />
                )}
            </UnsavedChangesModalProvider>
        </Section>
    );
};

const ModalWithDirtyChangeDiscardPrevention = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalWithDirtyChangeDiscardPreventionDisconnected);

const ModalLoadingExampleDisconnected: React.FunctionComponent<ReturnType<typeof mapDispatchToProps>> = ({open}) => {
    const loadingModalExampleId = 'Loading-modal-example';
    return (
        <Section level={3} description="A loading modal">
            <Button onClick={() => open(loadingModalExampleId)}>Open Modal</Button>
            <ModalLoading id={loadingModalExampleId} title={'my loading title'} openOnMount={false} />
        </Section>
    );
};

const ModalLoadingExample = connect(null, mapDispatchToProps)(ModalLoadingExampleDisconnected);

// stop-print
export default ModalWindowExamples;
