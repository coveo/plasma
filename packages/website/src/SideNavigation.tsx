/* eslint-disable arrow-body-style */
import {loadGenericAnalyticsActions} from '@coveo/headless';
import {SideNavigation, SideNavigationItem, SideNavigationMenuSection, Svg} from '@coveord/plasma-react';
import React, {useContext, useState} from 'react';
import {useLocation} from 'react-router';
import {Link} from 'react-router-dom';
import {EngineContext} from './search/engine/EngineContext';

interface NavLinkProps {
    href?: string;
    label: string;
    disabled?: boolean;
    isActive?: boolean;
    sendAnalytics?: () => void;
}

// Context is more efficient than prop drilling or using useLocation() 65+ times
const PathnameContext = React.createContext('/');

const NavLink: React.FunctionComponent<NavLinkProps> = ({href = '', label, disabled, isActive, sendAnalytics}) => (
    <PathnameContext.Consumer>
        {(path) => (
            <SideNavigationItem disabled={disabled} href={href} isActive={isActive ?? path?.endsWith(href)}>
                {disabled ? (
                    <div className="navigation-menu-section">
                        <span>{label}</span>
                    </div>
                ) : (
                    <Link to={href} onClick={() => sendAnalytics()}>
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

    const engine = useContext(EngineContext);
    const {logCustomEvent} = loadGenericAnalyticsActions(engine);

    const clickEvent = (documentTitle: string, documentSubSection: string) => {
        engine.dispatch(
            logCustomEvent({
                evt: 'page view',
                type: 'open document from side nav',
                meta: {
                    documentTitle: documentTitle,
                    documentSubSection: documentSubSection,
                },
            })
        );
    };

    return (
        <PathnameContext.Provider value={pathname}>
            <SideNavigation className="navigation-menu-sections">
                <SideNavigationMenuSection isActive={pathname === '/'} title={<NavLink href="/" label="Home" />} />
                <SideNavigationMenuSection
                    title={
                        <a href="https://brand.coveo.com/" target="_blank" className="inline-flex flex-center">
                            Brand
                            <Svg svgName="external" svgClass="icon mod-20 pl1" />
                        </a>
                    }
                />
                <CollapsibleSideSection title="Foundations">
                    <NavLink
                        href="/foundations/Iconography"
                        label="Iconography"
                        sendAnalytics={() => clickEvent('Iconography', 'foundations')}
                    />
                    <NavLink
                        href="/foundations/Svg"
                        label="SVG"
                        sendAnalytics={() => clickEvent('SVG', 'foundations')}
                    />
                    <NavLink
                        href="/foundations/Headings"
                        label="Headings"
                        sendAnalytics={() => clickEvent('Headings', 'foundations')}
                    />
                    <NavLink
                        href="/foundations/Links"
                        label="Links"
                        sendAnalytics={() => clickEvent('Links', 'foundations')}
                    />
                    <NavLink
                        href="/foundations/Whitespace"
                        label="Whitespace"
                        sendAnalytics={() => clickEvent('Whitespace', 'foundations')}
                    />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Layout">
                    <NavLink
                        href="/layout/Banner"
                        label="Banner"
                        sendAnalytics={() => clickEvent('Banner', 'layout')}
                    />
                    <NavLink
                        href="/layout/BlankSlate"
                        label="Blankslate"
                        sendAnalytics={() => clickEvent('Blankslate', 'layout')}
                    />
                    <NavLink
                        href="/layout/BorderedLine"
                        label="Bordered line"
                        sendAnalytics={() => clickEvent('Bordered line', 'layout')}
                    />
                    <NavLink
                        href="/layout/BrowserPreview"
                        label="Browser preview"
                        sendAnalytics={() => clickEvent('Browser preview', 'layout')}
                    />
                    <NavLink href="/layout/Chart" label="Chart" sendAnalytics={() => clickEvent('Chart', 'layout')} />
                    <NavLink
                        href="/layout/Collapsible"
                        label="Collapsible"
                        sendAnalytics={() => clickEvent('Collapsible', 'layout')}
                    />
                    <NavLink
                        href="/layout/IconCard"
                        label="Icon card"
                        sendAnalytics={() => clickEvent('Icon card', 'layout')}
                    />
                    <NavLink
                        href="/layout/InfoBox"
                        label="Info box"
                        sendAnalytics={() => clickEvent('Info box', 'layout')}
                    />
                    <NavLink
                        href="/layout/LabeledValue"
                        label="Labeled value"
                        sendAnalytics={() => clickEvent('Labeled value', 'layout')}
                    />
                    <NavLink
                        href="/layout/Limit"
                        label="Limit card"
                        sendAnalytics={() => clickEvent('Limit card', 'layout')}
                    />
                    <NavLink
                        href="/layout/ModalWindow"
                        label="Modal"
                        sendAnalytics={() => clickEvent('Modal', 'layout')}
                    />
                    <NavLink
                        href="/layout/ModalWizard"
                        label="Modal wizard"
                        sendAnalytics={() => clickEvent('Modal wizard', 'layout')}
                    />
                    <NavLink
                        href="/layout/PageHeader"
                        label="Page header"
                        sendAnalytics={() => clickEvent('Page header', 'layout')}
                    />
                    <NavLink
                        href="/layout/Footer"
                        label="Page footer"
                        sendAnalytics={() => clickEvent('Page footer', 'layout')}
                    />
                    <NavLink
                        href="/layout/Section"
                        label="Section"
                        sendAnalytics={() => clickEvent('Section', 'layout')}
                    />
                    <NavLink
                        href="/layout/SplitLayout"
                        label="Split layout"
                        sendAnalytics={() => clickEvent('Split layout', 'layout')}
                    />
                    <NavLink
                        href="/layout/TableHOC"
                        label="Table"
                        sendAnalytics={() => clickEvent('Table', 'layout')}
                    />
                    <NavLink
                        href="/layout/TableHOCLoading"
                        label="Table loading"
                        sendAnalytics={() => clickEvent('Table loading', 'layout')}
                    />
                    <NavLink
                        href="/layout/TableHOCServer"
                        label="Table server"
                        sendAnalytics={() => clickEvent('Table server', 'layout')}
                    />
                    <NavLink
                        href="/layout/TableHOCwithBlankSlate"
                        label="Table blank slate"
                        sendAnalytics={() => clickEvent('Table blank slate', 'layout')}
                    />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Form">
                    <NavLink
                        href="/form/ActionableItem"
                        label="Actionable item"
                        sendAnalytics={() => clickEvent('Actionable item', 'form')}
                    />
                    <NavLink href="/form/Button" label="Button" sendAnalytics={() => clickEvent('Button', 'form')} />
                    <NavLink
                        href="/form/Checkbox"
                        label="Checkbox"
                        sendAnalytics={() => clickEvent('Checkbox', 'form')}
                    />
                    <NavLink
                        href="/form/ChildForm"
                        label="Child form"
                        sendAnalytics={() => clickEvent('Child form', 'form')}
                    />
                    <NavLink
                        href="/form/CodeEditor"
                        label="Code editor"
                        sendAnalytics={() => clickEvent('Code editor', 'form')}
                    />
                    <NavLink
                        href="/form/ColorPicker"
                        label="Color picker"
                        sendAnalytics={() => clickEvent('Color picker', 'form')}
                    />
                    <NavLink
                        href="/form/DatePicker"
                        label="Date picker"
                        sendAnalytics={() => clickEvent('Date picker', 'form')}
                    />
                    <NavLink
                        href="/form/DiffViewer"
                        label="Diff viewer"
                        sendAnalytics={() => clickEvent('Diff viewer', 'form')}
                    />
                    <NavLink href="/form/Facet" label="Facet" sendAnalytics={() => clickEvent('Facet', 'form')} />
                    <NavLink
                        href="/form/Filepicker"
                        label="File picker"
                        sendAnalytics={() => clickEvent('File picker', 'form')}
                    />
                    <NavLink
                        href="/form/FilterBox"
                        label="Filter box"
                        sendAnalytics={() => clickEvent('Filter box', 'form')}
                    />
                    <NavLink
                        href="/form/FlatSelect"
                        label="Flat select"
                        sendAnalytics={() => clickEvent('Flat select', 'form')}
                    />
                    <NavLink
                        href="/form/JSONEditor"
                        label="JSON editor"
                        sendAnalytics={() => clickEvent('JSON editor', 'form')}
                    />
                    <NavLink
                        href="/form/MultilineBox"
                        label="Multiline box"
                        sendAnalytics={() => clickEvent('Multiline box', 'form')}
                    />
                    <NavLink
                        href="/form/NumericInput"
                        label="Numeric input"
                        sendAnalytics={() => clickEvent('Numeric input', 'form')}
                    />
                    <NavLink
                        href="/form/RadioButton"
                        label="Radio button"
                        sendAnalytics={() => clickEvent('Radio button', 'form')}
                    />
                    <NavLink
                        href="/form/SearchBar"
                        label="Search bar"
                        sendAnalytics={() => clickEvent('Search bar', 'form')}
                    />
                    <NavLink
                        href="/form/SingleSelect"
                        label="Select - single"
                        sendAnalytics={() => clickEvent('Select - single', 'form')}
                    />
                    <NavLink
                        href="/form/MultiSelect"
                        label="Select - multi"
                        sendAnalytics={() => clickEvent('Select - multi', 'form')}
                    />
                    <NavLink href="/form/Slider" label="Slider" sendAnalytics={() => clickEvent('Slider', 'form')} />
                    <NavLink
                        href="/form/TextArea"
                        label="Text area"
                        sendAnalytics={() => clickEvent('Text area', 'form')}
                    />
                    <NavLink
                        href="/form/TextInput"
                        label="Text input"
                        sendAnalytics={() => clickEvent('Text input', 'form')}
                    />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Navigation">
                    <NavLink
                        href="/navigation/Breadcrumbs"
                        label="Breadcrumbs"
                        sendAnalytics={() => clickEvent('Breadcrumbs', 'navigation')}
                    />
                    <NavLink
                        href="/navigation/SideNavigation"
                        label="Sidebar navigation"
                        sendAnalytics={() => clickEvent('Sidebar navigation', 'navigation')}
                    />
                    <NavLink
                        href="/navigation/SubNavigation"
                        label="SubNavigation"
                        sendAnalytics={() => clickEvent('SubNavigation', 'navigation')}
                    />
                    <NavLink
                        href="/navigation/Tabs"
                        label="Tabs"
                        sendAnalytics={() => clickEvent('Tabs', 'navigation')}
                    />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Feedback">
                    <NavLink
                        href="/feedback/Badge"
                        label="Badge"
                        sendAnalytics={() => clickEvent('Badge', 'feedback')}
                    />
                    <NavLink
                        href="/feedback/ColorBar"
                        label="Color bar"
                        sendAnalytics={() => clickEvent('Color bar', 'feedback')}
                    />
                    <NavLink
                        href="/feedback/ColorDot"
                        label="Color dot"
                        sendAnalytics={() => clickEvent('Color dot', 'feedback')}
                    />
                    <NavLink
                        href="/feedback/IconBadge"
                        label="Icon badge"
                        sendAnalytics={() => clickEvent('Icon badge', 'feedback')}
                    />
                    <NavLink
                        href="/feedback/LastUpdated"
                        label="Last updated"
                        sendAnalytics={() => clickEvent('Last updated', 'feedback')}
                    />
                    <NavLink
                        href="/feedback/Loading"
                        label="Loading spinner"
                        sendAnalytics={() => clickEvent('Loading spinner', 'feedback')}
                    />
                    <NavLink
                        href="/feedback/StepProgressBar"
                        label="Step progress bar"
                        sendAnalytics={() => clickEvent('Step progress bar', 'feedback')}
                    />
                    <NavLink
                        href="/feedback/SyncFeedback"
                        label="Sync feedback"
                        sendAnalytics={() => clickEvent('Sync feedback', 'feedback')}
                    />
                    <NavLink
                        href="/feedback/Toast"
                        label="Toast"
                        sendAnalytics={() => clickEvent('Toast', 'feedback')}
                    />
                    <NavLink
                        href="/feedback/Tooltip"
                        label="Tooltip"
                        sendAnalytics={() => clickEvent('Tooltip', 'feedback')}
                    />
                </CollapsibleSideSection>
                <CollapsibleSideSection title="Advanced" initiallyClosed>
                    <NavLink
                        href="/advanced/ActionBar"
                        label="Action bar"
                        sendAnalytics={() => clickEvent('Action bar', 'advanced')}
                    />
                    <NavLink
                        href="/advanced/InfoToken"
                        label="Info token"
                        sendAnalytics={() => clickEvent('Info token', 'advanced')}
                    />
                    <NavLink
                        href="/advanced/LinkSvg"
                        label="Link svg"
                        sendAnalytics={() => clickEvent('Link svg', 'advanced')}
                    />
                    <NavLink
                        href="/advanced/ListBox"
                        label="List box"
                        sendAnalytics={() => clickEvent('List box', 'advanced')}
                    />
                    <NavLink
                        href="/advanced/OptionsCycle"
                        label="Options cycle"
                        sendAnalytics={() => clickEvent('Options cycle', 'advanced')}
                    />
                    <NavLink
                        href="/advanced/PartialStringMatch"
                        label="Partial string match"
                        sendAnalytics={() => clickEvent('Partial string match', 'advanced')}
                    />
                    <NavLink
                        href="/advanced/SlideY"
                        label="Slide Y"
                        sendAnalytics={() => clickEvent('Slide Y', 'advanced')}
                    />
                </CollapsibleSideSection>
            </SideNavigation>
        </PathnameContext.Provider>
    );
};
