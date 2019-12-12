import {Handle} from 'rc-slider';
import Tooltip from 'rc-tooltip';
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

const SliderHandle: React.FunctionComponent<{handleProps: HandleProps; handleCustomProps: CustomHandleProps}> = ({
    handleProps,
    handleCustomProps,
}) => (
    <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={handleCustomProps.customTooltip ? handleCustomProps.customTooltip : handleCustomProps.rangeOutput}
        visible={handleCustomProps.hasTooltip ? handleProps.dragging : false}
        placement="top"
    >
        <Handle value={handleProps.value} {..._.omit(handleProps, ['dragging', 'index'])} />
    </Tooltip>
);

export default SliderHandle;
