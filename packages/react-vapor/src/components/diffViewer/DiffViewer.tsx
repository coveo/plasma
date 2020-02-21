import * as Diff2Html from 'diff2html';
import * as React from 'react';
// @ts-ignore
import * as unidiff from 'unidiff';

import {BlankSlate} from '../blankSlate/BlankSlate';
import * as styles from './styles/DiffViewer.scss';

export interface DiffViewerProps extends React.ClassAttributes<DiffViewer> {
    first: string;
    second: string;
    noChangesLabel?: string;
    noChangesDescription?: string;
}

export class DiffViewer extends React.Component<DiffViewerProps> {
    static defaultProps: Partial<DiffViewerProps> = {
        noChangesLabel: 'No changes',
    };

    static OutputFormat = {
        Side: 'side-by-side',
        Line: 'line-by-line',
    } as const;

    static InputFormat = {
        Diff: 'diff',
        JSON: 'json',
    } as const;

    static Matching = {
        Lines: 'lines',
        Words: 'words',
        None: 'none',
    } as const;

    static EmptyHtmlRegex = new RegExp(/<div class="d2h-wrapper"\>\s*<\/div>/);

    render() {
        const diff = unidiff.diffLines(this.props.first, this.props.second);
        const formattedDiff = unidiff.formatLines(diff, {context: 3});
        const html = Diff2Html.html(formattedDiff, {
            matching: DiffViewer.Matching.Words,
            outputFormat: DiffViewer.OutputFormat.Line,
        });

        return !DiffViewer.EmptyHtmlRegex.test(html) ? (
            <div className={styles.diffViewer} dangerouslySetInnerHTML={{__html: html}}></div>
        ) : (
            <BlankSlate title={this.props.noChangesLabel} description={this.props.noChangesDescription} />
        );
    }
}
