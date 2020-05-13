import {Handle} from 'rc-slider';
import Tooltip, {RCTooltip} from 'rc-tooltip';
import * as React from 'react';
import * as _ from 'underscore';

export interface CustomHandleProps {
    customTooltip: React.ReactNode;
    hasTooltip: boolean;
    rangeOutput: number;
}

export interface HandleProps {
    dragging: boolean;
    vertical: boolean;
    offset: number;
    reverse: boolean;
    value: number;
}

const SliderHandle: React.FunctionComponent<{
    handleProps: HandleProps;
    handleCustomProps: CustomHandleProps;
    tooltipProps?: Partial<RCTooltip.Props>;
}> = ({handleProps, handleCustomProps, tooltipProps = {}}) => (
    <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={handleCustomProps.customTooltip ?? handleCustomProps.rangeOutput}
        placement="top"
        visible={handleCustomProps.hasTooltip ? handleProps.dragging : false}
        {...tooltipProps}
    >
        <Handle value={handleProps.value} {..._.omit(handleProps, ['dragging', 'index'])} />
    </Tooltip>
);

export default SliderHandle;
