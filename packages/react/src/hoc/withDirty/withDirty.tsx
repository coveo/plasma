import {ReactNode, ComponentType, ComponentClass, PureComponent, PropsWithChildren} from 'react';
import {isBoolean} from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {WithDirtyActions} from './withDirtyActions';
import {WithDirtySelectors} from './withDirtySelectors';

export interface IWithDirty {
    id: string;
    showDirty: (isDirty: boolean) => ReactNode;
    isDirty?: boolean;
}

export interface IWithDirtyStateProps {
    isDirty: boolean;
    children?: ReactNode;
}

export interface IWithDirtyDispatchProps {
    toggleIsDirty: (isDirty: boolean) => void;
}

export interface IWithDirtyProps
    extends Partial<IWithDirty>,
        Partial<IWithDirtyStateProps>,
        Partial<IWithDirtyDispatchProps> {}

/**
 * @deprecated Use Mantine instead
 */
export const withDirty =
    <T, R = any>(config: Partial<IWithDirty> = {}) =>
    (
        Component: ComponentType<PropsWithChildren<Partial<IWithDirtyProps> & T>>,
    ): ComponentClass<Partial<IWithDirtyProps> & T, R> => {
        const mapStateToProps = (state: PlasmaState, ownProps: IWithDirty): IWithDirtyStateProps => ({
            isDirty: isBoolean(config.isDirty)
                ? config.isDirty
                : WithDirtySelectors.getIsDirty(state, {id: ownProps.id || config.id}),
        });

        const mapDispatchToProps = (dispatch: IDispatch, ownProps: IWithDirty): IWithDirtyDispatchProps => ({
            toggleIsDirty: (isDirty: boolean) => dispatch(WithDirtyActions.toggle(ownProps.id || config.id, isDirty)),
        });

        @ReduxConnect(mapStateToProps, mapDispatchToProps)
        class ComponentWithDirty extends PureComponent<Partial<IWithDirtyProps> & T, R> {
            componentDidMount() {
                this.props.toggleIsDirty(this.props?.isDirty || config?.isDirty);
            }

            componentWillUnmount() {
                this.props.toggleIsDirty(false);
            }

            render() {
                const {showDirty, isDirty, children} = this.props;
                return (
                    <>
                        <Component {...this.props}>{children}</Component>
                        {showDirty?.(isDirty) || config.showDirty(isDirty)}
                    </>
                );
            }
        }

        return ComponentWithDirty;
    };
