import * as loremIpsum from 'lorem-ipsum';
import * as React from 'react';
import {connect} from 'react-redux';

import {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';
import {WithDirtyActions} from '../../../hoc/withDirty/withDirtyActions';
import {IDispatch} from '../../../utils/ReduxUtils';
import {Input} from '../../input/Input';
import {Section} from '../../section/Section';
import {Svg} from '../../svg/Svg';
import {Tooltip} from '../../tooltip/Tooltip';
import {ModalLoading} from '../loading/ModalLoading';
import {closeModal, openModal} from '../ModalActions';
import {ModalCompositeConnected} from '../ModalCompositeConnected';

export interface ModalConnectedExampleProps {
    open?: (id: string) => void;
    close?: (id: string) => void;
    toggleIsDirty?: (id: string, isDirty: boolean) => void;
}

export const ModalWindowExamples: ExampleComponent = () => (
    <Section title="Modal Window Examples">
        <ModalCompositeExampleConnected />
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
        <Section level={2} title="Modals conected to the redux store">
            <Section level={3} title="A simple modal window connected">
                <button
                    className="btn"
                    onClick={() => {
                        return open(modalId);
                    }}
                >
                    Open Modal
                </button>

                <ModalCompositeConnected
                    id={modalId}
                    title="Modal composite"
                    modalHeaderChildren={
                        <Tooltip title="A tooltip for the title">
                            <Svg svgName="help" className="icon mod-2x ml1" svgClass="fill-orange" />
                        </Tooltip>
                    }
                    modalBodyChildren={
                        <div className="mt2">
                            <div className="mb2">
                                <Input
                                    id="input"
                                    labelTitle="Enter something, go ahead, make me dirty..."
                                    onChange={() => toggleIsDirty(modalId, true)}
                                />
                            </div>
                            {loremIpsum({count: 10})}
                        </div>
                    }
                    modalFooterChildren={
                        <button className="btn" onClick={() => handleClose(modalId)}>
                            Close
                        </button>
                    }
                    modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                />
            </Section>

            <Section level={3} title="A modal with additionnal configuration props">
                <button className="btn" onClick={() => open('example-4')}>
                    Open Modal
                </button>
                <ModalCompositeConnected
                    id="example-4"
                    title="Modal with addtional ReactModal props"
                    classes={['mod-fade-in-scale']}
                    modalBodyChildren="This modal only closes by using the close button or the X."
                    modalFooterChildren={
                        <button className="btn" onClick={() => handleClose('example-4')}>
                            Close
                        </button>
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

const ModalLoadingExampleDisconnected: React.FunctionComponent<{open: (id: string) => void}> = ({open}) => {
    const loadingModalExampleId = 'Loading-modal-example';
    return (
        <Section level={3} title="A loading modal">
            <button className="btn" onClick={() => open(loadingModalExampleId)}>
                Open Modal
            </button>
            <ModalLoading id={loadingModalExampleId} title={'my loading title'} openOnMount={false} />
        </Section>
    );
};

const ModalLoadingExample = connect(null, mapDispatchToProps)(ModalLoadingExampleDisconnected);
