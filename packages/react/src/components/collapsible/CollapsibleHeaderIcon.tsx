import {InfoSize16Px, QuestionSize16Px} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {FunctionComponent} from 'react';

import {TooltipPlacement} from '../../utils/TooltipUtils';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';

export interface CollapsibleHeaderIconProps {
    informationTooltip: ITooltipProps;
    informationUrl: string;
    disabled?: boolean;
    className?: string;
}

/**
 * @deprecated Use Mantine Accordion instead: https://mantine.dev/core/accordion/
 */
export const CollapsibleHeaderIcon: FunctionComponent<CollapsibleHeaderIconProps> = ({
    informationTooltip,
    informationUrl,
    disabled = false,
    className,
}) => {
    if (!informationUrl && !informationTooltip) {
        return null;
    }
    const tooltipProps: ITooltipProps = {placement: TooltipPlacement.Right, ...informationTooltip};

    return informationUrl ? (
        <Tooltip {...tooltipProps}>
            <a
                href={informationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames('link', className, {disabled})}
            >
                <QuestionSize16Px height={18} />
            </a>
        </Tooltip>
    ) : (
        <Tooltip {...tooltipProps}>
            <InfoSize16Px height={18} className={className} />
        </Tooltip>
    );
};
