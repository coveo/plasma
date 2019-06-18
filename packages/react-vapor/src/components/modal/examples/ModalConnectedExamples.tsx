import * as React from 'react';
import {IReduxAction, ReduxConnect} from '../../../utils/ReduxUtils';
import {closeModal, IModalActionPayload, openModal} from '../ModalActions';
import {ModalBackdropConnected} from '../ModalBackdropConnected';
import {ModalBody} from '../ModalBody';
import {ModalConnected} from '../ModalConnected';
import {ModalFooter} from '../ModalFooter';
import {ModalHeaderConnected} from '../ModalHeaderConnected';

export interface IModalExamplesProps {
    openModal?: (id: string) => void;
    closeModal?: (id: string) => void;
}

const modal1Id = 'modal1';
const modal2Id = 'modal2';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: (action: IReduxAction<IModalActionPayload>) => void): IModalExamplesProps => ({
    openModal: (id: string) => dispatch(openModal(id)),
    closeModal: (id: string) => dispatch(closeModal(id)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class ModalConnectedExamples extends React.Component<IModalExamplesProps, any> {
    openModal(id: string) {
        this.props.openModal(id);
    }

    closeModal(id: string) {
        this.props.closeModal(id);
    }

    render() {
        return (
            <div className="mt2">
                <label className="form-control-label">Modal Connected</label>
                <div>
                    <div className="form-group">
                        <button
                            className="btn"
                            onClick={() => {
                                this.openModal('modal1');
                            }}
                        >
                            Open Modal 1
                        </button>
                        <ModalConnected id={modal1Id} classes={['mod-big']}>
                            <ModalHeaderConnected id={modal1Id} title="Simple Modal" />
                            <ModalBody classes={['mod-header-padding mod-form-top-bottom-padding']}>
                                Connected modal content
                                <ModalConnected id={modal2Id}>
                                    <ModalHeaderConnected id={modal2Id} title="Modal 2" />
                                    <ModalBody classes={['mod-header-padding mod-form-top-bottom-padding']}>
                                        A modal in a modal
                                    </ModalBody>
                                </ModalConnected>
                                <ModalBackdropConnected displayFor={[modal2Id]} isPrompt />
                            </ModalBody>
                            <ModalFooter>
                                <button
                                    className="btn"
                                    onClick={() => {
                                        this.openModal(modal2Id);
                                    }}
                                >
                                    Open Modal 2
                                </button>
                            </ModalFooter>
                        </ModalConnected>
                        <ModalBackdropConnected displayFor={[modal1Id]} />
                    </div>
                </div>
            </div>
        );
    }
}
