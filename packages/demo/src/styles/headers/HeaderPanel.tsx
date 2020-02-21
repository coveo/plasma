import {useState} from 'react';
import * as React from 'react';

import {Svg} from 'react-vapor';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const HeaderPanel = () => {
    const [isOpened, setOpened] = useState(false);

    const toggleOpened = () => {
        setOpened(!isOpened);
    };

    return (
        <VaporComponent id="panel" title="Panel" usage="Panel header styling" withSource>
            <div className="panel-header flex flex-center">
                <div>
                    <h1 className="inline bold text-medium-blue">Panel Header</h1>
                    <h4 className="admin-description text-dark-grey">Panel description</h4>
                </div>
                <div className="flex-auto" />
                <div className="js-action-bar action-bar">
                    <div className="actions-row">
                        <a className="action mod-link" href="#" title="Edit">
                            <Svg svgName="edit" className="icon mod-lg" />
                        </a>
                        <div
                            className="action"
                            data-trigger="trigger-action"
                            data-requires-confirmation=""
                            data-icon="import * as React from 'react'; export"
                            data-unrepeatable=""
                        >
                            <div className="trigger" title="import * as React from 'react'; export">
                                <Svg svgName="import * as React from 'react'; export" className="icon mod-lg" />
                            </div>
                        </div>

                        <div
                            className={`dropdown action${isOpened ? ' open' : ''}`}
                            title="More"
                            onClick={toggleOpened}
                        >
                            <span className="dropdown-toggle" id="options" data-toggle="dropdown">
                                <Svg svgName="more" className="icon mod-lg" />
                            </span>
                            <ul className="dropdown-menu mod-right">
                                <li>
                                    <span className="enabled" data-trigger="secondary-action-1">
                                        Secondary Action 1
                                    </span>
                                </li>
                                <li>
                                    <span className="state-disabled" data-trigger="secondary-action-2">
                                        Secondary Action 2
                                    </span>
                                </li>
                                <li>
                                    <span className="enabled" data-trigger="secondary-action-3">
                                        Secondary Action 3
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </VaporComponent>
    );
};

export default HeaderPanel;
