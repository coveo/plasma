---
name: Content Guidelines — Writing Mechanics
description: Required rules for grammar, punctuation, capitalization, structure, and length in Coveo UX copy.
---

> **Note for agents:** The rules in this file are concrete and must be followed exactly. For voice qualities (clear, human, helpful) and tone judgment, see Voice.md — those require interpretation rather than literal application.

## Vocabulary

- Only use a shortened form when it is more commonly known than the full term.
- Do not use customer jargon that isn't an official Coveo term.
- For every official Coveo product, feature, or function name, follow the exact spelling and capitalization in the [Product Vocabulary](./ProductVocabulary.md) list.
- Use American English spelling throughout (e.g. "customize" not "customise", "color" not "colour", "canceled" not "cancelled"). The exception is proper names — company names, product names, and brand names always use their official spelling regardless of locale.

### Acronyms and initialisms

- Write in all capitals.
- No periods, hyphens, or spaces.
- No italics or quotation marks.

**Example of copy text:**

Do:

- RGA

Don't:

- rga
- R.G.A.
- _RGA_

### Third-party terms

Always use the official original spelling, capitalization, and formatting for third-party names.

Universal acronyms and abbreviations: a.m., etc., mL, Aug

Industry-wide terminology: SaaS, WiFi, A/B test

Third-party products, objects, and fields: sObject, PnP

## Capitalization

### Default: sentence case

Use sentence case for all UI text: headings, labels, buttons, descriptions, tooltips, and placeholder text.

**Example of copy text:**

Do: Save changes

Don't: Save Changes

### Exception: title case for navigation

Use title case for navigation menu items only. All other UI text uses sentence case.

**Example of copy text:**

Do: Query Pipelines (nav item)

Don't: Query pipelines (nav item)

### Always capitalize

- The first word of any sentence, label, or heading
- Proper nouns
- Official Coveo product and feature names
- All words in navigation menu items
- Third-party names that use their own capitalization (SharePoint, sObject, GitHub)

### Never capitalize

- Common nouns used as general terms (source, pipeline, user)
- Feature or UI element names that are not trademarked or sold separately
- Words for emphasis — use **bold** or _italic_ instead

### Referring to UI elements in copy

- Match the exact capitalization of the UI element as it appears on screen.
- Do not use quotation marks around UI element names.
- Apply **bold** formatting to the element name.

**Example of copy text:**

Do: Select **Save**

Don't: Select "save"

## Punctuation

### Periods

Add a period after full sentences. Do not add a period after fragments.

**Add a period after:**

- Body copy
- Descriptions
- Tooltips
- Help text
- Toast notifications (only when the message is a full sentence)

**Do not add a period after:**

- Labels
- Headings
- Button text
- Standalone UI strings

**Examples of copy text:**

Full sentence — Do: Your changes have been saved.

Full sentence — Don't: Your changes have been saved

Fragment — Do: Changes saved

Fragment — Don't: Changes saved.

### Colons

- Do not use colons in titles.
- Do not use colons in labels.

**Example of copy text:**

Do: Email [input field]

Don't: Email: [input field]

### Exclamation marks

- Use at most one per context (one page, modal, or notification).
- Only use for positive moments where enthusiasm is warranted.
- Never use for errors, warnings, neutral states, or any context where the user could be frustrated or confused.
- Never use in instructional or CTA copy.

**Example of copy text:**

Do: Success! Your query pipeline has been created.

Don't: An error occurred!

### Apostrophes

Do not use the possessive form for objects or UI elements. Rewrite using "of" instead.

**Example of copy text:**

Do: On the left side of the screen

Don't: On the screen's left side

### Spacing

Never add a space before a punctuation mark.

**Example of copy text:**

Do: Are you sure?

Don't: Are you sure ?

### Ellipses

Only use an ellipsis to indicate a process in progress or that content is truncated. Do not use ellipses to trail off in instructions or labels.

**Examples of copy text:**

Do: Loading...

Don't: You can configure this later...

## Grammar

### Active vs. passive voice

Use active voice. Use passive voice only in confirmations where attributing the action to the user would feel inaccurate.

**Examples of copy text:**

Do:

- Your query pipeline has been saved.
- The source could not be found.

Don't:

- You saved your query pipeline.
- We couldn't find the source.

### Tense

Instructions — Present tense: "Select a file to upload."

