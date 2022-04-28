import * as React from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {createStructuredSelector} from 'reselect';

import {PlasmaState} from '../../../PlasmaState';
import {reorderStringList} from '../../../reusableState/customList/StringListActions';
import {ConfigSupplier, HocUtils} from '../../../utils/HocUtils';
import {IDispatch, ReduxConnect} from '../../../utils/ReduxUtils';
import {DnDContainer, IDraggableContainerOwnProps} from '../../dragAndDrop/DnDContainer';
import {DnDUtils} from '../../dragAndDrop/DnDUtils';
import {IMultiSelectOwnProps} from '../../select/MultiSelectConnected';
import {
    IMultilineBoxDispatchProps,
    IMultilineBoxOwnProps,
    IMultilineBoxStateProps,
    IMultilineParentProps,
    IMultilineSingleBoxProps,
    MultilineBox,
} from '../MultilineBox';
import {MultilineBoxSelectors} from '../MultilineBoxSelector';

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
    Component: typeof MultilineBox
): typeof MultilineBox => {
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
                        onMoveOver={(draggedId: string) => {
                            // Triggered when another box is dragged over the current box
                            const newOrder = DnDUtils.reorder(draggedId, id, this.props.multilineBoxIds);
                            this.props.onReorder(newOrder);
                        }}
                        isDraggable={!isLast}
                        {...supplierProps.DnDContainerProps}
                    >
                        {child}
                    </DnDContainer>
                );
            });
        }

        render() {
            return (
                <DndProvider backend={HTML5Backend}>
                    <Component
                        {...this.props}
                        renderBody={(
                            boxProps: Array<IMultilineSingleBoxProps<T>>,
                            parentProps: IMultilineParentProps
                        ) => this.getDnDWrapper(this.props.renderBody(boxProps, parentProps), boxProps)}
                    />
                </DndProvider>
            );
        }
    }

    return (MultilineBoxWithDnD as unknown) as typeof MultilineBox;
};
