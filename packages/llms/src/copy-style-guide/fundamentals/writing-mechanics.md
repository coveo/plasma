# Writing Mechanics

## Vocabulary

Only use shortened forms when they're *more* common than the full term.
Don't include customer jargon that isn't an official Coveo-used term.

### Coveo-specific terms

Each time you reference an official Coveo product, feature, or function, follow the spelling and capitalization defined in the [list of product names](../fundamentals/product-vocabulary.md).

### Acronyms & initialisms

> **Note:** Acronyms and initialisms are essentially the same concept, other than the way they're read aloud.
> Acronyms are read as one word (for example, "SaaS" or "NASA"), while initialisms are read letter by letter (for example, "VPN" or "API").

When using Coveo acronyms and initialisms:

| Rule | Do | Don't |
| ---- | -- | ----- |
| All capitals | RGA | rga |
| No periods, hyphens, or spaces | RGA | R.G.A. |
| No italics or quotes | RGA | *RGA* |

### Third-party terms

When using names, words, or acronyms not specific to Coveo, always use the official or original spelling, capitalization, and formatting.

| Type | Examples |
| ---- | -------- |
| Universal acronyms and abbreviations | a.m., etc., mL, Aug |
| Industry-wide terminology | SaaS, WiFi, A/B test |
| Third-party products, objects, and fields | sObject, PnP |

## Capitalization

Use sentence case everywhere unless a specific rule below says otherwise.
When in doubt, don't capitalize.

### Sentence case

Sentence case means only the first word and proper nouns are capitalized.
It's the default for all UI text: headings, labels, buttons, descriptions, tooltips, and placeholder text.

**Do:** Save changes

**Don't:** Save Changes

### When to capitalize

Always capitalize:

- The first word of a sentence, label, or heading
- Proper nouns: people, places, company names
- Official Coveo product and feature names.
See the list of [product vocabulary](../fundamentals/product-vocabulary.md)
- Third-party product names that use capitalization, even non-standard ones (for example, SharePoint, sObject, GitHub)
- Initialisms and acronyms (for example, HTML, API, SaaS)

Never capitalize:

- Common nouns used as general terms (for example, "source", "pipeline", "user")
- Feature or UI element names that aren't trademarked or sold separately
- Words for emphasis—use bold or italics instead

### UI elements

<!-- I need to come back to this. There are many discrepancies on the admin console of how we use casing for product/feature names.

Use sentence case for all UI elements.
The table below covers the most common cases.

| UI element | Casing | Example |
| ---------- | ------ | ------- |
| Page, window, modal, and panel headings (h1–h6) | Sentence case | "Security identities" |
| Menu and breadcrumb items | Sentence case | "Content browser" |
| Table column headers and links | Sentence case | "Last modified" |
| Drop-down menu labels and items | Sentence case | "Edit source" |
| Button labels | Sentence case | "Save changes" |
| Tab and subtab labels | Sentence case | "Advanced settings" |
| Text input, checkbox, toggle, and radio button labels | Sentence case | "Enable strict validation" |
| Description, help, tooltip, and placeholder text | Sentence case | "Enter a name for your source." |
| Collapsible panel labels | All caps | "FILTERS" |
| Page titles referring to a named Coveo feature | Title case | "Content Browser", "Insight Panel" |

> **Note:** In the codebase, always hardcode text in sentence case.
> Title case and all caps are applied through flags, not in the source strings.
-->

### Referring to UI elements in copy

When you refer to a UI element by name, match its capitalization exactly as it appears in the UI.
Don't add quotation marks.
Use **bold** formatting for the element name instead.

**Do:** Select **Save**.

**Don't:** Select "save".

## Punctuation

### Periods

Skip the period at the end of labels, headings, button text, and standalone UI strings.
Use a period when the text is a full sentence in body copy, descriptions, tooltips, or help text.
If a short message, like a toast notification, isn't a full sentence, no period is needed.
If it is a full sentence, add one.
A full sentence is an independent clause, meaning the sentence is still grammatically correct on its own.
A fragment sentence is good and common to use in UX writing, yet it's not grammatically correct on its own.

**Full sentence:**

**Do:** Your changes have been saved.

**Don't:** Your changes have been saved

**Fragment sentence:**

**Do:** Changes saved

**Don't:** Changes saved.

### Colons

Don't include colons in any titles.
Don't add a colon after a label.
The UI layout provides the visual relationship between the label and its field.

**Do:** Email `[input field]`

**Don't:** Email: `[input field]`

### Exclamation marks

Use exclamation marks sparingly, only for genuinely positive moments where enthusiasm is appropriate.
Never use them for neutral states, errors, warnings, or any context in which the user might be frustrated or confused.
Don't use more than one per context (a single page, modal, or notification).

**Do:** Success! Your edits have been saved.

**Don't:** An error occurred!

### Apostrophes

Contractions make copy sound more natural.
Use the following common contractions:

- don't
- can't
- won't
- you're
- it's

If the words you're conjoining include "will," "would," or "had," then don't use a contraction.
Instead, type out "it will" or "it would," for example.
This includes:

- you'll
- it'll
- you'd
- it'd

Avoid using the possessive form for objects and UI elements.
Use "of" phrasing instead.

**Do:** On the left side of the screen

**Don't:** On the screen's left side

### Spacing

Never add a space before a punctuation mark.

**Do:** Are you sure?

**Don't:** Are you sure ?

This is a common mistake because French punctuation standards require a space before exclamation and question marks.
Make sure to pay special attention to this!

### Ellipses

Use an ellipsis (...) only to indicate that a process is in progress or that content is truncated.
Never use ellipses to trail off in instructions or labels.

**Do:** Loading...

**Don't:** You can configure this later...

## Grammar

<!-- TODO: Add rules. Recommended subsections: Voice (active vs. passive), Tense, Person (you/we), Contractions, Sentence length -->

## Syntax & structure

<!-- TODO: Add rules. -->
