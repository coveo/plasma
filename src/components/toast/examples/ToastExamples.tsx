import * as React from 'react';
import { ToastContainer } from '../ToastContainer';
import { Toast, ToastType } from '../Toast';
import { ToastContentExample } from './ToastContentExample';

export interface IToastExamplesState {
  Success: boolean;
  Warning: boolean;
  Error: boolean;
  Timed: boolean;
}

export class ToastExamples extends React.Component<{}, IToastExamplesState> {

  constructor(props: any) {
    super(props);

    this.state = {
      Success: false,
      Warning: false,
      Error: false,
      Timed: false,
    };
  }

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Toasts</label>
          <div>
            <button className='btn' onClick={() => this.setState({ Success: true })}>Open Success Toast</button>
            <button className='btn' onClick={() => this.setState({ Warning: true })}>Open Warning Toast</button>
            <button className='btn' onClick={() => this.setState({ Error: true })}>Open Error Toast</button>
            <button className='btn' onClick={() => this.setState({ Timed: true })}>Open Timed Toast</button>

            <ToastContainer>
              {this.state.Success && <Toast key='toast-1' id='toast-1' title='Success!' onClose={() => this.setState({ Success: false })} />}
              {this.state.Warning && <Toast key='toast-2' id='toast-2' title='Warning!'
                type={ToastType.Warning} onClose={() => this.setState({ Warning: false })} />}
              {this.state.Error && <Toast key='toast-3' id='toast-3' title='Ohno! Something went wrong.' type={ToastType.Error}
                onClose={() => this.setState({ Error: false })} content={ToastContentExample}>
                <a href='#'>Status Page</a>
              </Toast>}
              {this.state.Timed &&
                <Toast key='toast-4' id='toast-4' title='Timed Success!' dismiss={1000} onClose={() => this.setState({ Timed: false })} />}
            </ToastContainer>
          </div>
        </div>
      </div>
    );
  }
}
