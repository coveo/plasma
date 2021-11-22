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
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Layout">
                <NavLink isActive={isActive('/ActionBar')} href="/layout/ActionBar" label="Action Bar" />
                <NavLink isActive={isActive('/Banner')} href="/layout/Banner" label="Banner" />
                <NavLink isActive={isActive('/BorderedLine')} href="/layout/BorderedLine" label="Bordered Line / Row" />
                <NavLink isActive={isActive('/layout/Card')} href="/layout/Card" label="Card" />
                <NavLink
                    isActive={isActive('/CommerceConfigCard')}
                    disabled
                    href="/layout/CommerceConfigCard"
                    label="Commerce Config Card"
                />
                <NavLink isActive={isActive('/Divider')} disabled href="/layout/Divider" label="Divider" />
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
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Input">
                <NavLink
                    isActive={isActive('/ActionButton')}
                    disabled
                    href="/input/ActionButton"
                    label="Action Button"
                />
                <NavLink isActive={isActive('/ActionableItem')} href="/input/ActionableItem" label="Actionable Item" />
                <NavLink isActive={isActive('/AddRemove')} disabled href="/input/AddRemove" label="Add/Remove" />
                <NavLink isActive={isActive('/Button')} href="/input/Button" label="Button" />
                <NavLink isActive={isActive('/Checkbox')} href="/input/Checkbox" label="Checkbox" />
                <NavLink isActive={isActive('/Childform')} href="/input/Childform" label="Childform" />
                <NavLink isActive={isActive('/CodeEditor')} href="/input/CodeEditor" label="Code Editor" />
                <NavLink isActive={isActive('/DiffViewer')} href="/input/DiffViewer" label="Diff Viewer" />
                <NavLink isActive={isActive('/SingleSelect')} disabled href="/input/SingleSelect" label="Dropdown" />
                <NavLink isActive={isActive('/FilterBox')} href="/input/FilterBox" label="Filter Box" />
                <NavLink isActive={isActive('/Facet')} disabled href="/input/Facet" label="Facet" />
                <NavLink isActive={isActive('/typography/links')} href="/input/typography/links" label="Link" />
                <NavLink isActive={isActive('/MultilineBox')} href="/input/MultilineBox" label="Multiline Box" />
                <NavLink isActive={isActive('/NumericInput')} href="/input/NumericInput" label="Numeric Input" />
                <NavLink isActive={isActive('/RadioButton')} href="/input/RadioButton" label="Radio Button" />
                <NavLink isActive={isActive('/SearchBar')} href="/input/SearchBar" label="Search Bar" />
                <NavLink isActive={isActive('/Slider')} href="/input/Slider" label="Slider" />
                <NavLink isActive={isActive('/TextInput')} href="/input/TextInput" label="Text Input" />
                <NavLink isActive={isActive('/Toggle')} disabled href="/input/Toggle" label="Toggle" />
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
            <CollapsibleSideSection title="Not included">
                <NavLink
                    isActive={isActive('/ActionBarConnected')}
                    href="/not-included/ActionBarConnected"
                    label="Action Bar Connected"
                />
                <NavLink isActive={isActive('/BlankSlate')} href="/not-included/BlankSlate" label="Blankslate" />
                <NavLink
                    isActive={isActive('/BrowserPreview')}
                    href="/not-included/BrowserPreview"
                    label="Browser Preview"
                />
                <NavLink
                    isActive={isActive('/not-included/cards/home')}
                    href="/not-included/cards/home"
                    label="Card Home"
                />
                <NavLink
                    isActive={isActive('/not-included/cards/material')}
                    href="/not-included/cards/material"
                    label="Card Material"
                />
                <NavLink
                    isActive={isActive('/not-included/cards/wizard')}
                    href="/not-included/cards/wizard"
                    label="Card Wizard"
                />
                <NavLink isActive={isActive('/Chart')} href="/not-included/Chart" label="Chart" />
                <NavLink
                    isActive={isActive('/not-included/ColorDots')}
                    href="/not-included/ColorDots"
                    label="Color Dots"
                />
                <NavLink isActive={isActive('/ColorBar')} href="/not-included/ColorBar" label="Colour Bar" />
                <NavLink isActive={isActive('/ColorPicker')} href="/not-included/ColorPicker" label="Colour Picker" />
                <NavLink isActive={isActive('/not-included/Cursor')} href="/not-included/Cursor" label="Cursor" />
                <NavLink isActive={isActive('/DatePicker')} href="/not-included/DatePicker" label="Date Picker" />
                <NavLink
                    isActive={isActive('/FacetConnected')}
                    href="/not-included/FacetConnected"
                    label="Facet Connected"
                />
                <NavLink isActive={isActive('/Filepicker')} href="/not-included/Filepicker" label="File Picker" />
                <NavLink isActive={isActive('/Footer')} href="/not-included/Footer" label="Footer" />
                <NavLink isActive={isActive('/IconBadge')} href="/not-included/IconBadge" label="Icon Badge" />
                <NavLink isActive={isActive('/Item Filter')} href="/not-included/ItemFilter" label="Item Filter" />
                <NavLink
                    isActive={isActive('/ItemFilterConnected')}
                    href="/not-included/ItemFilterConnected"
                    label="Item Filter Connected"
                />
                <NavLink isActive={isActive('/JSONEditor')} href="/not-included/JSONEditor" label="JSON Editor" />
                <NavLink isActive={isActive('/LabeledValue')} href="/not-included/LabeledValue" label="Labeled Value" />
                <NavLink isActive={isActive('/LastUpdated')} href="/not-included/LastUpdated" label="Last Updated" />
                <NavLink
                    isActive={isActive('/LastUpdatedConnected')}
                    href="/not-included/LastUpdatedConnected"
                    label="Last Updated Connected"
                />
                <NavLink isActive={isActive('/LinkSvg')} href="/not-included/LinkSvg" label="Link Svg" />
                <NavLink isActive={isActive('/ListBox')} href="/not-included/ListBox" label="List Box" />
                <NavLink isActive={isActive('/not-included/Member')} href="/not-included/Member" label="Member" />
                <NavLink isActive={isActive('/ModalWizard')} href="/not-included/ModalWizard" label="Modal Wizard" />
                <NavLink isActive={isActive('/MultiSelect')} href="/not-included/MultiSelect" label="Multi Select" />
                <NavLink
                    isActive={isActive('/PaginationConnected')}
                    href="/not-included/PaginationConnected"
                    label="Pagination Connected"
                />
                <NavLink
                    isActive={isActive('/PartialstringMatch')}
                    href="/not-included/PartialstringMatch"
                    label="Partial String Match"
                />
                <NavLink isActive={isActive('/Popover')} href="/not-included/Popover" label="Popover" />
                <NavLink isActive={isActive('/Refresh')} href="/not-included/Refresh" label="Refesh" />
                <NavLink isActive={isActive('/Section')} href="/not-included/Section" label="Section" />
                <NavLink isActive={isActive('/Separator')} href="/not-included/Separator" label="Separator" />
                <NavLink
                    isActive={isActive('/SidenavigationLoading')}
                    href="/not-included/SidenavigationLoading"
                    label="Sidenavigation Loading"
                />
                <NavLink isActive={isActive('/Slidey')} href="/not-included/Slidey" label="Slidey" />
                <NavLink
                    isActive={isActive('/not-included/SpacedBox')}
                    href="/not-included/SpacedBox"
                    label="Spaced Box"
                />
                <NavLink isActive={isActive('/SVG')} href="/not-included/SVG" label="SVG" />
                <NavLink
                    isActive={isActive('/TableHOCwithBlankSlate')}
                    href="/not-included/TableHOCwithBlankSlate"
                    label="Table Blank Slate"
                />
                <NavLink
                    isActive={isActive('/TableHOCLoading')}
                    href="/not-included/TableHOCLoading"
                    label="Table Loading"
                />
                <NavLink
                    isActive={isActive('/TableHOCServer')}
                    href="/not-included/TableHOCServer"
                    label="Table Server"
                />
                <NavLink
                    isActive={isActive('/TabsConnected')}
                    href="/not-included/TabsConnected"
                    label="Tabs Connected"
                />
                <NavLink isActive={isActive('/TextArea')} href="/not-included/TextArea" label="Text Area" />
                <NavLink
                    isActive={isActive('/ToastConnected')}
                    href="/not-included/ToastConnected"
                    label="Toast Connected"
                />
                <NavLink isActive={isActive('/ToastContent')} href="/not-included/ToastContent" label="Toast Content" />
                <NavLink
                    isActive={isActive('/not-included/transparency')}
                    href="/not-included/transparency"
                    label="Transparency"
                />
                <NavLink
                    isActive={isActive('/not-included/typekit/Headings')}
                    href="/not-included/typekit/Headings"
                    label="Typekit - Headings"
                />
                <NavLink
                    isActive={isActive('/not-included/typekit/IconColors')}
                    href="/not-included/typekit/IconColors"
                    label="Typekit - Icon Colors"
                />
                <NavLink
                    isActive={isActive('/not-included/typekit/Lists')}
                    href="/not-included/typekit/Lists"
                    label="Typekit - Lists"
                />
                <NavLink
                    isActive={isActive('/not-included/typekit/Links')}
                    href="/not-included/typekit/Links"
                    label="Typekit - Links"
                />
                <NavLink
                    isActive={isActive('/not-included/typekit/TextColors')}
                    href="/not-included/typekit/TextColors"
                    label="Typekit - Text Colors"
                />
                <NavLink
                    isActive={isActive('/not-included/typekit/LineHeight')}
                    href="/not-included/typekit/LineHeight"
                    label="Typekit - Line Height"
                />
                <NavLink
                    isActive={isActive('/not-included/typekit/Utilities')}
                    href="/not-included/typekit/Utilities"
                    label="Typekit - Utilities"
                />
                <NavLink
                    isActive={isActive('/not-included/typekit/Whitespace')}
                    href="/not-included/typekit/Whitespace"
                    label="Typekit - Whitespace"
                />
            </CollapsibleSideSection>
        </SideNavigation>
    );
};
