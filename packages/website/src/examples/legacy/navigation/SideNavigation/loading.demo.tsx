import {SideNavigation, SideNavigationLoadingItem, SideNavigationMenuSection} from '@coveord/plasma-react';
import {CoveoIconSize16Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <SideNavigation>
        <SideNavigationMenuSection title="Loading Section" icon={CoveoIconSize16Px}>
            <SideNavigationLoadingItem className="mod-width-30" />
            <SideNavigationLoadingItem className="mod-width-50" />
            <SideNavigationLoadingItem className="mod-width-40" />
        </SideNavigationMenuSection>
    </SideNavigation>
);
export default Demo;
