import classNames from 'classnames';
import {FunctionComponent} from 'react';
import * as React from 'react';

export enum SplitLayoutMods {
    noBorder = 'no-border',
}

export interface ISplitLayoutProps {
    leftChildren?: React.ReactNode;
    rightChildren?: React.ReactNode;
    className?: string | string[];
    leftContainerClassName?: string | string[];
    rightContainerClassName?: string | string[];
    mods?: SplitLayoutMods | SplitLayoutMods[];
}

export const SplitLayout: FunctionComponent<ISplitLayoutProps> = ({
    className,
    mods,
    rightChildren,
    leftChildren,
    leftContainerClassName,
    rightContainerClassName,
}): React.ReactElement => (
    <div className={classNames('split-layout', mods, className)}>
        <div className={classNames('column', leftContainerClassName)}>{leftChildren}</div>
        <div className={classNames('column', rightContainerClassName)}>{rightChildren}</div>
    </div>
);
