import {Children, PureComponent, ReactNode} from 'react';
import {createStructuredSelector} from 'reselect';

import {PlasmaState} from '../../../PlasmaState';
import {reorderStringList} from '../../../reusableState/customList/StringListActions';
import {ConfigSupplier, HocUtils} from '../../../utils/HocUtils';
import {IDispatch, ReduxConnect} from '../../../utils/ReduxUtils';
import {Sortable} from '../../dragAndDrop';
import {DnDContainer, IDraggableContainerOwnProps} from '../../dragAndDrop/DnDContainer';
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
            ownProps: IMultilineBoxOwnProps,
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
                    DnDContainerProps: {},
                    ...HocUtils.supplyConfig(supplier),
                };

                const getId = (item: IMultilineSingleBoxProps<T>, index: number) => item?.id || index.toString();

                return (
                    <Sortable items={data.map(getId)} onReorder={this.props.onReorder}>
                        {Children.map(children, (child: ReactNode, index: number) => {
                            const isLast = index === data.length - 1;
                            const id = getId(data[index], index);
                            return (
                                <DnDContainer
                                    id={id}
                                    parentId={this.props.id}
                                    key={`${id}DnD`}
                                    isDraggable={!isLast}
                                    onMoveOver={() => null}
                                    {...supplierProps.DnDContainerProps}
                                >
                                    {child}
                                </DnDContainer>
                            );
                        })}
                    </Sortable>
                );
            }

            render() {
                return (
                    <Component
                        {...this.props}
                        renderBody={(
                            boxProps: Array<IMultilineSingleBoxProps<T>>,
                            parentProps: IMultilineParentProps,
                        ) => this.getDnDWrapper(this.props.renderBody(boxProps, parentProps), boxProps)}
                    />
                );
            }
        }

        return MultilineBoxWithDnD as unknown as typeof MultilineBox;
    };
