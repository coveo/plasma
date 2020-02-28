import * as React from 'react';
import {SideNavigation} from 'react-vapor';

import NavigationLink from '../demo-building-blocs/NavigationLink';
import NavigationSection from '../demo-building-blocs/NavigationSection';

const Navigation: React.FunctionComponent = () => (
    <SideNavigation>
        <NavigationSection>
            <NavigationLink key="general-guidelines" href="/general-guidelines" name="General Guidelines" />
        </NavigationSection>
        <NavigationSection title="Cards" baseUrl="/cards" svgName="rectangle">
            <NavigationLink href="/flippable" name="Flippable" />
            <NavigationLink href="/home" name="Home" />
            <NavigationLink href="/logo" name="Logo" />
            <NavigationLink href="/limit" name="Limit" />
            <NavigationLink href="/material" name="Material" />
            <NavigationLink href="/wizard" name="Wizard" />
        </NavigationSection>
        <NavigationSection
            title="Colors"
            customIcon={<span className="smaller bold navigation-menu-section-header-icon transparency-3">rgb</span>}
        >
            <NavigationLink href="/colors" name="Palette" />
        </NavigationSection>
        <NavigationSection title="Other Components" baseUrl="/components" svgName="more">
            <NavigationLink href="/banner" name="Banner" />
            <NavigationLink href="/member" name="Member" />
        </NavigationSection>
        <NavigationSection title="Filtering Controls" baseUrl="/filtering" svgName="filter">
            <NavigationLink href="/value-popup" name="Value Popup" />
        </NavigationSection>
        <NavigationSection title="Form Controls" baseUrl="/form-controls" svgName="menuOrganization">
            <NavigationLink href="/slide-toggle" name="Slide toggle" />
            <NavigationLink href="/slide-toggle-modifiers" name="Slide toggle modifiers" />
            <NavigationLink href="/slide-toggle-double" name="Slide toggle double" />
            <NavigationLink href="/progress-bar" name="Progress bar" />
            <NavigationLink href="/file-input" name="File input" />
        </NavigationSection>
        <NavigationSection title="Headers" baseUrl="/headers" svgName="explorer">
            <NavigationLink href="/site" name="Site" />
        </NavigationSection>
        <NavigationSection title="Icons" baseUrl="/icons" svgName="noContent">
            <NavigationLink href="/list" name="Icons" />
        </NavigationSection>
        <NavigationSection
            title="Typography"
            baseUrl="/typography"
            customIcon={<span className="smaller bold navigation-menu-section-header-icon transparency-3">abc</span>}
        >
            <NavigationLink href="/headings" name="Headings" />
            <NavigationLink href="/colors" name="Colors" />
            <NavigationLink href="/utilities" name="Utilities" />
            <NavigationLink href="/lists" name="Lists" />
        </NavigationSection>
        <NavigationSection baseUrl="/utility" title="Utility" svgName="maintenance">
            <NavigationLink href="/line-height" name="Text Size" />
            <NavigationLink href="/whitespace" name="Whitespace" />
            <NavigationLink href="/spaced-box" name="Spaced box" />
            <NavigationLink href="/cursor" name="Cursor" />
            <NavigationLink href="/color-dots" name="Color dots" />
            <NavigationLink href="/borders" name="Borders" />
            <NavigationLink href="/transparency" name="Transparency" />
            <NavigationLink href="/hover" name="Hover" />
            <NavigationLink href="/shadow" name="Shadow" />
        </NavigationSection>
    </SideNavigation>
);

export default Navigation;
