import * as React from 'react';

import {TooltipPlacement} from '../../utils';
import {Svg} from '../svg';
import {Tooltip} from '../tooltip';
import {Label} from './Label';

export interface InputLabelWithTooltipProps {
    label: string;
    tooltip: string;
    invalidMessage?: string;
}

export const InputLabelWithTooltip: React.FunctionComponent<InputLabelWithTooltipProps> = ({
    label,
    tooltip,
    invalidMessage,
}) => (
    <Label invalidMessage={invalidMessage}>
        {label}
        <Tooltip title={tooltip} placement={TooltipPlacement.Right}>
            <Svg svgName="info" svgClass="icon documentation-link mod-16 ml1" />
        </Tooltip>
    </Label>
);
