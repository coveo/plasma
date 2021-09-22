import * as React from 'react';
import {SideNavigation} from 'react-vapor';

import NavigationLink from '../demo-building-blocs/NavigationLink';
import NavigationSection from '../demo-building-blocs/NavigationSection';

const Navigation: React.FunctionComponent = () => (
    <SideNavigation className="demo-side-nav">
        <NavigationSection title="General Guidelines" baseUrl="/general-guidelines" isLink />
        <NavigationSection title="Borders" baseUrl="/borders" isLink />
        <NavigationSection title="Cards" baseUrl="/cards">
            <NavigationLink href="/card" name="Card" />
            <NavigationLink href="/home" name="Home" />
            <NavigationLink href="/material" name="Material" />
            <NavigationLink href="/wizard" name="Wizard" />
        </NavigationSection>
        <NavigationSection title="Other Components" baseUrl="/components">
            <NavigationLink href="/banner" name="Banner" />
            <NavigationLink href="/member" name="Member" />
        </NavigationSection>
        <NavigationSection title="Filtering Controls" baseUrl="/filtering">
            <NavigationLink href="/value-popup" name="Value Popup" />
        </NavigationSection>
        <NavigationSection title="Form Controls" baseUrl="/form-controls">
            <NavigationLink href="/progress-bar" name="Progress bar" />
        </NavigationSection>
        <NavigationSection title="Headers" baseUrl="/headers">
            <NavigationLink href="/site" name="Site" />
        </NavigationSection>
        <NavigationSection title="Icons" baseUrl="/icons">
            <NavigationLink href="/list" name="Icons" />
            <NavigationLink href="/iconography" name="Iconography" />
        </NavigationSection>
        <NavigationSection title="Layout" baseUrl="/layout">
            <NavigationLink href="/spaced-box" name="Spaced box" />
        </NavigationSection>
        <NavigationSection title="Transparency" baseUrl="/transparency" isLink />
        <NavigationSection title="Typography" baseUrl="/typography">
            <NavigationLink href="/headings" name="Headings" />
            <NavigationLink href="/utilities" name="Utilities" />
            <NavigationLink href="/lists" name="Lists" />
            <NavigationLink href="/links" name="Links" />
        </NavigationSection>
        <NavigationSection baseUrl="/utility" title="Utility">
            <NavigationLink href="/line-height" name="Text Size" />
            <NavigationLink href="/text-colors" name="Text Colors" />
            <NavigationLink href="/icon-colors" name="Icon Colors" />
            <NavigationLink href="/whitespace" name="Whitespace" />
            <NavigationLink href="/cursor" name="Cursor" />
            <NavigationLink href="/color-dots" name="Color dots" />
        </NavigationSection>
    </SideNavigation>
);

export default Navigation;
