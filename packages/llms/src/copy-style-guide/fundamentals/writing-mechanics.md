# Writing Mechanics

## Vocabulary

**Guidelines:**

- Only use shortened forms when they're *more* common than the full term
- Don't include customer jargon that isn't an official Coveo-used term

### Coveo-specific terms

Each time you reference an official Coveo product, feature, or function, follow the spelling and capitalization defined in the [list of product names](../fundamentals/product-vocabulary.md).

### Acronyms & initialisms

Acronyms and initialisms are essentially the same concept, other than the way they're read aloud.
Acronyms are read as one word (for example, "SaaS" or "NASA"), while initialisms are read letter by letter (for example, "VPN" or "API").

**Guidelines:**

- Use all capitals
- Don't use periods, hyphens, or spaces
- Don't use italics or quotation marks

| Do | Don't |
| -- | ----- |
| RGA | rga |
| RGA | R.G.A. |
| RGA | *RGA* |

### Third-party terms

When using names, words, or acronyms not specific to Coveo, always use the official or original spelling, capitalization, and formatting.
Do this even when it contradicts the Coveo UX Copy Style Guide.

**Examples:**

| Vocabulary | Formatting |
| ---------- | ---------- |
| Universal acronyms and abbreviations | a.m., etc., mL, Aug |
| Industry-wide terminology | SaaS, WiFi, A/B test |
| Third-party products, objects, and fields | sObject, PnP |

## Capitalization

### Sentence case

Sentence case means only the first word and proper nouns are capitalized.
It's the default for all UI text: headings, labels, buttons, descriptions, tooltips, and placeholder text.

| Do | Don't |
| -- | ----- |
| Save changes | Save Changes |

### Title case

Title case means every major word is capitalized: nouns, verbs, adjectives, and adverbs.
Articles (a, an, the), coordinating conjunctions (and, but, or), and short prepositions (in, on, of) are lowercase unless they're the first word.

### When to capitalize

**Always capitalize:**

- The first word of a sentence, label, or heading
- Proper nouns (people, places, or company names)
- Official [Coveo product and feature names](../fundamentals/product-vocabulary.md)
- Third-party product or company names that use capitalization, even non-standard ones (for example, SharePoint, sObject, GitHub)

**Never capitalize:**

- Common nouns used as general terms (for example, "source," "pipeline," "user")
- Feature or UI element names that aren't trademarked or sold separately
- Words for emphasis (use **bold** or italic text instead)

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

**Guidelines:**

- Match the capitalization of any UI element exactly as it appears in the UI
- Don't use quotation marks
- Use **bold** formatting for the element name

| Do | Don't |
| -- | ----- |
| Select **Save** | Select "save" |

## Punctuation

### Periods

A full sentence is an independent clause, meaning it's grammatically correct on its own.
A fragment sentence isn't grammatically correct on its own, but it's great for concise UI text.

As a practice, add periods after full sentences, but not after fragment sentences.
For guidance, look at the following lists.

**Add a period after:**

- Body copy
- Descriptions
- Tooltips
- Help text
- Toast notifications, only if the message is a full sentence

**No period after:**

- Labels
- Headings
- Button text
- Standalone UI strings

| Type | Do | Don't |
| ---- | -- | ----- |
| Full sentence | Your changes have been saved. | Your changes have been saved |
| Fragment sentence | Changes saved | Changes saved. |

### Colons

**Guidelines:**

- Don't use colons in titles.
- Don't use colons in labels.
The UI layout provides the visual relationship between the label and its field.

| Do | Don't |
| -- | ----- |
| Email `[input field]` | Email: `[input field]` |

### Exclamation marks

**Guidelines:**

- Use exclamation marks (!) sparingly.
- Limit it to one per context (a single page, modal, or notification).
- Only use them for positive moments where enthusiasm is appropriate.
- Never use them for neutral states, errors, warnings, or any context where the user could be frustrated or confused.
- Don't use them for instructional or CTA copy.

| Do | Don't |
| -- | ----- |
| Success! Your query pipeline has been created. | An error occurred! |

### Apostrophes

Contractions make UX copy more natural, but some are too casual and can make the sentence harder to read.
If the contraction would end in "will," "would," "have," or "had," write them out instead of contracting them.

| Use | Avoid |
| --- | ----- |
| don't | do not |
| can't | cannot |
| won't | will not |
| you're | you are |
| it's | it is / it has |

| Use | Avoid |
| --- | ----- |
| you will | you'll |
| it will | it'll |
| would have | would've |
| could have | could've |
| should have | should've |
| you would / you had | you'd |
| it would / it had | it'd |

Avoid using the possessive form for objects and UI elements.
Use "of" phrasing instead.

| Do | Don't |
| -- | ----- |
| On the left side of the screen | On the screen's left side |

### Spacing

Never add a space before a punctuation mark.
This is a common mistake because French punctuation standards require a space before exclamation and question marks.

| Do | Don't |
| -- | ----- |
| Are you sure? | Are you sure ? |

### Ellipses

**Guidelines:**

- Use an ellipsis (...) only to indicate that a process is in progress or that content is truncated.
- Never use ellipses to trail off in instructions or labels.

| Do | Don't |
| -- | ----- |
| Loading... | You can configure this later... |

## Grammar

<!-- TODO: Add rules. Recommended subsections: Voice (active vs. passive), Tense, Person (you/we), Contractions, Sentence length -->

## Syntax & structure

<!-- TODO: Add rules. -->
