import * as loremIpsum from 'lorem-ipsum';
import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';
import {WithDirtyActions} from '../../../hoc/withDirty/withDirtyActions';
import {WithDirtySelectors} from '../../../hoc/withDirty/withDirtySelectors';
import {IReactVaporState} from '../../../ReactVapor';
import {IDispatch} from '../../../utils/ReduxUtils';
import {Button} from '../../button/Button';
import {Input} from '../../input/Input';
import {Section} from '../../section/Section';
import {Svg} from '../../svg/Svg';
import {Tooltip} from '../../tooltip/Tooltip';
import {UnsavedChangesModalProvider} from '../../unsavedChangeModal/UnsavedChangeModalProvider';
import {ModalLoading} from '../loading/ModalLoading';
import {closeModal, openModal} from '../ModalActions';
import {ModalCompositeConnected} from '../ModalCompositeConnected';

export interface ModalConnectedExampleProps {
    id?: string;
    open?: (id: string) => void;
    close?: (id: string) => void;
    isDirty?: boolean;
    toggleIsDirty?: (id: string, dirty: boolean) => void;
}

export const ModalWindowExamples: ExampleComponent = () => (
    <Section title="Modal Window Examples">
        <ModalCompositeExampleConnected />
        <ModalWithDirtyChangeDiscardPrevention id="UnsavedChangeModal" />
        <ModalLoadingExample />
    </Section>
);

ModalWindowExamples.title = 'Modal Window';
ModalWindowExamples.description =
    'Modal windows appear in front of the main page and disable it while they are visible. They act as a zoom in on an element of the main page that allows additionnal interaction or configuration. They make possible for users to focus on their content whilst avoiding leaving the context from which they have been called.';

// start-print

const mapDispatchToProps = (dispatch: IDispatch) => ({
    open: (id: string) => dispatch(openModal(id)),
    close: (id: string) => dispatch(closeModal(id)),
    toggleIsDirty: (id: string, isDirty: boolean) => dispatch(WithDirtyActions.toggle(id, isDirty)),
});

const ModalExampleDisconnected: React.FunctionComponent<ModalConnectedExampleProps> = ({
    open,
    close,
    toggleIsDirty,
}) => {
    const handleClose = (id: string) => {
        close(id);
        toggleIsDirty(id, false);
    };

    const modalId = 'Modal-Connected-#1';
    return (
        <Section level={2} title="Modals connected to the redux store">
            <Section level={3} title="A simple modal window connected">
                <Button
                    className="btn"
                    onClick={() => {
                        return open(modalId);
                    }}
                >
                    Open Modal
                </Button>

                <ModalCompositeConnected
                    id={modalId}
                    title="Modal composite"
                    modalHeaderChildren={
                        <Tooltip title="A tooltip for the title">
                            <Svg svgName="help" className="icon mod-2x ml1" svgClass="fill-orange" />
                        </Tooltip>
                    }
                    modalBodyChildren={<div className="mt2">{loremIpsum({count: 10})}</div>}
                    modalFooterChildren={
                        <Button className="btn" onClick={() => handleClose(modalId)}>
                            Close
                        </Button>
                    }
                    modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                />
            </Section>

            <Section level={3} title="A modal with additionnal configuration props">
                <Button className="btn" onClick={() => open('example-4')}>
                    Open Modal
                </Button>
                <ModalCompositeConnected
                    id="example-4"
                    title="Modal with addtional ReactModal props"
                    classes={['mod-fade-in-scale']}
                    modalBodyChildren="This modal only closes by using the close button or the X."
                    modalFooterChildren={
                        <Button className="btn" onClick={() => handleClose('example-4')}>
                            Close
                        </Button>
                    }
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

const mapStateToProps = (state: IReactVaporState, ownProps: any) => ({
    isDirty: WithDirtySelectors.getIsDirty(state, {id: ownProps.id}),
});

const ModalWithDirtyChangeDiscardPreventionDisconnected: React.FunctionComponent<ModalConnectedExampleProps> = ({
    id,
    close,
    open,
    toggleIsDirty,
    isDirty,
}) => {
    const handleClose = () => {
        close(id);
        toggleIsDirty(id, false);
    };

    return (
        <Section level={3} title="A modal implemented with the <UnsavedChangesModalProvider/>">
            <Button className="btn" onClick={() => open(id)}>
                Open Modal
            </Button>
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
                            <Button className="btn" onClick={() => promptBefore(() => handleClose()) && handleClose()}>
                                Close
                            </Button>
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

const ModalLoadingExampleDisconnected: React.FunctionComponent<{open: (id: string) => void}> = ({open}) => {
    const loadingModalExampleId = 'Loading-modal-example';
    return (
        <Section level={3} title="A loading modal">
            <Button className="btn" onClick={() => open(loadingModalExampleId)}>
                Open Modal
            </Button>
            <ModalLoading id={loadingModalExampleId} title={'my loading title'} openOnMount={false} />
        </Section>
    );
};

const ModalLoadingExample = connect(null, mapDispatchToProps)(ModalLoadingExampleDisconnected);
