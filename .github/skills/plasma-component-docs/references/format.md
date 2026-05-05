# Component Doc Format

## RFC 2119 Keywords

Component specs MUST use RFC 2119 keywords (always uppercased) to express requirement levels unambiguously:

| Keyword                      | Use when                                        |
| ---------------------------- | ----------------------------------------------- |
| **MUST** / **REQUIRED**      | No alternative is acceptable                    |
| **MUST NOT**                 | Absolutely forbidden                            |
| **SHOULD** / **RECOMMENDED** | Strongly preferred; deviation requires a reason |
| **SHOULD NOT**               | Strongly discouraged; valid reasons may exist   |
| **MAY** / **OPTIONAL**       | Genuinely discretionary                         |

**Critical rule:** only use these keywords when the subject is **the developer using the component**. Never use them to describe what the component or library does internally.

- ✓ "MAY be provided to explain why the item is disabled." (user's choice)
- ✓ "Async handlers MAY be provided; the button shows a loading state while the promise resolves." (user's choice + plain fact)
- ✗ "The button MUST show a loading state…" → write: "shows a loading state…"
- ✗ "The card MUST render this content as its label." → write: "Rendered as the primary label."

Avoid vague imperatives like "always", "never", "prefer", or "avoid" in user-facing rules — replace them with the appropriate RFC 2119 keyword.

---

Every file in `packages/llms/src/components/` follows this structure:

```markdown
---
name: ComponentName                ← REQUIRED
description: One-sentence description used in llms.txt index.  ← REQUIRED
---

## Props

[One of the two forms below]

## Sub-components ← omit if none

## Usage

​`tsx
[most common use case — copy-pasteable snippet, including imports]
​`

---

[Full Plasma documentation](https://plasma.coveo.com)
```

---

## Usage section

MUST appear after all other sections (Props, Sub-components) and before the footer link. MUST show the most common real-world usage as a self-contained `tsx` snippet. SHOULD use Plasma sub-components where they exist. MAY include 2–3 examples for components with multiple important patterns (e.g. async click, disabled state). MUST NOT be exhaustive — the Props table covers the full API.

````markdown
## Usage

​```tsx
import {Button} from '@coveord/plasma-mantine';

<Button.Primary onClick={() => console.log('saved')}>Save</Button.Primary>

// Async click — button shows a loading spinner automatically
<Button.Primary onClick={async () => { await save(); }}>Save</Button.Primary>

// Disabled with explanation
<Button.Primary disabled disabledTooltip="Complete the form first">Submit</Button.Primary>
​```
````

---

## Props section — two forms

**Form A — No Plasma-specific props:**

```markdown
## Props

_No additional props beyond the Mantine base component._
```

**Form B — With Plasma-specific props:**

```markdown
## Props

> Extends: `MantineBaseProps`, `OtherInterface`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop           | Type      | Required | Default | Description   |
| -------------- | --------- | :------: | ------- | ------------- |
| `propName`     | `string`  |    ✓     | —       | What it does. |
| `optionalProp` | `boolean` |          | `false` | What it does. |
```

Rules:

- Required = ✓, optional = blank cell
- Default = `—` when there is none
- Only list props defined in the Plasma wrapper; inherited Mantine props go in the `> Extends:` note
- Copy JSDoc from the TypeScript source verbatim when available

---

## Sub-components section

```markdown
## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. Prefer these over setting props manually.

- `ComponentName.Variant`
- `ComponentName.OtherVariant`
```

List every static property assigned to the component export.

---

## Annotated examples

### Minimal (no extra props)

```markdown
---
description: Informational callout for contextual messages, warnings, errors, or success states.
---

# Alert

## Installation

​`tsx
import { Alert } from '@coveord/plasma-mantine';
​`

## Props

_No additional props beyond the Mantine base component._

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. Prefer these over setting props manually.

- `Alert.Information`
- `Alert.Advice`
- `Alert.Warning`
- `Alert.Critical`
- `Alert.Success`

---

[Full Plasma documentation](https://plasma.coveo.com)
```

### Full (custom props + sub-components)

See `packages/llms/src/components/Button.md` for a complete real-world example.
