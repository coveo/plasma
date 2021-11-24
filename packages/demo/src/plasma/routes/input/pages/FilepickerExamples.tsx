import * as React from 'react';
import {Filepicker} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

const inputId = 'file-input-example';

export const FilepickerExamples: React.FunctionComponent = () => (
    // start-print
    <VaporComponent id="filepicker" title="File Picker" usage="">
        <Filepicker id={inputId} accept=".jpg,.png,.csv,.txt" placeholder="Choose a file..." />
    </VaporComponent>

    // Call the selector to get the selected file ➡ FilepickerSelectors.getFile(inputId));
    // stop-print
);
