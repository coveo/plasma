import * as React from 'react';
import {Badge, Separator} from 'react-vapor';

export const SeparatorExamples = () => (
    <div className="mt2">
        <div className="form-group">
            <label className="form-control-label">Separator</label>
            <div className="form-control">
                <div className="inline-flex center-align">
                    <Badge label="Badge" />
                    <Separator />
                    <span>This is a text</span>
                </div>
            </div>
        </div>
    </div>
);
