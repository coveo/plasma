/* eslint-disable arrow-body-style */
import {SideNavigation, SideNavigationItem, SideNavigationMenuSection} from '@coveord/plasma-react';
import React, {useState} from 'react';
import {useLocation} from 'react-router';
import {Link} from 'react-router-dom';

interface NavLinkProps {
    href?: string;
    label: string;
    disabled?: boolean;
    isActive?: boolean;
}

// Context is more efficient than prop drilling or using useLocation() 65+ times
const PathnameContext = React.createContext('/');

const NavLink: React.FunctionComponent<NavLinkProps> = ({href = '', label, disabled, isActive}) => (
    <PathnameContext.Consumer>
        {(path) => (
            <SideNavigationItem disabled={disabled} href={href} isActive={isActive ?? path?.endsWith(href)}>
                {disabled ? (
                    <div className="navigation-menu-section">
                        <span>{label}</span>
                    </div>
                ) : (
                    <Link to={href}>
                        <div className="navigation-menu-section">
                            <span>{label}</span>
                        </div>
                    </Link>
                )}
            </SideNavigationItem>
        )}
    </PathnameContext.Consumer>
);

const CollapsibleSideSection: React.FC<{title: string; initiallyClosed?: boolean}> = ({
    title,
    initiallyClosed = false,
    children,
}) => {
    const [expanded, setExpanded] = useState(!initiallyClosed);

    return (
        <SideNavigationMenuSection
            expandable
            expanded={expanded}
            onClick={() => setExpanded(!expanded)}
            title={<NavLink label={title} isActive={false} />}
        >
            {children}
        </SideNavigationMenuSection>
    );
};

export const Navigation: React.FunctionComponent = () => {
    const {pathname} = useLocation();

    return (
        <PathnameContext.Provider value={pathname}>
            <SideNavigation className="navigation-menu-sections">
                <SideNavigationMenuSection isActive={pathname === '/'} title={<NavLink href="/" label="Home" />} />
                <CollapsibleSideSection title="Foundations">
                    <NavLink href="/foundations/Iconography" label="Iconography" />
                    <NavLink href="/foundations/Svg" label="SVG" />
                    <NavLink href="/foundations/Headings" label="Headings" />
                    <NavLink href="/foundations/Links" label="Links" />
                    <NavLink href="/foundations/Whitespace" label="Whitespace" />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Layout">
                    <NavLink href="/layout/Banner" label="Banner" />
                    <NavLink href="/layout/BlankSlate" label="Blankslate" />
                    <NavLink href="/layout/BorderedLine" label="Bordered Line" />
                    <NavLink href="/layout/BrowserPreview" label="Browser Preview" />
                    <NavLink href="/layout/Chart" label="Chart" />
                    <NavLink href="/layout/Collapsible" label="Collapsible" />
                    <NavLink href="/layout/IconCard" label="Icon Card" />
                    <NavLink href="/layout/InfoBox" label="Info Box" />
                    <NavLink href="/layout/LabeledValue" label="Labeled Value" />
                    <NavLink href="/layout/Limit" label="Limit Card" />
                    <NavLink href="/layout/ModalWindow" label="Modal" />
                    <NavLink href="/layout/ModalWizard" label="Modal Wizard" />
                    <NavLink href="/layout/PageHeader" label="Page Header" />
                    <NavLink href="/layout/Footer" label="Page Footer" />
                    <NavLink href="/layout/Section" label="Section" />
                    <NavLink href="/layout/SplitLayout" label="Split Layout" />
                    <NavLink href="/layout/TableHOC" label="Table" />
                    <NavLink href="/layout/TableHOCLoading" label="Table Loading" />
                    <NavLink href="/layout/TableHOCServer" label="Table Server" />
                    <NavLink href="/layout/TableHOCwithBlankSlate" label="Table Blank Slate" />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Form">
                    <NavLink href="/form/ActionableItem" label="Actionable Item" />
                    <NavLink href="/form/Button" label="Button" />
                    <NavLink href="/form/Checkbox" label="Checkbox" />
                    <NavLink href="/form/ChildForm" label="Child Form" />
                    <NavLink href="/form/CodeEditor" label="Code Editor" />
                    <NavLink href="/form/ColorPicker" label="Color Picker" />
                    <NavLink href="/form/DatePicker" label="Date Picker" />
                    <NavLink href="/form/DiffViewer" label="Diff Viewer" />
                    <NavLink href="/form/Facet" label="Facet" />
                    <NavLink href="/form/Filepicker" label="File Picker" />
                    <NavLink href="/form/FilterBox" label="Filter Box" />
                    <NavLink href="/form/FlatSelect" label="Flat Select" />
                    <NavLink href="/form/JSONEditor" label="JSON Editor" />
                    <NavLink href="/form/MultilineBox" label="Multiline Box" />
                    <NavLink href="/form/NumericInput" label="Numeric Input" />
                    <NavLink href="/form/RadioButton" label="Radio Button" />
                    <NavLink href="/form/SearchBar" label="Search Bar" />
                    <NavLink href="/form/SingleSelect" label="Select - Single" />
                    <NavLink href="/form/MultiSelect" label="Select - Multi" />
                    <NavLink href="/form/Slider" label="Slider" />
                    <NavLink href="/form/TextArea" label="Text Area" />
                    <NavLink href="/form/TextInput" label="Text Input" />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Navigation">
                    <NavLink href="/navigation/Breadcrumbs" label="Breadcrumbs" />
                    <NavLink href="/navigation/SideNavigation" label="Sidebar Navigation" />
                    <NavLink href="/navigation/SubNavigation" label="SubNavigation" />
                    <NavLink href="/navigation/Tabs" label="Tabs" />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Feedback">
                    <NavLink href="/feedback/Badge" label="Badge" />
                    <NavLink href="/feedback/ColorBar" label="Color Bar" />
                    <NavLink href="/feedback/ColorDot" label="Color Dot" />
                    <NavLink href="/feedback/IconBadge" label="Icon Badge" />
                    <NavLink href="/feedback/LastUpdated" label="Last Updated" />
                    <NavLink href="/feedback/Loading" label="Loading Spinner" />
                    <NavLink href="/feedback/StepProgressBar" label="Step Progress Bar" />
                    <NavLink href="/feedback/SyncFeedback" label="Sync Feedback" />
                    <NavLink href="/feedback/Toast" label="Toast" />
                    <NavLink href="/feedback/ToastConnected" label="Toast Connected" />
                    <NavLink href="/feedback/ToastContent" label="Toast Content" />
                    <NavLink href="/feedback/Tooltip" label="Tooltip" />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Advanced" initiallyClosed>
                    <NavLink href="/advanced/ActionBar" label="Action Bar" />
                    <NavLink href="/advanced/InfoToken" label="Info Token" />
                    <NavLink href="/advanced/LinkSvg" label="Link Svg" />
                    <NavLink href="/advanced/ListBox" label="List Box" />
                    <NavLink href="/advanced/OptionsCycle" label="Options Cycle" />
                    <NavLink href="/advanced/PartialStringMatch" label="Partial String Match" />
                    <NavLink href="/advanced/SlideY" label="Slide Y" />
                </CollapsibleSideSection>
            </SideNavigation>
        </PathnameContext.Provider>
    );
};