Questions — Present tense: "Are you sure you want to delete this?"

Confirmations — Past tense: "Your changes have been saved."

### Person

Address the user as "you." Never use "we," "our," or "us." Never use "Coveo" as the subject of an action. Omit the subject entirely when possible.

**Examples of copy text:**

Do:

- Your session has expired.
- No results found.
- You don't have permission to access this.

Don't:

- We ended your session.
- Coveo couldn't find any results.
- We can't let you access this.

### Contractions

Use:

- aren't (instead of: are not)
- can't (instead of: cannot)
- couldn't (instead of: could not)
- didn't (instead of: did not)
- doesn't (instead of: does not)
- don't (instead of: do not)
- hasn't (instead of: has not)
- haven't (instead of: have not)
- how's (instead of: how is)
- isn't (instead of: is not)
- it's (instead of: it is / it has)
- shouldn't (instead of: should not)
- that's (instead of: that is)
- there's (instead of: there is)
- they're (instead of: they are)
- what's (instead of: what is)
- where's (instead of: where is)
- won't (instead of: will not)
- wouldn't (instead of: would not)
- you're (instead of: you are)
- you've (past participle) (instead of: you have (past participle))

Don't use:

- it'll → it will
- would've → would have
- could've → could have
- should've → should have
- you'd → you would / you had
- it'd → it would / it had
- there'd → there would
- there'll → there will
- they'll → they will
- they've → they have
- who's → who is

### Sentence length

These are maximums. Shorter is always better.

- Any sentence: 20 words
- Button labels: 3 words
- Tooltips: 20 words
- Error messages: 25 words
- Empty states: 25 words
- Field validation: 10 words
- Modals: 25 words
- Toast notifications: 15 words

## Structure

### Frontloading

Put the most important information first. Add context or detail after.

**Examples of copy text:**

Do:

- No results found. Try adjusting your filters.
- Access denied. Contact your administrator to request permission.

Don't:

- Your current filter selection didn't return any results. Try adjusting them.
- You're trying to access a page that requires additional permissions. Contact your administrator.

### Instructions

State the result before the required action.

**Example of copy text:**

Do: To add a source, select **Add source**.

Don't: Select **Add source** to add a source.

### Plain language

- Use the simpler word when two options mean the same thing.
- Do not use idioms or expressions.
- The only exceptions are established industry verbs users already know, for example: crawl, index, query.

**Examples of copy text:**

Do:

- This may take a few minutes.
- This is quick to set up.

Don't:

- This won't happen at the speed of light.
- This is a piece of cake to set up.

### Jargon replacements

Prioritize plain language over corporate speak and technical jargon.

- able to → can
- to be able to → to
- additional → more / other / different
- administer → manage
- allows you to → you can use [x] to [y] / with [x], you can [y]
- alternative → other
- append → add
- assist → help
- begin → start
- be of interest to them → interest them
- complete → finish
- conversely → but / however
- credentials → username and password
- currently → now
- deactivate (a feature) → disable
- display → show
- due to the fact that → because / since
- e.g. → for example / like / such as
- enable → allow / let
- enable (a feature) → activate / turn on
- ensure → make sure (or just state the action)
- fashion (as in a secured fashion) → way (as in a secured way)
- following → after / next
- furthermore → then / so
- future-proof → lasting / reliable / adaptable
- gives you the ability → you can use [x] to [y] / with [x], you can [y]
- illustrate → show
- in cases where → when
- initial → first
- in order to → to
- in order to [verb], you must [verb] → to [verb], [verb]
- input (verb) → enter
- is able to provide → provides
- leverage → use
- make a modification → edit
- manner → way
- methods → ways
- modify → edit
- moreover → then / so
- nor → or
- obtain → get
- on the subject of → about
- pertaining → related
- preceding → before
- prior to → before
- provided [x], [y] will... → if
- purchase → buy
- rather → instead
- regarding → on / about / for
- related to → about
- remedy → fix
- required to → need to
- resolve → fix
- retain → keep
- should [x] + [verb] / should you [verb] → if
- simultaneously → at the same time
- submit (in certain contexts) → send
- sub-second → under one second
- subsequent → future / later / upcoming
- thereafter → after / after that
- therefore → so
- to ensure → to / to make sure
- to surface → to display / to promote
- unable to → can't
- utilize → use
- wish to → want to
- with the use of → with
- would like → want to
