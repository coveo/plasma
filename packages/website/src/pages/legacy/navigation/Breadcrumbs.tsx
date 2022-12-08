import {BreadcrumbHeaderMetadata} from '@coveord/plasma-components-props-analyzer';
import BreadcrumbsComplexDemo from '@examples/legacy/navigation/Breadcrumbs/complex.demo.tsx';
import BreadcrumbsDemo from '@examples/legacy/navigation/Breadcrumbs/main.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const BreadcrumbsDemos = () => (
    <PageLayout
        id="BreadcrumbHeader"
        sourcePath="/packages/react/src/components/breadcrumbs/BreadcrumbHeader.tsx"
        title="Breadcrumbs"
        section="Navigation"
        description="A breadcrumb is a secondary navigation that helps users to understand the hierarchy of interfaces and navigate through them."
        thumbnail="breadcrumb"
        demo={<BreadcrumbsDemo />}
        propsMetadata={BreadcrumbHeaderMetadata}
        examples={{complex: <BreadcrumbsComplexDemo title="With documentation link and tabs" />}}
    />
);

export default BreadcrumbsDemos;
