import classNames from 'classnames';
import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {LinkSvg} from '../svg/LinkSvg';
import {Svg} from '../svg/Svg';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';

export interface CollapsibleHeaderIconProps {
    informationTooltip: ITooltipProps;
    informationUrl: string;
}

export const CollapsibleHeaderIcon: React.FunctionComponent<CollapsibleHeaderIconProps> = ({
    informationTooltip,
    informationUrl,
}: {
    informationTooltip: ITooltipProps;
    informationUrl: string;
}) => {
    if (!informationUrl && !informationTooltip) {
        return null;
    }
    const svgClass = classNames('icon mod-lg ml1', {
        'fill-orange': !!informationUrl,
        'fill-medium-grey': !informationUrl,
    });
    const tooltipProps = {placement: 'right', ...informationTooltip};
    const svgProps = {svgName: informationUrl ? VaporSVG.svg.help.name : VaporSVG.svg.info.name, svgClass};

    const collapsibleHeaderIcon = informationUrl ? (
        <LinkSvg url={informationUrl} target="_blank" tooltip={tooltipProps} svg={svgProps} />
    ) : (
        <Tooltip {...tooltipProps}>
            <Svg {...svgProps} />
        </Tooltip>
    );

    return <span className="round-contextual-help">{collapsibleHeaderIcon}</span>;
};
