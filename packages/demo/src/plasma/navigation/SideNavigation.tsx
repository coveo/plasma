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
                <NavLink isActive={pathname.includes('/Effects')} disabled href="/components/Effect" label="Effects" />
                <NavLink isActive={isActive('/icons/list')} href="/styles/icons/list" label="Iconography" />
                <NavLink
                    isActive={isActive('/Illustration')}
                    disabled
                    href="/components/Illustration"
                    label="Illustration"
                />
                <NavLink isActive={isActive('/Palette')} disabled href="/components/Palette" label="Palette" />
                <NavLink isActive={isActive('/Typekit')} disabled href="/components/Typekit" label="Typekit" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Layout">
                <NavLink isActive={isActive('/ActionBar')} href="/components/ActionBar" label="Action Bar" />
                <NavLink isActive={isActive('/Banner')} href="/components/Banner" label="Banner" />
                <NavLink
                    isActive={isActive('/BorderedLine')}
                    href="/components/BorderedLine"
                    label="Bordered Line / Row"
                />
                <NavLink isActive={isActive('/cards/card')} href="/styles/cards/card" label="Card" />
                <NavLink
                    isActive={isActive('/CommerceConfigCard')}
                    disabled
                    href="/components/CommerceConfigCard"
                    label="Commerce Config Card"
                />
                <NavLink isActive={isActive('/Divider')} disabled href="/components/Divider" label="Divider" />
                <NavLink isActive={isActive('/IconCard')} href="/components/IconCard" label="Icon / Logo Card" />
                <NavLink isActive={isActive('/ModalWindow')} href="/components/ModalWindow" label="Modal" />
                <NavLink isActive={isActive('/headers/site')} href="/styles/headers/site" label="Page Header" />
                <NavLink isActive={isActive('/TopBar')} disabled href="/components/TopBar" label="Top Bar" />
                <NavLink
                    isActive={isActive('/SearchResultCard')}
                    disabled
                    href="/components/SearchResultCard"
                    label="Search Result Card"
                />
                <NavLink isActive={isActive('/SplitLayout')} href="/components/SplitLayout" label="Split Layout" />
                <NavLink isActive={isActive('/TableHOC')} href="/components/TableHOC" label="Table" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Input">
                <NavLink
                    isActive={isActive('/ActionButton')}
                    disabled
                    href="/components/ActionButton"
                    label="Action Button"
                />
                <NavLink
                    isActive={isActive('/ActionableItem')}
                    href="/components/ActionableItem"
                    label="Actionable Item"
                />
                <NavLink isActive={isActive('/AddRemove')} disabled href="/components/AddRemove" label="Add/Remove" />
                <NavLink isActive={isActive('/Button')} href="/components/Button" label="Button" />
                <NavLink isActive={isActive('/Checkbox')} href="/components/Checkbox" label="Checkbox" />
                <NavLink isActive={isActive('/Childform')} href="/components/Childform" label="Childform" />
                <NavLink isActive={isActive('/CodeEditor')} href="/components/CodeEditor" label="Code Editor" />
                <NavLink isActive={isActive('/DiffViewer')} href="/components/DiffViewer" label="Diff Viewer" />
                <NavLink
                    isActive={isActive('/SingleSelect')}
                    disabled
                    href="/components/SingleSelect"
                    label="Dropdown"
                />
                <NavLink isActive={isActive('/FilterBox')} href="/components/FilterBox" label="Filter Box" />
                <NavLink isActive={isActive('/Facet')} disabled href="/components/Facet" label="Facet" />
                <NavLink isActive={isActive('/typography/links')} href="/styles/typography/links" label="Link" />
                <NavLink isActive={isActive('/MultilineBox')} href="/components/MultilineBox" label="Multiline Box" />
                <NavLink isActive={isActive('/NumericInput')} href="/components/NumericInput" label="Numeric Input" />
                <NavLink isActive={isActive('/RadioButton')} href="/components/RadioButton" label="Radio Button" />
                <NavLink isActive={isActive('/SearchBar')} href="/components/SearchBar" label="Search Bar" />
                <NavLink isActive={isActive('/Slider')} href="/components/Slider" label="Slider" />
                <NavLink isActive={isActive('/TextInput')} href="/components/TextInput" label="Text Input" />
                <NavLink isActive={isActive('/Toggle')} disabled href="/components/Toggle" label="Toggle" />
                <NavLink
                    isActive={isActive('/filtering/value-popup')}
                    href="/styles/filtering/value-popup"
                    label="Value Popup"
                />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Navigation">
                <NavLink isActive={isActive('/FlatSelect')} href="/components/FlatSelect" label="Flat Select" />
                <NavLink isActive={isActive('/OptionsCycle')} href="/components/OptionsCycle" label="Options Cycle" />
                <NavLink isActive={isActive('/Header')} href="/components/Header" label="Page Title / Breadcrumbs" />
                <NavLink isActive={isActive('/Pagination')} href="/components/Pagination" label="Pagination" />
                <NavLink
                    isActive={isActive('/SideNavigation')}
                    href="/components/SideNavigation"
                    label="Sidebar Navigation"
                />
                <NavLink isActive={isActive('/Subnavigation')} href="/components/Subnavigation" label="Subnavigation" />
                <NavLink isActive={isActive('/Tabs')} href="/components/Tabs" label="Tabs" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Feedback and Info">
                <NavLink isActive={isActive('/Badge')} href="/components/Badge" label="Tab / Badge" />
                <NavLink isActive={isActive('/InfoToken')} href="/components/InfoToken" label="Info Token" />
                <NavLink isActive={isActive('/InfoBox')} href="/components/InfoBox" label="InfoBox" />
                <NavLink isActive={isActive('/Limit')} href="/components/Limit" label="Limit Card" />
                <NavLink isActive={isActive('/Prompt')} disabled href="/components/Prompt" label="Prompt Modals" />
                <NavLink isActive={isActive('/Loading')} href="/components/Loading" label="Spinner / Loader" />
                <NavLink
                    isActive={isActive('/progress-bar')}
                    href="/styles/form-controls/progress-bar"
                    label="Progress Bar"
                />
                <NavLink isActive={isActive('/StatusCard')} href="/components/StatusCard" label="Status Card" />
                <NavLink isActive={isActive('/StatusToken')} disabled href="/StatusToken" label="Status Token" />
                <NavLink isActive={isActive('/StatusWidget')} disabled href="/StatusWidget" label="Status Widget" />
                <NavLink isActive={isActive('/StepProgressBar')} href="/StepProgressBar" label="Step / Progress Bar" />
                <NavLink isActive={isActive('/SyncFeedback')} href="/components/SyncFeedback" label="Sync Feedback" />
                <NavLink isActive={isActive('/Toast')} href="/components/Toast" label="Toast" />
                <NavLink isActive={isActive('/Tooltip')} href="/components/Tooltip" label="Tooltip" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Display & Utilities">
                <NavLink isActive={isActive('/borders')} href="/styles/borders" label="Border" />
                <NavLink isActive={isActive('/Collapsible')} href="/components/Collapsible" label="Collapsible" />
                <NavLink
                    isActive={isActive('/CoveoExpLoader')}
                    href="/components/CoveoExpLoader"
                    label="Coveo Exp. Loader"
                    disabled
                />
                <NavLink
                    isActive={isActive('/RichPopover')}
                    disabled
                    href="/components/RichPopover"
                    label="Rich Popover"
                />
                <NavLink
                    isActive={isActive('/SkeletonBlur')}
                    disabled
                    href="/components/SkeletonBlur"
                    label="Skeleton Blur"
                />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Not included">
                <NavLink
                    isActive={isActive('/ActionBarConnected')}
                    href="/components/ActionBarConnected"
                    label="Action Bar Connected"
                />
                <NavLink isActive={isActive('/BlankSlate')} href="/components/BlankSlate" label="Blankslate" />
                <NavLink
                    isActive={isActive('/BrowserPreview')}
                    href="/components/BrowserPreview"
                    label="Browser Preview"
                />
                <NavLink isActive={isActive('/styles/cards/home')} href="/styles/cards/home" label="Card Home" />
                <NavLink
                    isActive={isActive('/styles/cards/material')}
                    href="/styles/cards/material"
                    label="Card Material"
                />
                <NavLink isActive={isActive('/styles/cards/wizard')} href="/styles/cards/wizard" label="Card Wizard" />
                <NavLink isActive={isActive('/Chart')} href="/components/Chart" label="Chart" />
                <NavLink
                    isActive={isActive('/styles/utility/color-dots')}
                    href="/styles/utility/color-dots"
                    label="Color Dots"
                />
                <NavLink isActive={isActive('/ColorBar')} href="/components/ColorBar" label="Colour Bar" />
                <NavLink isActive={isActive('/ColorPicker')} href="/components/ColorPicker" label="Colour Picker" />
                <NavLink isActive={isActive('/styles/utility/cursor')} href="/styles/utility/cursor" label="Cursor" />
                <NavLink isActive={isActive('/DatePicker')} href="/components/DatePicker" label="Date Picker" />
                <NavLink
                    isActive={isActive('/FacetConnected')}
                    href="/components/FacetConnected"
                    label="Facet Connected"
                />
                <NavLink isActive={isActive('/Filepicker')} href="/components/Filepicker" label="File Picker" />
                <NavLink isActive={isActive('/Footer')} href="/components/Footer" label="Footer" />
                <NavLink isActive={isActive('/IconBadge')} href="/components/IconBadge" label="Icon Badge" />
                <NavLink isActive={isActive('/Item Filter')} href="/components/Item Filter" label="Item Filter" />
                <NavLink
                    isActive={isActive('/ItemFilterConnected')}
                    href="/components/ItemFilterConnected"
                    label="Item Filter Connected"
                />
                <NavLink isActive={isActive('/JSONEditor')} href="/components/JSONEditor" label="JSON Editor" />
                <NavLink isActive={isActive('/LabeledValue')} href="/components/LabeledValue" label="Labeled Value" />
                <NavLink isActive={isActive('/LastUpdated')} href="/components/LastUpdated" label="Last Updated" />
                <NavLink
                    isActive={isActive('/LastUpdatedConnected')}
                    href="/components/LastUpdatedConnected"
                    label="Last Updated Connected"
                />
                <NavLink isActive={isActive('/LinkSvg')} href="/components/LinkSvg" label="Link Svg" />
                <NavLink isActive={isActive('/ListBox')} href="/components/ListBox" label="List Box" />
                <NavLink
                    isActive={isActive('/styles/components/member')}
                    href="/styles/components/member"
                    label="Member"
                />
                <NavLink isActive={isActive('/ModalWizard')} href="/components/ModalWizard" label="Modal Wizard" />
                <NavLink isActive={isActive('/MultiSelect')} href="/components/MultiSelect" label="Multi Select" />
                <NavLink
                    isActive={isActive('/PaginationConnected')}
                    href="/components/PaginationConnected"
                    label="Pagination Connected"
                />
                <NavLink
                    isActive={isActive('/PartialstringMatch')}
                    href="/components/PartialstringMatch"
                    label="Partialstring Match"
                />
                <NavLink isActive={isActive('/Popover')} href="/components/Popover" label="Popover" />
                <NavLink isActive={isActive('/Refresh')} href="/components/Refresh" label="Refesh" />
                <NavLink isActive={isActive('/Section')} href="/components/Section" label="Section" />
                <NavLink isActive={isActive('/Separator')} href="/components/Separator" label="Separator" />
                <NavLink
                    isActive={isActive('/SidenavigationLoading')}
                    href="/components/SidenavigationLoading"
                    label="Sidenavigation Loading"
                />
                <NavLink isActive={isActive('/Slidey')} href="/components/Slidey" label="Slidey" />
                <NavLink
                    isActive={isActive('/styles/layout/spaced-box')}
                    href="/styles/layout/spaced-box"
                    label="Spaced Box"
                />
                <NavLink isActive={isActive('/SVG')} href="/components/SVG" label="SVG" />
                <NavLink
                    isActive={isActive('/TableHOCwithBlankSlate')}
                    href="/components/TableHOCwithBlankSlate"
                    label="Table Blank Slate"
                />
                <NavLink
                    isActive={isActive('/TableHOCLoading')}
                    href="/components/TableHOCLoading"
                    label="Table Loading"
                />
                <NavLink
                    isActive={isActive('/TableHOCServer')}
                    href="/components/TableHOCServer"
                    label="Table Server"
                />
                <NavLink
                    isActive={isActive('/TabsConnected')}
                    href="/components/TabsConnected"
                    label="Tabs Connected"
                />
                <NavLink isActive={isActive('/TextArea')} href="/components/TextArea" label="Text Area" />
                <NavLink
                    isActive={isActive('/ToastConnected')}
                    href="/components/ToastConnected"
                    label="Toast Connected"
                />
                <NavLink isActive={isActive('/ToastContent')} href="/components/ToastContent" label="Toast Content" />
                <NavLink isActive={isActive('/styles/transparency')} href="/styles/transparency" label="Transparency" />
                <NavLink
                    isActive={isActive('/styles/typography/headings')}
                    href="/styles/typography/headings"
                    label="Typekit - Headings"
                />
                <NavLink
                    isActive={isActive('/styles/utility/icon-colors')}
                    href="/styles/utility/icon-colors"
                    label="Typekit - Icon Colors"
                />
                <NavLink
                    isActive={isActive('/styles/typography/lists')}
                    href="/styles/typography/lists"
                    label="Typekit - Lists"
                />
                <NavLink
                    isActive={isActive('/styles/utility/text-colors')}
                    href="/styles/utility/text-colors"
                    label="Typekit - Text Colors"
                />
                <NavLink
                    isActive={isActive('/styles/utility/line-height')}
                    href="/styles/utility/line-height"
                    label="Typekit - Text Size"
                />
                <NavLink
                    isActive={isActive('/styles/typography/utilities')}
                    href="/styles/typography/utilities"
                    label="Typekit - Utilities"
                />
                <NavLink
                    isActive={isActive('/styles/utility/whitespace')}
                    href="/styles/utility/whitespace"
                    label="Typekit - Whitespace"
                />
            </CollapsibleSideSection>
        </SideNavigation>
    );
};
