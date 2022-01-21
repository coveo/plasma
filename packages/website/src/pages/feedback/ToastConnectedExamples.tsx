import * as React from 'react';
import {addToast as addToastAction, Section, Svg, ToastContainerConnected, ToastType} from '@coveord/plasma-react';

import {ToastContentExample} from './ToastContentExamples';
import VaporComponent from '../../building-blocs/VaporComponent';

export interface IToastConnectedExamplesProps {
    addToast: typeof addToastAction;
}

const containerId = 'some-id';
const downloadContainerId = 'download-toast-id';
const toastDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet accumsan ante.';

// start-print
export const ToastConnectedExamples: React.FunctionComponent<IToastConnectedExamplesProps> = ({addToast}) => (
    <VaporComponent id="ToastConnected" title="Toast Connected" withSource>
        <Section>
            <div className="flex flex-wrap">
                <button
                    className="btn m0 mr1 mb1"
                    onClick={() => {
                        addToast(containerId, 'Success!', {content: toastDescription});
                    }}
                >
                    Basic
                </button>

                <button
                    className="btn m0 mr1 mb1"
                    onClick={() => {
                        addToast(containerId, 'Information!', {
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
                        addToast(containerId, 'Warning!', {
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
                        addToast(containerId, 'Error!', {
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
                        addToast(containerId, 'Timed Success!', {
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
                        addToast(containerId, 'Success!', {content: 'String content'});
                    }}
                >
                    String Content
                </button>

                <button
                    className="btn m0 mr1 mb1"
                    onClick={() => {
                        addToast(containerId, 'Success!', {
                            content: () => <a href="#">JSX Element</a>,
                        });
                    }}
                >
                    JSX Content
                </button>

                <button
                    className="btn m0 mr1 mb1"
                    onClick={() => {
                        addToast(containerId, 'Success!', {content: ToastContentExample});
                    }}
                >
                    React Component Content
                </button>

                <button
                    className="btn m0 mr1 mb1"
                    onClick={() => {
                        addToast(containerId, 'Success!', {children: <ToastContentExample />});
                    }}
                >
                    React Component Content with children
                </button>

                <button
                    className="btn m0 mr1 mb1"
                    onClick={() => {
                        addToast(downloadContainerId, 'Preparing file for download...', {
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
        </Section>
    </VaporComponent>
);

// @ts-ignore
ToastConnectedExamples.description =
    'Toasts display non-critical confirmation information related to user-performed operations (e.g., form submission).';
