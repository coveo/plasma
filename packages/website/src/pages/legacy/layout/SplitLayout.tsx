import {SplitLayoutMetadata} from '@coveord/plasma-components-props-analyzer';
import SplitLayoutExample from '@examples/legacy/layout/SplitLayout/SplitLayout.example.tsx';
import SplitLayoutBorderlessExample from '@examples/legacy/layout/SplitLayout/SplitLayoutBorderless.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const SplitLayoutExamples = () => (
    <PageLayout
        id="SplitLayout"
        title="Split Layout"
        section="Layout"
        description="A split layout organizes information in two vertical columns."
        componentSourcePath="/splitlayout/SplitLayout.tsx"
        code={SplitLayoutExample}
        layout="vertical"
        propsMetadata={SplitLayoutMetadata}
        examples={{noBorder: {code: SplitLayoutBorderlessExample, title: 'Without a border'}}}
    />
);

export default SplitLayoutExamples;
