import * as React from 'react';
import {Filepicker} from 'react-vapor';

const inputId = 'file-input-example';

export const FilepickerExamples: React.FunctionComponent = () => (
    // start-print
    <Filepicker id={inputId} accept=".jpg,.png,.csv,.txt" placeholder="Choose a file..." />

    // Call the selector to get the selected file ➡ FilepickerSelectors.getFile(inputId));
    // stop-print
);
