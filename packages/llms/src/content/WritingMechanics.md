---
name: Content Guidelines — Writing Mechanics
description: Required rules for grammar, punctuation, capitalization, structure, and length in Coveo UX copy.
---

## Vocabulary

- Only use a shortened form when it is more commonly known than the full term.
- Do not use customer jargon that isn't an official Coveo term.
- For every official Coveo product, feature, or function name, follow the exact spelling and capitalization in the [Product Vocabulary](./ProductVocabulary.md) list.

### Acronyms and initialisms

- Write in all capitals.
- No periods, hyphens, or spaces.
- No italics or quotation marks.

| Do  | Don't  |
| --- | ------ |
| RGA | rga    |
| RGA | R.G.A. |
| RGA | _RGA_  |

### Third-party terms

Always use the official original spelling, capitalization, and formatting for third-party names.

| Vocabulary type                           | Example              |
| ----------------------------------------- | -------------------- |
| Universal acronyms and abbreviations      | a.m., etc., mL, Aug  |
| Industry-wide terminology                 | SaaS, WiFi, A/B test |
| Third-party products, objects, and fields | sObject, PnP         |

## Capitalization

### Default: sentence case

Use sentence case for all UI text: headings, labels, buttons, descriptions, tooltips, and placeholder text.

| Do           | Don't        |
| ------------ | ------------ |
| Save changes | Save Changes |

### Always capitalize

- The first word of any sentence, label, or heading
- Proper nouns
- Official Coveo product and feature names
- Third-party names that use their own capitalization (SharePoint, sObject, GitHub)

### Never capitalize

- Common nouns used as general terms (source, pipeline, user)
- Feature or UI element names that are not trademarked or sold separately
- Words for emphasis — use **bold** or _italic_ instead

### Referring to UI elements in copy

- Match the exact capitalization of the UI element as it appears on screen.
- Do not use quotation marks around UI element names.
- Apply **bold** formatting to the element name.

| Do              | Don't         |
| --------------- | ------------- |
| Select **Save** | Select "save" |

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

| Type          | Do                            | Don't                        |
| ------------- | ----------------------------- | ---------------------------- |
| Full sentence | Your changes have been saved. | Your changes have been saved |
| Fragment      | Changes saved                 | Changes saved.               |

### Colons

- Do not use colons in titles.
- Do not use colons in labels.

| Do                  | Don't                |
| ------------------- | -------------------- |
| Email [input field] | Email: [input field] |

### Exclamation marks

- Use at most one per context (one page, modal, or notification).
- Only use for positive moments where enthusiasm is warranted.
- Never use for errors, warnings, neutral states, or any context where the user could be frustrated or confused.
- Never use in instructional or CTA copy.

| Do                                             | Don't              |
| ---------------------------------------------- | ------------------ |
| Success! Your query pipeline has been created. | An error occurred! |

### Apostrophes

Do not use the possessive form for objects or UI elements. Rewrite using "of" instead.

| Do                             | Don't                     |
| ------------------------------ | ------------------------- |
| On the left side of the screen | On the screen's left side |

### Spacing

Never add a space before a punctuation mark.

| Do            | Don't          |
| ------------- | -------------- |
| Are you sure? | Are you sure ? |

### Ellipses

Only use an ellipsis to indicate a process in progress or that content is truncated. Do not use ellipses to trail off in instructions or labels.

| Do         | Don't                           |
| ---------- | ------------------------------- |
| Loading... | You can configure this later... |

## Grammar

### Active vs. passive voice

Use active voice. Use passive voice only in confirmations where attributing the action to the user would feel inaccurate.

| Do                                  | Don't                          |
| ----------------------------------- | ------------------------------ |
| Your query pipeline has been saved. | You saved your query pipeline. |
| The source could not be found.      | We couldn't find the source.   |

### Tense

| Context       | Tense   | Example                               |
| ------------- | ------- | ------------------------------------- |
| Instructions  | Present | Select a file to upload.              |
| Questions     | Present | Are you sure you want to delete this? |
| Confirmations | Past    | Your changes have been saved.         |

### Person

Address the user as "you." Never use "we," "our," or "us." Never use "Coveo" as the subject of an action. Omit the subject entirely when possible.

| Do                                        | Don't                            |
| ----------------------------------------- | -------------------------------- |
| Your session has expired.                 | We ended your session.           |
| No results found.                         | Coveo couldn't find any results. |
| You don't have permission to access this. | We can't let you access this.    |

### Contractions

**Use these:**

| Use                      | Instead of                 |
| ------------------------ | -------------------------- |
| aren't                   | are not                    |
| can't                    | cannot                     |
| couldn't                 | could not                  |
| didn't                   | did not                    |
| doesn't                  | does not                   |
| don't                    | do not                     |
| hasn't                   | has not                    |
| haven't                  | have not                   |
| how's                    | how is                     |
| isn't                    | is not                     |
| it's                     | it is / it has             |
| shouldn't                | should not                 |
| that's                   | that is                    |
| there's                  | there is                   |
| they're                  | they are                   |
| what's                   | what is                    |
| where's                  | where is                   |
| won't                    | will not                   |
| wouldn't                 | would not                  |
| you're                   | you are                    |
| you've (past participle) | you have (past participle) |

