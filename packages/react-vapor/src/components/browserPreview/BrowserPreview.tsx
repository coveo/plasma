import * as React from 'react';

import {TooltipPlacement} from '../../utils';
import {Svg} from '../svg';
import {Tooltip} from '../tooltip';

export interface BrowserPreviewProps {
    headerDescription?: string;
}

export const BrowserPreview: React.FunctionComponent<BrowserPreviewProps> = ({children, headerDescription}) => (
    <div className="browser-preview flex flex-column">
        <BrowserPreviewHeader tooltipTitle={headerDescription ?? DefaultHeaderDescription} />
        <div className="flex flex-column flex-auto px4 py3">{children}</div>
    </div>
);

const BrowserPreviewHeader: React.FunctionComponent<{tooltipTitle: string}> = ({tooltipTitle}) => (
    <div className="browser-preview__header flex space-between px2 py1">
        <div>
            <span className="bolder">Preview</span>
            <Tooltip title={tooltipTitle} placement={TooltipPlacement.Right}>
                <Svg svgName="info" svgClass="icon mod-14 ml1" />
            </Tooltip>
        </div>
        <div>
            <span className="white-dot" />
            <span className="white-dot" />
            <span className="white-dot" />
        </div>
    </div>
);

const DefaultHeaderDescription =
    'The final look in your search page may differ due to the customization you made in your page.';
