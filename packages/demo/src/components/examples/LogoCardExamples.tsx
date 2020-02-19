import * as React from 'react';
import {LogoCard} from 'react-vapor';

import {EXAMPLE_RIBBON_PROPS, MULTIPLE_BADGES} from './LogoCardExamplesCommon';

export class LogoCardExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Default LogoCard</label>
                    <div className="form-control">
                        <LogoCard title="Card title" description="Card description" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">LogoCard with badges, description and ribbon</label>
                    <div className="form-control">
                        <LogoCard
                            title="Card title"
                            badges={MULTIPLE_BADGES}
                            ribbon={EXAMPLE_RIBBON_PROPS}
                            description="Card description"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Disabled logo card</label>
                    <div className="form-control">
                        <LogoCard title="Card title" badges={MULTIPLE_BADGES} description="Card description" disabled />
                    </div>
                </div>
            </div>
        );
    }
}