**Do not use these:**

| Don't use | Write out as        |
| --------- | ------------------- |
| it'll     | it will             |
| would've  | would have          |
| could've  | could have          |
| should've | should have         |
| you'd     | you would / you had |
| it'd      | it would / it had   |
| there'd   | there would         |
| there'll  | there will          |
| they'll   | they will           |
| they've   | they have           |
| who's     | who is              |

### Sentence length

These are maximums. Shorter is always better.

| UI element          | Maximum word count |
| ------------------- | ------------------ |
| Any sentence        | 20 words           |
| Button labels       | 3 words            |
| Tooltips            | 20 words           |
| Error messages      | 25 words           |
| Empty states        | 25 words           |
| Field validation    | 10 words           |
| Modals              | 25 words           |
| Toast notifications | 15 words           |

## Structure

### Frontloading

Put the most important information first. Add context or detail after.

| Do                                                               | Don't                                                                                            |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| No results found. Try adjusting your filters.                    | Your current filter selection didn't return any results. Try adjusting them.                     |
| Access denied. Contact your administrator to request permission. | You're trying to access a page that requires additional permissions. Contact your administrator. |

### Instructions

State the result before the required action.

| Do                                      | Don't                                  |
| --------------------------------------- | -------------------------------------- |
| To add a source, select **Add source**. | Select **Add source** to add a source. |

### Plain language

- Use the simpler word when two options mean the same thing.
- Do not use idioms or expressions.
- The only exceptions are established industry verbs users already know, for example: crawl, index, query.

| Do                           | Don't                                    |
| ---------------------------- | ---------------------------------------- |
| This may take a few minutes. | This won't happen at the speed of light. |
| This is quick to set up.     | This is a piece of cake to set up.       |

### Jargon replacements

- Prioritize plain language over corporate speak and technical jargon.
- Use the list to see what jargon can be replaced with plain language.

| Replace                                 | With                                 |
| --------------------------------------- | ------------------------------------ |
| able to                                 | can                                  |
| to be able to                           | to                                   |
| additional                              | more / other / different             |
| administer                              | manage                               |
| allows you to                           | you can use [x] to [y]               |
| alternative                             | other                                |
| append                                  | add                                  |
| assist                                  | help                                 |
| begin                                   | start                                |
| be of interest to them                  | interest them                        |
| complete                                | finish                               |
| conversely                              | but / however                        |
| credentials                             | username and password                |
| currently                               | now                                  |
| deactivate (a feature)                  | disable                              |
| display                                 | show                                 |
| due to the fact that                    | because / since                      |
| e.g.                                    | for example / like / such as         |
| enable                                  | allow / let                          |
| enable (a feature)                      | activate / turn on                   |
| ensure                                  | make sure (or just state the action) |
| fashion (as in a secured fashion)       | way (as in a secured way)            |
| following                               | after / next                         |
| furthermore                             | then / so                            |
| future-proof                            | lasting / reliable / adaptable       |
| gives you the ability                   | you can use [x] to [y]               |
| illustrate                              | show                                 |
| in cases where                          | when                                 |
| initial                                 | first                                |
| in order to                             | to                                   |
| in order to [verb], you must [verb]     | to [verb], [verb]                    |
| input (verb)                            | enter                                |
| is able to provide                      | provides                             |
| leverage                                | use                                  |
| make a modification                     | edit                                 |
| manner                                  | way                                  |
| methods                                 | ways                                 |
| modify                                  | edit                                 |
| moreover                                | then / so                            |
| nor                                     | or                                   |
| obtain                                  | get                                  |
| on the subject of                       | about                                |
| pertaining                              | related                              |
| preceding                               | before                               |
| prior to                                | before                               |
| provided [x], [y] will...               | if                                   |
| purchase                                | buy                                  |
| rather                                  | instead                              |
| regarding                               | on / about / for                     |
| related to                              | about                                |
| remedy                                  | fix                                  |
| required to                             | need to                              |
| resolve                                 | fix                                  |
| retain                                  | keep                                 |
| should [x] + [verb] / should you [verb] | if                                   |
| simultaneously                          | at the same time                     |
| submit (in certain contexts)            | send                                 |
| sub-second                              | under one second                     |
| subsequent                              | future / later / upcoming            |
| thereafter                              | after / after that                   |
| therefore                               | so                                   |
| to ensure                               | to / to make sure                    |
| to surface                              | to display / to promote              |
| unable to                               | can't                                |
| utilize                                 | use                                  |
| wish to                                 | want to                              |
| with the use of                         | with                                 |
| would like                              | want to                              |
