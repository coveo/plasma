# Screenshots

Each component row gets one picture of a representative instance, so a reviewer sees what was built instead of reading a name the agent made up.

## 1. Ask first

Before doing anything, tell the designer what you need and wait for a yes:

> To add screenshots, I'll start the prototype's dev server (`<command>`) and open the pages in a headless browser. If Playwright isn't installed, I'll install it in a temporary folder outside this repo. OK?

Never add Playwright or anything else to the prototype's `package.json`.

## 2. Start the prototype

1. Find the dev command in `package.json` (`dev`, `start`, `serve`) and run it in the background. Note the URL and port it prints.
2. Wait until the URL responds (poll with `curl` for up to about 60 seconds). If it doesn't start, stop here and record the reason in the report header.

## 3. Set up the browser

Use Playwright with Chromium in a temporary folder, so the repo stays untouched. The version is pinned so every designer's runs look the same. The system can clear `/tmp` (macOS does on reboot), so check for the install each run and reinstall when it's missing:

```bash
mkdir -p /tmp/ds-check-shots && cd /tmp/ds-check-shots
if [ ! -d node_modules/playwright ]; then
  npm init -y >/dev/null && npm i --save-exact playwright@1.65.1 >/dev/null
fi
npx playwright install chromium
```

If Playwright is already available globally or in the repo, use that instead.

## 4. Capture each row

For each component row, pick **one** representative instance (the first listed is usually fine) and capture it:

- **Route:** turn the row's route into a real URL. Fill route params with values from the prototype's mock data (for example a real catalog ID), and add the query params the row mentions (`?tab=…`, `?fieldAccess=0`).
- **Locate the element** with the most stable selector available, in this order: a `data-*` attribute the prototype uses to label components (for example `data-pc="Field table"`), a role and accessible name (`getByRole('button', {name: 'Open configuration'})`), visible text, then a CSS selector from the code.
- **Reach the state** when the element isn't visible on load: click the button that opens a modal, open a step in a stepper, hover a tooltip trigger. Keep it to a few simple actions. If it needs more (a key-and-mouse combination, a multi-step form, special data), skip it and write _No screenshot: <why>_ in the row.
- **Frame it:** scroll it into view, draw a 2px outline around it (inject a style on the element), and capture the element plus about 24px of surrounding context, so the reviewer sees where it sits. For tiny elements (an icon, a badge), capture its parent row or field instead.
- **Save** to `ds-check-reports/<run>/images/<slug>.png`, where `<slug>` is the row name in kebab-case.

Use a 1440 × 900 viewport and the light color scheme, so every run looks the same.

A minimal capture, for reference. Save it as an `.mjs` file in `/tmp/ds-check-shots` (so `import` and top-level `await` work and Playwright resolves) and run it with `node`:

```js
import {chromium} from 'playwright';

const url = '<page URL>';
const out = '<repo>/ds-check-reports/<run>/images/<slug>.png';
const browser = await chromium.launch();
const page = await browser.newPage({viewport: {width: 1440, height: 900}, colorScheme: 'light'});
await page.goto(url, {waitUntil: 'networkidle'});
const el = page.getByRole('button', {name: 'Open configuration'}).first();
await el.scrollIntoViewIfNeeded();
await el.evaluate((n) => (n.style.outline = '2px solid #e5484d'));
const box = await el.boundingBox();
const pad = 24;
await page.screenshot({
    path: out,
    clip: {
        x: Math.max(box.x - pad, 0),
        y: Math.max(box.y - pad, 0),
        width: box.width + pad * 2,
        height: box.height + pad * 2,
    },
});
await browser.close();
```

## 5. Use what you see

Look at each screenshot before writing the report:

- If a _Visual match only_ row clearly matches the Plasma component, raise its confidence and replace the note with what the screenshot shows. If it clearly doesn't, change the finding.
- If a screenshot shows the wrong element or an error page, retry once with another selector; otherwise drop it and write _No screenshot: <why>_.

## 6. Clean up

Stop the dev server and close the browser. Leave `/tmp/ds-check-shots` in place so the next run can reuse it, if it's still there.
