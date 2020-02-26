import * as React from 'react';
import {ColorBar} from 'react-vapor';

export const ColorBarExamples = () => (
    <div className="mt2">
        <div className="form-group">
            <label className="form-control-label">ColorBar with one color full</label>
            <div className="form-control">
                <ColorBar widthPerColor={{blue: 100}} />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">ColorBar with one color not full</label>
            <div className="form-control">
                <ColorBar widthPerColor={{blue: 75}} />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">ColorBar with multiple colors full</label>
            <div className="form-control">
                <ColorBar widthPerColor={{blue: 30, yellow: 15, '#E94B3C': 10, '#00A591': 25, cyan: 20}} />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">
                ColorBar with tooltip on specific colors (hover on blue and yellow)
            </label>
            <div className="form-control">
                <ColorBar
                    widthPerColor={{blue: 30, yellow: 15, '#E94B3C': 10, '#00A591': 25, cyan: 20}}
                    tooltipPerColor={{
                        blue: {title: 'blue', placement: 'top'},
                        yellow: {title: 'yello', placement: 'top'},
                    }}
                />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">ColorBar with multiple colors not full</label>
            <div className="form-control">
                <ColorBar widthPerColor={{blue: 20, yellow: 5, '#E94B3C': 10, '#00A591': 5, cyan: 20}} />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">
                ColorBar adjusted for width overflow (total width more than 100)
            </label>
            <div className="form-control">
                <ColorBar widthPerColor={{blue: 200, yellow: 50, '#E94B3C': 300, '#00A591': 25, cyan: 1000}} />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">ColorBar in a Card</label>
            <div className="form-control">
                <div className="material-card" style={{width: '300px'}}>
                    <h2 className="p2">I am a card and I have a cool ColorBar border</h2>
                    <div className="px2 pb2">(No, it's not a real border, but don't tell anyone.)</div>
                    <ColorBar className="color-bar-border" widthPerColor={{blue: 200, '#E94B3C': 300, cyan: 1000}} />
                </div>
            </div>
        </div>
    </div>
);
