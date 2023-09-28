import BrowserPreviewDemo from '@examples/layout/BrowserPreview/BrowserPreview.demo?demo';
import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        section="Layout"
        title="Header"
        sourcePath="/packages/mantine/src/components/browser-preview/BrowserPreview.tsx"
        description="A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional call to actions."
        thumbnail="header"
        id="BrowserPreview"
        demo={<BrowserPreviewDemo />}
    />
);
