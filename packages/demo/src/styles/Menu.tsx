import * as React from 'react';
import {SideNavigation} from 'react-vapor';

import NavigationLink from '../demo-building-blocs/NavigationLink';
import NavigationSection from '../demo-building-blocs/NavigationSection';

const Navigation: React.FunctionComponent = () => (
    <SideNavigation className="demo-side-nav">
        <NavigationSection title="General Guidelines" baseUrl="/general-guidelines" isLink />
        <NavigationSection title="Borders" baseUrl="/borders" isLink />
        <NavigationSection title="Cards" baseUrl="/cards">
            <NavigationLink href="/home" name="Home" />
            <NavigationLink href="/limit" name="Limit" />
            <NavigationLink href="/material" name="Material" />
            <NavigationLink href="/wizard" name="Wizard" />
        </NavigationSection>
        <NavigationSection title="Colors">
            <NavigationLink href="/colors" name="Palette" />
        </NavigationSection>
        <NavigationSection title="Other Components" baseUrl="/components">
            <NavigationLink href="/banner" name="Banner" />
            <NavigationLink href="/member" name="Member" />
        </NavigationSection>
        <NavigationSection title="Filtering Controls" baseUrl="/filtering">
            <NavigationLink href="/value-popup" name="Value Popup" />
        </NavigationSection>
        <NavigationSection title="Form Controls" baseUrl="/form-controls">
            <NavigationLink href="/slide-toggle" name="Slide toggle" />
            <NavigationLink href="/slide-toggle-modifiers" name="Slide toggle modifiers" />
            <NavigationLink href="/slide-toggle-double" name="Slide toggle double" />
            <NavigationLink href="/progress-bar" name="Progress bar" />
        </NavigationSection>
        <NavigationSection title="Headers" baseUrl="/headers">
            <NavigationLink href="/site" name="Site" />
        </NavigationSection>
        <NavigationSection title="Icons" baseUrl="/icons">
            <NavigationLink href="/list" name="Icons" />
        </NavigationSection>
        <NavigationSection title="Layout" baseUrl="/layout">
            <NavigationLink href="/spaced-box" name="Spaced box" />
        </NavigationSection>
        <NavigationSection title="Shadow" baseUrl="/shadow" isLink />
        <NavigationSection title="Transparency" baseUrl="/transparency" isLink />
        <NavigationSection title="Typography" baseUrl="/typography">
            <NavigationLink href="/headings" name="Headings" />
            <NavigationLink href="/colors" name="Colors" />
            <NavigationLink href="/utilities" name="Utilities" />
            <NavigationLink href="/lists" name="Lists" />
        </NavigationSection>
        <NavigationSection baseUrl="/utility" title="Utility">
            <NavigationLink href="/line-height" name="Text Size" />
            <NavigationLink href="/whitespace" name="Whitespace" />
            <NavigationLink href="/cursor" name="Cursor" />
            <NavigationLink href="/color-dots" name="Color dots" />
            <NavigationLink href="/hover" name="Hover" />
        </NavigationSection>
    </SideNavigation>
);

export default Navigation;
