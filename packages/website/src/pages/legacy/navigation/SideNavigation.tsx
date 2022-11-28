import {SideNavigationMetadata} from '@coveord/plasma-components-props-analyzer';
import collapsible from '@examples/legacy/navigation/SideNavigation/collapsible.example.tsx';
import loading from '@examples/legacy/navigation/SideNavigation/loading.example.tsx';
import code from '@examples/legacy/navigation/SideNavigation/main.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

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
