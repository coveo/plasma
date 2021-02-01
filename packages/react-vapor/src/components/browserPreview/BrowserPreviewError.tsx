import classNames from 'classnames';
import * as React from 'react';

import {BrowserPreview} from './BrowserPreview';
import {Svg} from '../svg';

export interface BrowserPreviewErrorProps {
    onClick?: () => void;
    description?: string;
    errorMessage?: string;
}

export const BrowserPreviewError: React.FunctionComponent<BrowserPreviewErrorProps> = ({
    onClick,
    description,
    errorMessage,
}) => (
    <BrowserPreview>
        <div
            onClick={onClick}
            className={classNames('browser-preview__state flex flex-column center-align', {'cursor-pointer': onClick})}
        >
            {/* TODO: new svg WIP */}
            <Svg svgName="view" className="block" />
            <div className="big-text bolder">{description ?? 'Unable to show preview'}</div>
            {errorMessage ? (
                <div className="medium-title-text center mt1 browser-preview__state--error">{errorMessage}</div>
            ) : null}
        </div>
    </BrowserPreview>
);
