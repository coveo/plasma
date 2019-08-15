import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import Svg from '../demo-building-blocs/Svg';
import VaporComponent from '../demo-building-blocs/VaporComponent';

const Facet = () => (
    <VaporComponent key="facet" id="facet" title="Facet" usage="Facet styling" withSource>
        <div className="flex">
            <div className="facet-column">
                <div className="facet">
                    <div className="facet-header">
                        <div className="facet-header-eraser hidden">
                            <span className="icon fill-medium-grey">
                                <Svg name={VaporSVG.svg.clear.name} />
                            </span>
                        </div>
                        <div className="facet-header-title text-medium-blue">Facet title</div>
                        <div className="facet-header-wait-animation" style={{display: 'none'}} />
                    </div>
                    <ul className="facet-values">
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">First facet value</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Second facet value</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Third</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Fourth facet value</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable facet-more">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <span className="facet-more-button" />
                                <span className="label">More</span>
                            </label>
                        </li>
                    </ul>
                    <div className="facet-more-search hidden">
                        <div className="facet-search">
                            <div className="coveo-filter-container">
                                <input type="text" className="filter-box" placeholder="Filter" />
                                <span className="hide" />
                                <span className="filter-icon icon mod-lg fill-medium-grey">
                                    <Svg name={VaporSVG.svg.filter.name} />
                                </span>
                            </div>
                        </div>
                        <ul className="facet-search-results">
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">2010</span>
                                </label>
                            </li>
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">2009</span>
                                </label>
                            </li>
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">2008</span>
                                </label>
                            </li>
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">2007</span>
                                </label>
                            </li>
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="facet-value-label">
                                    <label className="coveo-checkbox-label facet-value-label">
                                        <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                        <button type="button" />
                                        <span className="label">2006</span>
                                    </label>
                                </label>
                            </li>
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">2002</span>
                                </label>
                            </li>
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">1996</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="facet facet-opened">
                    <div className="facet-header">
                        <div className="facet-header-eraser hidden">
                            <span className="icon fill-medium-grey">
                                <Svg name={VaporSVG.svg.clear.name} />
                            </span>
                        </div>
                        <div className="facet-header-title text-medium-blue">Facet title</div>
                        <div className="facet-header-wait-animation" style={{display: 'none'}} />
                    </div>
                    <ul className="facet-values">
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">First facet value</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Second facet value</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Third facet value</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Fourth facet value</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable facet-more hidden">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <span className="facet-more-button" />
                                <span className="label">More</span>
                            </label>
                        </li>
                    </ul>
                    <div className="facet-more-search">
                        <div className="facet-search">
                            <div className="coveo-filter-container">
                                <input type="text" className="filter-box" placeholder="Filter" />
                                <span className="hide" />
                                <span className="filter-icon icon mod-lg fill-medium-grey">
                                    <Svg name={VaporSVG.svg.filter.name} />
                                </span>
                            </div>
                        </div>
                        <ul className="facet-search-results">
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">2010</span>
                                </label>
                            </li>
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">2009</span>
                                </label>
                            </li>
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">2008</span>
                                </label>
                            </li>
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">2007</span>
                                </label>
                            </li>
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">2006</span>
                                </label>
                            </li>
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">2003</span>
                                </label>
                            </li>
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">2001</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="facet">
                    <div className="facet-header">
                        <div className="facet-header-eraser">
                            <span className="icon fill-medium-grey">
                                <Svg name={VaporSVG.svg.clear.name} />
                            </span>
                        </div>
                        <div className="facet-header-title text-medium-blue">Facet title</div>
                    </div>
                    <ul className="facet-values">
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">First facet value</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Second facet value</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Third facet value</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Fourth facet value</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="facet-column">
                <div className="facet">
                    <div className="facet-header">
                        <div className="facet-header-eraser">
                            <span className="icon fill-medium-grey">
                                <Svg name={VaporSVG.svg.clear.name} />
                            </span>
                        </div>
                        <div className="facet-header-title text-medium-blue">Facet title</div>
                    </div>
                    <ul className="facet-values">
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" checked className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">First facet value</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Second facet value</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Third facet value</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Fourth facet value</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="facet">
                    <div className="facet-header">
                        <div className="facet-header-eraser">
                            <span className="icon fill-medium-grey">
                                <Svg name={VaporSVG.svg.clear.name} />
                            </span>
                        </div>
                        <div className="facet-header-title text-medium-blue">Facet with count</div>
                    </div>
                    <ul className="facet-values">
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" checked className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">First facet value</span>
                                <span className="facet-value-count">10</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Second facet value</span>
                                <span className="facet-value-count">3145</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Third facet value</span>
                                <span className="facet-value-count">2</span>
                            </label>
                        </li>
                        <li className="facet-value facet-selectable">
                            <label className="coveo-checkbox-label facet-value-label">
                                <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                <button type="button" />
                                <span className="label">Longer fourth facet value to see overflow</span>
                                <span className="facet-value-count">94398</span>
                            </label>
                        </li>
                    </ul>
                    <div className="facet-more-search">
                        <div className="facet-search">
                            <div className="coveo-filter-container">
                                <input type="text" className="filter-box" placeholder="Filter" />
                                <span className="hide" />
                                <span className="filter-icon icon mod-lg fill-medium-grey">
                                    <Svg name={VaporSVG.svg.filter.name} />
                                </span>
                            </div>
                        </div>
                        <ul className="facet-search-results">
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">Search result</span>
                                    <span className="facet-value-count">21</span>
                                </label>
                            </li>
                            <li className="facet-value facet-selectable facet-search-selectable">
                                <label className="coveo-checkbox-label facet-value-label">
                                    <input type="checkbox" className="coveo-checkbox facet-checkbox-input" />
                                    <button type="button" />
                                    <span className="label">Second longer search result</span>
                                    <span className="facet-value-count">35743</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </VaporComponent>
);

export default Facet;
