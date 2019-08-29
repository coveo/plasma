import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const MessagePopover = () => (
    <VaporComponent id="popover" title="Popover" usage="A simple popover" withSource>
        <div className="pb4">
            <button type="button" className="btn js-tether-target">
                Popover toggle
            </button>
            <div className="popover" style={{width: '320px'}}>
                <div className="popover-body">Insert popover content here!</div>
                <div className="popover-footer">
                    <button type="button" className="btn mod-primary mod-small">
                        Submit
                    </button>
                    <button type="button" className="btn mod-small">
                        Cancel
                    </button>
                </div>
            </div>
        </div>

        <div className="pb4">
            <div className="pt-4 pb-4">
                <button type="button" className="btn js-tether-target">
                    Rich Documentation Popover
                </button>
            </div>
            <div className="drop">
                <div className="coveo-child shadow-4 p0 mod-width-70">
                    <div className="py3 px5 markdown-documentation">
                        <div className="split-layout">
                            <div className="column p2 h3">
                                <h1>Rich Popover Title</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Malesuada nunc vel risus commodo. Eu turpis egestas pretium aenean pharetra. Tortor
                                    condimentum lacinia quis vel eros donec ac.
                                    <span className="bold">Tortor condimentum lacinia quis vel eros donec ac.</span>.
                                    Sed elementum tempus.
                                </p>
                            </div>
                            <p className="media-section column p2">
                                <img
                                    alt="Metric Alerts concept animation"
                                    src="https://docs.coveo.com/en/assets/images/cloud-v2-administrators/Anomalies-Graph-Anim.gif"
                                />
                            </p>
                        </div>
                        <div className="feedback-section flex flex-row mod-border-top pt2 ml2 mr2">
                            <span className="feedback-icon block pt1 pl1 pr1 mr1 fill-light-blue">
                                <svg width="22" height="22" viewBox="0 0 512 512">
                                    <path d="M432.686 176.667c-.062-1.333.125-43.467-21.742-87.483C389.579 45.081 342.018-.558 256.04.005 170.021-.558 122.477 45.08 101.111 89.184c-21.891 44.016-21.702 86.15-21.797 87.5.723 89.021 68.159 154.574 68.942 155.925 9.851 9.756 16.297 19.354 20.42 30.791-5.254 5.815-8.676 13.205-8.676 20.6 0 8 .02 24.001 0 32-.041 16 16 32 32 32 0 16 0 32 16 32 11.247 0 16 32 47.621 32C288 512 292.619 480 304 480c16 0 16-16 16-32 16 0 31.972-15.979 32-32 .028-16-.016-24 0-32 .014-7.393-3.404-14.781-8.66-20.596 4.118-11.442 10.541-21.121 20.403-30.812.815-1.35 68.252-66.904 68.943-155.925zm-91.672 133.228c-13.835 14.138-22.412 27.551-27.757 42.105H198.758c-5.349-14.557-13.932-27.969-27.771-42.105 0 0-3.373-3.375-9.028-10.182-17.122-20.408-50.792-69.397-50.503-123.029 0-.031-.031-8.534 2.283-22.44 3.435-20.933 12.337-52.188 33.201-77.083 21.011-24.808 52.847-44.785 109.1-45.043 74.589.563 107.373 35.254 126.166 71.436 9.082 18.149 13.772 36.777 16.062 50.69 2.339 13.907 2.213 22.44 2.308 22.44.062 35.789-14.589 69.405-29.757 93.993-7.562 12.267-15.122 22.214-20.771 29.036-5.647 6.807-9.034 10.148-9.034 10.182zM512 176c0 8.836-7.163 16-16 16h-32c-8.837 0-16-7.164-16-16s7.163-16 16-16h32c8.837 0 16 7.164 16 16zM64 176c0 8.836-7.163 16-16 16H16c-8.837 0-16-7.164-16-16s7.163-16 16-16h32c8.837 0 16 7.164 16 16zM475.312 36.687c6.248 6.248 6.249 16.379 0 22.627l-22.627 22.627c-6.249 6.249-16.38 6.248-22.627 0-6.249-6.249-6.249-16.379 0-22.627l22.627-22.627c6.251-6.249 16.38-6.249 22.627 0zM81.941 81.942c-6.248 6.248-16.379 6.249-22.627 0L36.687 59.314c-6.249-6.249-6.248-16.379 0-22.627 6.249-6.249 16.379-6.249 22.627 0l22.627 22.627c6.249 6.249 6.249 16.379 0 22.628zM481.94 315.312c-6.247 6.248-16.378 6.25-22.628 0l-22.627-22.627c-6.249-6.248-6.248-16.379 0-22.627 6.247-6.248 16.379-6.248 22.627 0l22.628 22.627c6.249 6.251 6.248 16.381 0 22.627zM81.941 270.059c6.248 6.248 6.249 16.379 0 22.627l-22.627 22.627c-6.248 6.25-16.379 6.248-22.627 0-6.249-6.248-6.249-16.379 0-22.627l22.627-22.627c6.248-6.248 16.379-6.248 22.627 0z"></path>
                                    <path d="M316.27 195.73c-6.246-6.249-18.44-4.185-27.236 4.611l-31.85 31.85c-.468.467-.906.949-1.334 1.434a29.503 29.503 0 0 0-2.649-3.055l-30.712-30.711c-8.481-8.481-20.421-10.291-26.67-4.042-6.248 6.248-4.439 18.188 4.042 26.669l30.712 30.711c2.865 2.866 6.126 4.957 9.429 6.246v62.173c0 7.944 7.164 14.384 16 14.384 8.837 0 16-6.439 16-14.384v-61.14c2.729-1.363 5.397-3.248 7.812-5.66l31.848-31.848c8.793-8.794 10.856-20.989 4.608-27.238z"></path>
                                </svg>
                            </span>
                            <div>
                                <h3>We love to get your feedbacks!</h3>
                                <p>
                                    Don't wait to send us your{' '}
                                    <a title="Ideas portal on Coveo Connect" href="https://connect.coveo.com/s/ideas">
                                        ideas and comments
                                    </a>{' '}
                                    or{' '}
                                    <a
                                        title="Discussions portal on Coveo Connect"
                                        href="https://connect.coveo.com/s/discussions"
                                    >
                                        questions
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer bg-pure-white mod-small">
                        <button type="button" className="btn mod-primary mod-small">
                            Read the Documentation
                        </button>
                        <button type="button" className="btn mod-small">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </VaporComponent>
);

export default MessagePopover;
