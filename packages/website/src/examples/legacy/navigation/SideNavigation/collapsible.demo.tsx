import {SideNavigation, SideNavigationItem, SideNavigationMenuSection} from '@coveord/plasma-react';
import {CoveoIconSize16Px} from '@coveord/plasma-react-icons';
import {useState} from 'react';

const Demo = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    return (
        <SideNavigation>
            <SideNavigationMenuSection
                title="Collapsible Section"
                icon={CoveoIconSize16Px}
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
export default Demo;
