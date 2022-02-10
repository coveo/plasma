import {svg} from '@coveord/plasma-style';
import classNames from 'classnames';
import * as React from 'react';

import {TooltipPlacement} from '../../utils/TooltipUtils';
import {LinkSvg} from '../svg/LinkSvg';
import {Svg} from '../svg/Svg';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';

export interface CollapsibleHeaderIconProps {
    informationTooltip: ITooltipProps;
    informationUrl: string;
    disabled?: boolean;
}

export const CollapsibleHeaderIcon: React.FunctionComponent<CollapsibleHeaderIconProps> = ({
    informationTooltip,
    informationUrl,
    disabled = false,
}) => {
    if (!informationUrl && !informationTooltip) {
        return null;
    }
    const tooltipProps = {placement: TooltipPlacement.Right, ...informationTooltip};
    const svgProps = {
        svgName: informationUrl ? svg.help.name : svg.info.name,
        svgClass: classNames('icon mod-lg', {
            'documentation-link': !!informationUrl,
            'no-link': !informationUrl,
            disabled,
        }),
    };

    return informationUrl ? (
        <LinkSvg url={informationUrl} target="_blank" tooltip={tooltipProps} svg={svgProps} />
    ) : (
        <Tooltip {...tooltipProps}>
            <Svg {...svgProps} />
        </Tooltip>
    );
};
