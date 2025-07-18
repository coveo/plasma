import {AppShell, Image, NavLink, NavLinkProps, ScrollArea} from '@coveord/plasma-mantine';
import {
    AnnouncementSize16Px,
    CalendarSize16Px,
    ClickSize16Px,
    DiamondSize16Px,
    ExternalSize16Px,
    HomeSize16Px,
    LayeringTechniquesSize16Px,
    RichUiSize16Px,
} from '@coveord/plasma-react-icons';
import {FunctionComponent, JSX} from 'react';
import {Link, LinkProps, useMatch} from 'react-router-dom';

import MantineLogo from './assets/mantine-logo.svg';

const mantinePages = import.meta.glob<() => JSX.Element>('./pages/mantine/**/*.tsx', {import: 'default'});

const InternalNavLink: FunctionComponent<
    Omit<LinkProps, 'color' | 'onChange' | 'style'> & Omit<NavLinkProps, 'component' | 'active'>
> = (props) => {
    const match = useMatch(`${props.to}/*`);
    return <NavLink component={Link} active={!!match} {...props} />;
};

export const Navigation = () => (
    <AppShell.Section grow component={ScrollArea} pl="xs" pt="sm">
        <InternalNavLink label="Home" to="/" leftSection={<HomeSize16Px height={16} />} />
        <NavLink
            label="Brand"
            component="a"
            href="https://brand.coveo.com/"
            target="_blank"
            leftSection={<AnnouncementSize16Px height={16} />}
            rightSection={<ExternalSize16Px height={16} />}
        />
        <NavLink
            label="Design principles"
            component="a"
            href="https://coveord.atlassian.net/wiki/spaces/UX/pages/2993946801/Design+principles"
            target="_blank"
            leftSection={<DiamondSize16Px height={16} />}
            rightSection={<ExternalSize16Px height={16} />}
        />
        <NavLink label="Foundations" leftSection={<LayeringTechniquesSize16Px height={16} />} defaultOpened>
            <InternalNavLink to="/foundations/Colors" label="Colors" />
            <InternalNavLink to="/foundations/Iconography" label="Iconography" />
            <InternalNavLink to="/foundations/TypeKit" label="TypeKit" />
        </NavLink>
        <NavLink label="Layout" leftSection={<RichUiSize16Px height={16} />} defaultOpened>
            <InternalNavLink to="/layout/BrowserPreview" label="Browser Preview" />
            <InternalNavLink to="/layout/EllipsisText" label="Ellipsis text" />
            <InternalNavLink to="/layout/Header" label="Header" />
            <InternalNavLink to="/layout/Modal" label="Modal" />
            <InternalNavLink to="/layout/Prompt" label="Prompt" />
            <InternalNavLink to="/layout/StickyFooter" label="Sticky footer" />
            <InternalNavLink to="/layout/Table" label="Table" />
        </NavLink>
        <NavLink label="Form" leftSection={<ClickSize16Px height={16} />} defaultOpened>
            <InternalNavLink to="/form/ActionIcon" label="Action Icon" />
            <InternalNavLink to="/form/Button" label="Button" />
            <InternalNavLink to="/form/CodeEditor" label="Code editor" />
            <InternalNavLink to="/form/Collection" label="Collection" />
            <InternalNavLink to="/form/CopyToClipboard" label="Copy to Clipboard" />
            <InternalNavLink to="/form/Form" label="Form" />
            <InternalNavLink to="/form/ChildForm" label="Child Form" />
            <InternalNavLink to="/form/InlineConfirm" label="Inline confirm" />
        </NavLink>
        <NavLink label="Date range" leftSection={<CalendarSize16Px height={16} />} defaultOpened>
            <InternalNavLink to="/date-range/DateRangePickerPopoverCalendar" label="Popover calendar" />
            <InternalNavLink to="/date-range/DateRangePickerInlineCalendar" label="Inline calendar" />
            <InternalNavLink to="/date-range/DateTimeRangePicker" label="Date time range picker" />
        </NavLink>
        <NavLink label="Feedback" leftSection={<AnnouncementSize16Px height={16} />} defaultOpened>
            <InternalNavLink to="/feedback/Alert" label="Alert" />
            <InternalNavLink to="/feedback/Badge" label="Badge" />
            <InternalNavLink to="/feedback/InfoToken" label="InfoToken" />
        </NavLink>
        <NavLink label="Mantine" leftSection={<Image src={MantineLogo} height={16} />} defaultOpened>
            {Object.keys(mantinePages).map((filePath) => {
                const parts = filePath.split('/');
                const fileName = parts[parts.length - 1].replace(/\.tsx$/, '');
                return <InternalNavLink key={fileName} to={`/mantine/${fileName}`} label={fileName} />;
            })}
        </NavLink>
    </AppShell.Section>
);
