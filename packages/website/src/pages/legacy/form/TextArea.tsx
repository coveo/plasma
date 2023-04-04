import {TextAreaMetadata} from '@coveord/plasma-components-props-analyzer';
import TextAreaDemo from '@examples/legacy/form/TextArea/main.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        id="TextArea"
        title="Text Area"
        section="Form"
        description="A text area allows users to enter and edit longer text, often on multiple lines or in a paragraph."
        sourcePath="/packages/react/src/components/textarea/TextArea.tsx"
        demo={<TextAreaDemo />}
        propsMetadata={TextAreaMetadata}
    />
);

export default Page;
