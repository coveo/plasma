import FormDemo from '@examples/form/form/Form.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout.js';

const Page = () => (
    <PageLayout
        section="Form"
        title="Form"
        description="A form allows the developer to collect user input."
        id="Form"
        demo={<FormDemo />}
    />
);

export default Page;
