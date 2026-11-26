import {Code, MantineTable as Table} from '@coveord/plasma-mantine';
import type {ReactNode} from 'react';
import {Tag} from '../doc-blocks/DocBlocks.js';

/**
 * The semver bump a change carried. Changesets names its sections after the bump itself, but
 * "breaking" is the word a reader scanning the Welcome page can act on, so Major is relabelled
 * on the way out. The three labels match keys the `Tag` block already colours.
 */
export type ChangeKind = 'breaking' | 'minor' | 'patch';

export interface Change {
    /** The release the change shipped in, e.g. `61.6.2`. */
    version: string;
    kind: ChangeKind;
    /** The bullet text, with the trailing pull-request link removed. */
    summary: string;
}

const KINDS: Record<string, ChangeKind> = {major: 'breaking', minor: 'minor', patch: 'patch'};

const VERSION = /^## +(.+?) *$/;
const SECTION = /^### +(Major|Minor|Patch) Changes *$/i;
const HEADING = /^#### +(.*\S) *$/;
const BULLET = /^- +(.*\S) *$/;
const FENCE = /^ *```/;
const TRAILING_PULL_REQUEST = / *\[#\d+\]\([^)]*\) *$/;

/**
 * Reads the most recent entries out of a Changesets changelog.
 *
 * The file is machine-written and its shape is narrow, which is what makes reading it this way
 * safe. One change per bullet, under the release it shipped in and the bump it carried:
 *
 *     ## 61.6.2                 ← a release
 *     ### Patch Changes         ← the bump the changes under it carried
 *     - Keep `Table` row selection ... [#4689](https://github.com/coveo/plasma/pull/4689)
 *
 *       A longer explanation, indented, when the author wrote one.
 *
 * Breaking changes are written differently, by hand, and the difference matters. Each one is a
 * `####` heading with a body below it, and that body holds the migration steps as bullets — plus
 * code fences whose diff lines also open with `-`. Reading bullets inside a `### Major Changes`
 * section would therefore turn "Upgrade all `@mantine/*` packages" and stray lines of a diff into
 * entries of their own. So the two shapes are read separately: headings under Major, bullets
 * under Minor and Patch, and nothing at all inside a fence.
 *
 * Only the entry's own line is kept. The Welcome page shows one line per change; the paragraphs
 * below it belong on the changelog page, which the page links to.
 *
 * `Updated dependencies` bullets are dropped. They record a version bump in another Plasma
 * package and say nothing to someone scanning what changed in the library.
 *
 * There are no dates to read here, by design of the format: Changesets records versions, not days.
 */
export const readLatestChanges = (changelog: string, limit: number): Change[] => {
    const changes: Change[] = [];
    let version = '';
    let kind: ChangeKind | undefined;
    let insideFence = false;

    const add = (text: string) => {
        changes.push({version, kind: kind!, summary: text.replace(TRAILING_PULL_REQUEST, '')});
    };

    for (const line of changelog.split('\n')) {
        if (FENCE.test(line)) {
            insideFence = !insideFence;
            continue;
        }
        if (insideFence) {
            continue;
        }

        const versionMatch = VERSION.exec(line);
        if (versionMatch) {
            version = versionMatch[1];
            // A release always restates its own section headings, so the bump cannot carry over.
            kind = undefined;
            continue;
        }

        const sectionMatch = SECTION.exec(line);
        if (sectionMatch) {
            kind = KINDS[sectionMatch[1].toLowerCase()];
            continue;
        }

        if (!kind || !version) {
            continue;
        }

        if (kind === 'breaking') {
            const headingMatch = HEADING.exec(line);
            if (headingMatch) {
                add(headingMatch[1]);
            }
        } else {
            const bulletMatch = BULLET.exec(line);
            // Nested bullets are indented, so `^- ` only ever matches a change of its own.
            if (bulletMatch && !bulletMatch[1].startsWith('Updated dependencies')) {
                add(bulletMatch[1]);
            }
        }

        if (changes.length === limit) {
            return changes;
        }
    }

    return changes;
};

/**
 * Renders the inline code spans in a bullet. Backticks are the only markdown that reaches here —
 * the trailing pull-request link is removed while reading, and nothing else appears in these
 * summaries — so splitting on them costs less than a markdown renderer and cannot reformat the
 * sentence around it.
 */
const withInlineCode = (summary: string): ReactNode[] =>
    summary
        .split('`')
        .map((part, index) => (index % 2 === 1 ? <Code key={index}>{part}</Code> : <span key={index}>{part}</span>));

/**
 * The few most recent changes, read from the changelog rather than typed in, so the table cannot
 * drift from what actually shipped.
 */
export const LatestChanges = ({changelog, limit = 5}: {changelog: string; limit?: number}) => (
    <Table withTableBorder>
        <Table.Tbody>
            {readLatestChanges(changelog, limit).map((change, index) => (
                <Table.Tr key={`${change.version}-${index}`}>
                    <Table.Td w={90}>{change.version}</Table.Td>
                    <Table.Td>{withInlineCode(change.summary)}</Table.Td>
                    <Table.Td w={110}>
                        <Tag>{change.kind}</Tag>
                    </Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
    </Table>
);
