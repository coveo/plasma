import * as React from 'react';
import {Badge} from 'react-vapor';

export class BadgeExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Default Badge</label>
                    <div className="form-control">
                        <Badge label="Badge label" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Badge with Icon</label>
                    <div className="form-control">
                        <Badge label="Badge label" icon="lock" />
                    </div>
                </div>
            </div>
        );
    }
}
