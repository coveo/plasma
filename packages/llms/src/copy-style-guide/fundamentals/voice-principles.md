# Voice Principles

<!-- This page is a work in progress and needs to be refined more -->

Good UX copy starts with knowing the difference between voice and tone, and then knowing how to apply each one.

## Understanding *voice* and *tone*

**Voice** is constant.
It's Coveo's personality, staying consistent no matter where copy appears in the product.

**Tone**, also called *tone of voice*, is situational.
It shifts to match the UI context and emotional state of the user in that moment.

Think of it this way: Whether you're explaining a complex idea or celebrating an achievement, you're still you.
Your voice doesn't change, but you adapt your tone to fit the situation.

**Examples of applying voice:**

| Scenario | Coveo voice | Non-Coveo voice |
| ---------------- | ----------- | --------------- |
| **A user is deleting a query pipeline association** | You're about to delete "association-123". This action can't be undone. | Say goodbye to "association-123"? It'll be gone for good! |
| **A user checks their watchtower for errors** | Nothing to report. If something comes up, it'll appear here. | *Crickets...* No news is good news. If something breaks, we'll post it right here. |

## What is Coveo's voice?

Coveo's voice can be described with three main qualities which should be present in every piece of copy.

### Clear

When something is complex, clear copy breaks it down.
UX copy should sound like a knowledgeable colleague explaining something, not a technical or academic manual.

This looks like:

- Using plain words
- Respecting the user's time by keeping it short
- Saying exactly what to do or where to go
- Making it easy to understand on the first read

**Examples:**

| Scenario | Do | Don't |
| -------- | -- | ----- |
| **A user hovers over an unfamiliar setting** | Controls how often your source checks for new content. | Defines the crawling interval for content ingestion. |
| **A user is about to delete in bulk** | This will remove all selected items. You can't undo this. | Are you sure you want to proceed with this action? |
| **A user hovers over a disabled button** | Save your changes before sharing. | This action is unavailable in the current state. |

### Human

The goal is a natural and intuitive user experience.
Copy should be respectful, purposeful, and treat the user like a capable adult.
This requires stepping out of any objective or technical mindset you might be in, and imagining the real person on the other side of the screen.

This looks like:

- Speaking directly to the user
- Using natural language
- Giving guidance in frustrating UI contexts
- Prioritizing problem-solving
- Not embellishing with technical language

> [!NOTE]
> Conversational doesn't automatically mean "human."
> AI-generated copy can be human-like without considering the user's needs and emotional state.
> The intent is what matters.

**Examples:**

| Scenario | Do | Don't |
| -------- | -- | ----- |
| **A user's source fails to rebuild** | Something went wrong. Check your source settings and try again. | An error was encountered during the source rebuild operation. |
| **A user leaves a required field empty** | Add a name to continue. | This field is required. |
| **A user's search returns no results** | No results. Try different keywords or clear your filters. | The query returned no matching results. Modify your search parameters and resubmit. |

### Helpful

Helpful copy means focusing on what the user needs to do and why it matters to them.
It should answer a question before the user has to ask it, and guide the user forward without being overbearing.

This looks like:

- Guiding without overwhelming
- Explaining what the user can do, not what the system did
- Giving next steps when something goes wrong
- Working in harmony with visual design elements

**Examples:**

| Scenario | Do | Don't |
| -------- | -- | ----- |
| **A source finishes rebuilding** | Your source is ready. Content is now searchable. | Operation completed successfully. |
| **A user's action is blocked by missing permissions** | You don't have permission to do this. Contact your administrator to request access. | Access denied. |
| **A user enables a feature for the first time** | Query suggestions are on. They will start appearing as users type in your search box. | Feature enabled. |

## Choosing the right tone

UX copy should adapt to the user's current goals, mood, and needs in their journey.
These four scales can help visualize what goes into tone.

![Four Dimensions of Tone of Voice: formal and casual, serious and funny, respectful and irreverent, matter-of-fact and enthusiastic](../images/dimensions-of-tone.png)

Your copy should never land at either extreme.
As a practice, aim for the middle point on all scales and shift only slightly based on context:

- **Errors and frustrating scenarios:** lean serious and matter-of-fact
- **Instructional and neutral scenarios:** stay in the middle
- **Achievements and positive scenarios:** lean enthusiastic and casual

| Tone | Example |
| ---- | ------- |
| Serious | You're about to delete "pipeline-123". This action can't be undone. |
| Matter-of-fact | No query pipelines found. Try changing or clearing your filters. |
| Enthusiastic | Success! Your query pipeline "pipeline123" has been saved. |

Also, see the [writing mechanic guidelines](writing-mechanics.md).
