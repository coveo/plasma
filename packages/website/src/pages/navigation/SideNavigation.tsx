import {PageLayout} from '../../building-blocs/PageLayout';

const loading = `
    import {
        SideNavigation,
        SideNavigationLoadingItem,
        SideNavigationMenuSection,
    } from '@coveord/plasma-react';
    
    export default () => (
        <SideNavigation>
            <SideNavigationMenuSection title="Loading Section" svgName={'coveoIcon16px'}>
                <SideNavigationLoadingItem className="mod-width-30" />
                <SideNavigationLoadingItem className="mod-width-50" />
                <SideNavigationLoadingItem className="mod-width-40" />
            </SideNavigationMenuSection>
        </SideNavigation>
    );
`;
const collapsible = `
    import {
        SideNavigation,
        SideNavigationItem,
        SideNavigationMenuSection,
    } from '@coveord/plasma-react';

    export default () => {
        const [isExpanded, setIsExpanded] = React.useState(true);
        return (
            <SideNavigation>
                <SideNavigationMenuSection
                    title="Collapsible Section"
                    svgName={'coveoIcon16px'}
                    expandable
                    expanded={isExpanded}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <SideNavigationItem>
                        <a href="http://coveo.com" title="Link to Coveo">
                            Link to Coveo
                        </a>
                    </SideNavigationItem>
                    <SideNavigationItem>
                        <a href="http://coveo.com" title="Link to Coveo">
                            Another link to Coveo
                        </a>
                    </SideNavigationItem>
                </SideNavigationMenuSection>
            </SideNavigation>
        );
    };
`;

const code = `
    import {
        SideNavigation,
        SideNavigationItem,
        SideNavigationMenuSection,
    } from '@coveord/plasma-react';

    export default () => (
        <SideNavigation>
        <SideNavigationMenuSection title="Regular Section" svgName={'coveoIcon16px'}>
            <SideNavigationItem isActive>
                <a href="http://coveo.com" title="Link to Coveo">
                    Link to Coveo
                </a>
            </SideNavigationItem>
            <SideNavigationItem>
                <a href="http://coveo.com" title="Link to Coveo">
                    Another link to Coveo
                </a>
            </SideNavigationItem>
        </SideNavigationMenuSection>
    </SideNavigation>
    );
`;

export const SideNavigationExamples = () => (
    <PageLayout
        id="SideNavigation"
        componentSourcePath="/sideNavigation/SideNavigation.tsx"
        title="SideNavigation"
        section="Navigation"
        description="A sidebar navigation is a primary navigation element that displays the architecture of the product’s features."
        thumbnail="sideNav"
        code={code}
        examples={{
            loading: {code: loading, title: 'Loading section'},
            collapsible: {code: collapsible, title: 'Collapsible section'},
        }}
    />
);

export default SideNavigationExamples;
