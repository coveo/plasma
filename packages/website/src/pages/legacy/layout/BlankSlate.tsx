import {BlankSlateMetadata} from '@coveord/plasma-components-props-analyzer';
import BlankslateExample from '@examples/legacy/layout/Blankslate/Blankslate.example.tsx';
import BlankslateInErrorExample from '@examples/legacy/layout/Blankslate/BlankslateInError.example.tsx';
import BlankslateWithTableExample from '@examples/legacy/layout/Blankslate/BlankslateWithTable.example.tsx';
import BlankslateWithTableErrorExample from '@examples/legacy/layout/Blankslate/BlankslateWithTableError.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const BlankSlateExample = () => (
    <PageLayout
        id="BlankSlate"
        componentSourcePath="/blankSlate/BlankSlate.tsx"
        title="Blank Slate"
        section="Layout"
        description="A blank slate informs users that a section doesn’t contain any data and provides a way to address it."
        thumbnail="placeholder"
        propsMetadata={BlankSlateMetadata}
        code={BlankslateExample}
        examples={{
            inError: {code: BlankslateInErrorExample, title: 'With error'},
            withTable: {code: BlankslateWithTableExample, title: 'With table'},
            tableInError: {code: BlankslateWithTableErrorExample, title: 'Table in error'},
        }}
    />
);

export default BlankSlateExample;
