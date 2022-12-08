import {SideNavigationMetadata} from '@coveord/plasma-components-props-analyzer';
import SideNavigationCollapsibleDemo from '@examples/legacy/navigation/SideNavigation/collapsible.demo.tsx';
import SideNavigationLoadingDemo from '@examples/legacy/navigation/SideNavigation/loading.demo.tsx';
import SideNavigationDemo from '@examples/legacy/navigation/SideNavigation/main.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const SideNavigationDemos = () => (
    <PageLayout
        id="SideNavigation"
        sourcePath="/packages/react/src/components/sideNavigation/SideNavigation.tsx"
        title="SideNavigation"
        section="Navigation"
        description="A sidebar navigation is a primary navigation element that displays the architecture of the product’s features."
        thumbnail="sideNav"
        demo={<SideNavigationDemo />}
        propsMetadata={SideNavigationMetadata}
        examples={{
            loading: <SideNavigationLoadingDemo title="Loading section" />,
            collapsible: <SideNavigationCollapsibleDemo title="Collapsible section" />,
        }}
    />
);

export default SideNavigationDemos;
