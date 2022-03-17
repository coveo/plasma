import classNames from 'classnames';
import {FunctionComponent} from 'react';
import * as React from 'react';

export enum SplitLayoutMods {
    noBorder = 'no-border',
}

export interface ISplitLayoutProps {
    /**
     * The content displayed on the left side
     */
    leftChildren?: React.ReactNode;
    /**
     * The content displayed on the right side
     */
    rightChildren?: React.ReactNode;
    /**
     * CSS classes to set on the split layout outer most element
     */
    className?: string | string[];
    /**
     * CSS classes to set on the left side container element
     */
    leftContainerClassName?: string | string[];
    /**
     * CSS classes to set on the right side container element
     */
    rightContainerClassName?: string | string[];
    /**
     * Visual modifiers to apply on the component
     */
    mods?: SplitLayoutMods | SplitLayoutMods[];
}

export const SplitLayout: FunctionComponent<ISplitLayoutProps> = ({
    className,
    mods,
    rightChildren,
    leftChildren,
    leftContainerClassName,
    rightContainerClassName,
}) => (
    <div className={classNames('split-layout', mods, className)}>
        <div className={classNames('column', leftContainerClassName)}>{leftChildren}</div>
        <div className={classNames('column', rightContainerClassName)}>{rightChildren}</div>
    </div>
);
