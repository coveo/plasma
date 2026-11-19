# Classification: Type → Outcome

Each component group gets one Type (what it is today) and one Outcome (what should happen). The Type limits which Outcomes are valid. If you find yourself picking an outcome outside the allowed set, you've probably misclassified the Type.

## Allowed combinations

| Type                     | Allowed outcomes                                               | Report as an issue?                                         |
| ------------------------ | -------------------------------------------------------------- | ----------------------------------------------------------- |
| Existing Plasma          | Covered · Existing component needs to evolve                   | Only if it needs to evolve                                  |
| Existing Plasma, misused | Covered                                                        | Yes — give the fix and the rule it breaks                   |
| Plasma, undocumented     | Covered                                                        | No — note "No Plasma guidance yet"                          |
| Mantine import           | Covered                                                        | No — flag only, if Plasma exports the same name (see below) |
| Off-system rebuild       | Covered                                                        | Yes — give the Plasma component to use                      |
| New component            | New Plasma component · New product component · Local component | Yes                                                         |

"Existing Product component" is a Type in the DS team's model but isn't used yet: admin-ui components have no usage docs, so a match can't be confirmed. Keep the Type as **New component**. If the optional admin-ui lookup finds a look-alike, add it as a hint ("Possible match in admin-ui: …"); otherwise add "may already exist in admin-ui — verify" when it's plausible. Neither changes the outcome. Once promoted product components have specs served by the MCP, they can be classified like Plasma components.

## Type rules

**Existing Plasma.** Imported from `@coveord/plasma-mantine` and present in `list_components`. Compare usage with the component doc. Use **Existing component needs to evolve** when the design needs something the component doesn't offer: a variant, size, state, or prop that isn't in the doc or props table, and that the prototype fakes with overrides (`styles`, `classNames`, wrapper CSS) or extra markup. Name the missing capability ("needs a `compact` density", "needs a loading state").

Plasma's props tables only list what Plasma adds or changes. Most components also accept every prop of the Mantine component they're built on, and the doc points to Mantine for those. So before calling something missing, check the Mantine props too (`get_item_props` on the Mantine MCP server, which ships in the same plugin), and check that the Plasma doc doesn't forbid that prop. If Mantine has it and Plasma allows it, the component already covers the need: it's **misused** (the prototype overrides instead of using the prop), not **needs to evolve**. If you can't tell, keep **needs to evolve** with low confidence and say in the Why that the capability may already exist.

**Existing Plasma, misused.** The component exists and covers the need, but it's used against its doc. Common signs: raw Mantine props where Plasma prescribes sub-components (`<Badge color="red">` instead of `Badge.Critical`, `<Button variant="filled">` instead of `Button.Primary`); a case listed under _When not to use_ (Badge used as a button); an item from _Common anti-patterns_. Cite the doc section.

**Plasma, undocumented.** Imported from `@coveord/plasma-mantine` but missing from `list_components`. This is allowed — `plasma-mantine` re-exports Mantine with Coveo's theme applied — so it's Covered. Add "No Plasma guidance yet" so the DS team can see which undocumented components designers reach for. Layout primitives (`Box`, `Stack`, `Group`, `Flex`, `Grid`, `Text`, `Title`) are the exception: they're Covered but never listed as undocumented.

**Mantine import.** Imported directly from `@mantine/*`. Plasma's import rule is to always import from `@coveord/plasma-mantine`, but switching the import only works when Plasma exports that same name. Check the installed package's exports first (search the `.d.ts` files in `node_modules/@coveord/plasma-mantine/dist`). Plasma re-exports most of `@mantine/core`, but not everything from other Mantine packages: for example, it doesn't export Mantine's date pickers.

- **Plasma exports it, and it's the plain Mantine component:** Outcome Covered, with the note "Import from `@coveord/plasma-mantine` instead." List it in the _Flags_ section, not among the issues.
- **Plasma exports its own version** (a wrapper such as `Button`, which adds behavior): changing the import changes what renders. Classify it as **Existing Plasma**, compare the usage with that component's doc, and say in the Why that switching imports may change how it looks or behaves.
- **Plasma doesn't export it:** it's not an import fix. If Plasma has another component for the same need (check `search_docs`), classify it as **Off-system rebuild** with that component under _Use instead_. Otherwise it's a **New component**.
- **The doc describes it but the installed version doesn't export it:** that's a Plasma upgrade, not a gap (SKILL.md step 9).

**Off-system rebuild.** Raw HTML elements or custom components that recreate something Plasma already provides. Name the Plasma component in a _Use instead_ note and check that its doc's _When to use_ actually matches the situation before saying so. If Plasma's version can't do what the rebuild does, it's **Existing Plasma → needs to evolve** instead, not an off-system rebuild.

**New component.** Nothing in Plasma covers the need, after checking `search_docs` with two or three different descriptions of what it does. Choose the outcome below.

## Choosing an outcome for a New component

Ask these in order:

1. **Does it assume Coveo data or a Coveo concept?** (sources, projects, privileges, query pipelines, catalogs, models, analytics events…) → it isn't Plasma. It's **New product component** if reuse is likely, otherwise **Local component**.
2. **Is it product-agnostic and general-purpose** (would make sense in any admin UI: a new input type, a layout primitive, a generic display pattern)? → **New Plasma component**.
3. **Is it reused?** Several instances, or used on more than one page, points toward Plasma or product. One instance tied to one feature points toward **Local component**.

**Local component** is a legitimate outcome, not a failure. Use it when the thing is genuinely specific to this feature. The DS team logs it as tracked debt.

## Confidence

- **High** — direct evidence: import path, exact match with a documented rule or _When not to use_ item.
- **Medium** — a judgment call with a clear leaning (rebuild that mostly matches a Plasma component; product vs Plasma when reuse is unclear).
- **Low** — could reasonably go another way. Name the alternative in the reason.
