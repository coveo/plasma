import * as React from 'react';
import {BorderedLine} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print
export const BorderedLineExamples = () => (
    <VaporComponent id="bordered-line" title="Bordered Line" usage="" withSource>
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
    </VaporComponent>
);
// stop-print
