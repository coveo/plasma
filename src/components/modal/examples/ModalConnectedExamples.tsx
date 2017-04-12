import * as React from 'react';
import { IReduxAction, ReduxConnect } from '../../../utils/ReduxUtils';
import { openModal, IModalActionPayload } from '../ModalActions';
import { ModalConnected } from '../ModalConnected';
import { ModalBody } from '../ModalBody';
import { ModalFooter } from '../ModalFooter';
import { ModalBackdropConnected } from '../ModalBackdropConnected';

export interface IModalExamplesProps {
  openModal?: (id: string) => void;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: (action: IReduxAction<IModalActionPayload>) => void): IModalExamplesProps => {
  return {
    openModal: (id: string) => {
      dispatch(openModal(id));
    }
  };
};

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class ModalConnectedExamples extends React.Component<IModalExamplesProps, any> {

  openModal(id: string) {
    this.props.openModal(id);
  }

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Modal Connected</label>
          <div>
            <button className='btn' onClick={() => { this.openModal('modal1'); }}>Open Modal 1</button>
            <ModalConnected id={'modal1'} title='Simple Modal' classes={['mod-big']}>
              <ModalBody classes={['mod-header-padding mod-form-top-bottom-padding']}>
                Connected modal content
                <ModalConnected id='modal2' title='Modal 2'>
                  <ModalBody classes={['mod-header-padding mod-form-top-bottom-padding']}>
                    A modal in a modal
                  </ModalBody>
                </ModalConnected>
                <ModalBackdropConnected displayFor={['modal2']} />
              </ModalBody>
              <ModalFooter>
                <button className='btn' onClick={() => { this.openModal('modal2'); }}>Open Modal 2</button>
              </ModalFooter>
            </ModalConnected>
            <ModalBackdropConnected displayFor={['modal1']}/>
          </div>
        </div>
      </div>
    );
  };
}
