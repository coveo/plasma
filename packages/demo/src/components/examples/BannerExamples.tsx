import * as React from 'react';
import {BannerContainer} from 'react-vapor';

export class BannerExamples extends React.Component {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Empty banner</label>
                    <div className="form-control">
                        <BannerContainer />
                    </div>
                </div>
            </div>
        );
    }
}
