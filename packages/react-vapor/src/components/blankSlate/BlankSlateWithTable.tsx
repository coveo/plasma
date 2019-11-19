import {ComponentClass} from 'react';
import * as React from 'react';
import {IBlankSlateProps} from './BlankSlate';

export interface IBlankSlateWithTableProps {
    numberOfColumn?: number;
}

export const blankSlateWithTable = <P extends IBlankSlateProps>(
    Component: React.ComponentType<P>
): ComponentClass<IBlankSlateWithTableProps & P> => {
    class ComponentBlankSlateWithTable extends React.PureComponent<IBlankSlateWithTableProps & P> {
        static defaultProps: Partial<IBlankSlateWithTableProps & P> = {
            numberOfColumn: 20,
        } as Partial<IBlankSlateWithTableProps & P>;

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

    return ComponentBlankSlateWithTable;
};
