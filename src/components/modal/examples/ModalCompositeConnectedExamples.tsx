import * as React from 'react';

import {IReduxAction, ReduxConnect} from '../../../utils/ReduxUtils';
import {closeModal, IModalActionPayload, openModal} from '../ModalActions';
import {ModalCompositeConnected} from '../ModalCompositeConnected';

export interface IModalExamplesProps {
    openModal?: (id: string) => void;
    closeModal?: (id: string) => void;
}

const modalId: string = 'modal-composite-connected';
const secondModalId: string = 'second-modal-composite';
const insideModalId: string = 'inside-modal';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: (action: IReduxAction<IModalActionPayload>) => void): IModalExamplesProps => ({
    openModal: (id: string) => dispatch(openModal(id)),
    closeModal: (id: string) => dispatch(closeModal(id)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class ModalCompositeConnectedExamples extends React.Component<IModalExamplesProps, any> {

    openModal(id: string) {
        this.props.openModal(id);
    }

    closeModal(id: string) {
        this.props.closeModal(id);
    }

    render() {
        return (
            <>
                <div>
                    <label className='form-control-label'>Modal Composite Connected (initialize a modal with just one component)</label>
                    <div className='form-group'>
                        <button className='btn' onClick={() => this.openModal(modalId)}>Open Modal</button>
                        <ModalCompositeConnected
                            id={modalId}
                            title='Modal composite'
                            classes={['mod-slide-in-bottom', 'mod-big', 'mod-stick-bottom']}
                            modalBodyChildren='The content of the modal'
                            modalFooterChildren={<button className='btn' onClick={() => this.closeModal(modalId)}>Close</button>}
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                            docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}
                        />
                    </div>
                </div>
                <div className='mt3'>
                    <label className='form-control-label'>Modal Composite Connected with another modal inside</label>
                    <div className='form-group'>
                        <button className='btn' onClick={() => this.openModal(secondModalId)}>Open Modal</button>
                        <ModalCompositeConnected
                            id={secondModalId}
                            title='Modal composite'
                            modalBodyChildren={
                                <div>
                                    <button className='btn' onClick={() => this.openModal(insideModalId)}>Open inside modal</button>
                                    <ModalCompositeConnected
                                        id={insideModalId}
                                        title='Nested modal composite'
                                        modalBodyChildren='The content of the modal'
                                        modalFooterChildren={<button className='btn' onClick={() => this.closeModal(insideModalId)}>Close</button>}
                                        modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                                    />
                                </div>
                            }
                            modalFooterChildren={<button className='btn' onClick={() => this.closeModal(secondModalId)}>Close</button>}
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                        />
                    </div>
                </div>
                <div className='mt3'>
                    <label className='form-control-label'>A prompt made with the modal composite</label>
                    <div className='form-group'>
                        <button className='btn' onClick={() => this.openModal('error-prompt')}>Prompt error</button>
                        <ModalCompositeConnected
                            id='error-prompt'
                            title='Error prompt'
                            classes={['mod-prompt', 'mod-fade-in-scale']}
                            modalBodyChildren={
                                <>
                                    <p>Error description paragraph 1</p>
                                    <p className='mt1'>Error description paragraph 2</p>
                                </>
                            }
                            modalFooterChildren={
                                <>
                                    <button className='btn mod-small mod-primary' onClick={() => alert('HELP')}>Cry for help</button>
                                    <button className='btn mod-small' onClick={() => this.closeModal('error-prompt')}>Close</button>
                                </>
                            }
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                            modalHeaderClasses={['mod-warning']}
                        />
                    </div>
                </div>
            </>
        );
    }
}
