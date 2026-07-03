---
name: Navigation
description: Sidebar navigation component with collapsible sections, active link tracking, and customizable accent colors.
---

## Props

### Navigation

**`defaultCollapsed`** `boolean` · optional · default: `false` — Whether the navigation starts in collapsed state.

### NavigationLink

> Extends: `NavLinkProps` from Mantine (excluding `component` and `active`).

**`level`** `number` · required — Nesting level of the link. Use `1` for top-level links and `2` for nested links.
**`active`** `boolean` · optional — Whether the link is currently active/selected.
**`badge`** `'beta' | 'wip' | 'new'` · optional — Badge to display next to the label.
**`component`** `ElementType` · optional — Custom component to render the link as (e.g., a router Link component).

### NavigationSection

> Extends: `NavLinkProps` from Mantine. Renders as an expandable group that hides itself when all children are removed.

**`defaultOpened`** `boolean` · optional — Whether the section starts expanded.

### Navigation.SideBar

> Extends: `AppShellNavbarProps` (excluding `hidden`).

**`header`** `ReactNode` · optional — Content rendered at the top of the sidebar (e.g., a logo or app switcher slot).

### NavigationToggle

**`expandLabel`** `string` · optional · default: `'Expand'` — Accessible label for the expand button.
**`collapseLabel`** `string` · optional · default: `'Collapse'` — Accessible label for the collapse button.

## Sub-components

- `Navigation.SideBar` — The sidebar container (renders inside `AppShell.Navbar`).
- `NavigationSection` — Collapsible group of navigation links.
- `NavigationLink` — Individual navigation item.
- `NavigationToggle` — Collapse/expand chevron button (included automatically in `Navigation.SideBar`).
- `NavigationBadge` — Status badge (`beta`, `wip`, `new`) shown on links.

## Hooks

- `useNavigation()` — Returns `{ collapsed: boolean, toggleCollapsed: (collapse?) => void }`. Provides the collapsed state and toggle function.

## CSS Variables

The Navigation component uses three CSS custom properties for accent colors. Consumers SHOULD define these on the `Navigation.SideBar` element or in their theme to customize the appearance:

- `--coveo-navigation-gradient-color` — Radial gradient accent at the top-left of the sidebar.
- `--coveo-text-main-menu-selected` — Text color for active/hovered level-2 links.
- `--coveo-background-main-menu` — Background color for active/hovered links.

If not defined, the defaults are teal-based (matching the Administration Console theme).

## Usage

The `Navigation` provider MUST wrap `AppShell` so that the shell can read the collapsed state. Use a component inside `Navigation` that calls `useNavigation()` to pass the collapsed state to `AppShell`.

```tsx
import {AppShell} from '@coveord/plasma-mantine';
import {Navigation, NavigationLink, NavigationSection, useNavigation} from '@coveord/plasma-mantine';
import {IconHome, IconDatabase} from '@coveord/plasma-react-icons';
import {useState} from 'react';

function Shell({children}) {
    const {collapsed} = useNavigation();
    return (
        <AppShell navbar={{width: 240, breakpoint: 0, collapsed: {desktop: collapsed}}} layout="alt" withBorder={false}>
            {children}
        </AppShell>
    );
}

function Example() {
    const [active, setActive] = useState('Home');

    return (
        <Navigation>
            <Shell>
                <Navigation.SideBar
                    header={<AppShell.Section p="md">Logo</AppShell.Section>}
                    style={{
                        '--coveo-navigation-gradient-color': '#18d4bb',
                        '--coveo-text-main-menu-selected': '#1CEBCF',
                        '--coveo-background-main-menu': 'rgba(7, 123, 107, 0.4)',
                    }}
                >
                    <NavigationLink
                        level={1}
                        label="Home"
                        leftSection={<IconHome size={20} />}
                        active={active === 'Home'}
                        onClick={() => setActive('Home')}
                    />
                    <NavigationSection leftSection={<IconDatabase size={20} />} label="Content" defaultOpened>
                        <NavigationLink
                            level={2}
                            label="Sources"
                            active={active === 'Sources'}
                            onClick={() => setActive('Sources')}
                        />
                        <NavigationLink level={2} label="Fields" badge="new" />
                    </NavigationSection>
                </Navigation.SideBar>
                <AppShell.Main>Main content</AppShell.Main>
            </Shell>
        </Navigation>
    );
}
```

- Use `level={1}` for top-level items (standalone links or sections) and `level={2}` for nested links within a section.
- Pass a `component` prop to `NavigationLink` to integrate with your router (e.g., React Router's `Link`).
- The `NavigationToggle` is automatically included at the bottom of `Navigation.SideBar`.

---

[Full Plasma documentation]({{BASE_URL}})
