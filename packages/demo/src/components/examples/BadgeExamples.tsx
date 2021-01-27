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
                        <Badge label="Badge critical" extraClasses={['mod-critical ml1']} />
                        <Badge label="Badge warning" extraClasses={['mod-warning ml1']} />
                        <Badge label="Badge information" extraClasses={['mod-information ml1']} />
                        <Badge label="Badge success" extraClasses={['mod-success ml1']} />
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
