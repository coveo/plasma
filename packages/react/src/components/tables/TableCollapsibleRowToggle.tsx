import {ClassAttributes, Component} from 'react';

import {Svg} from '../svg';

export interface ITableCollapsibleRowToggleProps extends ClassAttributes<TableCollapsibleRowToggle> {
    isExpanded: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export class TableCollapsibleRowToggle extends Component<ITableCollapsibleRowToggleProps, any> {
    render() {
        const arrowIcon: JSX.Element = this.props.isExpanded ? (
            <Svg svgName="arrowTop" className="state-expanded" svgClass="icon" />
        ) : (
            <Svg svgName="arrowBottom" className="state-collapsed" svgClass="icon" />
        );

        return <td>{arrowIcon}</td>;
    }
}
