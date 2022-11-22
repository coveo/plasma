import {BreadcrumbHeaderMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../building-blocs/PageLayout';
import complex from '@examples/Breadcrumbs/complex.example.tsx';
import code from '@examples/Breadcrumbs/main.example.tsx';

const BreadcrumbsExamples = () => (
    <PageLayout
        id="BreadcrumbHeader"
        componentSourcePath="/breadcrumbs/BreadcrumbHeader.tsx"
        title="Breadcrumbs"
        section="Navigation"
        description="A breadcrumb is a secondary navigation that helps users to understand the hierarchy of interfaces and navigate through them."
        thumbnail="breadcrumb"
        code={code}
        propsMetadata={BreadcrumbHeaderMetadata}
        examples={{complex: {code: complex, title: 'With documentation link and tabs'}}}
    />
);

export default BreadcrumbsExamples;
