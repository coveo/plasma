import * as React from 'react';
import {Svg} from 'react-vapor';

export class InfoTokenExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Information tokens</label>
                    <div className="form-control">
                        <Svg svgName={'info-token-full-information-16'} />
                        <Svg svgName={'info-token-full-information-24'} />
                        <Svg svgName={'info-token-full-information-32'} />
                        <Svg svgName={'info-token-stroked-information-16'} />
                        <Svg svgName={'info-token-stroked-information-24'} />
                        <Svg svgName={'info-token-stroked-information-32'} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Success tokens</label>
                    <div className="form-control">
                        <Svg svgName={'info-token-full-success-16'} />
                        <Svg svgName={'info-token-full-success-24'} />
                        <Svg svgName={'info-token-full-success-32'} />
                        <Svg svgName={'info-token-stroked-success-16'} />
                        <Svg svgName={'info-token-stroked-success-24'} />
                        <Svg svgName={'info-token-stroked-success-32'} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Warnings tokens</label>
                    <div className="form-control">
                        <Svg svgName={'info-token-full-warning-16'} />
                        <Svg svgName={'info-token-full-warning-24'} />
                        <Svg svgName={'info-token-full-warning-32'} />
                        <Svg svgName={'info-token-stroked-warning-16'} />
                        <Svg svgName={'info-token-stroked-warning-24'} />
                        <Svg svgName={'info-token-stroked-warning-32'} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Tip tokens</label>
                    <div className="form-control">
                        <Svg svgName={'info-token-full-tip-16'} />
                        <Svg svgName={'info-token-full-tip-24'} />
                        <Svg svgName={'info-token-full-tip-32'} />
                        <Svg svgName={'info-token-stroked-tip-16'} />
                        <Svg svgName={'info-token-stroked-tip-24'} />
                        <Svg svgName={'info-token-stroked-tip-32'} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Critical tokens</label>
                    <div className="form-control">
                        <Svg svgName={'info-token-full-critical-16'} />
                        <Svg svgName={'info-token-full-critical-24'} />
                        <Svg svgName={'info-token-full-critical-32'} />
                        <Svg svgName={'info-token-stroked-critical-16'} />
                        <Svg svgName={'info-token-stroked-critical-24'} />
                        <Svg svgName={'info-token-stroked-critical-32'} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Question tokens</label>
                    <div className="form-control">
                        <Svg svgName={'info-token-full-question-16'} />
                        <Svg svgName={'info-token-full-question-24'} />
                        <Svg svgName={'info-token-full-question-32'} />
                        <Svg svgName={'info-token-stroked-question-16'} />
                        <Svg svgName={'info-token-stroked-question-24'} />
                        <Svg svgName={'info-token-stroked-question-32'} />
                    </div>
                </div>
            </div>
        );
    }
}
