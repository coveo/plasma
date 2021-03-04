import * as React from 'react';
import ReactDiffViewer, {ReactDiffViewerStylesOverride} from 'react-diff-viewer';

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
    const defaultStyles = {
        codeFold: {fontFamily: 'canada-type-gibson, sans-serif', fontWeight: 400},
        diffContainer: {
            fontFamily: 'source_code_pro_regular, Courier New, Courier, monospace',
            color: '#282829',
            pre: {lineHeight: '18px'},
        },
    } as ReactDiffViewerStylesOverride;

    const a = first ?? oldValue;
    const b = second ?? newValue;

    return a !== b ? (
        <ReactDiffViewer {...props} oldValue={a} newValue={b} styles={{...defaultStyles, ...props.styles}} />
    ) : (
        <BlankSlate title={noChangesLabel ?? 'No changes'} description={noChangesDescription} />
    );
};
