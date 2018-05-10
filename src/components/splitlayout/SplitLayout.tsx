import * as classNames from 'classnames';
import * as React from 'react';
import {JSXRenderable} from '../../utils/JSXUtils';

export interface ISplitLayoutProps {
    leftChildren?: JSXRenderable;
    rightChildren?: JSXRenderable;
    className?: string | string[];
    leftContainerClassName?: string | string[];
    rightContainerClassName?: string | string[];
}

export const SplitLayout = (props: ISplitLayoutProps): JSX.Element =>
    <div className={classNames('split-layout', props.className)}>
        <div className={classNames('column', props.leftContainerClassName)}>
            {props.leftChildren}
        </div>
        <div className={classNames('column', props.rightContainerClassName)}>
            {props.rightChildren}
        </div>
    </div>;
