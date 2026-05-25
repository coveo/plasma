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

# Usage guidance

## What problem does it solve?

## When to use it

## When not to use it

## Decision-making guidance

## Variants ← omit if none or not meaningful

## States ← omit if none or not meaningful

## Interaction notes ← omit if none or not meaningful

## Accessibility expectations ← omit if none or not meaningful

## Content guidance ← omit if none or not meaningful

## Common anti-patterns ← omit if none or not meaningful

## What an AI agent should understand

## Open questions for our system ← omit if none

# API reference

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

## Finding guidance

Use the component implementation, Storybook stories, existing Plasma docs, and nearby component specs to derive guidance. Do not invent design rules from props alone.

External design-system references MAY be used to strengthen missing sections such as accessibility expectations, anti-patterns, or decision boundaries, but MUST NOT be presented as Plasma policy.

When the source material does not support a strong rule, add an explicit open question instead of presenting uncertainty as settled guidance.

---

## Usage section

MUST appear in `API reference`, after `Props` and `Sub-components`. MUST show the most common real-world usage as a self-contained `tsx` snippet. SHOULD use Plasma sub-components where they exist. MAY include 2–3 examples for components with multiple important patterns (e.g. async click, disabled state). MUST NOT be exhaustive — the Props table covers the full API.

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

**`propName`** `string` · required · default: `undefined` — What it does.
**`optionalProp`** `boolean` · optional · default: `false` — What it does.
```

Rules:

- Use `·` (U+00B7) as separator between metadata fields.
- Use `—` (em dash with spaces) to separate metadata from the description.
- Use `required` or `optional` explicitly for every prop.
- `default:` is always shown; use `undefined` when there is no default (required props always get `undefined`).
- Only list props defined in the Plasma wrapper; inherited Mantine props go in the `> Extends:` note.
- Copy JSDoc from the TypeScript source verbatim when available.

---

## Usage guidance sections

The sections under `Usage guidance` capture design-system guidance, not just API reference.

### What problem does it solve?

MUST explain the user or interface problem the component addresses. Focus on intent, not visual shape alone.

### When to use it

MUST give positive selection rules. Explain the situations where the component is appropriate.

### When not to use it

MUST prevent incorrect component selection by naming nearby cases where another component or pattern is better.

### Decision-making guidance

SHOULD compare the component with nearby alternatives when confusion is likely. This section is especially important for controls that overlap conceptually.

### Variants

MAY list meaningful system variants. When variants change the user intent, hierarchy, severity, or interaction model, this section SHOULD explain when to use each variant (for example, `Button.Primary` versus `Button.Secondary`). Do not list every visual tweak unless it changes usage guidance.

### States

MAY document important visible or behavioural states such as loading, disabled, selected, open, error, or partial selection.

### Interaction notes

MAY capture consumer-facing behaviour such as focus handling, dismissal, async behaviour, validation, persistence, or conditional reveal.

### Accessibility expectations

SHOULD state what a consumer of the component needs to preserve or understand. Focus on usage requirements, not implementation internals.

### Content guidance

MAY be included when the component involves labels, helper text, placeholder text, validation copy, status messaging, option wording, or destructive confirmations.

### Common anti-patterns

SHOULD name likely misuses after the component has already been selected. Use `When not to use it` for choosing a different component or pattern; use `Common anti-patterns` for incorrect implementation, severity, hierarchy, content, layout, or interaction choices within this component.

### What an AI agent should understand

MUST summarize the decision rule an AI agent should carry forward when choosing or generating the component.

### Open questions for our system

MAY be used when the right guidance is not yet fully settled. Prefer explicit uncertainty over invented certainty.

---

## Sub-components section

```markdown
## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `ComponentName.Variant`
- `ComponentName.OtherVariant`
```

List every static property assigned to the component export.

---

## Annotated examples

### Minimal (no extra props)

````markdown
---
name: Alert
description: Informational callout for contextual messages, warnings, errors, or success states.
---

# Usage guidance

## What problem does it solve?

The `Alert` highlights contextual information that should remain visible until the user has had a chance to read it.

## When to use it

Use an alert when the message should stay visible in the layout and is not tied to a transient event.

## When not to use it

Do not use an alert for lightweight transient feedback that should disappear automatically; use `Notification` instead.

## Decision-making guidance

- Prefer `Alert` over `Notification` when the message must remain visible in the page layout
- Prefer `Alert` over `Tooltip` when the information is important and should not depend on hover or focus

## Variants

- Use `Alert.Information` for neutral or factual status messages.
- Use `Alert.Advice` for helpful recommendations or next-best-action guidance.
- Use `Alert.Warning` when the user should proceed carefully but is not blocked.
- Use `Alert.Critical` for errors, destructive consequences, or blocking issues.
- Use `Alert.Success` to confirm a successful persistent state or completed setup.

## Common anti-patterns

- Do not stack multiple alerts when one grouped message would be clearer.
- Do not use `Alert.Critical` for neutral information.
- Do not put long troubleshooting documentation inside an alert; link to supporting content instead.

## What an AI agent should understand

- `Alert` is for persistent contextual messaging in the layout
- It is not the right choice for transient feedback or optional clarification

# API reference

## Props

_No additional props beyond the Mantine base component._

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Alert.Information`
- `Alert.Advice`
- `Alert.Warning`
- `Alert.Critical`
- `Alert.Success`

## Usage

```tsx
import {Alert} from '@coveord/plasma-mantine';

<Alert.Information>Indexing is in progress.</Alert.Information>;
```
````

---

[Full Plasma documentation]({{BASE_URL}})

```

```
