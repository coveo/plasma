import {FilepickerMetadata} from '@coveord/plasma-components-props-analyzer';
import FilepickerExample from '@examples/legacy/form/Filepicker/Filepicker.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="Filepicker"
        title="File Picker"
        section="Form"
        description="A file picker is a dialog that allows users to upload a file."
        componentSourcePath="/filepicker/FilePicker.tsx"
        code={FilepickerExample}
        propsMetadata={FilepickerMetadata}
    />
);
