import * as loremIpsum from 'lorem-ipsum';
import * as React from 'react';

import {IWithDirtyProps} from '../../../hoc/withDirty/withDirty';
import {modalWithPreventNavigation} from '../../../hoc/withPreventNavigation/modalWithPreventNavigation';
import {IReduxAction, ReduxConnect} from '../../../utils/ReduxUtils';
import {Input} from '../../input/Input';
import {Svg} from '../../svg/Svg';
import {Tooltip} from '../../tooltip/Tooltip';
import {closeModal, IModalActionPayload, openModal} from '../ModalActions';
import {ModalCompositeConnected} from '../ModalCompositeConnected';

export interface IModalExamplesProps {
    openModal?: (id: string) => void;
    closeModal?: (id: string) => void;
}

const modalId: string = 'modal-composite-connected';
const secondModalId: string = 'second-modal-composite';
const insideModalId: string = 'inside-modal';

const mapDispatchToProps = (dispatch: (action: IReduxAction<IModalActionPayload>) => void): IModalExamplesProps => ({
    openModal: (id: string) => dispatch(openModal(id)),
    closeModal: (id: string) => dispatch(closeModal(id)),
});

const lorem = loremIpsum({count: 10});

@ReduxConnect(undefined, mapDispatchToProps)
class ComponentWithPreventNavigateExample extends React.Component<IWithDirtyProps & IModalExamplesProps> {
    render() {
        return (
            <ModalCompositeConnected
                {...this.props}
                id='modal-composite-2'
                title='Modal composite'
                modalHeaderChildren={(
                    <Tooltip title='A tooltip for the title'>
                        <Svg svgName='help' className='icon mod-2x ml1' svgClass='fill-orange' />
                    </Tooltip>
                )}
                modalBodyChildren={(
                    <div className='mt2'>
                        <div className='mb2'>
                            <Input id='input' labelTitle='Enter something, go ahead, make me dirty...'
                                onChange={() => this.props.toggleIsDirty(true)} />
                        </div>
                        {lorem}
                    </div>
                )}
                modalFooterChildren={<button className='btn' onClick={() => this.props.closeModal('modal-composite-2')}>Close</button>}
                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
            />
        );
    }
}

export const ComponentWithPreventNavigationHOC = modalWithPreventNavigation({id: 'modal-composite-2'})(ComponentWithPreventNavigateExample);

@ReduxConnect(undefined, mapDispatchToProps)
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
                <div className='mt3'>
                    <label className='form-control-label'>Modal Composite Connected with additional ReactModal props</label>
                    <div className='form-group'>
                        <button className='btn' onClick={() => this.openModal('example-4')}>Open Modal</button>
                        <ModalCompositeConnected
                            id='example-4'
                            title='Modal with addtional ReactModal props'
                            classes={['mod-fade-in-scale']}
                            modalBodyChildren='This modal only closes by using the close button or the X.'
                            modalFooterChildren={<button className='btn' onClick={() => this.closeModal('example-4')}>Close</button>}
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                            docLink={{url: 'https://www.coveo.com', tooltip: {title: 'Go to coveo.com'}}}
                            shouldCloseOnEsc={false}
                            shouldCloseOnOverlayClick={false}
                            onAfterOpen={() => alert('The modal content has mounted and is ready to open.')}
                            closeCallback={() => alert('The modal has closed.')}
                        />
                    </div>

                    <div className='mt3'>
                        <label className='form-control-label'>Modal With a Prevent Navigation</label>
                        <div className='form-group'>
                            <button className='btn' onClick={() => this.props.openModal('modal-composite-2')}>Open Modal</button>
                            <ComponentWithPreventNavigationHOC />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
