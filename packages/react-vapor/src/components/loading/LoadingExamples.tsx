import * as React from 'react';
import {Loading} from './Loading';

export class LoadingExamples extends React.Component<any, any> {
    render() {
        return (
            <>
                <div className="form-group">
                    <label className="form-control-label">Loading bouncing balls</label>
                    <div className="mt2 mod-border" style={{width: 400, height: 200}}>
                        <Loading />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Loading bouncing balls with full content</label>
                    <div className="mt2 mod-border" style={{width: 400, height: 400}}>
                        <Loading fullContent />
                    </div>
                </div>
            </>
        );
    }
}
