import * as React from 'react';

import {IReactVaporState} from '../../ReactVaporState';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {WithDirtyActions} from './withDirtyActions';
import {WithDirtySelectors} from './withDirtySelectors';

export interface IWithDirty {
    id: string;
    showDirty: (isDirty: boolean) => React.ReactNode;
    isDirty?: boolean;
}

export interface IWithDirtyStateProps {
    isDirty: boolean;
}

export interface IWithDirtyDispatchProps {
    toggleIsDirty: (isDirty: boolean) => void;
}

export interface IWithDirtyProps
    extends Partial<IWithDirty>,
        Partial<IWithDirtyStateProps>,
        Partial<IWithDirtyDispatchProps> {}

export const withDirty = <T, R = any>(config: Partial<IWithDirty> = {}) => (
    Component: React.ComponentType<Partial<IWithDirtyProps> & T>
): React.ComponentClass<Partial<IWithDirtyProps> & T, R> => {
    const mapStateToProps = (state: IReactVaporState, ownProps: IWithDirty): IWithDirtyStateProps => ({
        isDirty: WithDirtySelectors.getIsDirty(state, {id: ownProps.id || config.id}),
    });

    const mapDispatchToProps = (dispatch: IDispatch, ownProps: IWithDirty): IWithDirtyDispatchProps => ({
        toggleIsDirty: (isDirty: boolean) => dispatch(WithDirtyActions.toggle(ownProps.id || config.id, isDirty)),
    });

    @ReduxConnect(mapStateToProps, mapDispatchToProps)
    class ComponentWithDirty extends React.PureComponent<Partial<IWithDirtyProps> & T, R> {
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
