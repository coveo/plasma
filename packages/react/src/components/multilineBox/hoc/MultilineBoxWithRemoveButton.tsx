import {RemoveSize16Px} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {Children, Fragment, PureComponent, ReactNode} from 'react';
import {connect} from 'react-redux';

import {removeValueStringList} from '../../../reusableState/customList/StringListActions';
import {ConfigSupplier, HocUtils} from '../../../utils/HocUtils';
import {IDispatch} from '../../../utils/ReduxUtils';
import {Button, IButtonProps} from '../../button/Button';
import {
    IMultilineBoxDispatchProps,
    IMultilineBoxOwnProps,
    IMultilineParentProps,
    IMultilineSingleBoxProps,
    MultilineBox,
} from '../MultilineBox';

export interface IMultilineBoxWithRemoveButtonSupplierProps<T = any> {
    containerNode?: (
        child: ReactNode,
        getRemoveButton: (props?: Partial<IButtonProps>) => ReactNode,
        data: Array<IMultilineSingleBoxProps<T>>,
        index: number,
    ) => ReactNode;
}

export interface IMultilineBoxWithRemoveButtonProps<T>
    extends IMultilineBoxWithRemoveButtonSupplierProps<T>,
        IMultilineBoxOwnProps<T>,
        Partial<IMultilineBoxDispatchProps> {}

const defaultContainerNode = (
    child: ReactNode,
    getRemoveButton: (props?: Partial<IButtonProps>) => ReactNode,
    data: IMultilineSingleBoxProps[],
    index: number,
) => (
    <Fragment key={`${(data.length && data[index].id) || index}RemoveButton`}>
        {child}
        {getRemoveButton()}
    </Fragment>
);

export const defaultMultilineBoxRemoveButtonClasses: string = 'center-align mod-no-border';

/**
 * @deprecated Use Mantine instead
 */
export const multilineBoxWithRemoveButton =
    (supplier: ConfigSupplier<IMultilineBoxWithRemoveButtonSupplierProps> = {containerNode: defaultContainerNode}) =>
    (Component: typeof MultilineBox): typeof MultilineBox => {
        const mapDispatchToProps = (dispatch: IDispatch, ownProps: IMultilineBoxOwnProps) => ({
            removeBox: (id: string) => dispatch(removeValueStringList(ownProps.id, id)),
        });

        class MultilineBoxWithRemoveButton<T> extends PureComponent<
            IMultilineBoxWithRemoveButtonProps<T> & ReturnType<typeof mapDispatchToProps>
        > {
            static defaultProps = {
                renderBody: () => <div />,
            };

            private getRemoveButtonNode(
                data: Array<Partial<IMultilineSingleBoxProps<T>>>,
                props: Partial<IButtonProps> = {},
                index: number,
            ) {
                const isLastMeaningfulEntry = data.length <= 1;
                const isDisabled = this.props.disabled || isLastMeaningfulEntry || data[index].isLast;
                return (
                    <Button
                        classes={[classNames(defaultMultilineBoxRemoveButtonClasses)]}
                        style={{
                            visibility: isDisabled ? 'hidden' : 'visible',
                        }}
                        onClick={() => this.props.removeBox(data[index].id)}
                        enabled={!isDisabled}
                        {...props}
                    >
                        <RemoveSize16Px
                            height={16}
                            style={{
                                visibility: isDisabled ? 'hidden' : 'visible',
                            }}
                        />
                    </Button>
                );
            }

            private getWrapper(children: ReactNode, data: Array<IMultilineSingleBoxProps<T>>) {
                return Children.map(children, (child: ReactNode, index: number) =>
                    HocUtils.supplyConfig(supplier).containerNode(
                        child,
                        (props?: Partial<IButtonProps>) => this.getRemoveButtonNode(data, props, index),
                        data,
                        index,
                    ),
                );
            }

            render() {
                return (
                    <Component
                        {...this.props}
                        renderBody={(
                            boxProps: Array<IMultilineSingleBoxProps<T>>,
                            parentProps: IMultilineParentProps,
                        ) => this.getWrapper(this.props.renderBody(boxProps, parentProps), boxProps)}
                    />
                );
            }
        }

        return connect<null, ReturnType<typeof mapDispatchToProps>, IMultilineBoxWithRemoveButtonProps<any>>(
            undefined,
            mapDispatchToProps,
        )(MultilineBoxWithRemoveButton as any);
    };
