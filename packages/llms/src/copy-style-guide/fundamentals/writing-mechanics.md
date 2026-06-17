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

- Don't use colons in titles
- Don't use colons in labels
The UI layout provides the visual relationship between the label and its field

| Do | Don't |
| -- | ----- |
| Email `[input field]` | Email: `[input field]` |

### Exclamation marks

**Guidelines:**

- Use exclamation marks (!) sparingly
- Limit it to one per context (a single page, modal, or notification)
- Only use them for positive moments where enthusiasm is appropriate
- Never use them for neutral states, errors, warnings, or any context where the user could be frustrated or confused
- Don't use them for instructional or CTA copy

| Do | Don't |
| -- | ----- |
| Success! Your query pipeline has been created. | An error occurred! |

### Apostrophes

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

- Use an ellipsis (...) only to indicate that a process is in progress or that content is truncated
- Never use ellipses to trail off in instructions or labels

| Do | Don't |
| -- | ----- |
| Loading... | You can configure this later... |

## Grammar

### Voice

Use active voice as much as possible.
Active voice is clearer, more direct, and easier to scan.

Use passive voice only when the action shouldn't be attributed to a person or an object.
This is common in confirmations because attributing the action to the user often feels awkward and inaccurate.

| Do | Don't |
| -- | ----- |
| Your query pipeline has been saved. | You saved your query pipeline. |
| The source could not be found. | We couldn't find the source. |

### Tense

Use present tense for instructions, labels, and questions. Use past tense for confirmations.

| Context | Tense | Example |
| ------- | ----- | ------- |
| Instructions | Present | Select a file to upload. |
| Questions | Present | Are you sure you want to delete this? |
| Confirmations | Past | Your changes have been saved. |

### Person

Address the user directly as "you."
Never use "we" or refer to Coveo as a person performing actions—when the subject can be omitted entirely, omit it.

**Guidelines:**

- Use "you" and "your" to refer to the user
- Never use "we," "our," or "us"
- Avoid "Coveo" as a subject performing an action.
Let the system or the product be the subject instead, or restructure the sentence to remove the subject

| Do | Don't |
| -- | ----- |
| Your session has expired. | We ended your session. |
| No results found. | Coveo couldn't find any results. |
| You don't have permission to access this. | We can't let you access this. |

### Contractions

Contractions make UX copy more natural, but some can make a sentence overly casual and hard to read.
If the second word in the contraction is "would," "have," or "had," write the words out instead.

| Use | Avoid |
| --- | ----- |
| don't | do not |
| can't | cannot |
| won't | will not |
| you're | you are |
| you'll | you will |
| it's | it is / it has |
| wouldn't | would not |
| couldn't | could not |
| shouldn't | should not |

| Use | Avoid |
| --- | ----- |
| it will | it'll |
| would have | would've |
| could have | could've |
| should have | should've |
| you would | you'd |
| you had | you'd |
| it would | it'd |
| it had | it'd |

### Sentence length

As a rule of thumb, keep your sentences under 20 words when writing for the UX.
The best length for each sentence depends on the context, so some UI elements have tighter limits.

Use the table to see the absolute **maximum** number of words per UI context, not as a target word count.
Shorter is better!

| UI element | Word limit |
| ---------- | ---------- |
| Any sentence | 20 words |
| Button labels | 3 words |
| Tooltips | 20 words |
| Error messages | 25 words |
| Empty states | 25 words |
| Field validation | 10 words |
| Modals | 25 words |
| Toast notifications | 15 words |

## Syntax & structure

In almost all UX contexts, frontloading is the best way to provide clarity.
Frontloading means stating the most important information and key message first, at beginning of the text.
After that, more context, details, or reasoning can be given.
This technique is used to structure sentences, paragraphs, pages, and even entire books.

| Do | Don't |
| -- | ----- |
| No results found. Try adjusting your filters. | Your current filter selection didn't return any results. Try adjusting them. |
| Access denied. Contact your administrator to request permission. | You're trying to access a page that requires additional permissions. Contact your administrator. |

### Instructions

When writing guidance or instructions, state the result before the required action.
Frontloading in this situation helps the user understand why they're doing something *before* they do it.

| Do | Don't |
| -- | ----- |
| To add a source, select **Add source**. | Select **Add source** to add a source. |

> [!NOTE]
> Always prioritize clarity and readability!
> If breaking this rule makes the message easier to understand, then do it.

### Plain language

Write in plain language so the copy is easy to understand for all users, including non-native English speakers.
Avoid idiomatic phrases, sayings, and metaphorical language.
The only exception is well-known industry terms or verbs that users likely know (for example, "crawl," "index," "query").

**Guidelines:**

- Use common, everyday words over formal or technical alternatives
- If a shorter word works, use it
- Don't use idioms or expressions

| Do | Don't |
| -- | ----- |
| This may take a few minutes. | This won't happen at the speed of light. |
| This is quick to set up. | This is a piece of cake to set up. |

#### Reducing jargon

Use this table to see what unnecessary words you can replace with everyday ones instead.

| Jargon | Replace with |
| ------ | ------------ |
| able to | can |
| to be able to | to |
| additional | more<br>other<br>different |
| administer | manage |
| allows you to | you can use [x] to [y]<br>with [x], you can [y] |
| alternative | other |
| append | add |
| assist | help |
| begin | start |
| be of interest to them | interest them |
| complete | finish |
| conversely | but<br>however |
| credentials | username and password |
| currently | now |
| deactivate (a feature) | disable |
| display | show |
| due to the fact that | because<br>since |
| e.g. | for example<br>like<br>such as |
| enable | allow<br>let |
| enable (a feature) | activate<br>turn on |
| ensure | make sure<br>(or just state the action) |
| fashion (as in *a secured fashion*) | way (as in *a secured way*) |
| following | after<br>next |
| furthermore | then<br>so |
| future-proof | (depending on context)<br>lasting<br>reliable<br>adaptable |
| gives you the ability | you can use [x] to [y]<br>with [x], you can [y] |
| how many (noun) | the number |
| how much (noun) | the amount |
| how (noun: as in *intensity*) | the extent |
| how (noun: as in *reasoning*) | the reason |
| how (noun: as in *status*) | the status of<br>the state of |
| how (noun: as in *the method*) | the way |
| illustrate | show |
| in cases where | when |
| initial | first |
| in order to | to |
| in order to [verb], you must [verb] | To [verb], [verb] |
| input (verb) | enter |
| is able to provide | provides |
| leverage | use |
| make a modification | edit |
| manner | way |
| methods | ways |
| modify | edit |
| moreover | then<br>so |
| nor | or |
| obtain | get |
| on the subject of | about |
| pertaining | related |
| preceding | before |
| prior to | before |
| provided [x], [y] will... | if |
| purchase | buy |
| rather | instead |
| regarding | on<br>about<br>for |
| related to | about |
| remedy | fix |
| required to | need to |
| resolve | fix |
| retain | keep |
| should [x] + [verb] / should you [verb] | if |
| simultaneously | at the same time |
| submit (in certain contexts) | send |
| sub-second | under one second |
| subsequent | future<br>later<br>upcoming |
| thereafter | after<br>after that |
| therefore | so |
| to ensure | to<br>to make sure |
| to surface | to display<br>to promote |
| unable to | can't |
| utilize | use |
| wish to | want to |
| with the use of | with |
| would like | want |
