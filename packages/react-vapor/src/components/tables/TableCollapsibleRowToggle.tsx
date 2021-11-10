import * as React from 'react';

import {Svg} from '../svg';

export interface ITableCollapsibleRowToggleProps extends React.ClassAttributes<TableCollapsibleRowToggle> {
    isExpanded: boolean;
}

export class TableCollapsibleRowToggle extends React.Component<ITableCollapsibleRowToggleProps, any> {
    render() {
        const arrowIcon: JSX.Element = this.props.isExpanded ? (
            <Svg svgName="arrowTop" className="state-expanded" svgClass="icon" />
        ) : (
            <Svg svgName="arrowBottom" className="state-collapsed" svgClass="icon" />
        );

        return <td>{arrowIcon}</td>;
    }
}
