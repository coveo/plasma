import * as React from 'react';
import {ColorBar} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

export const ColorBarExamples = () => (
    <VaporComponent id="color-bar" title="Color Bar" usage="">
        <div className="mt2">
            <div className="form-group">
                <label className="form-control-label">ColorBar with one color full</label>
                <div className="form-control">
                    <ColorBar widthPerColor={{'#1372ec': 100}} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">ColorBar with one color not full</label>
                <div className="form-control">
                    <ColorBar widthPerColor={{'#1372ec': 75}} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">ColorBar with multiple colors full</label>
                <div className="form-control">
                    <ColorBar
                        widthPerColor={{'#1372ec': 30, '#ffe300': 15, '#f05245': 10, '#1cebcf': 25, '#7d458f': 20}}
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">
                    ColorBar with tooltip on specific colors (hover on blue and yellow)
                </label>
                <div className="form-control">
                    <ColorBar
                        widthPerColor={{'#1372ec': 30, '#ffe300': 15, '#f05245': 10, '#1cebcf': 25, '#7d458f': 20}}
                        tooltipPerColor={{
                            '#1372ec': {title: 'blue', placement: 'top'},
                            '#ffe300': {title: 'yello', placement: 'top'},
                        }}
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">ColorBar with multiple colors not full</label>
                <div className="form-control">
                    <ColorBar
                        widthPerColor={{'#1372ec': 20, '#ffe300': 5, '#f05245': 10, '#1cebcf': 5, '#7d458f': 20}}
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">
                    ColorBar adjusted for width overflow (total width more than 100)
                </label>
                <div className="form-control">
                    <ColorBar
                        widthPerColor={{'#1372ec': 200, '#ffe300': 50, '#f05245': 300, '#1cebcf': 25, '#7d458f': 1000}}
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">ColorBar in a Card</label>
                <div className="form-control">
                    <div className="material-card" style={{width: '300px'}}>
                        <h5 className="p2">I am a card and I have a cool ColorBar border</h5>
                        <div className="px2 pb2">(No, it's not a real border, but don't tell anyone.)</div>
                        <ColorBar
                            className="color-bar-border"
                            widthPerColor={{'#1372ec': 200, '#f05245': 300, '#7d458f': 1000}}
                        />
                    </div>
                </div>
            </div>
        </div>
    </VaporComponent>
);
