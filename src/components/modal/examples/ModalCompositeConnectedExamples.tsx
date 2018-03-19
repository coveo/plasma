import * as React from 'react';
import {IReduxAction, ReduxConnect} from '../../../utils/ReduxUtils';
import {closeModal, IModalActionPayload, openModal} from '../ModalActions';
import {ModalCompositeConnected} from '../ModalCompositeConnected';

export interface IModalExamplesProps {
    openModal?: (id: string) => void;
    closeModal?: (id: string) => void;
}

const modalId = 'modal-composite-connected';

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
            <div className='mt2'>
                <label className='form-control-label'>Modal Composite Connected (initialize a modal with just one component)</label>
                <div>
                    <div className='form-group'>
                        <button className='btn' onClick={() => this.openModal(modalId)}>Open Modal</button>
                        <ModalCompositeConnected
                            id={modalId}
                            title='Modal composite'
                            modalBodyChildren='The content of the modal'
                            modalFooterChildren={<button className='btn' onClick={() => this.closeModal(modalId)}>Close</button>}
                            modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
