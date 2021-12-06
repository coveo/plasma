/* eslint-disable arrow-body-style */
import React, {useState} from 'react';
import {useLocation} from 'react-router';
import {Link} from 'react-router-dom';
import {SideNavigation, SideNavigationItem, SideNavigationMenuSection} from 'react-vapor';

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

const CollapsibleSideSection: React.FC<{title: string}> = ({title, children}) => {
    const [expanded, setExpanded] = useState(true);

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
                <SideNavigationMenuSection
                    isActive={pathname === '/brand'}
                    title={<NavLink href="/brand" label="Brand" />}
                />
                <CollapsibleSideSection title="Foundations">
                    <NavLink disabled href="/foundations/Effects" label="Effects" />
                    <NavLink href="/foundations/Iconography" label="Iconography" />
                    <NavLink href="/foundations/Svg" label="SVG" />
                    <NavLink disabled href="/foundations/Illustration" label="Illustration" />
                    <NavLink disabled href="/foundations/Palette" label="Palette" />
                    <NavLink disabled href="/foundations/Typekit" label="Typekit" />
                    <NavLink href="/foundations/typekit/Headings" label="Typekit - Headings" />
                    <NavLink href="/foundations/typekit/IconColor" label="Typekit - Icon Color" />
                    <NavLink href="/foundations/typekit/LineHeight" label="Typekit - Line Height" />
                    <NavLink href="/foundations/typekit/Links" label="Typekit - Links" />
                    <NavLink href="/foundations/typekit/Lists" label="Typekit - Lists" />
                    <NavLink href="/foundations/typekit/TextColor" label="Typekit - Text Color" />
                    <NavLink href="/foundations/typekit/Utilities" label="Typekit - Utilities" />
                    <NavLink href="/foundations/typekit/Whitespace" label="Typekit - Whitespace" />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Layout">
                    <NavLink href="/layout/ActionBar" label="Action Bar" />
                    <NavLink href="/layout/ActionBarConnected" label="Action Bar Connected" />
                    <NavLink href="/layout/Banner" label="Banner" />
                    <NavLink href="/layout/BlankSlate" label="Blankslate" />
                    <NavLink href="/layout/BorderedLine" label="Bordered Line / Row" />
                    <NavLink disabled href="/layout/CommerceConfigCard" label="Commerce Config Card" />
                    <NavLink disabled href="/layout/Divider" label="Divider" />
                    <NavLink href="/layout/Footer" label="Footer" />
                    <NavLink href="/layout/IconCard" label="Icon / Logo Card" />
                    <NavLink href="/layout/Card" label="Card" />
                    <NavLink href="/layout/ModalWindow" label="Modal" />
                    <NavLink href="/layout/ModalWizard" label="Modal Wizard" />
                    <NavLink href="/layout/PageHeader" label="Page Header" />
                    <NavLink disabled href="/layout/SearchResultCard" label="Search Result Card" />
                    <NavLink href="/layout/Section" label="Section" />
                    <NavLink href="/layout/SplitLayout" label="Split Layout" />
                    <NavLink href="/layout/Tabs" label="Tabs" />
                    <NavLink href="/layout/TabsConnected" label="Tabs Connected" />
                    <NavLink href="/layout/TableHOC" label="Table" />
                    <NavLink href="/layout/TableHOCLoading" label="Table Loading" />
                    <NavLink href="/layout/TableHOCServer" label="Table Server" />
                    <NavLink href="/layout/TableHOCwithBlankSlate" label="Table Blank Slate" />
                    <NavLink disabled href="/layout/TopBar" label="Top Bar" />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Input">
                    <NavLink href="/input/ActionableItem" label="Actionable Item" />
                    <NavLink disabled href="/input/ActionButton" label="Action Button" />
                    <NavLink disabled href="/input/AddRemove" label="Add/Remove" />
                    <NavLink href="/input/Button" label="Button" />
                    <NavLink href="/input/Checkbox" label="Checkbox" />
                    <NavLink href="/input/ChildForm" label="Child Form" />
                    <NavLink href="/input/CodeEditor" label="Code Editor" />
                    <NavLink href="/input/DatePicker" label="Date Picker" />
                    <NavLink href="/input/DiffViewer" label="Diff Viewer" />
                    <NavLink disabled href="/input/Facet" label="Facet" />
                    <NavLink href="/input/Filepicker" label="File Picker" />
                    <NavLink href="/input/FilterBox" label="Filter Box" />
                    <NavLink href="/input/JSONEditor" label="JSON Editor" />
                    <NavLink href="/input/MultilineBox" label="Multiline Box" />
                    <NavLink href="/input/NumericInput" label="Numeric Input" />
                    <NavLink href="/input/RadioButton" label="Radio Button" />
                    <NavLink href="/input/SearchBar" label="Search Bar" />
                    <NavLink href="/input/SingleSelect" label="Select - Single" />
                    <NavLink href="/input/MultiSelect" label="Select - Multi" />
                    <NavLink href="/input/Slider" label="Slider" />
                    <NavLink href="/input/TextArea" label="Text Area" />
                    <NavLink href="/input/TextInput" label="Text Input" />
                    <NavLink disabled href="/input/Toggle" label="Toggle" />
                    <NavLink href="/input/ValuePopup" label="Value Popup" />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Navigation">
                    <NavLink href="/navigation/Breadcrumbs" label="Breadcrumbs" />
                    <NavLink href="/navigation/FlatSelect" label="Flat Select" />
                    <NavLink href="/navigation/OptionsCycle" label="Options Cycle" />
                    <NavLink href="/navigation/Pagination" label="Pagination" />
                    <NavLink href="/navigation/SideNavigation" label="Sidebar Navigation" />
                    <NavLink href="/navigation/SubNavigation" label="SubNavigation" />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Feedback and Info">
                    <NavLink href="/feedback-and-info/Badge" label="Badge / Tag" />
                    <NavLink href="/feedback-and-info/Feedback" label="Feedback" />
                    <NavLink href="/feedback-and-info/InfoBox" label="Info Box" />
                    <NavLink href="/feedback-and-info/InfoToken" label="Info Token" />
                    <NavLink href="/feedback-and-info/Limit" label="Limit Card" />
                    <NavLink href="/feedback-and-info/Loading" label="Loader / Spinner" />
                    <NavLink href="/feedback-and-info/Popover" label="Popover" />
                    <NavLink href="/feedback-and-info/ProgressBar" label="Progress Bar" />
                    <NavLink disabled href="/feedback-and-info/Prompt" label="Prompt Modals" />
                    <NavLink href="/feedback-and-info/StatusCard" label="Status Card" />
                    <NavLink disabled href="/feedback-and-info/StatusToken" label="Status Token" />
                    <NavLink disabled href="/feedback-and-info/StatusWidget" label="Status Widget" />
                    <NavLink href="/feedback-and-info/StepProgressBar" label="Step / Progress Bar" />
                    <NavLink href="/feedback-and-info/SyncFeedback" label="Sync Feedback" />
                    <NavLink href="/feedback-and-info/Toast" label="Toast" />
                    <NavLink href="/feedback-and-info/ToastConnected" label="Toast Connected" />
                    <NavLink href="/feedback-and-info/ToastContent" label="Toast Content" />
                    <NavLink href="/feedback-and-info/Tooltip" label="Tooltip" />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Display & Utilities">
                    <NavLink href="/display-and-utilities/Borders" label="Borders" />
                    <NavLink href="/display-and-utilities/Collapsible" label="Collapsible" />
                    <NavLink disabled href="/display-and-utilities/CoveoExpLoader" label="Coveo Exp. Loader" />
                    <NavLink disabled href="/display-and-utilities/RichPopover" label="Rich Popover" />
                    <NavLink disabled href="/display-and-utilities/SkeletonBlur" label="Skeleton Blur" />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Legacy">
                    <NavLink href="/legacy/BrowserPreview" label="Browser Preview" />
                    <NavLink href="/legacy/cards/Home" label="Card Home" />
                    <NavLink href="/legacy/cards/Material" label="Card Material" />
                    <NavLink href="/legacy/cards/Wizard" label="Card Wizard" />
                    <NavLink href="/legacy/Chart" label="Chart" />
                    <NavLink href="/legacy/ColorBar" label="Color Bar" />
                    <NavLink href="/legacy/ColorDot" label="Color Dot" />
                    <NavLink href="/legacy/ColorPicker" label="Color Picker" />
                    <NavLink href="/legacy/Cursor" label="Cursor" />
                    <NavLink href="/legacy/FacetConnected" label="Facet Connected" />
                    <NavLink href="/legacy/IconBadge" label="Icon Badge" />
                    <NavLink href="/legacy/Input" label="Input (legacy)" />
                    <NavLink href="/legacy/ItemFilter" label="Item Filter" />
                    <NavLink href="/legacy/ItemFilterConnected" label="Item Filter Connected" />
                    <NavLink href="/legacy/LabeledValue" label="Labeled Value" />
                    <NavLink href="/legacy/LastUpdated" label="Last Updated" />
                    <NavLink href="/legacy/LastUpdatedConnected" label="Last Updated Connected" />
                    <NavLink href="/legacy/LinkSvg" label="Link Svg" />
                    <NavLink href="/legacy/ListBox" label="List Box" />
                    <NavLink href="/legacy/Member" label="Member" />
                    <NavLink href="/legacy/PaginationConnected" label="Pagination Connected" />
                    <NavLink href="/legacy/PartialStringMatch" label="Partial String Match" />
                    <NavLink href="/legacy/Refresh" label="Refesh" />
                    <NavLink href="/legacy/Separator" label="Separator" />
                    <NavLink href="/legacy/SideNavigationLoading" label="Side Navigation Loading" />
                    <NavLink href="/legacy/SlideY" label="Slide Y" />
                    <NavLink href="/legacy/SpacedBox" label="Spaced Box" />
                    <NavLink href="/legacy/transparency" label="Transparency" />
                </CollapsibleSideSection>
            </SideNavigation>
        </PathnameContext.Provider>
    );
};
