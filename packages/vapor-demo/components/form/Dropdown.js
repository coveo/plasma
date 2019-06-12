import * as VaporSVG from 'coveo-styleguide';
import {useState} from 'react';
import Svg from '../Svg';

export default function Dropdown() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="coveo-form">
                <div className="form-group">
                    <label className="form-control-label">Dropdown Example</label>
                    <div className="form-control">
                        <div className={`${open ? 'open' : ''} dropdown`}>
                            <button className="btn dropdown-toggle" type="button" onClick={() => setOpen(!open)}>
                                <span className="dropdown-prepend">Option:</span>
                                <Svg name={VaporSVG.svg.domainGoogle.name} className="value-icon" />
                                <span className="dropdown-selected-value">Option 3</span>
                                <span className="dropdown-toggle-arrow" />
                            </button>

                            <ul className="dropdown-menu">
                                <li>
                                    <span className="enabled">Option 1</span>
                                </li>
                                <li>
                                    <span className="enabled">Option 2</span>
                                </li>
                                <li>
                                    <span className="enabled">
                                        <Svg name={VaporSVG.svg.domainGoogle.name} className="value-icon" />
                                        Option 3
                                    </span>
                                </li>
                                <li>
                                    <span className="enabled">Option 4</span>
                                </li>
                                <li>
                                    <span className="enabled">Option 5</span>
                                </li>
                                <li>
                                    <span className="enabled">Option 6</span>
                                </li>
                                <li>
                                    <span className="enabled">Option 7</span>
                                </li>
                                <li>
                                    <span className="enabled">Option 8</span>
                                </li>
                                <li>
                                    <span className="enabled">Option 9</span>
                                </li>
                                <li>
                                    <span className="enabled">Option 10</span>
                                </li>
                                <li>
                                    <span className="enabled">Option 11</span>
                                </li>
                                <li>
                                    <span className="enabled">Option 12</span>
                                </li>
                                <li>
                                    <span className="enabled">Option 13</span>
                                </li>
                                <li>
                                    <span className="enabled">Option 14</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-control-label">Dropdown toggle using a div example</label>
                    <div className="form-control">
                        <div className="btn dropdown-toggle">
                            <span className="dropdown-selected-value">Option 3</span>
                            <span className="dropdown-toggle-arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
