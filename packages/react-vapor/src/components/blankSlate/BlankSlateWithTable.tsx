import classNames from 'classnames';
import {ComponentClass} from 'react';
import * as React from 'react';
import {IBlankSlateProps} from './BlankSlate';

export interface IBlankSlateWithTableProps extends IBlankSlateProps {
    numberOfColumn?: number;
    blankSlateRowClassName?: string;
    blankSlateCellClassName?: string;
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
                <tr className={classNames(this.props.blankSlateRowClassName, 'blankslate-row no-hover')}>
                    <td colSpan={numberOfColumn} className={classNames(this.props.blankSlateCellClassName)}>
                        <Component {...(componentProps as P)}>{this.props.children}</Component>
                    </td>
                </tr>
            );
        }
    }

    return ComponentBlankSlateWithTable;
};
