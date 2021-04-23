import * as React from 'react';
import {Svg} from 'react-vapor';

export class InfoTokenExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Warnings tokens</label>
                    <div className="form-control">
                        <Svg svgName={'info-token-full-critical-16'} />
                        {/* <InfoToken icon="info-token-warning" extraClasses={['ml1']} />
                        <InfoToken icon="info-token-warning" extraClasses={['mod-small ml1']} />
                        <InfoToken icon="info-token-warning" extraClasses={['mod-smaller ml1']} /> */}
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Success tokens</label>
                    <div className="form-control">
                        {/* <InfoToken icon="info-token-success" extraClasses={['ml1']} />
                        <InfoToken icon="info-token-success" extraClasses={['mod-small ml1']} />
                        <InfoToken icon="info-token-success" extraClasses={['mod-smaller ml1']} /> */}
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Information tokens</label>
                    <div className="form-control">
                        {/* <InfoToken icon="info-token-information" extraClasses={['ml1']} />
                        <InfoToken icon="info-token-information" extraClasses={['mod-small ml1']} />
                        <InfoToken icon="info-token-information" extraClasses={['mod-smaller ml1']} /> */}
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Tip tokens</label>
                    <div className="form-control">
                        {/* <InfoToken icon="info-token-tip" extraClasses={['ml1']} />
                        <InfoToken icon="info-token-tip" extraClasses={['mod-small ml1']} />
                        <InfoToken icon="info-token-tip" extraClasses={['mod-smaller ml1']} /> */}
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Critical tokens</label>
                    <div className="form-control">
                        {/* <InfoToken icon="info-token-critical" extraClasses={['ml1']} />
                        <InfoToken icon="info-token-critical" extraClasses={['mod-small ml1']} />
                        <InfoToken icon="info-token-critical" extraClasses={['mod-smaller ml1']} /> */}
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Question tokens</label>
                    <div className="form-control">
                        {/* <InfoToken icon="info-token-question" extraClasses={['ml1']} />
                        <InfoToken icon="info-token-question" extraClasses={['mod-small ml1']} />
                        <InfoToken icon="info-token-question" extraClasses={['mod-smaller ml1']} /> */}
                    </div>
                </div>
            </div>
        );
    }
}
