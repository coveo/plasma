import * as VaporSVG from 'coveo-styleguide';
import {useState} from 'react';
import * as React from 'react';
import {Svg} from 'react-vapor';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const Modal = () => {
    const [showBasic, setShowBasic] = useState(false);
    const [showSmall, setShowSmall] = useState(false);
    const [showMedium, setShowMedium] = useState(false);
    const [showBig, setShowBig] = useState(false);

    const [showPromptContainer, setShowPromptContainer] = useState(false);
    const [showPrompt, setShowPrompt] = useState(false);

    return (
        <VaporComponent key="modal" id="modal" title="Modal" usage="Modal window styling" withSource>
            <button className="btn js-modal-trigger" onClick={() => setShowBasic(!showBasic)} data-modal="BaseModal">
                Basic modal
            </button>
            <button className="btn js-modal-trigger" onClick={() => setShowSmall(!showSmall)} data-modal="ModSmall">
                Mod small
            </button>
            <button
                className="btn js-modal-trigger"
                onClick={() => setShowMedium(!showMedium)}
                data-modal="FadeInScaleModal"
            >
                Mod medium & mod fade in scale
            </button>
            <button
                className="btn js-modal-trigger"
                onClick={() => setShowBig(!showBig)}
                data-modal="SlideInBottomModal"
            >
                Mod big & mod stick bottom & mod slide in bottom
            </button>
            <button
                className="btn js-modal-trigger"
                onClick={() => setShowPromptContainer(!showPromptContainer)}
                data-modal="ModalWithInnerBackdrop"
            >
                Modal with a prompt
            </button>

            <div
                className={`modal-backdrop ${
                    showBasic || showSmall || showMedium || showBig || showPromptContainer ? '' : 'closed'
                }`}
                onClick={() => {
                    setShowBasic(false);
                    setShowSmall(false);
                    setShowMedium(false);
                    setShowBig(false);
                    setShowPromptContainer(false);
                }}
            />

            <div className={`modal-container ${(showBasic && 'opened') || ''}`} id="BaseModal">
                <div className="modal-content">
                    <header className="modal-header">
                        <h1>Basic modal</h1>
                        <span className="small-close js-modal-close" onClick={() => setShowBasic(false)}>
                            <Svg svgName={VaporSVG.svg.close.name} className="icon fill-pure-white" />
                        </span>
                    </header>
                    <div className="modal-body mod-header-padding mod-form-top-bottom-padding">
                        The basic small modal for all usage!
                    </div>
                    <footer className="modal-footer">
                        <button className="btn js-modal-close" onClick={() => setShowBasic(false)}>
                            Close
                        </button>
                    </footer>
                </div>
            </div>

            <div className={`modal-container mod-width-small ${(showSmall && 'opened') || ''}`} id="ModSmall">
                <div className="modal-content">
                    <header className="modal-header">
                        <h1>Mod small</h1>
                        <span className="small-close js-modal-close" onClick={() => setShowSmall(false)}>
                            <Svg svgName={VaporSVG.svg.close.name} className="icon fill-pure-white" />
                        </span>
                    </header>
                    <div className="modal-body mod-header-padding mod-form-top-bottom-padding">
                        A small modal to create a basic form without extra space for inputs.
                    </div>
                    <footer className="modal-footer">
                        <button className="btn js-modal-close" onClick={() => setShowSmall(false)}>
                            Close
                        </button>
                    </footer>
                </div>
            </div>

            <div
                className={`modal-container mod-medium mod-fade-in-scale ${(showMedium && 'opened') || ''}`}
                id="FadeInScaleModal"
            >
                <div className="modal-content">
                    <header className="modal-header">
                        <h1>Mod medium & mod fade in scale</h1>
                        <span className="small-close js-modal-close" onClick={() => setShowMedium(false)}>
                            <Svg svgName={VaporSVG.svg.close.name} className="icon fill-pure-white" />
                        </span>
                    </header>
                    <div className="modal-body mod-header-padding mod-form-top-bottom-padding">
                        A medium modal with a fade in animation.
                    </div>
                    <footer className="modal-footer">
                        <button className="btn js-modal-close" onClick={() => setShowMedium(false)}>
                            Close
                        </button>
                    </footer>
                </div>
            </div>

            <div
                className={`modal-container mod-big mod-stick-bottom mod-slide-in-bottom ${(showBig && 'opened') ||
                    ''}`}
                id="SlideInBottomModal"
            >
                <div className="modal-content">
                    <header className="modal-header">
                        <h1>Mod big & mod stick bottom & mod slide in bottom</h1>
                        <span className="small-close js-modal-close" onClick={() => setShowBig(false)}>
                            <Svg svgName={VaporSVG.svg.close.name} className="icon fill-pure-white" />
                        </span>
                    </header>
                    <div className="modal-body mod-header-padding mod-form-top-bottom-padding">
                        A big modal that slides in from the bottom.
                    </div>
                    <footer className="modal-footer">
                        <button className="btn mod-primary js-modal-close">Do nothing</button>
                        <button className="btn js-modal-close" onClick={() => setShowBig(false)}>
                            Close
                        </button>
                    </footer>
                </div>
            </div>

            <div
                className={`modal-container mod-big mod-fade-in-scale ${(showPromptContainer && 'opened') || ''}`}
                id="ModalWithInnerBackdrop"
            >
                <div className="modal-content">
                    <header className="modal-header">
                        <h1>Modal with a prompt</h1>
                        <span className="small-close js-modal-close" onClick={() => setShowPromptContainer(false)}>
                            <Svg svgName={VaporSVG.svg.close.name} className="icon fill-pure-white" />
                        </span>
                    </header>
                    <div className="modal-body mod-header-padding mod-form-top-bottom-padding">
                        A modal with an inner backdrop and a prompt over it.
                        <button className="mt1 block btn" onClick={() => setShowPrompt(true)}>
                            Open Prompt
                        </button>
                    </div>
                    <footer className="modal-footer">
                        <button className="btn js-modal-close" onClick={() => setShowPromptContainer(false)}>
                            Close
                        </button>
                    </footer>
                </div>
            </div>

            <div className={`modal-backdrop ${showPrompt ? '' : 'closed'}`} onClick={() => setShowPrompt(false)} />

            <div
                className={`modal-container mod-fade-in-scale layer-2 ${(showPrompt && 'opened') || ''}`}
                id="ModalWithInnerBackdropPrompt"
            >
                <div className="modal-content">
                    <header className="modal-header">
                        <h1>A prompt</h1>
                        <span className="small-close js-modal-close" onClick={() => setShowPrompt(false)}>
                            <Svg svgName={VaporSVG.svg.close.name} className="icon fill-pure-white" />
                        </span>
                    </header>
                    <div className="modal-body mod-header-padding mod-form-top-bottom-padding">
                        A small prompt over the main modal.
                    </div>

                    <footer className="modal-footer" />
                </div>
            </div>
        </VaporComponent>
    );
};

export default Modal;
