import * as React from 'react';
import {Filepicker} from '@coveord/plasma-react';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';

const inputId = 'file-input-example';

// start-print
export const FilepickerExamples: React.FunctionComponent = () => (
    <PlasmaComponent id="Filepicker" title="File Picker" withSource>
        <Filepicker id={inputId} accept=".jpg,.png,.csv,.txt" placeholder="Choose a file..." />
    </PlasmaComponent>
);
// stop-print
