import {CopyToClipboardMetadata} from '@coveord/plasma-components-props-analyzer';
import CopyToClipboardDemo from '@examples/form/copyToClipboard/CopyToClipboard.demo?demo';
import CopyToClipboardTextDemo from '@examples/form/copyToClipboard/CopyToClipboardText.demo?demo';
import CopyToClipboardTextAreaDemo from '@examples/form/copyToClipboard/CopyToClipboardTextArea.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const CopyToClipboardPage = () => (
    <PageLayout
        id="CopyToClipboard"
        title="CopyToClipboard"
        section="Form"
        description="A Copy to Clipboard button offers a button which copies given content to the user's clipboard when clicked."
        demo={<CopyToClipboardDemo center />}
        examples={{
            text: <CopyToClipboardTextDemo center title="Text" />,
            textArea: <CopyToClipboardTextAreaDemo center title="Text Area" />,
        }}
        sourcePath="/packages/mantine/src/components/copyToClipboard/CopyToClipboard.tsx"
        propsMetadata={CopyToClipboardMetadata}
    />
);

export default CopyToClipboardPage;
