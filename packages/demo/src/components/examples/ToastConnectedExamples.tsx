import * as React from 'react';
import {addToast, ReduxConnect, Svg, ToastContainerConnected, ToastType} from 'react-vapor';

import {ToastContentExample} from './ToastContentExample';

export interface IToastConnectedExamplesProps {
    addToast: typeof addToast;
}

const containerId = 'some-id';
const downloadContainerId = 'download-toast-id';
const toastDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet accumsan ante.';

@ReduxConnect(null, {addToast})
export class ToastConnectedExamples extends React.Component<IToastConnectedExamplesProps> {
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
                                this.props.addToast(containerId, 'Success!', {content: toastDescription});
                            }}
                        >
                            Basic
                        </button>

                        <button
                            className="btn m0 mr1 mb1"
                            onClick={() => {
                                this.props.addToast(containerId, 'Information!', {
                                    type: ToastType.Info,
                                    content: toastDescription,
                                });
                            }}
                        >
                            Information
                        </button>

                        <button
                            className="btn m0 mr1 mb1"
                            onClick={() => {
                                this.props.addToast(containerId, 'Warning!', {
                                    type: ToastType.Warning,
                                    content: toastDescription,
                                });
                            }}
                        >
                            Warning
                        </button>

                        <button
                            className="btn m0 mr1 mb1"
                            onClick={() => {
                                this.props.addToast(containerId, 'Error!', {
                                    type: ToastType.Error,
                                    content: toastDescription,
                                });
                            }}
                        >
                            Error
                        </button>

                        <button
                            className="btn m0 mr1 mb1"
                            onClick={() => {
                                this.props.addToast(containerId, 'Timed Success!', {
                                    dismiss: 1000,
                                    content: toastDescription,
                                });
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

                        <button
                            className="btn m0 mr1 mb1"
                            onClick={() => {
                                this.props.addToast(downloadContainerId, 'Preparing file for download...', {
                                    children: <div>Some file.csv</div>,
                                    isDownload: true,
                                });
                            }}
                        >
                            <Svg svgName="download" svgClass="icon mod-lg mr1" />
                            Prepare Download
                        </button>

                        <ToastContainerConnected id={containerId} />
                        <ToastContainerConnected id={downloadContainerId} bottom left />
                    </div>
                </div>
            </div>
        );
    }
}
