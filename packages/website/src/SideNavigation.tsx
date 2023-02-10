import {SideNavigation, SideNavigationItem, SideNavigationMenuSection} from '@coveord/plasma-react';
import {ExternalSize16Px} from '@coveord/plasma-react-icons';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FunctionComponent, PropsWithChildren, useState} from 'react';

interface NavLinkProps {
    href?: string;
    label: string;
    disabled?: boolean;
    isActive?: boolean;
}

const NavLink: FunctionComponent<PropsWithChildren<NavLinkProps>> = ({href = '', label, disabled, isActive}) => {
    const {pathname} = useRouter();
    return (
        <SideNavigationItem disabled={disabled} href={href} isActive={isActive ?? pathname.endsWith(href)}>
            {disabled ? (
                <div className="navigation-menu-section">
                    <span>{label}</span>
                </div>
            ) : (
                <Link href={href} prefetch={false}>
                    <a href={href} className="navigation-menu-section-item-link">
                        <div className="navigation-menu-section">
                            <span>{label}</span>
                        </div>
                    </a>
                </Link>
            )}
        </SideNavigationItem>
    );
};

const CollapsibleSideSection: FunctionComponent<PropsWithChildren<{title: string; initiallyClosed?: boolean}>> = ({
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

export const Navigation: FunctionComponent = () => {
    const {pathname} = useRouter();
    const isLegacy = /^\/legacy*/.test(pathname);

    return isLegacy ? <LegacyNavigation /> : <CurrentNavigation />;
};

const CurrentNavigation = () => {
    const {pathname} = useRouter();
    return (
        <SideNavigation className="navigation-menu-sections">
            <SideNavigationMenuSection isActive={pathname === '/'} title={<NavLink href="/" label="Home" />} />
            <SideNavigationMenuSection
                title={
                    <a href="https://brand.coveo.com/" target="_blank" className="inline-flex flex-center">
                        Brand
                        <ExternalSize16Px className="ml1" />
                    </a>
                }
            />
            <SideNavigationMenuSection
                title={
                    <a
                        href="https://coveord.atlassian.net/wiki/spaces/UX/pages/2993946801/Design+principles"
                        target="_blank"
                        className="inline-flex flex-center"
                    >
                        Design principles
                        <ExternalSize16Px className="ml1" />
                    </a>
                }
            />
            <CollapsibleSideSection title="Foundations">
                <NavLink href="/foundations/Iconography" label="Iconography" />
                <NavLink href="/foundations/Colors" label="Colors" />
                <NavLink href="/foundations/TypeKit" label="TypeKit" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Layout">
                <NavLink href="/layout/Header" label="Header" />
                <NavLink href="/layout/Table" label="Table" />
                <NavLink href="/layout/Modal" label="Modal" />
                <NavLink href="/layout/ModalWizard" label="ModalWizard" />
                <NavLink href="/layout/StickyFooter" label="Sticky footer" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Form">
                <NavLink href="/form/Button" label="Button" />
                <NavLink href="/form/CodeEditor" label="Code editor" />
                <NavLink href="/form/Collection" label="Collection" />
            </CollapsibleSideSection>
            <SideNavigationMenuSection title={<NavLink href="/legacy" label="Legacy documentation" />} />
        </SideNavigation>
    );
};

const LegacyNavigation = () => {
    const {pathname} = useRouter();
    return (
        <SideNavigation>
            <SideNavigationMenuSection
                isActive={pathname === '/legacy'}
                title={<NavLink href="/legacy" label="Home" />}
            />
            <CollapsibleSideSection title="Foundations">
                <NavLink href="/legacy/foundations/Typekit" label="Typekit" />
                <NavLink href="/legacy/foundations/Links" label="Links" />
                <NavLink href="/legacy/foundations/Spacing" label="Spacing" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Layout">
                <NavLink href="/legacy/layout/Banner" label="Banner" />
                <NavLink href="/legacy/layout/BlankSlate" label="Blankslate" />
                <NavLink href="/legacy/layout/BorderedLine" label="Bordered line" />
                <NavLink href="/legacy/layout/BrowserPreview" label="Browser preview" />
                <NavLink href="/legacy/layout/Chart" label="Chart" />
                <NavLink href="/legacy/layout/ChildForm" label="Child form" />
                <NavLink href="/legacy/layout/Collapsible" label="Collapsible" />
                <NavLink href="/legacy/layout/IconCard" label="Icon card" />
                <NavLink href="/legacy/layout/InfoBox" label="Info box" />
                <NavLink href="/legacy/layout/LabeledValue" label="Labeled value" />
                <NavLink href="/legacy/layout/Limit" label="Limit card" />
                <NavLink href="/legacy/layout/ModalWindow" label="Modal" />
                <NavLink href="/legacy/layout/ModalWizard" label="Modal wizard" />
                <NavLink href="/legacy/layout/PageHeader" label="Page header" />
                <NavLink href="/legacy/layout/Section" label="Section" />
                <NavLink href="/legacy/layout/SplitLayout" label="Split layout" />
                <NavLink href="/legacy/layout/StickyFooter" label="Sticky footer" />
                <NavLink href="/legacy/layout/Table" label="Table" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Form">
                <NavLink href="/legacy/form/ActionableItem" label="Actionable item" />
                <NavLink href="/legacy/form/Button" label="Button" />
                <NavLink href="/legacy/form/Checkbox" label="Checkbox" />
                <NavLink href="/legacy/form/CodeEditor" label="Code editor" />
                <NavLink href="/legacy/form/ColorPicker" label="Color picker" />
                <NavLink href="/legacy/form/Countdown" label="Countdown" />
                <NavLink href="/legacy/form/DatePicker" label="Date picker" />
                <NavLink href="/legacy/form/DiffViewer" label="Diff viewer" />
                <NavLink href="/legacy/form/Facet" label="Facet" />
                <NavLink href="/legacy/form/Filepicker" label="File picker" />
                <NavLink href="/legacy/form/FilterBox" label="Filter box" />
                <NavLink href="/legacy/form/FlatSelect" label="Flat select" />
                <NavLink href="/legacy/form/JSONEditor" label="JSON editor" />
                <NavLink href="/legacy/form/MultilineBox" label="Multiline box" />
                <NavLink href="/legacy/form/NumericInput" label="Numeric input" />
                <NavLink href="/legacy/form/RadioButton" label="Radio button" />
                <NavLink href="/legacy/form/SearchBar" label="Search bar" />
                <NavLink href="/legacy/form/SingleSelect" label="Select - single" />
                <NavLink href="/legacy/form/MultiSelect" label="Select - multi" />
                <NavLink href="/legacy/form/Slider" label="Slider" />
                <NavLink href="/legacy/form/TextArea" label="Text area" />
                <NavLink href="/legacy/form/TextInput" label="Text input" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Navigation">
                <NavLink href="/legacy/navigation/Breadcrumbs" label="Breadcrumbs" />
                <NavLink href="/legacy/navigation/SideNavigation" label="Sidebar navigation" />
                <NavLink href="/legacy/navigation/SubNavigation" label="SubNavigation" />
                <NavLink href="/legacy/navigation/Tabs" label="Tabs" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Feedback">
                <NavLink href="/legacy/feedback/Badge" label="Badge" />
                <NavLink href="/legacy/feedback/ColorBar" label="Color bar" />
                <NavLink href="/legacy/feedback/ColorDot" label="Color dot" />
                <NavLink href="/legacy/feedback/IconBadge" label="Icon badge" />
                <NavLink href="/legacy/feedback/LastUpdated" label="Last updated" />
                <NavLink href="/legacy/feedback/Loading" label="Loading spinner" />
                <NavLink href="/legacy/feedback/StepProgressBar" label="Step progress bar" />
                <NavLink href="/legacy/feedback/SyncFeedback" label="Sync feedback" />
                <NavLink href="/legacy/feedback/Toast" label="Toast" />
                <NavLink href="/legacy/feedback/Tooltip" label="Tooltip" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Advanced" initiallyClosed>
                <NavLink href="/legacy/advanced/ActionBar" label="Action bar" />
                <NavLink href="/legacy/advanced/InfoToken" label="Info token" />
                <NavLink href="/legacy/advanced/LinkSvg" label="Link svg" />
                <NavLink href="/legacy/advanced/ListBox" label="List box" />
                <NavLink href="/legacy/advanced/OptionsCycle" label="Options cycle" />
                <NavLink href="/legacy/advanced/PartialStringMatch" label="Partial string match" />
                <NavLink href="/legacy/advanced/SlideY" label="Slide Y" />
            </CollapsibleSideSection>
        </SideNavigation>
    );
};
