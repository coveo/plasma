# Detecting components in prototype code

Prototypes are usually vibe-coded, so expect inconsistency: the same thing built three ways, inline styles, raw HTML next to Plasma. Read the code for what the user sees, not for code quality.

## Imports

```bash
# Plasma imports
grep -rnE "from ['\"]@coveord/plasma-mantine" <scope>
# Direct Mantine imports (flag only)
grep -rnE "from ['\"]@mantine/" <scope>
# Other UI libraries (treat their components like off-system rebuilds)
grep -rnE "from ['\"](@mui|antd|@chakra-ui|react-bootstrap|@radix-ui|@headlessui)" <scope>
```

Resolve local imports too: a `./StatusPill` component may wrap a Plasma `Badge` (then it's Existing Plasma, possibly misused) or rebuild one (off-system).

## Recognizing look-alikes

Prototypes are vibe-coded, so the most common rebuild isn't a raw `<button>`: it's a local component that looks and behaves like a Plasma one. It may be a file in the prototype (`components/Tabs.tsx`, `SectionToggle.tsx`), or Plasma primitives (`Box`, `Group`, `UnstyledButton`, `Paper`, `Collapse`) assembled into something Plasma already provides. Imports alone won't reveal these.

Read every **local component** in scope (anything not imported from a package) and identify it by **what it does**, not by its name or imports. Behavior is the reliable signal; appearance only confirms it.

| Behavior in the code                                                                                                 | Likely Plasma component                                                                       |
| -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| A row of triggers + one active index in state + content that switches with it                                        | `Tabs` (or `SegmentedControl` if it switches a value, not a panel)                            |
| A header that toggles an `open`/`expanded` boolean + content shown/hidden or `Collapse`                              | `Accordion` (single section: `Collapse` with a Plasma trigger)                                |
| `onClick` on a `div`, `span`, `Box`, `Paper`, or `UnstyledButton` styled with padding, background, and border radius | `Button` / `ActionIcon` (a clickable card: check `Card`)                                      |
| An overlay + a centered or side panel + close on backdrop/Escape                                                     | `Modal` / `Drawer`                                                                            |
| A trigger + a floating list of options + selected value in state                                                     | `Select`, `Menu`, `Combobox`                                                                  |
| A boolean toggled by clicking a pill or track shape                                                                  | `Switch` / `Checkbox`                                                                         |
| Numbered or titled steps + a current step index + next/back                                                          | `Stepper`                                                                                     |
| Page numbers + previous/next + a current page in state                                                               | `Pagination`                                                                                  |
| Content shown on hover/focus next to an element                                                                      | `Tooltip` / `HoverCard` / `ContextualHelp`                                                    |
| A short colored label next to an item                                                                                | `Badge` / `StatusToken`                                                                       |
| A message box with icon, title, and text, sometimes dismissible                                                      | `Alert`                                                                                       |
| An image or icon + title + text + call to action when a list is empty                                                | Check the current Plasma guidance (`BlankSlate` is deprecated); `Table.NoData` inside a table |

For each match:

1. Confirm with `search_docs` and the component's _When to use_. Don't name a replacement the doc says doesn't fit.
2. Compare what the look-alike does with what the Plasma component offers. If it does something Plasma can't (an extra slot, state, or layout), it's **Existing Plasma → needs to evolve**, and the extra behavior is the missing capability. Otherwise it's an **Off-system rebuild**.
3. Set confidence from how much matches: same behavior and structure → high; same behavior, unusual structure or styling → medium; similar look only → low, and say what's uncertain.

Code is read, not rendered, so purely visual similarity (two things that look alike but work differently) is the weakest signal. When behavior matches, say so. When only the look matches, keep confidence low and add the _Visual match only_ note from the report template, naming what's uncertain and the route where a reviewer can check it.

The same method applies to the admin-ui lookup: a prototype component can be a look-alike of an admin-ui component without being a copy. Match by behavior first, then by name.

## Raw HTML that usually has a Plasma equivalent

Treat these as candidate off-system rebuilds. Confirm with `search_docs` and the component doc before naming a replacement.

| In the code                              | Likely Plasma component                                                           |
| ---------------------------------------- | --------------------------------------------------------------------------------- |
| `<button>`, clickable `<div onClick>`    | `Button` (or `ActionIcon` for icon-only)                                          |
| `<a href>`                               | `Anchor` — also check the _Navigate with links_ pattern                           |
| `<input>`, `<textarea>`, `<select>`      | `TextInput`, `Textarea`, `Select` / `NativeSelect`, `Checkbox`, `Radio`, `Switch` |
| `<table>`                                | `Table`                                                                           |
| Rounded `<span>` with colored background | `Badge` (or `StatusToken`)                                                        |
| Fixed overlay `<div>` with a panel       | `Modal` / `Drawer`                                                                |
| Custom dropdown list                     | `Menu`, `Select`, `Combobox`                                                      |
| Custom tabs, steps, accordions           | `Tabs`, `Stepper`, `Accordion`                                                    |
| Spinner, shimmer blocks                  | `Loader`, `Skeleton`                                                              |
| Inline banner with icon and message      | `Alert`                                                                           |
| Toast                                    | `notifications`                                                                   |
| "Nothing here yet" block                 | Current Plasma empty-state guidance (`BlankSlate` is deprecated)                  |
| Tooltip or help icon                     | `Tooltip`, `ContextualHelp`, `InfoToken`                                          |

Not every `<div>` is a finding. Plain layout `div`s with flex or grid are fine; mention them only if they recreate `AppShell`, `Header`, or `Card` styling.

## Signs that a Plasma component needs to evolve

- `styles`, `classNames`, `sx`, or `style` overrides that change size, color, or structure on a Plasma component.
- A Plasma component wrapped in a local component that adds markup the doc doesn't describe (extra slots, extra states).
- The same override repeated across several instances. That's strong evidence the need is real; mention the count.

Check the props table first. If a documented prop or sub-component already does what the override does, it's **misused**, not **needs to evolve**.

## Grouping instances

Group elements that serve the same purpose and look the same, even when the code differs slightly. Record for each instance: route (from the router) and `file:line`. Pick one short, representative snippet for the report, not every instance.

## Hard-coded foundation values

```bash
grep -rnE "#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(" <scope>
grep -rnE "(padding|margin|gap|border-radius|font-size|box-shadow)\s*:\s*[0-9]" <scope>
```

Ignore values inside mock data and SVG icon paths. Map each remaining value to the closest token from `get_foundations`, and report it only when a token clearly applies.

## Admin-ui lookup (optional)

Only when the designer has a local admin-ui copy. Read-only: never pull, checkout, or modify it.

### 1. Record freshness

`git -C <admin-ui> rev-parse --abbrev-ref HEAD` and `git -C <admin-ui> log -1 --format=%cs`. Put both in the report header. Warn if the branch isn't `master` or the last commit is more than two weeks old.

### 2. Where to look

Search only the shared packages in the top-level `components/` workspace, in this order:

| Tier                  | Packages                                                                       | Hint label                               |
| --------------------- | ------------------------------------------------------------------------------ | ---------------------------------------- |
| Shared UI             | `components/mantine`, `components/page`, `components/empty-states`             | Reuse hint                               |
| Business              | `components/business-system`, `components/resource-identity`                   | Reuse with care, includes business logic |
| Other shared packages | the remaining `components/<pkg>` (projects, navigation, conditions, charts, …) | Reuse with care, feature-oriented        |

Don't search `pages/*`, `apps/*`, or `packages/*` (legacy jsadmin and v2). Together they hold thousands of feature-specific components, so matches there are mostly noise.

### 3. How to find candidates

Start with what each package says it exports, not with a folder scan:

1. **Barrels:** `components/<pkg>/src/index.ts` lists each package's public components. A component that isn't exported isn't meant for reuse; don't suggest it.
2. **READMEs:** `components/<pkg>/README.md` describes what the package and its components are for. `components/business-system/README.md` has per-component docs and admission criteria; use them to judge fit.
3. **Stories:** a co-located `*.stories.tsx` shows intended usage and variants. Prefer components that have one.

Then match by purpose — behavior first, as in _Recognizing look-alikes_, then names. Search names and synonyms (`grep -rliE "ProjectSelect|ProjectPicker|ProjectAssociation" components/*/src/index.ts`), open the best candidate, and compare its props and rendered structure with the prototype.

### 4. Hint strength

- Same name and structure (a copy) → "Likely copy of `X` (`path`)".
- Same purpose, different build → "Possible match: `X` (`path`)".
- Nothing found → no hint. Absence isn't proof; keep the generic "verify" note if it's plausible.

Add the tier label from step 2 to every hint.

### 5. Don't suggest these

- **Same-name wrappers of Plasma components** in `components/mantine`: `Anchor`, `Modal`, `EmptyState`, `Status`. Point to the Plasma component instead.
- **Customized components:** an admin-ui component that's mostly a Plasma component plus a `.module.css` overriding its look. These are discouraged, so they're never a reuse hint.

### 6. Report

Name only the component, its package, and its path. Don't copy admin-ui code into the report.
