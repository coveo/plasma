import * as React from 'react';
import ReactDiffViewer from 'react-diff-viewer';

import {BlankSlate} from '../blankSlate';

/**
 * @deprecated Use oldValue and newValue Props.
 */
export interface DiffViewerPropsDeprecated {
    first: string;
    second: string;
}

export interface DiffViewerBlankSlateProps {
    noChangesLabel?: string;
    noChangesDescription?: string;
}

export type ReactDiffViewerProps = React.ComponentProps<typeof ReactDiffViewer>;
export type DiffViewerDeprecatedProps = DiffViewerBlankSlateProps &
    DiffViewerPropsDeprecated &
    Omit<ReactDiffViewerProps, 'newValue' | 'oldValue'>;
export type DiffViewerProps = DiffViewerBlankSlateProps & ReactDiffViewerProps;

export const DiffViewer: React.FC<DiffViewerDeprecatedProps | DiffViewerProps> = ({
    first,
    second,
    oldValue,
    newValue,
    noChangesLabel,
    noChangesDescription,
    ...props
}: DiffViewerDeprecatedProps & DiffViewerProps) => {
    const a = first ?? oldValue;
    const b = second ?? newValue;
    return a !== b ? (
        <ReactDiffViewer {...props} oldValue={a} newValue={b} />
    ) : (
        <BlankSlate title={noChangesLabel ?? 'No changes'} description={noChangesDescription} />
    );
};
