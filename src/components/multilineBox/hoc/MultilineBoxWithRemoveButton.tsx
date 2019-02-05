import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {removeValueStringList} from '../../../reusableState/customList/StringListActions';
import {ConfigSupplier} from '../../../utils/HocUtils';
import {IDispatch, ReduxConnect} from '../../../utils/ReduxUtils';
import {Button} from '../../button/Button';
import {Svg} from '../../svg/Svg';
import {IMultilineBoxDispatchProps, IMultilineBoxOwnProps, IMultilineParentProps, IMultilineSingleBoxProps} from '../MultilineBox';

type MultilineBoxWithRemoveButtonComponent<T = any> = React.ComponentClass<IMultilineBoxOwnProps<T>>;

export interface IMultilineBoxWithRemoveButtonProps<T> extends IMultilineBoxOwnProps<T>,
    Partial<IMultilineBoxDispatchProps> {}

export const multilineBoxWithRemoveButton = (supplier: ConfigSupplier = {}) => (Component: MultilineBoxWithRemoveButtonComponent): MultilineBoxWithRemoveButtonComponent => {

    const mapDispatchToProps = (dispatch: IDispatch, ownProps: IMultilineBoxOwnProps): Partial<IMultilineBoxDispatchProps> => ({
        removeBox: (id: string) => dispatch(removeValueStringList(ownProps.id, id)),
    });

    @ReduxConnect(null, mapDispatchToProps)
    class MultilineBoxWithRemoveButton<T> extends React.PureComponent<IMultilineBoxWithRemoveButtonProps<T>> {

        static defaultProps = {
            renderBody: (children: React.ReactNode[]) => children,
        };

        private renderRemoveButton(data: IMultilineSingleBoxProps<T>) {
            return (
                <Button
                    classes={['p1', 'full-content-y center-align inline-flex mod-no-border']}
                    style={{
                        visibility: !data.isLast ? 'visible' : 'hidden',
                    }}
                    onClick={() => !data.isLast && this.props.removeBox(data.id)}
                    enabled={!data.isLast}
                >
                    <Svg
                        svgName={VaporSVG.svg.remove.name}
                        className='icon fill-medium-blue mod-2x full-content-y cursor-pointer'
                        style={{
                            visibility: !data.isLast ? 'visible' : 'hidden',
                        }}
                    />
                </Button>
            );
        }

        private getWrapper(children: React.ReactNode, data: Array<IMultilineSingleBoxProps<T>>) {
            return React.Children.map(children, (child: React.ReactNode, index: number) => (
                <React.Fragment key={`${data[index].id}RemoveButton`}>
                    {child}
                    {this.renderRemoveButton(data[index])}
                </React.Fragment>
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

    return MultilineBoxWithRemoveButton;
};
