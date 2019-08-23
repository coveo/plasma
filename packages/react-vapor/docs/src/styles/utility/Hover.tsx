import * as React from 'react';
import VaporComponent from '../../demo-building-blocs/VaporComponent';
export default function Hover() {
    return (
        <VaporComponent id="hover" title="Hover" usage="Utility to apply hover on element." withSource>
            <div className="flex">
                <button style={{width: 100, height: 50}} className="btn mod-primary hover-color-light-blue">
                    Blue
                </button>
                <button style={{width: 100, height: 50}} className="btn mod-primary hover-color-yellow">
                    Yellow
                </button>
                <button style={{width: 100, height: 50}} className="btn mod-primary hover-color-dark-grey">
                    Dark grey
                </button>
            </div>
        </VaporComponent>
    );
}
