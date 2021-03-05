import classNames from 'classnames';
import * as VaporSVG from 'coveo-styleguide';
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
    const tooltipProps = {placement: TooltipPlacement.Right, title: informationTooltip};
    const svgProps = {
        svgName: informationUrl ? VaporSVG.svg.help.name : VaporSVG.svg.info.name,
        svgClass: classNames('icon mod-lg ml1', {
            'documentation-link': !!informationUrl,
            disabled: !informationUrl || disabled,
        }),
    };

    const headerIcon = informationUrl ? (
        <LinkSvg url={informationUrl} target="_blank" tooltip={tooltipProps} svg={svgProps} />
    ) : (
        <Tooltip {...tooltipProps}>
            <Svg {...svgProps} />
        </Tooltip>
    );

    return <span className="round-contextual-help">{headerIcon}</span>;
};
