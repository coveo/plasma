---
name: Content Guidelines — Voice
description: Coveo's required voice qualities (clear, human, helpful) and how to apply tone by context.
---

## Voice vs. tone

Voice is fixed. It never changes across the product.

Tone shifts based on the UI context and the user's emotional state. Adjust tone per scenario using the table below — never change the voice.

## The three required voice qualities

Every piece of UX copy must be **clear**, **human**, and **helpful**. All three, always.

### Clear

Write like a knowledgeable colleague explaining something, not a technical manual.

**Required:**

- Use plain words
- Be as short as possible
- Say exactly what to do or where to go

| Do                                                        | Don't                                                |
| --------------------------------------------------------- | ---------------------------------------------------- |
| Controls how often your source checks for new content.    | Defines the crawling interval for content ingestion. |
| This will remove all selected items. You can't undo this. | Are you sure you want to proceed with this action?   |
| Save your changes before sharing.                         | This action is unavailable in the current state.     |

### Human

Write for a real person. Be respectful and purposeful. Treat the user like a capable adult.

**Required:**

- Speak directly to the user
- Use natural language
- Give guidance in frustrating contexts
- Prioritize problem-solving

> Conversational does not automatically mean human. The intent — considering the user's needs and emotional state — is what matters.

| Do                                                              | Don't                                                                               |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Something went wrong. Check your source settings and try again. | An error was encountered during the source rebuild operation.                       |
| Add a name to continue.                                         | This field is required.                                                             |
| No results. Try different keywords or clear your filters.       | The query returned no matching results. Modify your search parameters and resubmit. |

### Helpful

Copy must answer the user's question before they have to ask it and guide them forward without being overbearing.

**Required:**

- Explain what the user can do, not what the system did
- Always give next steps when something goes wrong

| Do                                                                                    | Don't                             |
| ------------------------------------------------------------------------------------- | --------------------------------- |
| Your source is ready. Content is now searchable.                                      | Operation completed successfully. |
| You don't have permission to do this. Contact your administrator to request access.   | Access denied.                    |
| Query suggestions are on. They will start appearing as users type in your search box. | Feature enabled.                  |

## Tone by context

Default to neutral. Coveo's tone is never humorous, irreverent, or overly casual. Only shift tone when the scenario clearly matches one of the non-neutral rows below.

| Scenario                                                | User's state         | Tone                                                 | Example                                                             |
| ------------------------------------------------------- | -------------------- | ---------------------------------------------------- | ------------------------------------------------------------------- |
| Errors · failures · empty states · complex features     | Frustrated, confused | Matter-of-fact and respectful — direct, no softening | No query pipelines found. Try changing or clearing your filters.    |
| Notifications · warnings · descriptions · confirmations | Neutral              | Neutral                                              | You're about to delete "pipeline-123". This action can't be undone. |
| Completed setups · upgrades                             | Pleased, encouraged  | Slightly enthusiastic — one exclamation mark maximum | Success! Your query pipeline "pipeline-123" has been saved.         |

### When enthusiasm is appropriate

Use a single exclamation mark only in genuinely positive, celebratory moments. Never use more than one per context.

**Appropriate UI contexts:**

- A source finishes rebuilding successfully after a long operation
- A user completes onboarding or initial setup
- A new feature or integration is enabled for the first time
- A query pipeline is created or saved
- A user upgrades their plan or unlocks a new capability
- A bulk action completes with no errors

**Never use enthusiasm for:**

- Errors, warnings, or failures of any kind
- Neutral confirmations (deletions, disabling features)
- Empty states
- Instructional or CTA copy (button labels, tooltips, help text)

> **Note:** These voice qualities are principles — apply judgment when applying them. For concrete mechanical rules (capitalization, punctuation, word limits), follow WritingMechanics.md exactly.
