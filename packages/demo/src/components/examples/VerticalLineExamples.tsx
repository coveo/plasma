import * as React from 'react';
import {Badge, VerticalLine} from 'react-vapor';

export const VerticalLineExamples = () => (
    <div className="mt2">
        <div className="form-group">
            <label className="form-control-label">Separator</label>
            <div className="form-control">
                <div className="inline-flex center-align">
                    <Badge label="Badge" />
                    <VerticalLine />
                    <span>This is a text</span>
                </div>
            </div>
        </div>
    </div>
);
