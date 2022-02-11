import * as React from 'react';
import {BorderedLine} from '@coveord/plasma-react';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';

// start-print
export const BorderedLineExamples = () => (
    <PlasmaComponent id="BorderedLine" title="Bordered Line" withSource>
        <div className="mt2">
            <div className="form-group">
                <label className="form-control-label">Bordered Row</label>
                <div className="form-control">
                    <BorderedLine className="full-content-x">
                        I am a bordered row and you can fill me with whatever you want!
                    </BorderedLine>
                </div>
            </div>
        </div>
    </PlasmaComponent>
);
// stop-print
export default BorderedLineExamples;
