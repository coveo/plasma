import {svg} from 'coveo-styleguide';
import * as React from 'react';
import {
    Form,
    Section,
    SideNavigation,
    SideNavigationItem,
    SideNavigationLoadingItem,
    SideNavigationMenuSection,
} from 'react-vapor';

export const SideNavigationExample: React.FunctionComponent = () => {
    const [isExpanded, setIsExpanded] = React.useState(true);

    return (
        <Form>
            <Section level={2} title="Side Navigation">
                <SideNavigation>
                    <SideNavigationMenuSection title="Section 1" svgName={svg.coveoIcon16px.name}>
                        <SideNavigationItem isActive href="http://coveo.com" title="Link to Coveo" />
                        <SideNavigationItem href="http://coveo.com" title="Another link to Coveo" />
                    </SideNavigationMenuSection>
                    <SideNavigationMenuSection title="Section 2">
                        <SideNavigationLoadingItem className="mod-width-30" />
                        <SideNavigationLoadingItem className="mod-width-50" />
                        <SideNavigationLoadingItem className="mod-width-40" />
                    </SideNavigationMenuSection>
                    <SideNavigationMenuSection
                        title="Collapsible Section"
                        svgName={svg.ai16px.name}
                        svgClass="mod-stroke"
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
            </Section>
        </Form>
    );
};
