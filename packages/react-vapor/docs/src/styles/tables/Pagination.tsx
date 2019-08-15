import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import Svg from '../demo-building-blocs/Svg';
import VaporComponent from '../demo-building-blocs/VaporComponent';

export default function Pagination() {
    return (
        <VaporComponent
            id="pagination"
            title="Pagination"
            usage="Adds buttons to change the number of items per page and change page."
            withSource
        >
            <div className="pagination-container">
                <div className="items-per-page prepended-flat-select">
                    <div className="flat-select-prepend">Results per page:</div>
                    <div className="flat-select clearfix">
                        <a className="flat-select-option">
                            <span className="enabled">10</span>
                        </a>
                        <a className="flat-select-option selectable">
                            <span className="enabled">20</span>
                        </a>
                        <a className="flat-select-option selectable">
                            <span className="enabled">30</span>
                        </a>
                    </div>
                </div>
                <div className="flex-auto">
                    <div className="spinner">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                    </div>
                </div>
                <div className="pagination">
                    <div className="flat-select">
                        <a className="flat-select-option mod-link disabled" data-page="-1">
                            <Svg
                                name={VaporSVG.svg.arrowLeftRounded.name}
                                svgClass="icon icon-small mod-lg"
                                className="pagination-icon"
                            />
                            Previous
                        </a>
                        <a className="flat-select-option" data-page="0">
                            1
                        </a>
                        <a className="flat-select-option selectable" data-page="1">
                            2
                        </a>
                        <a className="flat-select-option selectable" data-page="2">
                            3
                        </a>
                        <a className="flat-select-option selectable" data-page="3">
                            4
                        </a>
                        <a className="flat-select-option selectable" data-page="4">
                            5
                        </a>
                        <a className="flat-select-option selectable" data-page="5">
                            6
                        </a>
                        <a className="flat-select-option selectable" data-page="6">
                            7
                        </a>
                        <a className="flat-select-option mod-link selectable" data-page="1">
                            Next
                            <Svg
                                name={VaporSVG.svg.arrowRightRounded.name}
                                svgClass="icon icon-small mod-lg"
                                className="pagination-icon"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="pagination-container loading-view">
                <div className="items-per-page prepended-flat-select">
                    <div className="flat-select-prepend">Results per page:</div>
                    <div className="flat-select clearfix">
                        <a className="flat-select-option">
                            <span className="enabled">10</span>
                        </a>
                        <a className="flat-select-option selectable">
                            <span className="enabled">20</span>
                        </a>
                        <a className="flat-select-option selectable">
                            <span className="enabled">30</span>
                        </a>
                    </div>
                </div>
                <div className="flex-auto">
                    <div className="spinner">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                    </div>
                </div>
                <div className="pagination">
                    <div className="flat-select">
                        <a className="flat-select-option mod-link disabled" data-page="-1">
                            <Svg
                                name={VaporSVG.svg.arrowLeftRounded.name}
                                svgClass="icon icon-small mod-lg"
                                className="pagination-icon"
                            />
                            Previous
                        </a>
                        <a className="flat-select-option" data-page="0">
                            1
                        </a>
                        <a className="flat-select-option selectable" data-page="1">
                            2
                        </a>
                        <a className="flat-select-option selectable" data-page="2">
                            3
                        </a>
                        <a className="flat-select-option selectable" data-page="3">
                            4
                        </a>
                        <a className="flat-select-option selectable" data-page="4">
                            5
                        </a>
                        <a className="flat-select-option selectable" data-page="5">
                            6
                        </a>
                        <a className="flat-select-option selectable" data-page="6">
                            7
                        </a>
                        <a className="flat-select-option mod-link selectable" data-page="1">
                            Next
                            <Svg
                                name={VaporSVG.svg.arrowRightRounded.name}
                                svgClass="icon icon-small mod-lg"
                                className="pagination-icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </VaporComponent>
    );
}
