import * as React from 'react';
import {Badge} from 'react-vapor';

export class BadgeExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Default Badge</label>
                    <div className="form-control">
                        <Badge label="Badge Generic/Grey" />
                        <Badge label="Badge Generic/Navy" extraClasses={['mod-information ml1']} />
                        <Badge label="Badge Semantic/Success" extraClasses={['mod-success ml1']} />
                        <Badge label="Badge Semantic/Critical" extraClasses={['mod-critical ml1']} />
                        <Badge label="Badge New" extraClasses={['mod-warning ml1']} />
                        <Badge label="Badge Beta" extraClasses={['mod-beta mt1']} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Badge with Icon</label>
                    <div className="form-control">
                        <Badge label="Badge label" icon="lock" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Small Badge</label>
                    <div className="form-control">
                        <Badge label="Badge Generic/Grey" extraClasses={['mod-small']} />
                        <Badge label="Badge Generic/Navy" extraClasses={['mod-small mod-information ml1']} />
                        <Badge label="Badge Semantic/Success" extraClasses={[' mod-small mod-success ml1']} />
                        <Badge label="Badge Semantic/Critical" extraClasses={['mod-small mod-critical ml1']} />
                        <Badge label="Badge New" extraClasses={['mod-small mod-warning ml1']} />
                        <Badge label="Badge Beta" extraClasses={['mod-small mod-beta ml1 mt1']} />
                    </div>
                </div>
            </div>
        );
    }
}
