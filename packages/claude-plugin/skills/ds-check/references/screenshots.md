# Screenshots

Each component row gets one picture of a representative instance, so a reviewer sees what was built instead of reading a name the agent made up.

Screenshots use the **Playwright MCP server** (`playwright`), which ships in the same plugin. It drives a headless copy of the Google Chrome already installed on the designer's machine, so there's nothing to install and no script to write.

If the `browser_*` tools aren't available (the server isn't connected, or Chrome isn't installed), skip screenshots and record the reason in the report header. Never install Playwright or a browser yourself, and never add anything to the prototype's `package.json`.

## 1. Ask first

Before doing anything, tell the designer what you need and wait for a yes:

> To add screenshots, I'll start the prototype's dev server (`<command>`) and open its pages in a hidden browser window. OK?

## 2. Start the prototype

1. Find the dev command in `package.json` (`dev`, `start`, `serve`) and run it in the background. Note the URL and port it prints.
2. Wait until the URL responds (poll with `curl` for up to about 60 seconds). If it doesn't start, stop here and record the reason in the report header.

## 3. Set up the page

The server already opens pages at 1440 × 900. On the first page, call `browser_emulate_media` with `colorScheme: 'light'`, so every run looks the same.

## 4. Capture each row

For each component row, pick **one** representative instance (the first listed is usually fine) and capture it:

1. **Open the route:** `browser_navigate` to the row's route as a real URL. Fill route params with values from the prototype's mock data (for example a real catalog ID), and add the query params the row mentions (`?tab=…`, `?fieldAccess=0`).
2. **Find the element:** `browser_snapshot` returns the page's elements, each with a ref. Pick the instance by, in this order: a `data-*` attribute the prototype uses to label components (for example `data-pc="Field table"`), its role and accessible name, then its visible text.
3. **Reach the state** when the element isn't visible on load: `browser_click` the button that opens a modal or a stepper step, or `browser_hover` a tooltip trigger, then take a new snapshot. Keep it to a few simple actions. If it needs more (a key-and-mouse combination, a multi-step form, special data), skip it and write _No screenshot: <why>_ in the row.
4. **Outline it:** `browser_evaluate` on the element with `(el) => { el.scrollIntoView({block: 'center'}); el.style.outline = '2px solid #e5484d'; el.style.outlineOffset = '2px'; }`.
5. **Capture it with some context:** `browser_take_screenshot` with `target` set to the element's **parent** (the row, field, card or section around it), so the reviewer sees where it sits. For a large element (a table, a modal), target the element itself. Set `filename` to `ds-check-reports/<run>/images/<slug>.png`, where `<slug>` is the row name in kebab-case. The path is relative to the prototype repo.

## 5. Use what you see

Look at each screenshot before writing the report:

- If a _Visual match only_ row clearly matches the Plasma component, raise its confidence and replace the note with what the screenshot shows. If it clearly doesn't, change the finding.
- If a screenshot shows the wrong element or an error page, retry once with another element from the snapshot; otherwise drop it and write _No screenshot: <why>_.

## 6. Clean up

Call `browser_close` and stop the dev server.
