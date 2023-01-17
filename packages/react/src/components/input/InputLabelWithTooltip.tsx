import {FunctionComponent} from 'react';

import {TooltipPlacement} from '../../utils/index.js';
import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType} from '../info-token/index.js';
import {Tooltip} from '../tooltip/index.js';
import {Label} from './Label.js';

export interface InputLabelWithTooltipProps {
    label: string;
    tooltip: string;
    invalidMessage?: string;
}

/**
 * @deprecated Use Mantine Input instead: https://mantine.dev/core/input/
 */
export const InputLabelWithTooltip: FunctionComponent<InputLabelWithTooltipProps> = ({
    label,
    tooltip,
    invalidMessage,
}) => (
    <Label invalidMessage={invalidMessage}>
        {label}
        <Tooltip title={tooltip} placement={TooltipPlacement.Right}>
            <InfoToken
                mode={InfoTokenMode.Stroked}
                size={InfoTokenSize.Small}
                type={InfoTokenType.Information}
                className="ml1"
            />
        </Tooltip>
    </Label>
);
