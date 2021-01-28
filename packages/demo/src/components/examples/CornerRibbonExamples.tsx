import * as React from 'react';
import {CornerRibbon, DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME, PlacementX, PlacementY, Section} from 'react-vapor';

import {squareContainer} from './CornerRibbonExamplesCommon';

export class CornerRibbonExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">CornerRibbon placement (default is top right)</label>
                    <div className="form-control">
                        <div style={squareContainer} className={`${DEFAULT_CORNER_RIBBON_CONTAINER_CLASSNAME}`}>
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
            </div>
        );
    }
}
