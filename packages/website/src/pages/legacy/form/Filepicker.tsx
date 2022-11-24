import {FilepickerMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../../building-blocs/PageLayout';

const code = `
    import {Filepicker} from '@coveord/plasma-react';

    export default () => (
        <Filepicker id="input-id" accept=".jpg,.png,.csv,.txt" placeholder="Choose a file..." />    
    );
`;

export default () => (
    <PageLayout
        id="Filepicker"
        title="File Picker"
        section="Form"
        description="A file picker is a dialog that allows users to upload a file."
        componentSourcePath="/filepicker/FilePicker.tsx"
        code={code}
        propsMetadata={FilepickerMetadata}
    />
);
