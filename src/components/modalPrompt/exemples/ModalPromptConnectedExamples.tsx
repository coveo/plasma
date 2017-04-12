import * as React from 'react';
import { ModalPromptConnected } from '../ModalPromptConnected';
import { ReduxConnect, IReduxAction } from '../../../utils/ReduxUtils';
import { IModalPromptActionPayload, openModalPrompt } from '../ModalPromptActions';

export interface IPromptExamplesProps {
  openModalPrompt?: (id: string) => void;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: (action: IReduxAction<IModalPromptActionPayload>) => void): IPromptExamplesProps => {
  return {
    openModalPrompt: (id: string) => {
      dispatch(openModalPrompt(id));
    }
  };
};

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class PromptConnectedExamples extends React.Component<any, IPromptExamplesProps> {

  openModalPrompt(id: string) {
    this.props.openModalPrompt(id);
  }

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Connected modal prompt</label>
          <div>
            <button className='btn mod-primary' onClick={() => this.openModalPrompt('prompt-confirmation-connected')}>
              Open confirmation prompt
            </button>
            <ModalPromptConnected
              id='prompt-confirmation-connected'
              message='This is the message.'
              title='Confirmation modal prompt (connected)'
              confirmLabel='Confirm'
              cancelLabel='Cancel'
            />
          </div>
        </div>
      </div>
    );
  };
}
