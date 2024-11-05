import ChildFormDemo from '@examples/form/child-form/ChildForm.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        section="Form"
        title="Child Form"
        description="A container part of a form that can be used to group fields that are conditionally displayed together."
        id="ChildFrom"
        demo={<ChildFormDemo />}
    />
);

export default Page;
