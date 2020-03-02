import * as React from 'react';
import {SideNavigation} from 'react-vapor';

import NavigationLink from '../demo-building-blocs/NavigationLink';
import NavigationSection from '../demo-building-blocs/NavigationSection';

const Navigation: React.FunctionComponent = () => (
    <SideNavigation>
        <NavigationSection title="General Guidelines" baseUrl="/general-guidelines" isLink />
        <NavigationSection title="Borders" baseUrl="/borders" isLink />
        <NavigationSection title="Cards" baseUrl="/cards">
            <NavigationLink href="/flippable" name="Flippable" />
            <NavigationLink href="/home" name="Home" />
            <NavigationLink href="/logo" name="Logo" />
            <NavigationLink href="/limit" name="Limit" />
            <NavigationLink href="/material" name="Material" />
            <NavigationLink href="/wizard" name="Wizard" />
        </NavigationSection>
        <NavigationSection title="Colors">
            <NavigationLink href="/colors" name="Palette" />
        </NavigationSection>
        <NavigationSection title="Other Components" baseUrl="/components">
            <NavigationLink href="/badge" name="Badge" />
            <NavigationLink href="/banner" name="Banner" />
            <NavigationLink href="/blank-slate" name="Blank Slate" />
            <NavigationLink href="/breadcrumbs" name="Breadcrumbs" />
            <NavigationLink href="/calendar-date-picker" name="Calendar & Date Picker" />
            <NavigationLink href="/collapsible" name="Collapsible" />
            <NavigationLink href="/content-placeholder" name="Content placeholder" />
            <NavigationLink href="/corner-ribbon" name="Corner ribbon" />
            <NavigationLink href="/facet" name="Facet" />
            <NavigationLink href="/card" name="Card" />
            <NavigationLink href="/search-field" name="Search Field" />
            <NavigationLink href="/list-box" name="List Box" />
            <NavigationLink href="/loading" name="Loading" />
            <NavigationLink href="/member" name="Member" />
            <NavigationLink href="/modal" name="Modal" />
            <NavigationLink href="/multi-step-bar" name="Multi step bar" />
            <NavigationLink href="/sync-feedback" name="Sync Feedback" />
            <NavigationLink href="/tabs" name="Tabs" />
        </NavigationSection>
        <NavigationSection title="Filtering Controls" baseUrl="/filtering">
            <NavigationLink href="/picker" name="Picker" />
            <NavigationLink href="/pickers" name="Pickers" />
            <NavigationLink href="/list-popup" name="List Popup" />
            <NavigationLink href="/value-popup" name="Value Popup" />
        </NavigationSection>
        <NavigationSection title="Form Controls" baseUrl="/form-controls">
            <NavigationLink href="/slide-toggle" name="Slide toggle" />
            <NavigationLink href="/slide-toggle-modifiers" name="Slide toggle modifiers" />
            <NavigationLink href="/slide-toggle-double" name="Slide toggle double" />
            <NavigationLink href="/progress-bar" name="Progress bar" />
            <NavigationLink href="/file-input" name="File input" />
        </NavigationSection>
        <NavigationSection title="Headers" baseUrl="/headers">
            <NavigationLink href="/panel" name="Panel" />
            <NavigationLink href="/site" name="Site" />
        </NavigationSection>
        <NavigationSection title="Icons" baseUrl="/icons">
            <NavigationLink href="/list" name="Icons" />
        </NavigationSection>
        <NavigationSection title="Layout" baseUrl="/layout">
            <NavigationLink href="/spaced-box" name="Spaced box" />
        </NavigationSection>
        <NavigationSection title="Messages" baseUrl="/messages">
            <NavigationLink href="/popover" name="Popover" />
            <NavigationLink href="/prompt" name="Prompt" />
            <NavigationLink href="/toast" name="Toast" />
            <NavigationLink href="/tooltip" name="Tooltip" />
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
