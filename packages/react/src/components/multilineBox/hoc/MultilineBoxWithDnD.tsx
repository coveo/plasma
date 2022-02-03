import * as React from 'react';
import {DropTarget} from 'react-dnd';
import {createStructuredSelector} from 'reselect';
import {PlasmaState} from '../../../PlasmaState';
import {reorderStringList} from '../../../reusableState/customList/StringListActions';
import {ConfigSupplier, HocUtils} from '../../../utils/HocUtils';
import {IDispatch, ReduxConnect} from '../../../utils/ReduxUtils';
import {DnDContainer, DraggableContainerType, IDraggableContainerOwnProps} from '../../dragAndDrop/DnDContainer';
import {DnDUtils} from '../../dragAndDrop/DnDUtils';
import {IMultiSelectOwnProps} from '../../select/MultiSelectConnected';
import {
    IMultilineBoxDispatchProps,
    IMultilineBoxOwnProps,
    IMultilineBoxStateProps,
    IMultilineParentProps,
    IMultilineSingleBoxProps,
} from '../MultilineBox';
import {MultilineBoxSelectors} from '../MultilineBoxSelector';

type MultilineBoxWithDnDComponent<T = any> = React.ComponentClass<IMultilineBoxOwnProps<T>>;

export interface IMultilineBoxWithDnDSupplierProps {
    DnDContainerProps?: Partial<IDraggableContainerOwnProps>;
}

export interface IMultilineBoxWithDnDDispatchProps {
    onReorder?: (list: string[]) => void;
}

export interface IMultilineBoxWithDnDProps<T>
    extends IMultilineBoxWithDnDSupplierProps,
        IMultilineBoxStateProps,
        IDraggableContainerOwnProps,
        IMultilineBoxOwnProps<T>,
        Partial<IMultilineBoxWithDnDDispatchProps>,
        Partial<IMultilineBoxDispatchProps> {}

export const multilineBoxWithDnD = (supplier: ConfigSupplier<IMultilineBoxWithDnDSupplierProps> = {}) => (
    Component: MultilineBoxWithDnDComponent
): MultilineBoxWithDnDComponent => {
    const makeMapStateToProps = () => {
        const getStateProps = createStructuredSelector({
            multilineBoxIds: MultilineBoxSelectors.getIds,
        });

        return (state: PlasmaState, ownProps: IMultiSelectOwnProps): IMultilineBoxStateProps =>
            getStateProps(state, {id: ownProps.id});
    };

    const mapDispatchToProps = (
        dispatch: IDispatch,
        ownProps: IMultilineBoxOwnProps
    ): IMultilineBoxWithDnDDispatchProps => ({
        onReorder: (list: string[]) => dispatch(reorderStringList(ownProps.id, list)),
    });

    @DropTarget(DraggableContainerType, DnDUtils.parentDropTarget, (connect: any) => ({
        connectDropTarget: connect.dropTarget(),
    }))
    @ReduxConnect(makeMapStateToProps, mapDispatchToProps)
    class MultilineBoxWithDnD<T> extends React.PureComponent<IMultilineBoxWithDnDProps<T>> {
        static defaultProps = {
            renderBody: () => <div />,
        };

        private getDnDWrapper(children: React.ReactNode, data: Array<IMultilineSingleBoxProps<T>>) {
            const supplierProps: IMultilineBoxWithDnDSupplierProps = {
                ...{
                    DnDContainerProps: {},
                },
                ...HocUtils.supplyConfig(supplier),
            };
            return React.Children.map(children, (child: React.ReactNode, index: number) => {
                const isLast = index === data.length - 1;
                const id: string = (data.length && data[index].id) || index.toString();
                return (
                    <DnDContainer
                        id={id}
                        key={`${id}DnD`}
                        index={index}
                        move={(dragIndex: number, hoverIndex: number) =>
                            DnDUtils.move(dragIndex, hoverIndex, this.props.multilineBoxIds, this.props.onReorder)
                        }
                        child={child}
                        isDraggable={!isLast}
                        {...supplierProps.DnDContainerProps}
                    />
                );
            });
        }

        render() {
            return (
                <Component
                    {...this.props}
                    renderBody={(boxProps: Array<IMultilineSingleBoxProps<T>>, parentProps: IMultilineParentProps) =>
                        this.getDnDWrapper(this.props.renderBody(boxProps, parentProps), boxProps)
                    }
                >
                    {this.props.children}
                </Component>
            );
        }
    }

    return DnDUtils.TagControlContext(MultilineBoxWithDnD);
};
