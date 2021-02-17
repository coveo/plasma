import * as React from 'react';
import {LogoCard} from 'react-vapor';
import {TooltipPlacement} from 'react-vapor/src/utils/TooltipUtils';

import {MULTIPLE_BADGES} from './LogoCardExamplesCommon';

export class LogoCardExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">LogoCard with title</label>
                    <div className="form-control">
                        <LogoCard title="Card title" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Disabled logo card with a tooltip and locked badge</label>
                    <div className="form-control">
                        <LogoCard
                            title="Card title"
                            disabled
                            badges={[{label: 'Unavailable', icon: 'lock', extraClasses: ['mod-warning ml1']}]}
                            tooltip="Hello I am a tooltip and I appear on top of this logo card, this card is disabled with a badge"
                            tooltipPlacement={TooltipPlacement.Top}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">LogoCard with description</label>
                    <div className="form-control">
                        <LogoCard title="Card title" description="Card description" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">LogoCard with badges and description</label>
                    <div className="form-control">
                        <LogoCard title="Card title" badges={MULTIPLE_BADGES} description="Card description" />
                    </div>
                </div>
            </div>
        );
    }
}
