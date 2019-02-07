import * as React from 'react';
import {ConfigSupplier, HocUtils} from '../../../utils/HocUtils';
import {IMultilineBoxDispatchProps, IMultilineBoxOwnProps, IMultilineParentProps, IMultilineSingleBoxProps} from '../MultilineBox';

type MultilineBoxContainerComponent<T = any> = React.ComponentClass<IMultilineBoxOwnProps<T>>;

export interface IMultilineBoxContainerSupplierProps {
    containerProps?: React.HTMLProps<HTMLDivElement>;
}

export interface IMultilineBoxContainerProps<T> extends IMultilineBoxContainerSupplierProps,
    IMultilineBoxOwnProps<T>,
    Partial<IMultilineBoxDispatchProps> {}

export const multilineBoxContainer = (supplier: ConfigSupplier<IMultilineBoxContainerSupplierProps> = {}) => (Component: MultilineBoxContainerComponent): MultilineBoxContainerComponent => {

    class MultilineBoxContainer<T> extends React.PureComponent<IMultilineBoxContainerProps<T>> {

        static defaultProps = {
            renderBody: (children: React.ReactNode[]) => children,
            containerProps: {},
        };

        private getWrapper(children: React.ReactNode, data: Array<IMultilineSingleBoxProps<T>>) {
            const supplierProps: IMultilineBoxContainerSupplierProps = HocUtils.supplyConfig(supplier);
            return React.Children.map(children, (child: React.ReactNode, index: number) => (
                <div
                    key={`${data[index].id}Container`}
                    {...supplierProps.containerProps}
                >
                    {child}
                </div>
            ),
            );
        }

        render() {
            return (
                <Component
                    {...this.props}
                    renderBody={(boxProps: Array<IMultilineSingleBoxProps<T>>, parentProps: IMultilineParentProps) => this.getWrapper(this.props.renderBody(boxProps, parentProps), boxProps)}
                >
                    {this.props.children}
                </Component>
            );
        }
    }

    return MultilineBoxContainer;
};
