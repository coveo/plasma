import * as React from 'react';
import { ModalPromptConnected } from '../ModalPromptConnected';
import { ReduxConnect, IReduxAction } from '../../../utils/ReduxUtils';
import { IModalPromptActionPayload } from '../ModalPromptActions';
import {openModal, closeModal} from '../../modal/ModalActions';
import {ModalBackdropConnected} from '../../modal/ModalBackdropConnected';

export interface IPromptExamplesProps {
  openModal?: (id: string) => void;
  closeModal?: (id: string) => void;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: (action: IReduxAction<IModalPromptActionPayload>) => void): IPromptExamplesProps => ({
  openModal: (id: string) => dispatch(openModal(id)),
  closeModal: (id: string) => dispatch(closeModal(id))
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class ModalPromptConnectedExamples extends React.Component<any, IPromptExamplesProps> {

  openModal(id: string) {
    this.props.openModal(id);
  }

  closeModal(id: string) {
    this.props.closeModal(id);
  }

  confirm(id: string) {
    alert('Confirmed');
    this.closeModal(id);
  }

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Connected modal prompt</label>
          <div>
            <button className='btn mod-primary' onClick={() => this.openModal('prompt-confirmation-connected')}>
              Open confirmation prompt
            </button>
            <ModalPromptConnected
              id='prompt-confirmation-connected'
              message='This is the message.'
              title='Confirmation modal prompt (connected)'
              onCancel={() => this.closeModal('prompt-confirmation-connected')}
              onConfirm={() => this.confirm('prompt-confirmation-connected')}
            />
            <ModalBackdropConnected
              displayFor={['prompt-confirmation-connected']}
              onClick={() => this.closeModal('prompt-confirmation-connected')}
            />
          </div>
        </div>
      </div>
    );
  };
}
