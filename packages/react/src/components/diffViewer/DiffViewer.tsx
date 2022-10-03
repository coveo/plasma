import {FunctionComponent, ReactNode} from 'react';
import {parseDiff, Decoration, Diff, Hunk} from 'react-diff-view';

import {BlankSlate} from '../blankSlate';

enum DIFF_VIEWER_VIEW_TYPE {
    SPLIT = 'split',
    UNIFIED = 'unified',
}

interface HunkModel {
    oldStart: number;
    oldLines: number;
    newStart: number;
    newLines: number;
    content: string;
    changes: Array<{
        type: 'delete' | 'insert' | 'normal';
        content: string | ReactNode;
        isNormal?: boolean;
        isInsert?: boolean;
        isDelete?: boolean;
        lineNumber?: number;
        oldLineNumber?: number;
        newLineNumber?: number;
    }>;
}

interface DiffByFileProps {
    hunks: HunkModel[];
    newRevision: string;
    oldRevision: string;
    type: 'add' | 'delete' | 'modify' | 'rename' | 'copy';
    viewType: DIFF_VIEWER_VIEW_TYPE;
}

const DiffByFile: FunctionComponent<DiffByFileProps> = ({oldRevision, newRevision, hunks, type, viewType}) => (
    <Diff key={`${oldRevision}-${newRevision}`} diffType={type} hunks={hunks} viewType={viewType}>
        {(collectionHunk: HunkModel[]) =>
            collectionHunk.map((hunk: HunkModel) => (
                <>
                    <Decoration key={`decoration-${hunk.content}`}>
                        <span />
                        {hunk.content}
                    </Decoration>
                    <Hunk key={hunk.content} hunk={hunk} />
                </>
            ))
        }
    </Diff>
);

export interface DiffViewerBlankSlateProps {
    /**
     * Title to show when the old and new values are the same
     */
    noChangesLabel?: string;
    /**
     * Description to show when the old and new values are the same
     */
    noChangesDescription?: string;
}

export interface DiffViewerProps extends DiffViewerBlankSlateProps {
    /**
     * Show changes between state A and state B (git diff format)
     */
    difference: string;
    /**
     * Whether the difference display is split
     *
     * @default false
     */
    splitView?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const DiffViewer: FunctionComponent<DiffViewerProps> = ({
    difference,
    noChangesLabel,
    noChangesDescription,
    splitView = false,
}) => {
    if (difference === '') {
        return (
            <div className="diff-viewer">
                <BlankSlate title={noChangesLabel ?? 'No changes'} description={noChangesDescription} />
            </div>
        );
    }

    const files = parseDiff(difference);
    const viewType = splitView ? DIFF_VIEWER_VIEW_TYPE.SPLIT : DIFF_VIEWER_VIEW_TYPE.UNIFIED;

    return (
        <div className="diff-viewer">
            {files.map((file: any, index: number) => (
                <DiffByFile key={index} {...file} viewType={viewType} />
            ))}
        </div>
    );
};
