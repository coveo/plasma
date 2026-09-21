---
name: Foundations
description: Plasma design foundations — color, typography, spacing, radii, shadows, and iconography tokens exposed as CSS variables through the Plasmantine theme.
---

# Foundations

Plasma's foundations are the design tokens that every component builds on: color, typography, spacing, radii, shadows, and iconography. The `Plasmantine` provider applies them as CSS variables, so you SHOULD reference the tokens (via component props such as `size`, `radius`, `c`, or via the `var(--mantine-*)` CSS variables) instead of hardcoding raw values. This keeps your UI consistent and theme-aware.

Import all components from `@coveord/plasma-mantine`. Do not import from `@mantine/*` directly.

## Colors

The theme exposes these palettes, each with 10 shades indexed `0` (lightest) to `9` (darkest). The primary shade is `5`.

| Palette                                                                                                         | CSS variable pattern               |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `red`, `orange`, `yellow`, `green`, `teal`, `cyan`, `blue`, `indigo`, `navy`, `violet`, `grape`, `gray`, `dark` | `--mantine-color-{palette}-{0..9}` |

- `blue` is the primary palette; the primary color resolves to `--mantine-color-blue-5`.
- Reference a color through props (`c="blue.6"`, `color="red"`) or CSS (`var(--mantine-color-teal-8)`).
- For text over an arbitrary background, use `getContrastColor({color, theme, autoContrast: true})` from `@coveord/plasma-mantine` to pick a legible foreground.

## Typography

The base font family for headings is `canada-type-gibson, sans-serif`. Font weights use `--coveo-fw-normal` and `--coveo-fw-bold`.

### Headings

| Level | Font size                | Line height                |
| ----- | ------------------------ | -------------------------- |
| `h1`  | `--mantine-h1-font-size` | `--mantine-h1-line-height` |
| `h2`  | `--mantine-h2-font-size` | `--mantine-h2-line-height` |
| `h3`  | `--mantine-h3-font-size` | `--mantine-h3-line-height` |
| `h4`  | `--mantine-h4-font-size` | `--mantine-h4-line-height` |
| `h5`  | `--mantine-h5-font-size` | `--mantine-h5-line-height` |
| `h6`  | `--mantine-h6-font-size` | `--mantine-h6-line-height` |

### Text sizes

The `Text` component accepts these `size` values, each mapping to a font-size and line-height token.

| Size  | Font size                 | Line height                 |
| ----- | ------------------------- | --------------------------- |
| `xxs` | `--mantine-font-size-xxs` | `--mantine-line-height-xxs` |
| `xs`  | `--mantine-font-size-xs`  | `--mantine-line-height-xs`  |
| `sm`  | `--mantine-font-size-sm`  | `--mantine-line-height-sm`  |
| `md`  | `--mantine-font-size-md`  | `--mantine-line-height-md`  |
| `lg`  | `--mantine-font-size-lg`  | `--mantine-line-height-lg`  |
| `xl`  | `--mantine-font-size-xl`  | `--mantine-line-height-xl`  |

## Spacing

Spacing tokens drive margin, padding, and gap props (`m`, `p`, `gap`, etc.).

| Size  | CSS variable            |
| ----- | ----------------------- |
| `xxs` | `--mantine-spacing-xxs` |
| `xs`  | `--mantine-spacing-xs`  |
| `sm`  | `--mantine-spacing-sm`  |
| `md`  | `--mantine-spacing-md`  |
| `lg`  | `--mantine-spacing-lg`  |
| `xl`  | `--mantine-spacing-xl`  |

## Radii

Border-radius tokens drive the `radius` prop.

| Size      | CSS variable               |
| --------- | -------------------------- |
| `default` | `--mantine-radius-default` |
| `none`    | `--mantine-radius-none`    |
| `xs`      | `--mantine-radius-xs`      |
| `sm`      | `--mantine-radius-sm`      |
| `md`      | `--mantine-radius-md`      |
| `lg`      | `--mantine-radius-lg`      |
| `xl`      | `--mantine-radius-xl`      |
| `xxl`     | `--mantine-radius-xxl`     |

## Shadows

Elevation tokens drive the `shadow` prop.

| Size | CSS variable          |
| ---- | --------------------- |
| `xs` | `--mantine-shadow-xs` |
| `sm` | `--mantine-shadow-sm` |
| `md` | `--mantine-shadow-md` |
| `lg` | `--mantine-shadow-lg` |
| `xl` | `--mantine-shadow-xl` |

## Iconography

Prefer [Tabler icons](https://tabler.io/icons), imported from `@coveord/plasma-react-icons`. Tabler icon component names are `Icon` + the PascalCase icon name (for example `alert-circle` becomes `IconAlertCircle`), and accept a `size` prop.

Plasma also ships a set of in-house icons, but they are **deprecated** in favor of Tabler icons. Only use an in-house icon when no Tabler icon fits your need.

```tsx
import {IconAlertCircle} from '@coveord/plasma-react-icons';

<IconAlertCircle size={24} />;
```

## Usage

```tsx
import {Button, Paper, Stack, Text, Title} from '@coveord/plasma-mantine';
import {IconStar} from '@coveord/plasma-react-icons';

// Reference tokens through props rather than hardcoding values.
function Example() {
    return (
        <Paper p="md" radius="md" shadow="sm">
            <Stack gap="sm">
                <Title order={2}>Foundations</Title>
                <Text size="sm" c="gray.7">
                    Spacing, radii, shadows, colors, and typography all come from theme tokens.
                </Text>
                <Button.Primary leftSection={<IconStar size={16} />}>Get started</Button.Primary>
            </Stack>
        </Paper>
    );
}

// Or reference the CSS variables directly when you need raw values.
const boxStyle = {
    padding: 'var(--mantine-spacing-md)',
    borderRadius: 'var(--mantine-radius-lg)',
    boxShadow: 'var(--mantine-shadow-md)',
    backgroundColor: 'var(--mantine-color-blue-6)',
};
```

---

[Full Plasma documentation]({{BASE_URL}})
