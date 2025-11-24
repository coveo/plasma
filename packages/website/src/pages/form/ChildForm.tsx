import {ChildFormMetadata} from '@coveord/plasma-components-props-analyzer';
import ChildFormDemo from '@examples/form/child-form/ChildForm.demo?demo';
import ChildFormWithForm from '@examples/form/child-form/ChildFormWithForm.demo?demo';
import ChildFormWithTitleAndDescription from '@examples/form/child-form/ChildFormWithTitleAndDescription.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout.js';

const Page = () => (
    <PageLayout
        section="Form"
        title="Child Form"
        propsMetadata={ChildFormMetadata}
        description="A container, part of a form, that can be used to group fields which are conditionally displayed together."
        id="ChildFrom"
        demo={<ChildFormDemo />}
        examples={{
            withToggle: <ChildFormWithForm title="Display bound to another form field" />,
            withTitleAndDescription: <ChildFormWithTitleAndDescription title="Title and description" />,
        }}
    />
);

export default Page;
