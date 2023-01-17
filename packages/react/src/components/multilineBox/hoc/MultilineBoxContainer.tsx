import {ReactNode, Children, PureComponent} from 'react';
import {ConfigSupplier, HocUtils} from '../../../utils/HocUtils.js';
import {
    IMultilineBoxDispatchProps,
    IMultilineBoxOwnProps,
    IMultilineParentProps,
    IMultilineSingleBoxProps,
    MultilineBox,
} from '../MultilineBox.js';

export interface IMultilineBoxContainerSupplierProps<T = any> {
    containerNode?: (child: ReactNode, data: Array<IMultilineSingleBoxProps<T>>, index: number) => ReactNode;
}

export interface IMultilineBoxContainerProps<T>
    extends IMultilineBoxContainerSupplierProps<T>,
        IMultilineBoxOwnProps<T>,
        Partial<IMultilineBoxDispatchProps> {}

const defaultContainerNode = (child: ReactNode, data: IMultilineSingleBoxProps[], index: number) => (
    <div key={`${(data.length && data[index].id) || index}Container`}>{child}</div>
);

/**
 * @deprecated Use Mantine instead
 */
export const multilineBoxContainer =
    (supplier: ConfigSupplier<IMultilineBoxContainerSupplierProps> = {containerNode: defaultContainerNode}) =>
    (Component: typeof MultilineBox): typeof MultilineBox => {
        class MultilineBoxContainer<T> extends PureComponent<IMultilineBoxContainerProps<T>> {
            static defaultProps = {
                renderBody: () => <div />,
            };

            private getWrapper(children: ReactNode, data: Array<IMultilineSingleBoxProps<T>>) {
                return Children.map(children, (child: ReactNode, index: number) =>
                    HocUtils.supplyConfig(supplier).containerNode(child, data, index)
                );
            }

            render() {
                return (
                    <Component
                        {...this.props}
                        renderBody={(
                            boxProps: Array<IMultilineSingleBoxProps<T>>,
                            parentProps: IMultilineParentProps
                        ) => this.getWrapper(this.props.renderBody(boxProps, parentProps), boxProps)}
                    />
                );
            }
        }

        return MultilineBoxContainer as any;
    };
