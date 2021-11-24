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

const NavLink: React.FunctionComponent<NavLinkProps> = ({href, label, disabled, isActive}) => {
    return (
        <SideNavigationItem isActive={isActive} disabled={disabled} href={href}>
            {disabled ? (
                <div className="navigation-menu-section">{label}</div>
            ) : (
                <Link to={href}>
                    <div className="navigation-menu-section">{label}</div>
                </Link>
            )}
        </SideNavigationItem>
    );
};

const CollapsibleSideSection: React.FC<{title: string}> = ({title, children}) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <SideNavigationMenuSection
            expandable
            expanded={expanded}
            onClick={() => setExpanded(!expanded)}
            title={<NavLink label={title} />}
        >
            {children}
        </SideNavigationMenuSection>
    );
};

export const Navigation: React.FunctionComponent = () => {
    const {pathname} = useLocation();

    const isActive = (route: string) => pathname.endsWith(route);

    return (
        <SideNavigation className="navigation-menu-sections">
            <SideNavigationMenuSection isActive={pathname === '/'} title={<NavLink href="/" label="Home" />} />
            <SideNavigationMenuSection
                isActive={pathname === '/brand'}
                title={<NavLink href="/brand" label="Brand" />}
            />
            <CollapsibleSideSection title="Foundations">
                <NavLink
                    isActive={pathname.includes('/Effects')}
                    disabled
                    href="/foundations/Effects"
                    label="Effects"
                />
                <NavLink isActive={isActive('/Iconography')} href="/foundations/Iconography" label="Iconography" />
                <NavLink
                    isActive={isActive('/Illustration')}
                    disabled
                    href="/foundations/Illustration"
                    label="Illustration"
                />
                <NavLink isActive={isActive('/Palette')} disabled href="/foundations/Palette" label="Palette" />
                <NavLink isActive={isActive('/Typekit')} disabled href="/foundations/Typekit" label="Typekit" />
                <NavLink
                    isActive={isActive('/foundations/typekit/Headings')}
                    href="/foundations/typekit/Headings"
                    label="Typekit - Headings"
                />
                <NavLink
                    isActive={isActive('/foundations/typekit/IconColors')}
                    href="/foundations/typekit/IconColors"
                    label="Typekit - Icon Colors"
                />
                <NavLink
                    isActive={isActive('/foundations/typekit/Lists')}
                    href="/foundations/typekit/Lists"
                    label="Typekit - Lists"
                />
                <NavLink
                    isActive={isActive('/foundations/typekit/Links')}
                    href="/foundations/typekit/Links"
                    label="Typekit - Links"
                />
                <NavLink
                    isActive={isActive('/foundations/typekit/TextColors')}
                    href="/foundations/typekit/TextColors"
                    label="Typekit - Text Colors"
                />
                <NavLink
                    isActive={isActive('/foundations/typekit/LineHeight')}
                    href="/foundations/typekit/LineHeight"
                    label="Typekit - Line Height"
                />
                <NavLink
                    isActive={isActive('/foundations/typekit/Utilities')}
                    href="/foundations/typekit/Utilities"
                    label="Typekit - Utilities"
                />
                <NavLink
                    isActive={isActive('/foundations/typekit/Whitespace')}
                    href="/foundations/typekit/Whitespace"
                    label="Typekit - Whitespace"
                />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Layout">
                <NavLink isActive={isActive('/ActionBar')} href="/layout/ActionBar" label="Action Bar" />
                <NavLink
                    isActive={isActive('/ActionBarConnected')}
                    href="/layout/ActionBarConnected"
                    label="Action Bar Connected"
                />
                <NavLink isActive={isActive('/Banner')} href="/layout/Banner" label="Banner" />
                <NavLink isActive={isActive('/BlankSlate')} href="/layout/BlankSlate" label="Blankslate" />
                <NavLink isActive={isActive('/BorderedLine')} href="/layout/BorderedLine" label="Bordered Line / Row" />
                <NavLink isActive={isActive('/layout/Card')} href="/layout/Card" label="Card" />
                <NavLink
                    isActive={isActive('/CommerceConfigCard')}
                    disabled
                    href="/layout/CommerceConfigCard"
                    label="Commerce Config Card"
                />
                <NavLink isActive={isActive('/Divider')} disabled href="/layout/Divider" label="Divider" />
                <NavLink isActive={isActive('/Footer')} href="/layout/Footer" label="Footer" />
                <NavLink isActive={isActive('/IconCard')} href="/layout/IconCard" label="Icon / Logo Card" />
                <NavLink isActive={isActive('/ModalWindow')} href="/layout/ModalWindow" label="Modal" />
                <NavLink isActive={isActive('/PageHeader')} href="/layout/PageHeader" label="Page Header" />
                <NavLink isActive={isActive('/TopBar')} disabled href="/layout/TopBar" label="Top Bar" />
                <NavLink
                    isActive={isActive('/SearchResultCard')}
                    disabled
                    href="/layout/SearchResultCard"
                    label="Search Result Card"
                />
                <NavLink isActive={isActive('/SplitLayout')} href="/layout/SplitLayout" label="Split Layout" />
                <NavLink isActive={isActive('/TableHOC')} href="/layout/TableHOC" label="Table" />
                <NavLink
                    isActive={isActive('/TableHOCwithBlankSlate')}
                    href="/layout/TableHOCwithBlankSlate"
                    label="Table Blank Slate"
                />
                <NavLink isActive={isActive('/TableHOCLoading')} href="/layout/TableHOCLoading" label="Table Loading" />
                <NavLink isActive={isActive('/TableHOCServer')} href="/layout/TableHOCServer" label="Table Server" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Input">
                <NavLink isActive={isActive('/ActionableItem')} href="/input/ActionableItem" label="Actionable Item" />
                <NavLink
                    isActive={isActive('/ActionButton')}
                    disabled
                    href="/input/ActionButton"
                    label="Action Button"
                />
                <NavLink isActive={isActive('/AddRemove')} disabled href="/input/AddRemove" label="Add/Remove" />
                <NavLink isActive={isActive('/Button')} href="/input/Button" label="Button" />
                <NavLink isActive={isActive('/Checkbox')} href="/input/Checkbox" label="Checkbox" />
                <NavLink isActive={isActive('/Childform')} href="/input/Childform" label="Childform" />
                <NavLink isActive={isActive('/CodeEditor')} href="/input/CodeEditor" label="Code Editor" />
                <NavLink isActive={isActive('/DatePicker')} href="/input/DatePicker" label="Date Picker" />
                <NavLink isActive={isActive('/DiffViewer')} href="/input/DiffViewer" label="Diff Viewer" />
                <NavLink isActive={isActive('/Facet')} disabled href="/input/Facet" label="Facet" />
                <NavLink isActive={isActive('/Filepicker')} href="/input/Filepicker" label="File Picker" />
                <NavLink isActive={isActive('/FilterBox')} href="/input/FilterBox" label="Filter Box" />
                <NavLink isActive={isActive('/JSONEditor')} href="/input/JSONEditor" label="JSON Editor" />
                <NavLink isActive={isActive('/MultilineBox')} href="/input/MultilineBox" label="Multiline Box" />
                <NavLink isActive={isActive('/NumericInput')} href="/input/NumericInput" label="Numeric Input" />
                <NavLink isActive={isActive('/RadioButton')} href="/input/RadioButton" label="Radio Button" />
                <NavLink isActive={isActive('/SearchBar')} href="/input/SearchBar" label="Search Bar" />
                <NavLink isActive={isActive('/Section')} href="/input/Section" label="Section" />
                <NavLink isActive={isActive('/MultiSelect')} href="/input/MultiSelect" label="Select - Multi" />
                <NavLink isActive={isActive('/SingleSelect')} href="/input/SingleSelect" label="Select - Single" />
                <NavLink isActive={isActive('/Slider')} href="/input/Slider" label="Slider" />
                <NavLink isActive={isActive('/TextInput')} href="/input/TextInput" label="Text Input" />
                <NavLink isActive={isActive('/Toggle')} disabled href="/input/Toggle" label="Toggle" />
                <NavLink isActive={isActive('/typography/links')} href="/input/typography/links" label="Link" />
                <NavLink isActive={isActive('/ValuePopup')} href="/input/ValuePopup" label="Value Popup" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Navigation">
                <NavLink isActive={isActive('/Breadcrumbs')} href="/navigation/Breadcrumbs" label="Breadcrumbs" />
                <NavLink isActive={isActive('/FlatSelect')} href="/navigation/FlatSelect" label="Flat Select" />
                <NavLink isActive={isActive('/OptionsCycle')} href="/navigation/OptionsCycle" label="Options Cycle" />
                <NavLink isActive={isActive('/Pagination')} href="/navigation/Pagination" label="Pagination" />
                <NavLink
                    isActive={isActive('/SideNavigation')}
                    href="/navigation/SideNavigation"
                    label="Sidebar Navigation"
                />
                <NavLink isActive={isActive('/Subnavigation')} href="/navigation/Subnavigation" label="Subnavigation" />
                <NavLink isActive={isActive('/Tabs')} href="/navigation/Tabs" label="Tabs" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Feedback and Info">
                <NavLink isActive={isActive('/Badge')} href="/feedback-and-info/Badge" label="Tab / Badge" />
                <NavLink isActive={isActive('/InfoToken')} href="/feedback-and-info/InfoToken" label="Info Token" />
                <NavLink isActive={isActive('/InfoBox')} href="/feedback-and-info/InfoBox" label="InfoBox" />
                <NavLink isActive={isActive('/Limit')} href="/feedback-and-info/Limit" label="Limit Card" />
                <NavLink
                    isActive={isActive('/Prompt')}
                    disabled
                    href="/feedback-and-info/Prompt"
                    label="Prompt Modals"
                />
                <NavLink isActive={isActive('/Loading')} href="/feedback-and-info/Loading" label="Spinner / Loader" />
                <NavLink isActive={isActive('/Popover')} href="/feedback-and-info/Popover" label="Popover" />
                <NavLink
                    isActive={isActive('/ProgressBar')}
                    href="/feedback-and-info/ProgressBar"
                    label="Progress Bar"
                />
                <NavLink isActive={isActive('/StatusCard')} href="/feedback-and-info/StatusCard" label="Status Card" />
                <NavLink
                    isActive={isActive('/StatusToken')}
                    disabled
                    href="/feedback-and-info/StatusToken"
                    label="Status Token"
                />
                <NavLink
                    isActive={isActive('/StatusWidget')}
                    disabled
                    href="/feedback-and-info/StatusWidget"
                    label="Status Widget"
                />
                <NavLink
                    isActive={isActive('/StepProgressBar')}
                    href="/feedback-and-info/StepProgressBar"
                    label="Step / Progress Bar"
                />
                <NavLink
                    isActive={isActive('/SyncFeedback')}
                    href="/feedback-and-info/SyncFeedback"
                    label="Sync Feedback"
                />
                <NavLink isActive={isActive('/Toast')} href="/feedback-and-info/Toast" label="Toast" />
                <NavLink
                    isActive={isActive('/ToastConnected')}
                    href="/feedback-and-info/ToastConnected"
                    label="Toast Connected"
                />
                <NavLink
                    isActive={isActive('/ToastContent')}
                    href="/feedback-and-info/ToastContent"
                    label="Toast Content"
                />
                <NavLink isActive={isActive('/Tooltip')} href="/feedback-and-info/Tooltip" label="Tooltip" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Display & Utilities">
                <NavLink isActive={isActive('/borders')} href="/display-and-utilities/borders" label="Border" />
                <NavLink
                    isActive={isActive('/Collapsible')}
                    href="/display-and-utilities/Collapsible"
                    label="Collapsible"
                />
                <NavLink
                    isActive={isActive('/CoveoExpLoader')}
                    href="/display-and-utilities/CoveoExpLoader"
                    label="Coveo Exp. Loader"
                    disabled
                />
                <NavLink
                    isActive={isActive('/RichPopover')}
                    disabled
                    href="/display-and-utilities/RichPopover"
                    label="Rich Popover"
                />
                <NavLink
                    isActive={isActive('/SkeletonBlur')}
                    disabled
                    href="/display-and-utilities/SkeletonBlur"
                    label="Skeleton Blur"
                />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Legacy">
                <NavLink isActive={isActive('/BrowserPreview')} href="/legacy/BrowserPreview" label="Browser Preview" />
                <NavLink isActive={isActive('/legacy/cards/home')} href="/legacy/cards/home" label="Card Home" />
                <NavLink
                    isActive={isActive('/legacy/cards/material')}
                    href="/legacy/cards/material"
                    label="Card Material"
                />
                <NavLink isActive={isActive('/legacy/cards/wizard')} href="/legacy/cards/wizard" label="Card Wizard" />
                <NavLink isActive={isActive('/Chart')} href="/legacy/Chart" label="Chart" />
                <NavLink isActive={isActive('/legacy/ColorDots')} href="/legacy/ColorDots" label="Color Dots" />
                <NavLink isActive={isActive('/ColorBar')} href="/legacy/ColorBar" label="Colour Bar" />
                <NavLink isActive={isActive('/ColorPicker')} href="/legacy/ColorPicker" label="Colour Picker" />
                <NavLink isActive={isActive('/legacy/Cursor')} href="/legacy/Cursor" label="Cursor" />
                <NavLink isActive={isActive('/FacetConnected')} href="/legacy/FacetConnected" label="Facet Connected" />

                <NavLink isActive={isActive('/IconBadge')} href="/legacy/IconBadge" label="Icon Badge" />
                <NavLink isActive={isActive('/Item Filter')} href="/legacy/ItemFilter" label="Item Filter" />
                <NavLink
                    isActive={isActive('/ItemFilterConnected')}
                    href="/legacy/ItemFilterConnected"
                    label="Item Filter Connected"
                />
                <NavLink isActive={isActive('/LabeledValue')} href="/legacy/LabeledValue" label="Labeled Value" />
                <NavLink isActive={isActive('/LastUpdated')} href="/legacy/LastUpdated" label="Last Updated" />
                <NavLink
                    isActive={isActive('/LastUpdatedConnected')}
                    href="/legacy/LastUpdatedConnected"
                    label="Last Updated Connected"
                />
                <NavLink isActive={isActive('/LinkSvg')} href="/legacy/LinkSvg" label="Link Svg" />
                <NavLink isActive={isActive('/ListBox')} href="/legacy/ListBox" label="List Box" />
                <NavLink isActive={isActive('/legacy/Member')} href="/legacy/Member" label="Member" />
                <NavLink isActive={isActive('/ModalWizard')} href="/legacy/ModalWizard" label="Modal Wizard" />
                <NavLink
                    isActive={isActive('/PaginationConnected')}
                    href="/legacy/PaginationConnected"
                    label="Pagination Connected"
                />
                <NavLink
                    isActive={isActive('/PartialstringMatch')}
                    href="/legacy/PartialstringMatch"
                    label="Partial String Match"
                />
                <NavLink isActive={isActive('/Refresh')} href="/legacy/Refresh" label="Refesh" />
                <NavLink isActive={isActive('/Separator')} href="/legacy/Separator" label="Separator" />
                <NavLink
                    isActive={isActive('/SidenavigationLoading')}
                    href="/legacy/SidenavigationLoading"
                    label="Sidenavigation Loading"
                />
                <NavLink isActive={isActive('/Slidey')} href="/legacy/Slidey" label="Slidey" />
                <NavLink isActive={isActive('/legacy/SpacedBox')} href="/legacy/SpacedBox" label="Spaced Box" />
                <NavLink isActive={isActive('/SVG')} href="/legacy/SVG" label="SVG" />
                <NavLink isActive={isActive('/TabsConnected')} href="/legacy/TabsConnected" label="Tabs Connected" />
                <NavLink isActive={isActive('/TextArea')} href="/legacy/TextArea" label="Text Area" />
                <NavLink isActive={isActive('/legacy/transparency')} href="/legacy/transparency" label="Transparency" />
            </CollapsibleSideSection>
        </SideNavigation>
    );
};
