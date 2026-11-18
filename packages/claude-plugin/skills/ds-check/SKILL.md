---
name: ds-check
description: Run a design system (DS) compliance check on a vibe-coded prototype branch and produce a coverage report against Plasma (`@coveord/plasma-mantine`). Use this skill whenever a designer asks to "run a DS check", "check my prototype against Plasma", "is my design compliant", "what's not in the design system", or shares a prototype branch link and wants to know which components are covered, which need to evolve, and which are new — even if they don't say "DS check". Report only; never changes the prototype.
---

# DS check

The DS check tells a product designer, before implementation starts, what in their prototype the design system already covers, what needs DS work, and what the squad will build locally. Component gaps found late ("this is not part of the design system") turn into blocked features, off-system UI, or rework; this check moves that discovery earlier.

It is a **compliance and planning read**, not a design review. Don't judge whether the design is good. Every finding must point to something concrete: a Plasma component, a documented rule, a pattern, or a token. If you can't cite a source, it isn't a finding.

It produces a **report only**. Never edit the prototype, open PRs, or create Jira tickets — the DS team turns the report into tickets.

## What you need

- The **prototype branch**, checked out locally. The designer usually shares a branch link from the prototype repo. If the current working directory isn't that repo on that branch, ask the designer to check it out (or confirm the path) before going further. Don't clone anything yourself.
- _Optional:_ a **local copy of admin-ui**, used only for product-component hints (step 5). Look for an `admin-ui` folder next to the prototype repo. If there isn't one, ask the designer once whether they have a local copy and where; if they don't, skip step 5.
- The **Plasma MCP server** (`list_components`, `get_component_doc`, `get_component_props`, `search_docs`, `list_patterns`, `get_pattern`, `list_content_guidelines`, `get_content_guideline`, `get_foundations`). It ships in the same plugin. If it isn't available, fall back to the static docs at `https://plasma.coveo.com/llms.txt` and say so in the report.

## Workflow

### 1. Scope the check

1. Identify the branch and its base: `git rev-parse --abbrev-ref HEAD`, then the default branch (`git symbolic-ref refs/remotes/origin/HEAD`).
2. Default scope = files the branch changed: `git diff --name-only <base>...HEAD`, limited to UI source (`.tsx`, `.jsx`, `.ts`, `.css`, `.module.css`, `.scss`). The prototype repo contains shared scaffolding the designer didn't write; checking all of it buries their work in noise. If the designer asks for the full app, widen the scope and say so in the report.
3. Map files to pages: find the router config (e.g. `createBrowserRouter`, `<Route path=…>`, file-based routes) and record which route renders each file. If there's no router, use the file path as the location.
4. Record the installed Plasma version from `node_modules/@coveord/plasma-mantine/package.json` (fall back to the version in `package.json`).

### 2. Load Plasma context

Call once and keep the results for the whole check:

- `list_components` → the set of **documented** Plasma components. Ignore the `Components` entry: it's an index page, not a component. Note which entries are described as deprecated (for example BlankSlate, DateRangePicker).
- `list_patterns` → the documented patterns.
- `list_content_guidelines` → the content guidelines.
- `get_foundations` → token reference.

Call `get_component_doc` lazily, only for components you actually find in scope. The docs carry the usage rules you need: _when to use_, _when not to use_, decision guidance, preferred sub-components, content guidance, and anti-patterns.

### 3. Component pass

Inventory every UI element in scope, group identical ones, and classify each group. Read `references/classification.md` for the Type → Outcome rules and `references/detection.md` for how to recognize each case in code.

In short, each group gets one **Type**:

| Type                     | Meaning                                                           |
| ------------------------ | ----------------------------------------------------------------- |
| Existing Plasma          | Imported from `@coveord/plasma-mantine` and documented by Plasma  |
| Existing Plasma, misused | Plasma component used against its documented rules                |
| Plasma, undocumented     | Imported from `@coveord/plasma-mantine` but no Plasma spec exists |
| Mantine import           | Imported directly from `@mantine/*`                               |
| Off-system rebuild       | Raw HTML or custom code recreating something Plasma has           |
| New component            | Nothing in Plasma covers it                                       |

…and one proposed **Outcome**: Covered · Existing component needs to evolve · New Plasma component · New product component · Local component.

The outcome is a **proposal**. The DS team makes the call in the follow-up session, so always give a short **Why** in plain language, the doc it rests on as a separate **Source**, and a confidence (high / medium / low). The Why is read by designers and PMs who haven't read the Plasma docs; follow _Writing the Why_ in `references/report-template.md`.

**Existing product components can't be verified** from Plasma alone. When a "New component" looks like something a product team has probably built already (a project selector, a privileges table, a source status cell), add _"May already exist as a product component in admin-ui — verify."_ Step 5 can sharpen this into a named hint.

**Deprecated components.** When the prototype uses a Plasma component that `list_components` or its doc marks as deprecated, add the note _"🚫 Deprecated in Plasma"_, even if it's otherwise used correctly. If the doc names a replacement that the installed version exports, classify it as **Existing Plasma, misused** with that replacement. If not, keep its Type and say in the Why that the DS team needs to say what to use instead.

### 4. Hand-off check (prototypes repo)

The prototypes repo asks designers to declare, for each stage, which DS components they used, following the convention in `docs/handoff-fields.md`: entries in the prototype's `stages.ts` hand-off data (`dsComponents`), with a `NOT on DS:` prefix on anything that isn't Plasma.

