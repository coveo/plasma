import {SideNavigation, SideNavigationItem, SideNavigationMenuSection} from '@coveord/plasma-react';
import {CoveoIconSize16Px} from '@coveord/plasma-react-icons';

export default () => (
    <SideNavigation>
        <SideNavigationMenuSection title="Regular Section" icon={CoveoIconSize16Px}>
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
