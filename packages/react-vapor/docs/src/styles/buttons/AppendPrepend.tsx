import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import Svg from '../../demo-building-blocs/Svg';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const AppendPrepend = () => (
    <VaporComponent
        key="append-prepend"
        id="append-prepend"
        title="Append and Prepend"
        usage="Add text or icons before and after any button."
        withSource
    >
        <div className="spaced-boxes-container flex flex-wrap">
            <button type="button" className="btn mod-append spaced-box">
                Button append<span className="btn-append">S</span>
            </button>

            <button type="button" className="btn mod-append mod-large spaced-box">
                Button large append<span className="btn-append">BIG</span>
            </button>

            <button type="button" className="btn mod-prepend spaced-box">
                <span className="btn-prepend">S</span>Button prepend
            </button>

            <button type="button" className="btn mod-prepend mod-large spaced-box">
                <span className="btn-prepend">L</span>Button large prepend
            </button>

            <button type="button" className="btn mod-prepend mod-large spaced-box">
                <span className="btn-prepend mod-icon">
                    <Svg className="icon" style={{width: 32, height: 32}} name={VaporSVG.svg.domainGoogle.name} />
                </span>
                Login with Google
            </button>

            <button type="button" className="btn dropdown-toggle mod-append spaced-box">
                Dropdown append<span className="dropdown-toggle-arrow"></span>
                <span className="btn-append">S</span>
            </button>

            <button type="button" className="btn mod-prepend dropdown-toggle spaced-box">
                <span className="btn-prepend">S</span>Dropdown prepend<span className="dropdown-toggle-arrow"></span>
            </button>

            <button type="button" className="btn mod-append mod-on-hover spaced-box">
                Append on hover<span className="btn-append">S</span>
            </button>

            <button type="button" className="btn mod-prepend mod-on-hover spaced-box">
                <span className="btn-prepend">S</span>Prepend on hover
            </button>

            <button type="button" className="btn spaced-box">
                Button
            </button>

            <button type="button" className="btn dropdown-toggle spaced-box">
                Option 5<span className="dropdown-toggle-arrow"></span>
            </button>

            <button type="button" className="btn dropdown-toggle dropdown-toggle-placeholder spaced-box">
                Select an option<span className="dropdown-toggle-arrow"></span>
            </button>
        </div>
    </VaporComponent>
);
export default AppendPrepend;
