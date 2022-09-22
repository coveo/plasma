import {CalendarSize24Px} from '@coveord/plasma-react-icons';
import {FunctionComponent} from 'react';
import {TooltipPlacement} from '../../utils';

import {Button} from '../button';

export interface ISetToNowProps {
    onClick: () => void;
    tooltip?: string;
}

export const SET_TO_NOW_DEFAULT_TOOLTIP: string = 'Set to now';

/**
 * @deprecated Use Mantine DatePicker instead
 */
export const SetToNowButton: FunctionComponent<React.PropsWithChildren<ISetToNowProps>> = ({
    onClick,
    tooltip = SET_TO_NOW_DEFAULT_TOOLTIP,
}) => (
    <Button
        onClick={onClick}
        tooltip={tooltip || SET_TO_NOW_DEFAULT_TOOLTIP}
        tooltipPlacement={TooltipPlacement.Top}
        classes="date-button"
    >
        <CalendarSize24Px height={24} />
    </Button>
);
