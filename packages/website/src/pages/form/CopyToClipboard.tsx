import {CopyToClipboardMetadata} from '@coveord/plasma-components-props-analyzer';
import CopyToClipboardDemo from '@examples/form/copyToClipboard/CopyToClipboard.demo?demo';
import CopyToClipboardWithLabelDemo from '@examples/form/copyToClipboard/CopyToClipboardWithLabel.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout.js';

const CopyToClipboardPage = () => (
    <PageLayout
        id="CopyToClipboard"
        title="CopyToClipboard"
        section="Form"
        description="A Copy to Clipboard button offers a button which copies given content to the user's clipboard when clicked."
        demo={<CopyToClipboardDemo center />}
        examples={{
            withLabel: <CopyToClipboardWithLabelDemo center title="With Label" />,
        }}
        sourcePath="/packages/mantine/src/components/copyToClipboard/CopyToClipboard.tsx"
        propsMetadata={CopyToClipboardMetadata}
    />
);

export default CopyToClipboardPage;
