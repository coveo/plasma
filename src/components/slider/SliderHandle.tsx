import * as React from 'react';
import {ITooltipProps} from '../tooltip/Tooltip';
import {Svg, ISvgProps} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';
import * as _ from 'underscore';
import {HandleProps} from 'rc-slider';

export interface ISliderHandleEventProps extends HandleProps {
  value?: number;
}

export interface ISliderHandleProps {
  tooltipValueFormatter?: (number: number) => string;
  hasTooltip?: boolean;
  tooltip?: ITooltipProps;
  svg?: ISvgProps;
}

export const SliderHandle = (handleProps: ISliderHandleEventProps, props: ISliderHandleProps = {}): JSX.Element => {
  props.svg = _.defaults({}, props.svg, {
    svgName: 'slider-handle',
    svgClass: 'slider-handle',
  });
  props.tooltip = _.defaults({}, props.tooltip, {
    title: props.tooltipValueFormatter ? props.tooltipValueFormatter(handleProps.value) : handleProps.value.toString(),
    placement: 'top',
    trigger: 'manual',
  });

  return <div style={{
    position: 'relative',
    left: `${handleProps.offset}%`,

  }}>
    <Tooltip {...props.tooltip} >
      <Svg tabIndex={0} {...props.svg} />
    </Tooltip>
  </div>;
};
