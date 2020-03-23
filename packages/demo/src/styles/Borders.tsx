import * as React from 'react';

import VaporComponent from '../demo-building-blocs/VaporComponent';

export default function Borders() {
    return (
        <VaporComponent
            id="borders"
            title="Borders"
            usage="Clearly define the edge of components or layouts."
            withSource
        >
            <div className="flex">
                <div style={{width: 100, height: 50}} className="m2 mod-border" />
                <div style={{width: 100, height: 50}} className="m2 mod-border-top mod-border-bottom" />
                <div style={{width: 100, height: 50}} className="m2 mod-border-left mod-border-right" />
            </div>
            <div className="flex flex-wrap">
                <div style={{width: 100, height: 50}} className="m2 p2 mod-border mod-rounded-border-1">
                    1
                </div>
                <div style={{width: 100, height: 50}} className="m2 p2 mod-border mod-rounded-border-2">
                    2
                </div>
                <div style={{width: 100, height: 50}} className="m2 p2 mod-border mod-rounded-border-3">
                    3
                </div>
                <div style={{width: 100, height: 50}} className="m2 p2 mod-border mod-rounded-border-4">
                    4
                </div>
                <div style={{width: 100, height: 50}} className="m2 p2 mod-border mod-rounded-border-5">
                    5
                </div>
                <div style={{width: 100, height: 50}} className="m2 p2 mod-border mod-rounded-border-6">
                    6
                </div>
                <div style={{width: 100, height: 50}} className="m2 p2 mod-border mod-rounded-border-7">
                    7
                </div>
                <div style={{width: 100, height: 50}} className="m2 p2 mod-border mod-rounded-border-8">
                    8
                </div>
                <div style={{width: 100, height: 50}} className="m2 p2 mod-border mod-rounded-border-9">
                    9
                </div>
                <div style={{width: 100, height: 50}} className="m2 p2 mod-border mod-rounded-border-10">
                    10
                </div>
            </div>
            <div className="flex">
                <div style={{width: 100, height: 50}} className="m2 p2 mod-border mod-rounded-border-top-5">
                    top
                </div>
                <div style={{width: 100, height: 50}} className="m2 p2 mod-border mod-rounded-border-bottom-5">
                    bottom
                </div>
                <div style={{width: 100, height: 50}} className="m2 p2 mod-border mod-rounded-border-left-5">
                    left
                </div>
                <div style={{width: 100, height: 50}} className="m2 p2 mod-border mod-rounded-border-right-5">
                    right
                </div>
            </div>
        </VaporComponent>
    );
}
