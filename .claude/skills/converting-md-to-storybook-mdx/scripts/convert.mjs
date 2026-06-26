#!/usr/bin/env node
/**
 * Converts a Jekyll-formatted .md file into a Storybook MDX docs-only page
 * for packages/atomic in ui-kit-main.
 *
 * Usage:
 *   node scripts/convert.mjs --input <source.md> --output <target.mdx> --title "Section/Page Title"
 *
 * What it does:
 *   1. Strips Jekyll YAML frontmatter (--- blocks)
 *   2. Injects the MDX Meta import and <Meta title="..." /> block
 *   3. Escapes bare < and > in prose (outside code blocks) to avoid JSX parse errors
 *   4. Flags Jekyll-style links with a warning comment for manual review
 */

import {readFileSync, writeFileSync, mkdirSync} from 'node:fs';
import {dirname} from 'node:path';
import {parseArgs} from 'node:util';

// ---------------------------------------------------------------------------
// Argument parsing
// ---------------------------------------------------------------------------

const {values} = parseArgs({
  options: {
    input: {type: 'string', short: 'i'},
    output: {type: 'string', short: 'o'},
    title: {type: 'string', short: 't'},
    help: {type: 'boolean', short: 'h', default: false},
  },
});

if (values.help || !values.input || !values.output || !values.title) {
  console.log(
    'Usage: node scripts/convert.mjs --input <source.md> --output <target.mdx> --title "Section/Page Title"'
  );
  console.log('');
  console.log('Options:');
  console.log('  -i, --input   Path to source .md file (required)');
  console.log('  -o, --output  Path for output .mdx file (required)');
  console.log('  -t, --title   Storybook sidebar title, e.g. "Search/My Guide" (required)');
  console.log('  -h, --help    Show this help message');
  process.exit(values.help ? 0 : 1);
}

// ---------------------------------------------------------------------------
// Read source
// ---------------------------------------------------------------------------

let source;
try {
  source = readFileSync(values.input, 'utf8');
} catch (err) {
  console.error(`Error: Could not read input file "${values.input}": ${err.message}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Transform pipeline
// ---------------------------------------------------------------------------

/**
 * Step 1: Strip Jekyll YAML frontmatter.
 * Frontmatter is a --- block at the very start of the file.
 */
function stripFrontmatter(content) {
  // Match optional BOM + opening ---, any content, closing --- with optional trailing newline
  return content.replace(/^\uFEFF?---[\s\S]*?---\r?\n?/, '');
}

/**
 * Step 2: Flag Jekyll-style links for manual review.
 * Patterns caught:
 *   [text]({% link path/to/page.md %})   — Liquid link tag
 *   [text](/en/slug/)                    — docs.coveo.com relative URLs
 */
function flagJekyllLinks(content) {
  let warnings = 0;

  // Liquid link tags: {% link ... %}
  content = content.replace(
    /\[([^\]]+)\]\({% link [^}]+ %}\)/g,
    (match, linkText) => {
      warnings++;
      return `[${linkText}](TODO: replace Jekyll link — was: ${match}) {/* ⚠️ Jekyll link: update to full URL */}`;
    }
  );

  // Relative /en/ doc site URLs
  content = content.replace(
    /\[([^\]]+)\]\((\/en\/[^)]+)\)/g,
    (match, linkText, path) => {
      warnings++;
      return `[${linkText}](https://docs.coveo.com${path}) {/* ⚠️ Converted relative link — verify URL */}`;
    }
  );

  if (warnings > 0) {
    console.warn(`⚠️  ${warnings} Jekyll-style link(s) flagged for review — search for "⚠️" in the output.`);
  }

  return content;
}

/**
 * Step 3: Escape bare < and > in prose that would break JSX parsing.
 *
 * Strategy: split content into code-block segments (which must be left alone)
 * and prose segments (which need escaping). Only prose segments are processed.
 *
 * Code blocks: ```...``` and ~~~...~~~  (fenced)
 * Inline code: `...`
 */
function escapeJsxInProse(content) {
  // Split on fenced code blocks to isolate them
  const fencePattern = /(```[\s\S]*?```|~~~[\s\S]*?~~~)/g;
  const parts = content.split(fencePattern);

  return parts
    .map((part, i) => {
      // Even-indexed parts are prose; odd-indexed are code blocks
      if (i % 2 !== 0) return part;

      // Within prose, also preserve inline code (`...`)
      return part
        .split(/(`[^`]*`)/g)
        .map((segment, j) => {
          if (j % 2 !== 0) return segment; // inline code — leave alone

          // Escape bare angle brackets that look like HTML/JSX tags in prose.
          // We only escape < followed by a word char or / (i.e. tag-like syntax).
          // Plain math comparisons like "x > 0" are left alone to avoid false positives.
          return segment
            .replace(/<(\/?[a-zA-Z])/g, '&lt;$1')
            .replace(/([a-zA-Z"'0-9])>/g, '$1&gt;');
        })
        .join('');
    })
    .join('');
}

/**
 * Step 4: Build the MDX header and prepend it.
 */
function addMdxHeader(content, title) {
  const header = `import { Meta } from '@storybook/addon-docs/blocks';\n\n<Meta title="${title}" />\n\n`;
  // Trim any leading blank lines left after frontmatter removal
  return header + content.trimStart();
}

// ---------------------------------------------------------------------------
// Run the pipeline
// ---------------------------------------------------------------------------

let output = source;
output = stripFrontmatter(output);
output = flagJekyllLinks(output);
output = escapeJsxInProse(output);
output = addMdxHeader(output, values.title);

// ---------------------------------------------------------------------------
// Write output
// ---------------------------------------------------------------------------

try {
  mkdirSync(dirname(values.output), {recursive: true});
  writeFileSync(values.output, output, 'utf8');
  console.log(`✅ Converted: ${values.input} → ${values.output}`);
  console.log(`   Sidebar title: "${values.title}"`);
} catch (err) {
  console.error(`Error: Could not write output file "${values.output}": ${err.message}`);
  process.exit(1);
}
