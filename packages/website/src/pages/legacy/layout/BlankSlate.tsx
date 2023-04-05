import {BlankSlateMetadata} from '@coveord/plasma-components-props-analyzer';
import BlankslateDemo from '@examples/legacy/layout/Blankslate/Blankslate.demo?demo';
import BlankslateInErrorDemo from '@examples/legacy/layout/Blankslate/BlankslateInError.demo?demo';
import BlankslateWithTableDemo from '@examples/legacy/layout/Blankslate/BlankslateWithTable.demo?demo';
import BlankslateWithTableErrorDemo from '@examples/legacy/layout/Blankslate/BlankslateWithTableError.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const BlankSlateDemo = () => (
    <PageLayout
        id="BlankSlate"
        sourcePath="/packages/react/src/components/blankSlate/BlankSlate.tsx"
        title="Blank Slate"
        section="Layout"
        description="A blank slate informs users that a section doesn’t contain any data and provides a way to address it."
        thumbnail="placeholder"
        propsMetadata={BlankSlateMetadata}
        demo={<BlankslateDemo />}
        examples={{
            inError: <BlankslateInErrorDemo title="With error" />,
            withTable: <BlankslateWithTableDemo title="With table" />,
            tableInError: <BlankslateWithTableErrorDemo title="Table in error" />,
        }}
    />
);

export default BlankSlateDemo;
