import { Svg } from '../svg/Svg';
import * as React from 'react';

export interface ITableCollapsibleRowToggleProps extends React.ClassAttributes<TableCollapsibleRowToggle> {
  isExpanded: boolean;
}

export class TableCollapsibleRowToggle extends React.Component<ITableCollapsibleRowToggleProps, any> {

  render() {
    let arrowIcon: JSX.Element = this.props.isExpanded ?
      <Svg svgName='arrow-top' className='state-expanded' svgClass='icon' /> :
      <Svg svgName='arrow-bottom' className='state-collapsed' svgClass='icon' />;

    return (
      <td>{arrowIcon}</td>
    );
  }
}
