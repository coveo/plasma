import * as React from 'react';
import {InfoToken, Svg} from 'react-vapor';

export class InfoTokenExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Info token</label>
                    <div className="form-control">
                        <InfoToken icon="i" />
                    </div>
                </div>
            </div>
        );
    }
}
