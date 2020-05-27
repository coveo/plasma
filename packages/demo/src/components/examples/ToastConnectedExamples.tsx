import * as React from 'react';
import {addToast, ReduxConnect, ToastContainerConnected, ToastType} from 'react-vapor';

import {ToastContentExample} from './ToastContentExample';

export interface IToastConnectedExamplesProps {
    addToast: typeof addToast;
}

const containerId = 'some-id';

@ReduxConnect(null, {addToast})
export class ToastConnectedExamples extends React.Component<IToastConnectedExamplesProps, {}> {
    static description =
        'Toasts display non-critical confirmation information related to user-performed operations (e.g., form submission).';

    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Toasts</label>
                    <div className="flex flex-wrap">
                        <button
                            className="btn m0 mr1 mb1"
                            onClick={() => {
                                this.props.addToast(containerId, 'Success!');
                            }}
                        >
                            Basic
                        </button>

                        <button
                            className="btn m0 mr1 mb1"
                            onClick={() => {
                                this.props.addToast(containerId, 'Warning!', {type: ToastType.Warning});
                            }}
                        >
                            Warning
                        </button>

                        <button
                            className="btn m0 mr1 mb1"
                            onClick={() => {
                                this.props.addToast(containerId, 'Error!', {type: ToastType.Error});
                            }}
                        >
                            Error
                        </button>

                        <button
                            className="btn m0 mr1 mb1"
                            onClick={() => {
                                this.props.addToast(containerId, 'Timed Success!', {dismiss: 1000});
                            }}
                        >
                            Timed
                        </button>

                        <button
                            className="btn m0 mr1 mb1"
                            onClick={() => {
                                this.props.addToast(containerId, 'Success!', {content: 'String content'});
                            }}
                        >
                            String Content
                        </button>

                        <button
                            className="btn m0 mr1 mb1"
                            onClick={() => {
                                this.props.addToast(containerId, 'Success!', {
                                    content: () => <a href="#">JSX Element</a>,
                                });
                            }}
                        >
                            JSX Content
                        </button>

                        <button
                            className="btn m0 mr1 mb1"
                            onClick={() => {
                                this.props.addToast(containerId, 'Success!', {content: ToastContentExample});
                            }}
                        >
                            React Component Content
                        </button>

                        <button
                            className="btn m0 mr1 mb1"
                            onClick={() => {
                                this.props.addToast(containerId, 'Success!', {children: <ToastContentExample />});
                            }}
                        >
                            React Component Content with children
                        </button>

                        <ToastContainerConnected id={containerId} />
                    </div>
                </div>
            </div>
        );
    }
}
