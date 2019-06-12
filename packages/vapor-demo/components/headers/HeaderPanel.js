import Svg from '../Svg';
import {useState} from 'react';

export const HeaderPanel = () => {
    const [isOpened, setOpened] = useState(false);

    const toggleOpened = () => {
        setOpened(!isOpened);
    };

    return (
        <div className="panel-header flex flex-center">
            <div>
                <h1 className="inline bold text-medium-blue">Panel Header</h1>
                <h4 className="admin-description text-dark-grey">Panel description</h4>
            </div>
            <div className="flex-auto" />
            <div className="js-action-bar action-bar">
                <div className="actions-row">
                    <a className="action mod-link" href="#" title="Edit">
                        <Svg name="edit" className="icon mod-lg" />
                    </a>
                    <div
                        className="action"
                        data-trigger="trigger-action"
                        data-requires-confirmation=""
                        data-icon="export"
                        data-unrepeatable=""
                    >
                        <div className="trigger" title="Export">
                            <Svg name="export" className="icon mod-lg" />
                        </div>
                    </div>

                    <div className={`dropdown action ${isOpened ? 'open' : ''}`} title="More" onClick={toggleOpened}>
                        <span className="dropdown-toggle" id="options" data-toggle="dropdown">
                            <Svg name="more" className="icon mod-lg" />
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
    );
};

export default HeaderPanel;
