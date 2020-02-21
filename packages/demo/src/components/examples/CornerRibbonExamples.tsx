import * as React from 'react';
import {CornerRibbon, DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME, PlacementX, PlacementY} from 'react-vapor';

import {rectangleContainer, squareContainer} from './CornerRibbonExamplesCommon';

export class CornerRibbonExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">CornerRibbon placement (default is top right)</label>
                    <div className="form-control">
                        <div
                            style={squareContainer}
                            className={`${DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME} bg-white`}
                        >
                            <CornerRibbon label="Top Right" />
                            <CornerRibbon label="Top Left" placementX={PlacementX.Left} placementY={PlacementY.Top} />
                            <CornerRibbon
                                label="Bottom Left"
                                placementX={PlacementX.Left}
                                placementY={PlacementY.Bottom}
                            />
                            <CornerRibbon
                                label="Bottom Right"
                                placementX={PlacementX.Right}
                                placementY={PlacementY.Bottom}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">CornerRibbon with extra classes</label>
                    <div className="form-control">
                        <div
                            style={rectangleContainer}
                            className={`${DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME} bg-white`}
                        >
                            <CornerRibbon label="Ribbon" extraClasses={['bg-orange', 'bold']} />
                            <CornerRibbon
                                label="Ribbon"
                                placementX={PlacementX.Left}
                                placementY={PlacementY.Top}
                                extraClasses={['bg-pure-white', 'text-red', 'bold', 'mod-border', 'border-red']}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
