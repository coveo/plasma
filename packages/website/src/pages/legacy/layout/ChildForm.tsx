import ChildFormExample from '@examples/legacy/layout/ChildForm/ChildForm.example.tsx';
import ChildFormVerticalExample from '@examples/legacy/layout/ChildForm/ChildFormVertical.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const ChildFormExamples = () => (
    <PageLayout
        id="ChildForm"
        title="Child Form"
        section="Layout"
        description="A child form associates a subset of options or content to its parent option."
        componentSourcePath="/childForm/ChildForm.tsx"
        code={ChildFormExample}
        examples={{
            vertical: {code: ChildFormVerticalExample, title: 'Vertical'},
        }}
    />
);

export default ChildFormExamples;
