import * as React from 'react';
import {connect} from 'react-redux';
import {IModalExamplesProps} from '../../examples/ModalCompositeConnectedExamples';
import {closeModal, openModal} from '../../ModalActions';
import {ModalLoading} from '../ModalLoading';

const Ids = {
    example1: 'example-1',
};

class ModalLoadingExamplesDisconnected extends React.PureComponent<IModalExamplesProps> {
    openModal(id: string) {
        this.props.openModal(id);
    }

    closeModal(id: string) {
        this.props.closeModal(id);
    }

    render() {
        return (
            // start-print
            <div className="mt3">
                <label className="form-control-label">Loading modal</label>
                <div className="form-group">
                    <button className="btn" onClick={() => this.openModal(Ids.example1)}>
                        Open Modal
                    </button>
                    <ModalLoading id={Ids.example1} title={'my loading title'} openOnMount={false} />
                </div>
            </div>
            // stop-print
        );
    }
}

export const ModalLoadingExamples = connect(
    null,
    {openModal, closeModal}
)(ModalLoadingExamplesDisconnected);
