import * as React from 'react';
import {InfoToken} from 'react-vapor';

export class InfoTokenExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Warnings tokens</label>
                    <div className="form-control">
                        <InfoToken icon="info-token-warning" extraClasses={['mod-big ml1']} />
                        <InfoToken icon="info-token-warning" extraClasses={['mod-normal ml1']} />
                        <InfoToken icon="info-token-warning" extraClasses={['mod-small ml1']} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Success tokens</label>
                    <div className="form-control">
                        <InfoToken icon="info-token-success" extraClasses={['mod-big ml1']} />
                        <InfoToken icon="info-token-success" extraClasses={['mod-normal ml1']} />
                        <InfoToken icon="info-token-success" extraClasses={['mod-small ml1']} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Information tokens</label>
                    <div className="form-control">
                        <InfoToken icon="info-token-information" extraClasses={['mod-big ml1']} />
                        <InfoToken icon="info-token-information" extraClasses={['mod-normal ml1']} />
                        <InfoToken icon="info-token-information" extraClasses={['mod-small ml1']} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Tip tokens</label>
                    <div className="form-control">
                        <InfoToken icon="info-token-tip" extraClasses={['mod-big ml1']} />
                        <InfoToken icon="info-token-tip" extraClasses={['mod-normal ml1']} />
                        <InfoToken icon="info-token-tip" extraClasses={['mod-small ml1']} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Critical tokens</label>
                    <div className="form-control">
                        <InfoToken icon="info-token-critical" extraClasses={['mod-big ml1']} />
                        <InfoToken icon="info-token-critical" extraClasses={['mod-normal ml1']} />
                        <InfoToken icon="info-token-critical" extraClasses={['mod-small ml1']} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Question tokens</label>
                    <div className="form-control">
                        <InfoToken icon="info-token-question" extraClasses={['mod-big ml1']} />
                        <InfoToken icon="info-token-question" extraClasses={['mod-normal ml1']} />
                        <InfoToken icon="info-token-question" extraClasses={['mod-small ml1']} />
                    </div>
                </div>
            </div>
        );
    }
}
