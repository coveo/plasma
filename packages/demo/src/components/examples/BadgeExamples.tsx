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
                    <label className="form-control-label">Badge with extra classes</label>
                    <div className="form-control">
                        <Badge label="Badge blue background" extraClasses={['bg-blue']} />
                        <Badge label="Badge mod-small" extraClasses={['mod-small']} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Badge group</label>
                    <div className="form-control">
                        <Badge label="Multiple" extraClasses={['bg-blue']} />
                        <Badge label="Badges" extraClasses={['bg-medium-blue']} />
                        <Badge label="Group" extraClasses={['bg-darker-blue']} />
                    </div>
                </div>
            </div>
        );
    }
}
