import * as React from 'react';
import {IReduxAction, ReduxConnect} from '../../../utils/ReduxUtils';
import {ToastType} from '../Toast';
import {addToast, IToastActionPayload, IToastAddOptionalPayload} from '../ToastActions';
import {ToastContainerConnected} from '../ToastContainerConnected';
import {ToastContentExample} from './ToastContentExample';

export interface IToastConnectedExamplesProps {
    addToast?: (id: string, title: string, optionals?: IToastAddOptionalPayload) => void;
}

const containerId = 'some-id';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: (action: IReduxAction<IToastActionPayload>) => void): IToastConnectedExamplesProps => ({
    addToast: (id: string, title: string, optionals: IToastAddOptionalPayload) => dispatch(addToast(id, title, optionals)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class ToastConnectedExamples extends React.Component<IToastConnectedExamplesProps, {}> {

    render() {
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Toasts</label>
                    <div>
                        <button className='btn' onClick={() => {
                            this.props.addToast(containerId, 'Success!');
                        }}>Basic</button>

                        <button className='btn' onClick={() => {
                            this.props.addToast(containerId, 'Warning!', {type: ToastType.Warning});
                        }}>Warning</button>

                        <button className='btn' onClick={() => {
                            this.props.addToast(containerId, 'Error!', {type: ToastType.Error});
                        }}>Error</button>

                        <button className='btn' onClick={() => {
                            this.props.addToast(containerId, 'Timed Success!', {dismiss: 1000});
                        }}>Timed</button>

                        <button className='btn' onClick={() => {
                            this.props.addToast(containerId, 'Success!', {content: 'String content'});
                        }}>String Content</button>

                        <button className='btn' onClick={() => {
                            this.props.addToast(containerId, 'Success!', {content: <a href='#'>JSX Element</a>});
                        }}>JSX Content</button>

                        <button className='btn' onClick={() => {
                            this.props.addToast(containerId, 'Success!', {content: ToastContentExample});
                        }}>React Component Content</button>

                        <ToastContainerConnected id={containerId} />
                    </div>
                </div>
            </div>
        );
    }
}
