import classNames from 'classnames';
import * as React from 'react';

import {Svg} from '../svg';

export interface BrowserPreviewEmptyProps {
    onClick?: () => void;
}

export const BrowserPreviewEmpty: React.FunctionComponent<BrowserPreviewEmptyProps> = ({onClick, children}) => (
    <div
        onClick={onClick}
        className={classNames('browser-preview__state flex flex-column flex-auto center-align', {
            'cursor-pointer': onClick,
        })}
    >
        {/* TODO: new svg WIP */}
        <Svg svgName="arrow-left-return" className="block" />
        <p className="medium-title-text flex flex-column center-align center">{children}</p>
    </div>
);
