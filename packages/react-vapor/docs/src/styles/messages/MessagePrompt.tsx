import * as React from 'react';

import {Svg} from '../../../../src/components/svg/Svg';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const MessagePrompt = () => (
    <VaporComponent id="prompt" title="Prompt" usage="Prompt style" withSource>
        <div className="flex flex-wrap bg-medium-grey">
            <div className="modal-container mod-prompt opened relative" style={{width: '550px', height: '450px'}}>
                <div className="modal-content">
                    <header className="modal-header mod-confirmation">
                        <h1>Prompt confirmation</h1>
                        <Svg svgName="clear" className="small-close icon fill-pure-white" />
                    </header>
                    <div className="modal-body mod-header-padding">
                        <div className="prompt-message">
                            Lorem ipsum dolor sit amet, invidunt probatus concludaturque at mei. Graecis percipitur at
                            nec, pertinax praesent voluptatibus an his, vix veri omittam gubergren no. Eam eu sale nobis
                            aliquip, stet adipisci pro at, sea an nonumy facilisi. Sanctus percipit definitionem duo et,
                            duo eu sensibus reprimique, diceret scribentur usu an. Eam ex decore fabulas. Inimicus
                            maluisset quo eu, hendrerit rationibus vel ad, at vis ridens pericula liberavisse. Usu eu
                            tollit corpora persequeris. Porro convenire at duo. Porro augue vel ex, an est erat
                            honestatis. Nec no quem tritani. Dicat commune oportere ei eos. Eu mucius quaestio mel. Per
                            nonumy lobortis et. Ei vim case nulla nobis, id commune similique vix.
                        </div>
                    </div>
                    <footer className="modal-footer">
                        <button className="btn mod-small mod-primary">Confirmation</button>
                        <button className="btn mod-small">Cancel</button>
                    </footer>
                </div>
            </div>
            <div className="modal-container mod-prompt opened relative" style={{width: '550px', height: '450px'}}>
                <div className="modal-content">
                    <header className="modal-header mod-warning">
                        <h1>Prompt warning</h1>
                        <Svg svgName="clear" className="small-close icon fill-pure-white" />
                    </header>
                    <div className="modal-body mod-header-padding">
                        <div className="prompt-message ">
                            Hella chambray forage four dollar toast, small batch affogato neutra blue bottle tousled
                            vice plaid stumptown gentrify.
                        </div>
                    </div>
                    <footer className="modal-footer">
                        <button className="btn mod-small">Ok</button>
                    </footer>
                </div>
            </div>
            <div className="modal-container mod-prompt opened relative" style={{width: '550px', height: '450px'}}>
                <div className="modal-content">
                    <header className="modal-header mod-info">
                        <h1>Prompt info</h1>
                        <Svg svgName="clear" className="small-close icon fill-pure-white" />
                    </header>
                    <div className="modal-body mod-header-padding">
                        <div className="prompt-message ">
                            Hella chambray forage four dollar toast, small batch affogato neutra blue bottle tousled
                            vice plaid stumptown gentrify.
                        </div>
                    </div>
                    <footer className="modal-footer">
                        <button className="btn mod-small">Ok</button>
                    </footer>
                </div>
            </div>
        </div>
    </VaporComponent>
);

export default MessagePrompt;
