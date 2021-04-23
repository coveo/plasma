import * as React from 'react';
import {Badge} from 'react-vapor';

export class BadgeExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Default Badge</label>
                    <div className="form-control">
                        <Badge label="Generic/Grey" />
                        <Badge label="Generic/Navy" extraClasses={['mod-information ml1']} />
                        <Badge label="Semantic/Success" extraClasses={['mod-success ml1']} />
                        <Badge label="Semantic/Critical" extraClasses={['mod-critical ml1']} />
                        <Badge label="New" extraClasses={['mod-warning ml1']} />
                        <Badge label="Beta" extraClasses={['mod-beta ml1']} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Badge with Icon</label>
                    <div className="form-control">
                        <Badge label="Label" icon="lock" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Small Badge</label>
                    <div className="form-control">
                        <Badge label="Generic/Grey" extraClasses={['mod-small']} />
                        <Badge label="Generic/Navy" extraClasses={['mod-small mod-information ml1']} />
                        <Badge label="Semantic/Success" extraClasses={[' mod-small mod-success ml1']} />
                        <Badge label="Semantic/Critical" extraClasses={['mod-small mod-critical ml1']} />
                        <Badge label="New" extraClasses={['mod-small mod-warning ml1']} />
                        <Badge label="Beta" extraClasses={['mod-small mod-beta ml1']} />
                    </div>
                </div>
            </div>
        );
    }
}
