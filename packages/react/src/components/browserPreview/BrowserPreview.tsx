import {InfoSize16Px} from '@coveord/plasma-react-icons';
import {FunctionComponent, PropsWithChildren} from 'react';
import s from 'underscore.string';

import {TooltipPlacement} from '../../utils/index.js';
import {Tooltip} from '../tooltip/index.js';

export interface BrowserPreviewProps {
    /**
     * Text that will be displayed in the tooltip on the i icon
     *
     * @default The final look in your search page may differ due to the customization you made in your page.
     *
     */
    headerDescription?: string;
    /**
     * Title of the browser preview
     */
    title?: string;
}

/**
 * @deprecated Use Mantine instead
 */
export const BrowserPreview: FunctionComponent<PropsWithChildren<BrowserPreviewProps>> = ({
    children,
    headerDescription,
    title,
}) => (
    <div className="browser-preview flex flex-column">
        <BrowserPreviewHeader tooltipTitle={headerDescription ?? DefaultHeaderDescription} title={title ?? ''} />
        <div className="browser-preview__content flex flex-column flex-auto px4 py3">{children}</div>
    </div>
);

const BrowserPreviewHeader: FunctionComponent<PropsWithChildren<{tooltipTitle: string; title?: string}>> = ({
    title,
    tooltipTitle,
}) => (
    <div className="browser-preview__header flex space-between px2 py1">
        <div className="inline-flex">
            <span className="bolder">Preview</span>
            <Tooltip title={tooltipTitle} placement={TooltipPlacement.Right}>
                <InfoSize16Px height={16} className="ml1" />
            </Tooltip>
        </div>
        <div>
            <span className="bolder">{s.truncate(title, TitleMaxLength)}</span>
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
const TitleMaxLength = 20;
