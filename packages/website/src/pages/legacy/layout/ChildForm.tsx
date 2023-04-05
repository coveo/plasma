import ChildFormDemo from '@examples/legacy/layout/ChildForm/ChildForm.demo?demo';
import ChildFormVerticalDemo from '@examples/legacy/layout/ChildForm/ChildFormVertical.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const ChildFormDemos = () => (
    <PageLayout
        id="ChildForm"
        title="Child Form"
        section="Layout"
        description="A child form associates a subset of options or content to its parent option."
        sourcePath="/packages/react/src/components/childForm/ChildForm.tsx"
        demo={<ChildFormDemo />}
        examples={{
            vertical: <ChildFormVerticalDemo title="Vertical" />,
        }}
    />
);

export default ChildFormDemos;
