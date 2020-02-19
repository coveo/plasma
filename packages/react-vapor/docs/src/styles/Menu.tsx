import * as React from 'react';

import {SideNavigation} from '../../../src/components/sideNavigation/SideNavigation';
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
        <NavigationSection title="Filtering Controls" baseUrl="/filtering" svgName="filter">
            <NavigationLink href="/picker" name="Picker" />
            <NavigationLink href="/pickers" name="Pickers" />
            <NavigationLink href="/list-popup" name="List Popup" />
            <NavigationLink href="/value-popup" name="Value Popup" />
        </NavigationSection>
        <NavigationSection title="Form Controls" baseUrl="/form-controls" svgName="menuOrganization">
            <NavigationLink href="/text-input" name="Text input" />
            <NavigationLink href="/numeric-spinner" name="Numeric spinner" />
            <NavigationLink href="/checkboxes-infos" name="Checkboxes / Infos" />
            <NavigationLink href="/checkboxes" name="Checkboxes" />
            <NavigationLink href="/radio-buttons" name="Radio buttons" />
            <NavigationLink href="/slide-toggle" name="Slide toggle" />
            <NavigationLink href="/slide-toggle-modifiers" name="Slide toggle modifiers" />
            <NavigationLink href="/slide-toggle-double" name="Slide toggle double" />
            <NavigationLink href="/filter-box" name="Filter box" />
            <NavigationLink href="/input-slider" name="Input slider" />
            <NavigationLink href="/dropdown" name="Dropdown" />
            <NavigationLink href="/dropdown-modifiers" name="Dropdown modifiers" />
            <NavigationLink href="/flat-select" name="Flat select" />
            <NavigationLink href="/flat-select-prepend" name="Prepended flat select" />
            <NavigationLink href="/flat-select-modifiers" name="Flat select modifiers" />
            <NavigationLink href="/multiline-input" name="Multiline input" />
            <NavigationLink href="/progress-bar" name="Progress bar" />
            <NavigationLink href="/step-progress-bar" name="Step progress bar" />
            <NavigationLink href="/file-input" name="File input" />
        </NavigationSection>
        <NavigationSection title="Form Layout" baseUrl="/form-layout" svgName="dashboard">
            <NavigationLink href="/groups" name="Groups" />
            <NavigationLink href="/child-element" name="Child element" />
            <NavigationLink href="/split-layout" name="Split layout" />
            <NavigationLink href="/child-section-element" name="Child section element" />
        </NavigationSection>
        <NavigationSection title="Headers" baseUrl="/headers" svgName="explorer">
            <NavigationLink href="/panel" name="Panel" />
            <NavigationLink href="/site" name="Site" />
        </NavigationSection>
        <NavigationSection title="Icons" baseUrl="/icons" svgName="noContent">
            <NavigationLink href="/list" name="Icons" />
        </NavigationSection>
        <NavigationSection title="Messages" baseUrl="/messages" svgName="noteYes">
            <NavigationLink href="/popover" name="Popover" />
            <NavigationLink href="/prompt" name="Prompt" />
            <NavigationLink href="/toast" name="Toast" />
            <NavigationLink href="/tooltip" name="Tooltip" />
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
