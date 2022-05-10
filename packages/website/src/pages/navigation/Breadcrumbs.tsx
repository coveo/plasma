import {PageLayout} from '../../building-blocs/PageLayout';
import code from '../../examples/Breadcrumbs/main.example.tsx';
import complex from '../../examples/Breadcrumbs/complex.example.tsx';

const BreadcrumbsExamples = () => (
    <PageLayout
        id="BreadcrumbHeader"
        componentSourcePath="/breadcrumbs/BreadcrumbHeader.tsx"
        title="Breadcrumbs"
        section="Navigation"
        description="A breadcrumb is a secondary navigation that helps users to understand the hierarchy of interfaces and navigate through them."
        thumbnail="breadcrumb"
        code={code}
        examples={{complex: {code: complex, title: 'With documentation link and tabs'}}}
    />
);

export default BreadcrumbsExamples;
