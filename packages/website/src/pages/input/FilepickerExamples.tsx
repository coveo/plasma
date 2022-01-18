import * as React from 'react';
import {Filepicker} from '@coveord/plasma-react';

import VaporComponent from '../../building-blocs/VaporComponent';

const inputId = 'file-input-example';

// start-print
export const FilepickerExamples: React.FunctionComponent = () => (
    <VaporComponent id="Filepicker" title="File Picker" withSource>
        <Filepicker id={inputId} accept=".jpg,.png,.csv,.txt" placeholder="Choose a file..." />
    </VaporComponent>
);
// stop-print
