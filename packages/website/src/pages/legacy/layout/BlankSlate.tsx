import {BlankSlateMetadata} from '@coveord/plasma-components-props-analyzer';
import BlankslateDemo from '@examples/legacy/layout/Blankslate/Blankslate.demo.tsx';
import BlankslateInErrorDemo from '@examples/legacy/layout/Blankslate/BlankslateInError.demo.tsx';
import BlankslateWithTableDemo from '@examples/legacy/layout/Blankslate/BlankslateWithTable.demo.tsx';
import BlankslateWithTableErrorDemo from '@examples/legacy/layout/Blankslate/BlankslateWithTableError.demo.tsx';

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
