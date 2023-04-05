import {FilepickerMetadata} from '@coveord/plasma-components-props-analyzer';
import FilepickerDemo from '@examples/legacy/form/Filepicker/Filepicker.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        id="Filepicker"
        title="File Picker"
        section="Form"
        description="A file picker is a dialog that allows users to upload a file."
        sourcePath="/packages/react/src/components/filepicker/FilePicker.tsx"
        demo={<FilepickerDemo center />}
        propsMetadata={FilepickerMetadata}
    />
);

export default Page;
