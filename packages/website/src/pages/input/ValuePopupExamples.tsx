import * as VaporSVG from '@coveord/plasma-style';
import {useState} from 'react';
import * as React from 'react';
import {Section, Svg} from '@coveord/plasma-react';

import VaporComponent from '../../building-blocs/VaporComponent';

// start-print
export const ValuePopup = () => {
    const [show, setShow] = useState(true);
    return (
        <VaporComponent
            id="ValuePopup"
            title="Value Popup"
            usage="This is the filter picker control used to define a filter on a field."
            withSource
        >
            <Section className="demo-height mod-height-30">
                <button type="button" onClick={() => setShow(!show)} className="btn js-tether-target-list">
                    Form Toggle
                </button>
                {show && (
                    <div className="filter-expression-picker js-tether-element-values">
                        <div className="edit-filter-popup popover">
                            <div className="edit-filter-values popover-row flex">
                                <div className="popover-navigation-section">
                                    <div className="back">
                                        <Svg
                                            svgName={VaporSVG.svg.arrowLeftRounded.name}
                                            className="icon arrow-left-rounded mod-lg"
                                        />
                                    </div>
                                </div>
                                <div className="popup-main-section">
                                    <div className="popup-header">
                                        <label className="selected-filter filter">Browser</label>
                                    </div>

                                    <div className="popover-body">
                                        <div className="coveo-form">
                                            <div className="form-group">
                                                <div className="operator value">
                                                    <div className="admin-select dropdown">
                                                        <button className="btn dropdown-toggle" type="button">
                                                            <span className="dropdown-selected-value">Is</span>
                                                            <span className="dropdown-toggle-arrow" />
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li>
                                                                <span
                                                                    className="enabled selected-value state-selected  "
                                                                    title=""
                                                                >
                                                                    Is
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="enabled" title="">
                                                                    Is not
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="enabled" title="">
                                                                    Contains
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="enabled" title="">
                                                                    Does not contain
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="input-field multiline-field form-group">
                                                    <ul>
                                                        <li className="input-wrapper">
                                                            <input
                                                                type="text"
                                                                className="js-value-input"
                                                                value="Chrome"
                                                                required
                                                            />
                                                            <label>Value</label>
                                                            <div className="input-actions">
                                                                <button
                                                                    className="js-delete-value-button"
                                                                    type="button"
                                                                >
                                                                    <i
                                                                        className="delete-action"
                                                                        title="Delete this entry"
                                                                    />
                                                                </button>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="input-wrapper">
                                                        <input
                                                            type="text"
                                                            className="js-new-value-input"
                                                            placeholder="Enter filter value"
                                                            required
                                                        />
                                                        <div className="input-actions">
                                                            <button className="js-add-value-button">
                                                                <i className="add-action" title="Add a new entry" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="string-filters popover-row">
                                            <div className="form-control checkbox-labels-group">
                                                <label className="checkbox checkbox-label mb1">
                                                    <input type="checkbox" className="empty-filter" />
                                                    <button type="button" />
                                                    <span className="label">Include blank values in filter</span>
                                                </label>
                                                <label className="checkbox checkbox-label">
                                                    <input type="checkbox" className="null-filter" />
                                                    <button type="button" />
                                                    <span className="label">Include n/a values in filter</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="popover-footer">
                                        <button className="btn mod-primary mod-small" type="button">
                                            Add
                                        </button>
                                        <button className="btn mod-small" type="button">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Section>
        </VaporComponent>
    );
};
export default ValuePopup;
