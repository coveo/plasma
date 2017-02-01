import * as React from 'react';
import { Tooltip } from '../tooltip/Tooltip';
import { Svg } from '../svg/Svg';

export interface ISetToNowProps extends React.ClassAttributes<SetToNowButton> {
  onClick: () => void;
  tooltip?: string;
}

export const SET_TO_NOW_DEFAULT_TOOLTIP: string = 'Set to now';

export class SetToNowButton extends React.Component<ISetToNowProps, any> {
  // TODO: change icon

  render() {
    return (
      <Tooltip title={this.props.tooltip || SET_TO_NOW_DEFAULT_TOOLTIP}>
        <button onClick={() => this.props.onClick()} className='date-button'>
          <Svg svgName='filter' className='icon fill-medium-blue' />
        </button>
      </Tooltip>
    );
  }
}
