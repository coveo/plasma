import {SideNavigation, SideNavigationItem, SideNavigationMenuSection} from '@coveord/plasma-react';
import {FunctionComponent, useState, PropsWithChildren} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {ExternalSize16Px} from '@coveord/plasma-react-icons';

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
                <NavLink href="/foundations/Typekit" label="Typekit" />
                <NavLink href="/foundations/Links" label="Links" />
                <NavLink href="/foundations/Spacing" label="Spacing" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Layout">
                <NavLink href="/layout/Banner" label="Banner" />
                <NavLink href="/layout/BlankSlate" label="Blankslate" />
                <NavLink href="/layout/BorderedLine" label="Bordered line" />
                <NavLink href="/layout/BrowserPreview" label="Browser preview" />
                <NavLink href="/layout/Chart" label="Chart" />
                <NavLink href="/layout/ChildForm" label="Child form" />
                <NavLink href="/layout/Collapsible" label="Collapsible" />
                <NavLink href="/layout/IconCard" label="Icon card" />
                <NavLink href="/layout/InfoBox" label="Info box" />
                <NavLink href="/layout/LabeledValue" label="Labeled value" />
                <NavLink href="/layout/Limit" label="Limit card" />
                <NavLink href="/layout/ModalWindow" label="Modal" />
                <NavLink href="/layout/ModalWizard" label="Modal wizard" />
                <NavLink href="/layout/PageHeader" label="Page header" />
                <NavLink href="/layout/Section" label="Section" />
                <NavLink href="/layout/SplitLayout" label="Split layout" />
                <NavLink href="/layout/StickyFooter" label="Sticky footer" />
                <NavLink href="/layout/Table" label="Table" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Form">
                <NavLink href="/form/ActionableItem" label="Actionable item" />
                <NavLink href="/form/Button" label="Button" />
                <NavLink href="/form/Checkbox" label="Checkbox" />
                <NavLink href="/form/CodeEditor" label="Code editor" />
                <NavLink href="/form/ColorPicker" label="Color picker" />
                <NavLink href="/form/Countdown" label="Countdown" />
                <NavLink href="/form/DatePicker" label="Date picker" />
                <NavLink href="/form/DiffViewer" label="Diff viewer" />
                <NavLink href="/form/Facet" label="Facet" />
                <NavLink href="/form/Filepicker" label="File picker" />
                <NavLink href="/form/FilterBox" label="Filter box" />
                <NavLink href="/form/FlatSelect" label="Flat select" />
                <NavLink href="/form/JSONEditor" label="JSON editor" />
                <NavLink href="/form/MultilineBox" label="Multiline box" />
                <NavLink href="/form/NumericInput" label="Numeric input" />
                <NavLink href="/form/RadioButton" label="Radio button" />
                <NavLink href="/form/SearchBar" label="Search bar" />
                <NavLink href="/form/SingleSelect" label="Select - single" />
                <NavLink href="/form/MultiSelect" label="Select - multi" />
                <NavLink href="/form/Slider" label="Slider" />
                <NavLink href="/form/TextArea" label="Text area" />
                <NavLink href="/form/TextInput" label="Text input" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Navigation">
                <NavLink href="/navigation/Breadcrumbs" label="Breadcrumbs" />
                <NavLink href="/navigation/SideNavigation" label="Sidebar navigation" />
                <NavLink href="/navigation/SubNavigation" label="SubNavigation" />
                <NavLink href="/navigation/Tabs" label="Tabs" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Feedback">
                <NavLink href="/feedback/Badge" label="Badge" />
                <NavLink href="/feedback/ColorBar" label="Color bar" />
                <NavLink href="/feedback/ColorDot" label="Color dot" />
                <NavLink href="/feedback/IconBadge" label="Icon badge" />
                <NavLink href="/feedback/LastUpdated" label="Last updated" />
                <NavLink href="/feedback/Loading" label="Loading spinner" />
                <NavLink href="/feedback/StepProgressBar" label="Step progress bar" />
                <NavLink href="/feedback/SyncFeedback" label="Sync feedback" />
                <NavLink href="/feedback/Toast" label="Toast" />
                <NavLink href="/feedback/Tooltip" label="Tooltip" />
            </CollapsibleSideSection>
            <CollapsibleSideSection title="Advanced" initiallyClosed>
                <NavLink href="/advanced/ActionBar" label="Action bar" />
                <NavLink href="/advanced/InfoToken" label="Info token" />
                <NavLink href="/advanced/LinkSvg" label="Link svg" />
                <NavLink href="/advanced/ListBox" label="List box" />
                <NavLink href="/advanced/OptionsCycle" label="Options cycle" />
                <NavLink href="/advanced/PartialStringMatch" label="Partial string match" />
                <NavLink href="/advanced/SlideY" label="Slide Y" />
            </CollapsibleSideSection>
        </SideNavigation>
    );
};
