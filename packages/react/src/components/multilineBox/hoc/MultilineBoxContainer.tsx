import * as React from 'react';
import {ConfigSupplier, HocUtils} from '../../../utils/HocUtils';
import {
    IMultilineBoxDispatchProps,
    IMultilineBoxOwnProps,
    IMultilineParentProps,
    IMultilineSingleBoxProps,
    MultilineBox,
} from '../MultilineBox';

export interface IMultilineBoxContainerSupplierProps<T = any> {
    containerNode?: (
        child: React.ReactNode,
        data: Array<IMultilineSingleBoxProps<T>>,
        index: number
    ) => React.ReactNode;
}

export interface IMultilineBoxContainerProps<T>
    extends IMultilineBoxContainerSupplierProps<T>,
        IMultilineBoxOwnProps<T>,
        Partial<IMultilineBoxDispatchProps> {}

const defaultContainerNode = (child: React.ReactNode, data: IMultilineSingleBoxProps[], index: number) => (
    <div key={`${(data.length && data[index].id) || index}Container`}>{child}</div>
);

export const multilineBoxContainer = (
    supplier: ConfigSupplier<IMultilineBoxContainerSupplierProps> = {containerNode: defaultContainerNode}
) => (Component: typeof MultilineBox): typeof MultilineBox => {
    class MultilineBoxContainer<T> extends React.PureComponent<IMultilineBoxContainerProps<T>> {
        static defaultProps = {
            renderBody: () => <div />,
        };

        private getWrapper(children: React.ReactNode, data: Array<IMultilineSingleBoxProps<T>>) {
            return React.Children.map(children, (child: React.ReactNode, index: number) =>
                HocUtils.supplyConfig(supplier).containerNode(child, data, index)
            );
        }

        render() {
            return (
                <Component
                    {...this.props}
                    renderBody={(boxProps: Array<IMultilineSingleBoxProps<T>>, parentProps: IMultilineParentProps) =>
                        this.getWrapper(this.props.renderBody(boxProps, parentProps), boxProps)
                    }
                />
            );
        }
    }

    return MultilineBoxContainer as any;
};
