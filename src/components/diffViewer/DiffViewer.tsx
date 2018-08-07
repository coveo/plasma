import {Diff2Html} from 'diff2html';
import * as React from 'react';
import * as unidiff from 'unidiff';

import {BlankSlate} from '../blankSlate/BlankSlate';
import * as styles from './styles/DiffViewer.scss';

export interface DiffViewerProps extends React.ClassAttributes<DiffViewer> {
    first: string;
    second: string;
    noChangesLabel?: string;
}

export class DiffViewer extends React.Component<DiffViewerProps> {
    static defaultProps: Partial<DiffViewerProps> = {
        noChangesLabel: 'No changes',
    };

    static OutputFormat = {
        Side: 'side-by-side',
        Line: 'line-by-line',
    };

    static InputFormat = {
        Diff: 'diff',
        JSON: 'json',
    };

    static Matching = {
        Lines: 'lines',
        Words: 'words',
        None: 'none',
    };

    static EmptyHtmlRegex = new RegExp(/<div class="d2h-wrapper"\>\s*<\/div>/);

    render() {
        const diff = unidiff.diffLines(this.props.first, this.props.second);
        const formattedDiff = unidiff.formatLines(diff, {context: 3});
        const html = Diff2Html.getPrettyHtml(formattedDiff, {
            inputFormat: DiffViewer.InputFormat.Diff,
            showFiles: false,
            matching: DiffViewer.Matching.Words,
            outputFormat: DiffViewer.OutputFormat.Line,
        });

        return !DiffViewer.EmptyHtmlRegex.test(html)
            ? <div className={styles.diffViewer} dangerouslySetInnerHTML={{__html: html}}></div>
            : <BlankSlate title={this.props.noChangesLabel} />;
    }
}
