import {BasicHeaderMetadata} from '@coveord/plasma-components-props-analyzer';
import PageHeaderLoadingDemo from '@examples/legacy/layout/Header/loading.demo?demo';
import PageHeaderDemo from '@examples/legacy/layout/Header/main.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const PageHeaderDemos = () => (
    <PageLayout
        id="BasicHeader"
        sourcePath="/packages/react/src/components/headers/BasicHeader.tsx"
        title="Page header"
        section="Layout"
        description="A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional tabs."
        thumbnail="header"
        demo={<PageHeaderDemo />}
        propsMetadata={BasicHeaderMetadata}
        examples={{
            loading: <PageHeaderLoadingDemo title="Loading" />,
        }}
    />
);
export default PageHeaderDemos;
