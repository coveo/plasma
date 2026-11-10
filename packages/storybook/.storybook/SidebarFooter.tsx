// The manager bundle uses the classic JSX runtime, so React has to be in scope explicitly.
import React, {useEffect, useState, type ReactNode} from 'react';
import {createPortal} from 'react-dom';
// Read from the package rather than hardcoded, so the footer cannot claim a version that
// was shipped three releases ago.
import {version} from '@coveord/plasma-mantine/package.json';

/**
 * The surfaces Plasma lives on that the Storybook does not contain. Kept here rather than
 * on a page because whoever needs the Figma file or the repository is rarely on the one
 * page that happens to link them.
 */
const LINKS = [
    {label: 'Figma', href: 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma---Components'},
    {label: 'GitHub', href: 'https://github.com/coveo/plasma'},
    {label: 'Mantine', href: 'https://mantine.dev'},
];

const LinksBar = () => (
    <div className="plasma-sidebar-links">
        <span>
            {LINKS.map(({label, href}) => (
                <a key={label} href={href} target="_blank" rel="noopener">
                    {label}
                </a>
            ))}
        </span>
        <span className="plasma-sidebar-version" title={`@coveord/plasma-mantine ${version}`}>
            v{version}
        </span>
    </div>
);

/**
 * Hosts the links bar inside the sidebar. Storybook 10 exposes no sidebar slot — the addon
 * types are tab, panel, tool, toolextra and preview — so this portals into
 * `#storybook-sidebar-region`, the one stable id that region carries.
 *
 * This used to carry a light / dark control as well. Plasma does not support dark mode, so
 * the Storybook is pinned to light and the control was removed; see `backgroundOptions.ts`
 * for what to restore if that changes.
 */
export const SidebarFooter = ({children}: {children?: ReactNode}) => {
    const [host, setHost] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const sidebar = document.querySelector('#storybook-sidebar-region');
        if (!sidebar) {
            return;
        }
        const mount = document.createElement('div');
        mount.className = 'plasma-sidebar-footer';
        sidebar.appendChild(mount);
        setHost(mount);
        return () => {
            mount.remove();
        };
    }, []);

    return (
        <>
            {children}
            {host ? createPortal(<LinksBar />, host) : null}
        </>
    );
};
