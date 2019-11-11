import * as React from 'react';
import {IBlankSlateProps} from './BlankSlate';

export interface IBlankSlateWithTableProps extends IBlankSlateWithTableConfig, IBlankSlateProps {}

export interface IBlankSlateWithTableConfig {
    numberOfColumn?: number;
}

export const blankSlateWithTable = <T, R = any>(config: IBlankSlateWithTableConfig = {}) => (
    Component: React.ComponentClass<IBlankSlateProps>
): React.ComponentClass<IBlankSlateWithTableProps & T, R> => {
    class ComponentWithTable extends React.PureComponent<Partial<IBlankSlateWithTableProps> & T, R> {
        render() {
            const numberOfColumn = config.numberOfColumn || 20;

            return (
                <tr className="no-hover">
                    <td colSpan={numberOfColumn}>
                        <Component {...this.props}>{this.props.children}</Component>
                    </td>
                </tr>
            );
        }
    }

    return ComponentWithTable;
};
