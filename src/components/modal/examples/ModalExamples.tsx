import * as React from 'React';
import { Modal } from '../Modal';
import { ModalBody } from '../ModalBody';
import { ModalBackdrop } from '../ModalBackdrop';
import { ModalFooter } from '../ModalFooter';

export interface IModalExamplesState {
  isOpened: boolean;
}

export class ModalExamples extends React.Component<any, IModalExamplesState> {

  constructor(props: any) {
    super(props);
    this.state = { isOpened: false };
  }

  openModal() {
    this.setState({ isOpened: true });
  }

  closeModal() {
    this.setState({ isOpened: false });
  }

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Modal</label>
          <div>
            <button className='btn' onClick={() => { this.openModal(); }}>Open Modal</button>
            <Modal id='modal1' isOpened={this.state.isOpened} title='Simple Modal' onClose={() => this.closeModal()}>
              <ModalBody classes={['mod-header-padding mod-form-top-bottom-padding']}>
                Modal content
              </ModalBody>
              <ModalFooter>
                <button className='btn' onClick={() => this.closeModal()}>Close</button>
              </ModalFooter>
            </Modal>
            <ModalBackdrop display={this.state.isOpened} />
          </div>
        </div>
      </div>
    );
  };
}
