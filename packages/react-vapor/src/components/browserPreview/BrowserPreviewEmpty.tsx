import classNames from 'classnames';
import * as React from 'react';

import {BrowserPreview} from './BrowserPreview';
import {Svg} from '../svg';

export interface BrowserPreviewEmptyProps {
    onClick?: () => void;
    description?: React.ReactNode;
}

export const BrowserPreviewEmpty: React.FunctionComponent<BrowserPreviewEmptyProps> = ({onClick, description}) => (
    <BrowserPreview>
        <div onClick={onClick} className={classNames('browser-preview__state', {'cursor-pointer': onClick})}>
            {/* TODO: new svg WIP */}
            <Svg svgName="arrow-left-return" className="block" />
            <p className="medium-title-text flex flex-column center-align">
                {description ?? (
                    <>
                        <span>
                            Select a <span className="bolder">Query Pipeline</span>
                        </span>
                        <span>to see the preview</span>
                    </>
                )}
            </p>
        </div>
    </BrowserPreview>
);
