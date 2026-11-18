# Report template

Use this structure exactly. Order component rows by attention needed: Off-system rebuild and misused first, then New component, then needs to evolve. Covered rows without issues don't get rows; they go in the Covered summary.

`<details>` blocks render as expandable rows on GitHub and in most Markdown viewers.

````markdown
# DS check — <prototype name or branch>

**Branch:** `<branch>` (base `<base>`) · **Scope:** <N> files changed on the branch · **Plasma installed:** <version>
**Run:** <YYYY-MM-DD HH:MM TZ> · **Commit:** `<short hash>`
**Screenshots:** <"captured from `<dev server URL>`" or "not captured: <reason>">
**admin-ui hints:** <"local copy @ `<branch>`, last commit <YYYY-MM-DD>" or "not used"> <!-- add a staleness warning if not on the default branch or older than two weeks -->

## Summary

| Outcome                            | Count |
| ---------------------------------- | ----- |
| Covered                            | <n>   |
| Existing component needs to evolve | <n>   |
| New Plasma component               | <n>   |
| New product component              | <n>   |
| Local component                    | <n>   |

Hand-off mismatches: <n> · Copy findings: <n> · Pattern findings: <n> · Token findings: <n> · Flags: <n>

> Outcomes are proposals for the DS check session. The DS team confirms them.

## Components

| Preview                                   | Component | Type   | Instances | Outcome   | Confidence        |
| ----------------------------------------- | --------- | ------ | --------- | --------- | ----------------- |
| <img src="images/<slug>.png" width="160"> | <name>    | <Type> | <count>   | <Outcome> | <High/Medium/Low> |

### <name>

**<Outcome>** · <Type> · <High/Medium/Low> confidence

<img src="images/<slug>.png" width="480">
<!-- or, when there's no screenshot: _No screenshot: <reason, e.g. opens on Alt + double-click>._ -->

**Description:** <what it is and what it does for the user, one or two sentences>

**Use instead:** <Plasma component to use> <!-- or **Missing in Plasma:** <what the existing component lacks>; omit if neither applies -->

**Why:** <one or two short, plain sentences — see "Writing the Why" below>
<sub>Source: <doc → section, e.g. ContextualHelp → Common anti-patterns></sub>

<!-- notes, only when relevant, one line each: -->
<!-- 🔎 Possible match in admin-ui: `ComponentName` (`path`). Check with the owning team. -->
<!-- 🔎 Likely copy of admin-ui `ComponentName` (`path`). Reuse it when implementing. -->
<!-- 🔎 May already exist in admin-ui. Check with the owning team. -->
<!-- ⬆️ Needs a Plasma upgrade (installed <version>). -->
<!-- 🚫 Deprecated in Plasma. <Use X instead, or: the DS team needs to say what replaces it.> -->
<!-- ⚠️ Visual match only: looks like `<Component>`, but <what's uncertain>. Check it at `<route>`. -->

<details>
<summary>Code and instances (<count>)</summary>

```tsx
<one short representative snippet>
```

- `<route>` — `<file>:<line>`
- `<route>` — `<file>:<line>`

</details>

---

<!-- repeat one section per row, in the same order as the table -->

## Covered

<n> component groups use Plasma as documented: <comma-separated names>.
Undocumented Plasma components used (no Plasma guidance yet): <names or "none">.

## Hand-off check

Compared with the `dsComponents` entries in `stages.ts`, using the rule in `docs/handoff-fields.md`.

| Stage / entry | Mismatch                                                                  | Suggested entry    |
| ------------- | ------------------------------------------------------------------------- | ------------------ |
| <stage key>   | <False checkmark / Missing entry / Unneeded prefix>: <one plain sentence> | `<corrected text>` |

<!-- or: "Skipped: no hand-off entries for this prototype." / "All entries match." -->

## Copy

| String     | Location        | Rule                  | Suggestion  |
| ---------- | --------------- | --------------------- | ----------- |
| "<string>" | `<file>:<line>` | <Guideline → Section> | "<rewrite>" |

## Patterns

| Pattern   | Where     | Finding                                         |
| --------- | --------- | ----------------------------------------------- |
| <pattern> | `<route>` | <what doesn't follow the pattern, and the rule> |

Not checked (no documented pattern yet): page patterns, experience patterns<, and any other uncovered area>.

## Foundations

| Value     | Instances | Use token |
| --------- | --------- | --------- |
| `<value>` | <count>   | `<token>` |

## Flags

Not issues, but worth fixing before implementation.

- **Mantine imports** — <n> files import from `@mantine/*`. Import from `@coveord/plasma-mantine` instead. <files>
````

Leave out any section that has no findings, except Summary, Components, and the "Not checked" line under Patterns, which always appear.

## Writing the Why

The reader is a product designer or PM, not someone who has read the Plasma docs. Write the Why so they understand it in one read:

- Say what's wrong and what to do, in plain words. One or two short sentences.
- Don't quote the docs, use rule IDs, or refer to the skill's own files ("detection table", "Recognizing look-alikes"). The doc reference goes on the Source line, not in the Why.
- Put uncertainty in plain words too: "We're not sure because…", not "Low: the alternative reading is…".

Examples:

| Instead of                                                                                                                                                                                                                  | Write                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| ContextualHelp → "It replaces hand-built Tooltip + InfoToken combinations"; anti-pattern "Rebuilding it with Tooltip and InfoToken.Question". The icon is also not focusable, against Tooltip → Accessibility expectations. | Plasma has a ready-made help icon for this. This one is built by hand and can't be reached with the keyboard.                               |
| Modal → When not to use: "the overlay is only a simple confirmation; use Prompt".                                                                                                                                           | This window only asks "Are you sure?". Plasma uses a Prompt for that, with the red style for deletions.                                     |
| Low, because Header → When not to use also says "a small card or form group only needs a local heading"…                                                                                                                    | Plasma's section header fits the big sections. For the small form sections, a simple title is fine. We're not sure which ones count as big. |
