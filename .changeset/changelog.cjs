// Custom changelog generator for Plasma.
// - Suppresses all changelog entries while .changeset/pre.json mode is "pre".
// - Suppresses dependency update lines entirely.
// - Simple entries: "- Summary [#PR](url)"
// - Rich entries (containing headings): "#### Title [#PR](url)\n\nBody..."
//   Per the changeset template (see CONTRIBUTING.md), body headings start at a
//   single "#". They are re-leveled relative to the h4 title so they always nest
//   correctly (shallowest body heading becomes h5). The re-leveling is relative,
//   so it stays correct even if an author starts deeper than "#".

const {readFileSync} = require('fs');
const {join} = require('path');

function isPrerelease() {
    try {
        const content = readFileSync(join(__dirname, 'pre.json'), 'utf8');
        const parsed = JSON.parse(content);
        return parsed.mode === 'pre';
    } catch {
        return false;
    }
}

/**
 * Re-level the markdown headings in a rich entry's body so they always nest
 * under the entry title, regardless of the heading depth the author used.
 *
 * The entry title is rendered as an h4 (one level below the `### Major/Minor/Patch
 * Changes` section), so the body's shallowest heading is remapped to h5 and every
 * deeper heading is shifted by the same amount to preserve relative nesting.
 * Levels are clamped at h6 (the deepest markdown supports).
 *
 * @param {string} text - The entry body (may contain headings).
 * @param {number} [baseLevel=5] - Target level for the shallowest heading.
 */
function normalizeHeadings(text, baseLevel = 5) {
    const levels = [...text.matchAll(/^(#{1,6}) /gm)].map(([, hashes]) => hashes.length);
    if (levels.length === 0) return text;

    const shift = baseLevel - Math.min(...levels);
    return text.replace(/^(#{1,6}) /gm, (_match, hashes) => `${'#'.repeat(Math.min(hashes.length + shift, 6))} `);
}

/**
 * Returns true if the summary contains markdown headings.
 */
function hasHeadings(text) {
    return /^#{1,6} /m.test(text);
}

/**
 * @param {import("@changesets/types").NewChangesetWithCommit} changeset
 * @param {import("@changesets/types").VersionType} _type
 * @param {{ repo?: string } | null} options
 */
async function getReleaseLine(changeset, _type, options) {
    if (isPrerelease()) return '';

    const repo = options?.repo;
    let prLink = '';

    if (repo && changeset.commit) {
        try {
            const {getInfo} = await import('@changesets/get-github-info');
            const {links} = await getInfo({repo, commit: changeset.commit});
            prLink = links.pull || links.commit || '';
        } catch {
            // GitHub API unavailable — continue without link.
        }
    }

    const lines = changeset.summary.split('\n');
    const firstLine = lines[0].trim();
    const rest = lines.slice(1).join('\n');

    // Rich entry — contains headings in the body, render as a subsection.
    if (hasHeadings(rest)) {
        const title = firstLine + (prLink ? ` ${prLink}` : '');
        const body = normalizeHeadings(rest.trim());
        return `\n\n#### ${title}\n\n${body}`;
    }

    // Simple entry — render as a list item.
    const restLines = rest.trim();
    const summary = restLines ? `${firstLine}\n\n  ${restLines.split('\n').join('\n  ')}` : firstLine;
    return `\n\n- ${summary}${prLink ? ` ${prLink}` : ''}`;
}

async function getDependencyReleaseLine() {
    return '';
}

module.exports = {getReleaseLine, getDependencyReleaseLine};