1. Read `docs/handoff-fields.md` for the current rule and the `stages.ts` hand-off entries for this prototype. If either is missing, skip this step and say so in the report.
2. Compare each entry with your component rows, using the repo's own rule (not your Types) to decide whether an entry should carry the prefix. Report three kinds of mismatch:
    - **False checkmark:** declared as Plasma but, by the rule, it isn't.
    - **Missing entry:** a component group you found that no entry mentions.
    - **Unneeded prefix:** marked `NOT on DS:` but it passes the rule.
3. For each mismatch, suggest the corrected entry text.

This check is about whether the designer's declaration is accurate. It doesn't change any row's Type or Outcome, and you never edit `stages.ts`.

### 5. Product-component hints (optional, local admin-ui)

Skip this step if there's no local admin-ui copy.

For each **New component** and **Off-system rebuild** with no Plasma equivalent, look for a look-alike in admin-ui's component folders. See `references/detection.md` → _Admin-ui lookup_.

This is a **hint, never a verdict**, for two reasons:

- Prototypes can't import admin-ui components (they aren't published), so a duplicate or rebuild in the prototype is expected, not a violation.
- admin-ui components have no usage docs, so you can't tell whether a match is the _right_ component or just looks similar, and you can't suggest one the designer didn't build.

So a hint never changes the Type or Outcome. It adds one line to the row: _"Possible match in admin-ui: `ComponentName` (`path`) — verify with the owning team."_ Record the admin-ui branch and last commit date in the report header; if it isn't on the default branch or the last commit is more than two weeks old, say so and suggest the designer pull. Never run git commands that change their admin-ui copy.

### 6. Copy pass

Extract user-facing strings in scope: JSX text, and the `label`, `description`, `placeholder`, `title`, `aria-label`, `error`, `tooltip` props, plus notification and modal text. Check them against the content guidelines (`get_content_guideline` for each one listed) and against the _Content guidance_ section of each component doc you loaded.

Only report a string when it breaks a specific rule. Name the guideline and section (e.g. _Writing Mechanics → Capitalization → Default: sentence case_), quote the string, and suggest a rewrite. Group repeated violations of the same rule into one finding with a count.

### 7. Patterns pass

For each documented pattern, decide whether the prototype has the situation it covers (e.g. _Navigate with links_: any link, or a button used for navigation). If it does, check it against the pattern's decision guide and rules. Only page-level and experience-level patterns that are documented can be checked; say plainly in the report which ones aren't documented yet rather than inventing rules.

### 8. Foundations pass

Flag hard-coded colours (hex, `rgb()`, named colours), spacing, radii, shadows, and font sizes in `style`, `sx`, `styles`, and CSS files when a token covers them. Give the token to use from `get_foundations`. Group by value.

### 9. Version check

If a Plasma doc describes a component or sub-component that the **installed** version doesn't export (check `node_modules/@coveord/plasma-mantine`), the outcome is still Covered. Add _"Requires a Plasma upgrade"_ — that's a dependency bump, not a DS gap.

### 10. Screenshots

Component names alone mean little to a reviewer, so each component row gets a picture of what the designer built. Read `references/screenshots.md` for how.

In short: start the prototype's dev server, open each row's route in a headless browser, and capture one representative instance with an outline around it. Ask the designer before starting the server or installing anything. If screenshots aren't possible (the server won't start, the designer declines), skip this step and say so in the report header — the report is still useful without them.

Screenshots also settle doubts from the code pass: look at each one, and if a _Visual match only_ row clearly does or doesn't match, update its confidence and note.

### 11. Write the report

Use the template in `references/report-template.md` exactly. Designers run the check several times as the prototype evolves, so every run gets its own timestamped folder and never overwrites an earlier one:

- Get the local time with `date '+%Y-%m-%d %H:%M %Z'` and the commit with `git rev-parse --short HEAD`.
- Write the report to `ds-check-reports/<YYYY-MM-DD-HHmm>/report.md` at the repo root, with screenshots in `ds-check-reports/<YYYY-MM-DD-HHmm>/images/`. Image paths in the report are relative (`images/<slug>.png`).
- Tell the designer where it is, and remind them not to commit the folder. Then give a short summary in the conversation: counts per outcome, and the items that need DS attention.

## Judgment calls

- **Group by what it is, not where it is.** Six status pills across three pages are one row with six instances, not six rows.
- **Judge by behavior, not by import.** Vibe-coded prototypes are full of look-alikes: a local `Tabs.tsx`, or tabs assembled from `Group` + `UnstyledButton` + `useState`, are off-system rebuilds even though nothing imported is wrong. See `references/detection.md` → _Recognizing look-alikes_.
- **Layout primitives alone aren't findings.** `Box`, `Stack`, `Group`, `Flex`, `Grid`, `Text`, `Title` from `@coveord/plasma-mantine` are Covered and go in the summary count — unless they're assembled into a look-alike of a real component, which makes the assembly an off-system rebuild.
- **Prototype shortcuts aren't findings.** Mock data, hard-coded fetches, and stubbed handlers are expected in a prototype. Check only what the user would see and touch.
- **When unsure between two outcomes, pick one, lower the confidence, and name the alternative** in the Why, in plain words. Don't leave an outcome blank.
