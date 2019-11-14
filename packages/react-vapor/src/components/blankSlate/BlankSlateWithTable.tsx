import * as React from 'react';
import {IBlankSlateProps} from './BlankSlate';

export interface IBlankSlateWithTableProps extends IBlankSlateWithTableConfig, IBlankSlateProps {}

export interface IBlankSlateWithTableConfig {
    numberOfColumn?: number;
}

export const blankSlateWithTable = <P extends IBlankSlateProps>(Component: React.ComponentType<P>) => {
    class ComponentWithTable extends React.PureComponent<Partial<IBlankSlateWithTableProps>> {
        static defaultProps = {
            numberOfColumn: 20,
        };
        render() {
            const {numberOfColumn, ...componentProps} = this.props;
            return (
                <tr className="no-hover">
                    <td colSpan={numberOfColumn}>
                        <Component {...(componentProps as P)}>{this.props.children}</Component>
                    </td>
                </tr>
            );
        }
    }

    return ComponentWithTable;
};
