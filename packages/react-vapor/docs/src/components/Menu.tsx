import * as React from 'react';

import {SideNavigation} from '../../../src/components/sideNavigation/SideNavigation';
import NavigationLink from '../demo-building-blocs/NavigationLink';
import NavigationSection from '../demo-building-blocs/NavigationSection';
import {IComponent} from './ComponentsInterface';

export interface IMenuProps {
    components: IComponent[];
}

const Menu: React.FunctionComponent<IMenuProps> = ({components}) => (
    <SideNavigation>
        <NavigationSection notExpandable>
            {components.map(({path, name, component}) => (
                <NavigationLink
                    key={path}
                    href={`/${name}`}
                    name={`${name}${component.deprecated ? ' (deprecated)' : ''}`}
                />
            ))}
        </NavigationSection>
    </SideNavigation>
);

export default Menu;
