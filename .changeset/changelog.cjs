// Custom changelog generator for Plasma.
// - Suppresses all changelog entries during prereleases.
// - Suppresses dependency update lines entirely.
// - Simple entries: "- Summary [#PR](url)"
// - Rich entries (containing headings): "#### Title [#PR](url)\n\nBody..."

const {existsSync} = require('fs');
const {join} = require('path');

function isPrerelease() {
    return existsSync(join(__dirname, 'pre.json'));
}

/**
 * Bump all markdown headings in text by 2 levels (e.g. # → ###, ## → ####)
 * so they nest correctly under the #### entry title.
 */
function bumpHeadings(text) {
    return text.replace(/^(#{1,6}) /gm, (_match, hashes) => `${'#'.repeat(Math.min(hashes.length + 2, 6))} `);
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

    // Rich entry — contains headings, render as a subsection.
    if (hasHeadings(changeset.summary)) {
        const title = firstLine + (prLink ? ` ${prLink}` : '');
        const body = bumpHeadings(rest.trim());
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
