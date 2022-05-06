import {Handle, SliderTooltip} from 'rc-slider';
import {ReactNode, ComponentProps, FunctionComponent} from 'react';
import * as _ from 'underscore';

export interface CustomHandleProps {
    customTooltip: ReactNode;
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

const SliderHandle: FunctionComponent<{
    handleProps: HandleProps;
    handleCustomProps: CustomHandleProps;
    tooltipProps?: Partial<ComponentProps<typeof SliderTooltip>>;
}> = ({handleProps, handleCustomProps, tooltipProps = {}}) => (
    <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={handleCustomProps.customTooltip ?? handleCustomProps.rangeOutput}
        placement="bottom"
        visible={handleCustomProps.hasTooltip ? handleProps.dragging : false}
        {...tooltipProps}
    >
        <Handle value={handleProps.value} {..._.omit(handleProps, ['dragging', 'index'])} />
    </SliderTooltip>
);

export default SliderHandle;
