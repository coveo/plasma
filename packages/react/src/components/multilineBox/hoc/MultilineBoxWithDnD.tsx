import {ReactNode, Children, PureComponent} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {createStructuredSelector} from 'reselect';

import {PlasmaState} from '../../../PlasmaState.js';
import {reorderStringList} from '../../../reusableState/customList/StringListActions.js';
import {ConfigSupplier, HocUtils} from '../../../utils/HocUtils.js';
import {IDispatch, ReduxConnect} from '../../../utils/ReduxUtils.js';
import {DnDContainer, IDraggableContainerOwnProps} from '../../dragAndDrop/DnDContainer.js';
import {DnDUtils} from '../../dragAndDrop/DnDUtils.js';
import {IMultiSelectOwnProps} from '../../select/MultiSelectConnected.js';
import {
    IMultilineBoxDispatchProps,
    IMultilineBoxOwnProps,
    IMultilineBoxStateProps,
    IMultilineParentProps,
    IMultilineSingleBoxProps,
    MultilineBox,
} from '../MultilineBox.js';
import {MultilineBoxSelectors} from '../MultilineBoxSelector.js';

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

/**
 * @deprecated Use Mantine instead
 */
export const multilineBoxWithDnD =
    (supplier: ConfigSupplier<IMultilineBoxWithDnDSupplierProps> = {}) =>
    (Component: typeof MultilineBox): typeof MultilineBox => {
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
        class MultilineBoxWithDnD<T> extends PureComponent<IMultilineBoxWithDnDProps<T>> {
            static defaultProps = {
                renderBody: () => <div />,
            };

            private getDnDWrapper(children: ReactNode, data: Array<IMultilineSingleBoxProps<T>>) {
                const supplierProps: IMultilineBoxWithDnDSupplierProps = {
                    ...{
                        DnDContainerProps: {},
                    },
                    ...HocUtils.supplyConfig(supplier),
                };
                return Children.map(children, (child: ReactNode, index: number) => {
                    const isLast = index === data.length - 1;
                    const id: string = (data.length && data[index].id) || index.toString();
                    return (
                        <DnDContainer
                            id={id}
                            parentId={this.props.id}
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

        return MultilineBoxWithDnD as unknown as typeof MultilineBox;
    };
