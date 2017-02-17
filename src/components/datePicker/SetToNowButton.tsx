import { Tooltip } from '../tooltip/Tooltip';
import { Svg } from '../svg/Svg';
import * as React from 'react';

export interface ISetToNowProps extends React.ClassAttributes<SetToNowButton> {
  onClick: () => void;
  tooltip?: string;
}

export const SET_TO_NOW_DEFAULT_TOOLTIP: string = 'Set to now';

export class SetToNowButton extends React.Component<ISetToNowProps, any> {

  render() {
    return (
      <Tooltip title={this.props.tooltip || SET_TO_NOW_DEFAULT_TOOLTIP}>
        <button onClick={() => this.props.onClick()} className='date-button'>
          <Svg svgName='set-to-now' className='fill-medium-blue' />
        </button>
      </Tooltip>
    );
  }
}
