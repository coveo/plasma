import {Divider, NavLink, NavLinkProps, Navbar, ScrollArea} from '@coveord/plasma-mantine';
import {SideNavigation, SideNavigationItem, SideNavigationMenuSection} from '@coveord/plasma-react';
import {
    AnnouncementSize16Px,
    ClickSize16Px,
    DeleteSize16Px,
    DiamondSize16Px,
    ExternalSize16Px,
    HomeSize16Px,
    LayeringTechniquesSize16Px,
    RichUiSize16Px,
} from '@coveord/plasma-react-icons';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {ComponentProps, FunctionComponent, PropsWithChildren, useState} from 'react';

interface LegacyNavLinkProps {
    href?: string;
    label: string;
    disabled?: boolean;
    isActive?: boolean;
}

const LegacyNavLink: FunctionComponent<PropsWithChildren<LegacyNavLinkProps>> = ({
    href = '',
    label,
    disabled,
    isActive,
}) => {
    const {pathname} = useRouter();
    return (
        <SideNavigationItem disabled={disabled} href={href} isActive={isActive ?? pathname.endsWith(href)}>
            {disabled ? (
                <div className="navigation-menu-section">
                    <span>{label}</span>
                </div>
            ) : (
                <Link href={href} prefetch={false} className="navigation-menu-section-item-link">
                    <div className="navigation-menu-section">
                        <span>{label}</span>
                    </div>
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
            title={<LegacyNavLink label={title} isActive={false} />}
        >
            {children}
        </SideNavigationMenuSection>
    );
};

export const Navigation: FunctionComponent = () => {
    const {pathname} = useRouter();
    const isLegacy = /^\/legacy*/.test(pathname);

    return isLegacy ? <LegacyNavigation /> : <MantineNavigation />;
};

const InternalNavLink: FunctionComponent<ComponentProps<typeof Link> & Omit<NavLinkProps, 'component' | 'active'>> = (
    props,
) => {
    const {pathname} = useRouter();
    return <NavLink active={pathname === props.href} component={Link} {...props} />;
};

const MantineNavigation = () => (
    <Navbar width={{base: 245}} py="sm">
        <Navbar.Section grow component={ScrollArea} pl="xs">
            <InternalNavLink label="Home" href="/" icon={<HomeSize16Px height={16} />} />
            <NavLink
                label="Brand"
                component="a"
                href="https://brand.coveo.com/"
                target="_blank"
                icon={<AnnouncementSize16Px height={16} />}
                rightSection={<ExternalSize16Px height={16} />}
            />
            <NavLink
                label="Design principles"
                component="a"
                href="https://coveord.atlassian.net/wiki/spaces/UX/pages/2993946801/Design+principles"
                target="_blank"
                icon={<DiamondSize16Px height={16} />}
                rightSection={<ExternalSize16Px height={16} />}
            />
            <NavLink label="Foundations" icon={<LayeringTechniquesSize16Px height={16} />} defaultOpened>
                <InternalNavLink href="/foundations/Iconography" label="Iconography" />
                <InternalNavLink href="/foundations/Colors" label="Colors" />
                <InternalNavLink href="/foundations/TypeKit" label="TypeKit" />
            </NavLink>
            <NavLink label="Layout" icon={<RichUiSize16Px height={16} />} defaultOpened>
                <InternalNavLink href="/layout/Header" label="Header" />
                <InternalNavLink href="/layout/BrowserPreview" label="Browser Preview" />
                <InternalNavLink href="/layout/Table" label="Table" />
                <InternalNavLink href="/layout/Modal" label="Modal" />
                <InternalNavLink href="/layout/ModalWizard" label="ModalWizard" />
                <InternalNavLink href="/layout/Prompt" label="Prompt" />
                <InternalNavLink href="/layout/StickyFooter" label="Sticky footer" />
            </NavLink>
            <NavLink label="Form" icon={<ClickSize16Px height={16} />} defaultOpened>
                <InternalNavLink href="/form/Button" label="Button" />
                <InternalNavLink href="/form/CodeEditor" label="Code editor" />
                <InternalNavLink href="/form/Collection" label="Collection" />
                <InternalNavLink href="/form/CopyToClipboard" label="Copy to Clipboard" />
            </NavLink>
        </Navbar.Section>
        <Divider />
        <Navbar.Section>
            <InternalNavLink href="/legacy" label="Deprecated components" icon={<DeleteSize16Px height={16} />} />
        </Navbar.Section>
    </Navbar>
);

const LegacyNavigation = () => {
    const {pathname} = useRouter();
    return (
        <Navbar width={{base: 246}}>
            <Navbar.Section grow component={ScrollArea}>
                <SideNavigation>
                    <SideNavigationMenuSection
                        isActive={pathname === '/legacy'}
                        title={<LegacyNavLink href="/legacy" label="Home" />}
                    />
                    <CollapsibleSideSection title="Foundations">
                        <LegacyNavLink href="/legacy/foundations/Typekit" label="Typekit" />
                        <LegacyNavLink href="/legacy/foundations/Links" label="Links" />
                        <LegacyNavLink href="/legacy/foundations/Spacing" label="Spacing" />
                    </CollapsibleSideSection>
                    <CollapsibleSideSection title="Layout">
                        <LegacyNavLink href="/legacy/layout/Banner" label="Banner" />
                        <LegacyNavLink href="/legacy/layout/BlankSlate" label="Blankslate" />
                        <LegacyNavLink href="/legacy/layout/BorderedLine" label="Bordered line" />
                        <LegacyNavLink href="/legacy/layout/BrowserPreview" label="Browser preview" />
                        <LegacyNavLink href="/legacy/layout/Chart" label="Chart" />
                        <LegacyNavLink href="/legacy/layout/ChildForm" label="Child form" />
                        <LegacyNavLink href="/legacy/layout/Collapsible" label="Collapsible" />
                        <LegacyNavLink href="/legacy/layout/IconCard" label="Icon card" />
                        <LegacyNavLink href="/legacy/layout/InfoBox" label="Info box" />
                        <LegacyNavLink href="/legacy/layout/LabeledValue" label="Labeled value" />
                        <LegacyNavLink href="/legacy/layout/Limit" label="Limit card" />
                        <LegacyNavLink href="/legacy/layout/ModalWindow" label="Modal" />
                        <LegacyNavLink href="/legacy/layout/ModalWizard" label="Modal wizard" />
                        <LegacyNavLink href="/legacy/layout/PageHeader" label="Page header" />
                        <LegacyNavLink href="/legacy/layout/Section" label="Section" />
                        <LegacyNavLink href="/legacy/layout/SplitLayout" label="Split layout" />
                        <LegacyNavLink href="/legacy/layout/StickyFooter" label="Sticky footer" />
                        <LegacyNavLink href="/legacy/layout/Table" label="Table" />
                    </CollapsibleSideSection>
                    <CollapsibleSideSection title="Form">
                        <LegacyNavLink href="/legacy/form/ActionableItem" label="Actionable item" />
                        <LegacyNavLink href="/legacy/form/Button" label="Button" />
                        <LegacyNavLink href="/legacy/form/Checkbox" label="Checkbox" />
                        <LegacyNavLink href="/legacy/form/CodeEditor" label="Code editor" />
                        <LegacyNavLink href="/legacy/form/ColorPicker" label="Color picker" />
                        <LegacyNavLink href="/legacy/form/Countdown" label="Countdown" />
                        <LegacyNavLink href="/legacy/form/DatePicker" label="Date picker" />
                        <LegacyNavLink href="/legacy/form/DiffViewer" label="Diff viewer" />
                        <LegacyNavLink href="/legacy/form/Facet" label="Facet" />
                        <LegacyNavLink href="/legacy/form/Filepicker" label="File picker" />
                        <LegacyNavLink href="/legacy/form/FilterBox" label="Filter box" />
                        <LegacyNavLink href="/legacy/form/FlatSelect" label="Flat select" />
                        <LegacyNavLink href="/legacy/form/JSONEditor" label="JSON editor" />
                        <LegacyNavLink href="/legacy/form/MultilineBox" label="Multiline box" />
                        <LegacyNavLink href="/legacy/form/NumericInput" label="Numeric input" />
                        <LegacyNavLink href="/legacy/form/RadioButton" label="Radio button" />
                        <LegacyNavLink href="/legacy/form/SearchBar" label="Search bar" />
                        <LegacyNavLink href="/legacy/form/SingleSelect" label="Select - single" />
                        <LegacyNavLink href="/legacy/form/MultiSelect" label="Select - multi" />
                        <LegacyNavLink href="/legacy/form/Slider" label="Slider" />
                        <LegacyNavLink href="/legacy/form/TextArea" label="Text area" />
                        <LegacyNavLink href="/legacy/form/TextInput" label="Text input" />
                    </CollapsibleSideSection>
                    <CollapsibleSideSection title="Navigation">
                        <LegacyNavLink href="/legacy/navigation/Breadcrumbs" label="Breadcrumbs" />
                        <LegacyNavLink href="/legacy/navigation/SideNavigation" label="Sidebar navigation" />
                        <LegacyNavLink href="/legacy/navigation/SubNavigation" label="SubNavigation" />
                        <LegacyNavLink href="/legacy/navigation/Tabs" label="Tabs" />
                    </CollapsibleSideSection>
                    <CollapsibleSideSection title="Feedback">
                        <LegacyNavLink href="/legacy/feedback/Badge" label="Badge" />
                        <LegacyNavLink href="/legacy/feedback/ColorBar" label="Color bar" />
                        <LegacyNavLink href="/legacy/feedback/ColorDot" label="Color dot" />
                        <LegacyNavLink href="/legacy/feedback/IconBadge" label="Icon badge" />
                        <LegacyNavLink href="/legacy/feedback/LastUpdated" label="Last updated" />
                        <LegacyNavLink href="/legacy/feedback/Loading" label="Loading spinner" />
                        <LegacyNavLink href="/legacy/feedback/StepProgressBar" label="Step progress bar" />
                        <LegacyNavLink href="/legacy/feedback/SyncFeedback" label="Sync feedback" />
                        <LegacyNavLink href="/legacy/feedback/Toast" label="Toast" />
                        <LegacyNavLink href="/legacy/feedback/Tooltip" label="Tooltip" />
                    </CollapsibleSideSection>
                    <CollapsibleSideSection title="Advanced" initiallyClosed>
                        <LegacyNavLink href="/legacy/advanced/ActionBar" label="Action bar" />
                        <LegacyNavLink href="/legacy/advanced/InfoToken" label="Info token" />
                        <LegacyNavLink href="/legacy/advanced/LinkSvg" label="Link svg" />
                        <LegacyNavLink href="/legacy/advanced/ListBox" label="List box" />
                        <LegacyNavLink href="/legacy/advanced/OptionsCycle" label="Options cycle" />
                        <LegacyNavLink href="/legacy/advanced/PartialStringMatch" label="Partial string match" />
                        <LegacyNavLink href="/legacy/advanced/SlideY" label="Slide Y" />
                    </CollapsibleSideSection>
                </SideNavigation>
            </Navbar.Section>
        </Navbar>
    );
};
