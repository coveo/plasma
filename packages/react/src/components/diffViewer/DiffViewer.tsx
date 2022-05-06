import {ComponentProps, FC} from 'react';
import ReactDiffViewer, {ReactDiffViewerStylesOverride} from 'react-diff-viewer';

import {BlankSlate} from '../blankSlate';

/**
 * @deprecated Use oldValue and newValue Props.
 */
export interface DiffViewerPropsDeprecated {
    /**
     * @deprecated Use oldValue instead.
     */
    first: string;
    /**
     * @deprecated Use newValue instead.
     */
    second: string;
}

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

export type ReactDiffViewerProps = ComponentProps<typeof ReactDiffViewer>;
export type DiffViewerDeprecatedProps = DiffViewerBlankSlateProps &
    DiffViewerPropsDeprecated &
    Omit<ReactDiffViewerProps, 'newValue' | 'oldValue'>;
export type DiffViewerProps = DiffViewerBlankSlateProps & ReactDiffViewerProps;

export const DiffViewer: FC<DiffViewerDeprecatedProps | DiffViewerProps> = ({
    first,
    second,
    oldValue,
    newValue,
    noChangesLabel,
    noChangesDescription,
    ...props
}: DiffViewerDeprecatedProps & DiffViewerProps) => {
    const defaultStyles = {
        codeFold: {
            fontFamily: 'canada-type-gibson, sans-serif',
            fontWeight: 400,
            a: {pre: {display: 'block', marginTop: '10px'}},
        },
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
