import {SideNavigationMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../building-blocs/PageLayout';
import collapsible from '@examples/SideNavigation/collapsible.example.tsx';
import loading from '@examples/SideNavigation/loading.example.tsx';
import code from '@examples/SideNavigation/main.example.tsx';

export const SideNavigationExamples = () => (
    <PageLayout
        id="SideNavigation"
        componentSourcePath="/sideNavigation/SideNavigation.tsx"
        title="SideNavigation"
        section="Navigation"
        description="A sidebar navigation is a primary navigation element that displays the architecture of the product’s features."
        thumbnail="sideNav"
        code={code}
        propsMetadata={SideNavigationMetadata}
        examples={{
            loading: {code: loading, title: 'Loading section'},
            collapsible: {code: collapsible, title: 'Collapsible section'},
        }}
    />
);

export default SideNavigationExamples;
