import {FunctionComponent} from 'react';

import {TooltipPlacement} from '../../utils';
import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType} from '../info-token';
import {Tooltip} from '../tooltip';
import {Label} from './Label';

export interface InputLabelWithTooltipProps {
    label: string;
    tooltip: string;
    invalidMessage?: string;
}

/**
 * @deprecated Use Mantine Input instead: https://mantine.dev/core/input/
 */
export const InputLabelWithTooltip: FunctionComponent<React.PropsWithChildren<InputLabelWithTooltipProps>> = ({
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
