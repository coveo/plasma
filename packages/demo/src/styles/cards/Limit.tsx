import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {Svg} from 'react-vapor';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

const Limit = () => (
    <VaporComponent key="limit" id="limit" title="Limit" usage="Visually show the usage of a limit" withSource>
        <form className="coveo-form">
            <div className="limit-box mb2">
                <div className="limit-box-main p2 pb1">
                    <div className="flex space-between">
                        <label className="form-control-label">Limit</label>
                    </div>
                    <div className="limit-box-numbers pt1 flex">
                        <div className="limit-box-usage">
                            <label className="form-control-label">Usage</label>
                            <span className="limit-box-usage-value">42</span>
                        </div>
                        <div className="limit-box-limit form-group input-field validate">
                            <input id="FirstLimit" type="number" defaultValue="100" required />
                            <label htmlFor="FirstLimit">Limit</label>
                        </div>
                    </div>
                </div>
                <div className="limit-box-footer">
                    <div className="limit-box-bar progress-42"></div>
                </div>
            </div>

            <div className="limit-box mb2">
                <div className="limit-box-main p2 pb1">
                    <div className="flex space-between">
                        <label className="form-control-label">Limit with History</label>
                        <span className="icon mod-lg limit-history-button">
                            <Svg svgName={VaporSVG.svg.menuAnalytics.name} className="fill-medium-blue" />
                        </span>
                    </div>
                    <div className="limit-box-numbers pt1 flex">
                        <div className="limit-box-usage">
                            <label className="form-control-label">Usage</label>
                            <span className="limit-box-usage-value">100</span>
                        </div>
                        <div className="limit-box-limit form-group input-field validate">
                            <input id="SecondLimit" type="number" defaultValue="110" required />
                            <label htmlFor="SecondLimit">Limit</label>
                        </div>
                    </div>
                </div>
                <div className="limit-box-footer">
                    <div className="limit-box-bar progress-91" />
                </div>
            </div>

            <div className="limit-box mb2">
                <div className="limit-box-main p2 pb1">
                    <div className="flex space-between">
                        <label className="form-control-label">Limit</label>
                    </div>
                    <div className="limit-box-numbers pt1 flex">
                        <div className="limit-box-usage">
                            <label className="form-control-label">Usage</label>
                            <span className="limit-box-usage-value">30</span>
                        </div>
                        <div className="limit-box-limit form-group input-field validate">
                            <input id="ThirdLimit" type="number" defaultValue="30" required />
                            <label htmlFor="ThirdLimit">Limit</label>
                        </div>
                    </div>
                </div>
                <div className="limit-box-footer">
                    <div className="limit-box-bar progress-100" />
                </div>
            </div>

            <div className="limit-box mb2">
                <div className="limit-box-main p2 pb1">
                    <div className="flex space-between">
                        <label className="form-control-label">Limit we want to fill</label>
                    </div>
                    <div className="limit-box-numbers pt1 flex">
                        <div className="limit-box-usage">
                            <label className="form-control-label">Usage</label>
                            <span className="limit-box-usage-value">30</span>
                        </div>
                        <div className="limit-box-limit form-group input-field validate">
                            <input id="FourthLimit" type="number" defaultValue="30" required />
                            <label htmlFor="FourthLimit">Limit</label>
                        </div>
                    </div>
                </div>
                <div className="limit-box-footer">
                    <div className="limit-box-bar progress-100 mod-green" />
                </div>
            </div>

            <div className="limit-box">
                <div className="limit-box-main p2 pb1">
                    <div className="flex space-between">
                        <label className="form-control-label">Limit</label>
                    </div>
                    <div className="limit-box-numbers pt1 flex">
                        <div className="limit-box-limit form-group input-field validate">
                            <input id="FifthLimit" type="number" defaultValue="219000" required />
                            <label htmlFor="FifthLimit">Limit</label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </VaporComponent>
);
export default Limit;
