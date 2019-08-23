import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import {Svg} from '../../../../src/components/svg/Svg';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function CollapsibleRows() {
    return (
        <VaporComponent
            id="collapsible-rows"
            title="Collapsible rows"
            usage="Allows to use collapsible rows, when you want to display more information than what is displayed on a single row."
            withSource
        >
            <table className="mod-collapsible-rows table">
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr className="heading-row">
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td className="right-align">
                            <span data-collapse-state="collapsed">
                                <Svg
                                    svgName={VaporSVG.svg.arrowBottom.name}
                                    className="state-collapsed"
                                    svgClass="icon"
                                />
                                <Svg svgName={VaporSVG.svg.arrowTop.name} className="state-expanded" svgClass="icon" />
                            </span>
                        </td>
                    </tr>
                    <tr className="collapsible-row">
                        <td colSpan={4}>
                            <div className="container">
                                <section className="columns">
                                    <div className="box padded">
                                        <div className="label">Detail 1</div>
                                        <div className="value" title="">
                                            Detail 1 value
                                        </div>
                                    </div>
                                    <div className="box padded">
                                        <div className="label">Detail 2</div>
                                        <div className="value" title="">
                                            Detail 2 value
                                        </div>
                                    </div>
                                    <div className="box padded">
                                        <div className="label">Detail 3</div>
                                        <div className="value" title="">
                                            Detail 3 value
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="heading-row opened">
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td className="right-align">
                            <span data-collapse-state="expanded">
                                <Svg
                                    svgName={VaporSVG.svg.arrowBottom.name}
                                    className="state-collapsed"
                                    svgClass="icon"
                                />
                                <Svg svgName={VaporSVG.svg.arrowTop.name} className="state-expanded" svgClass="icon" />
                            </span>
                        </td>
                    </tr>
                    <tr className="collapsible-row in">
                        <td colSpan={4}>
                            <div className="container" style={{display: 'block'}}>
                                <section className="columns">
                                    <div className="box padded">
                                        <div className="label">Detail 1</div>
                                        <div className="value" title="">
                                            Detail 1 value
                                        </div>
                                    </div>
                                    <div className="box padded">
                                        <div className="label">Detail 2</div>
                                        <div className="value" title="">
                                            Detail 2 value
                                        </div>
                                    </div>
                                    <div className="box padded">
                                        <div className="label">Detail 3</div>
                                        <div className="value" title="">
                                            Detail 3 value
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="heading-row">
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td className="right-align">
                            <span data-collapse-state="collapsed">
                                <Svg
                                    svgName={VaporSVG.svg.arrowBottom.name}
                                    className="state-collapsed"
                                    svgClass="icon"
                                />
                                <Svg svgName={VaporSVG.svg.arrowTop.name} className="state-expanded" svgClass="icon" />
                            </span>
                        </td>
                    </tr>
                    <tr className="collapsible-row">
                        <td colSpan={4}>
                            <div className="container">
                                <section className="columns">
                                    <div className="box padded">
                                        <div className="label">Detail 1</div>
                                        <div className="value" title="">
                                            Detail 1 value
                                        </div>
                                    </div>
                                    <div className="box padded">
                                        <div className="label">Detail 2</div>
                                        <div className="value" title="">
                                            Detail 2 value
                                        </div>
                                    </div>
                                    <div className="box padded">
                                        <div className="label">Detail 3</div>
                                        <div className="value" title="">
                                            Detail 3 value
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </VaporComponent>
    );
}
