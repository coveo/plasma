import * as React from 'react';

import {IReactVaporState} from '../../ReactVapor';
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

export interface IWithDirtyProps extends Partial<IWithDirtyStateProps>, Partial<IWithDirtyDispatchProps> {}

export const withDirty = <T, R = any>(config: IWithDirty) => (
    Component: React.ComponentType<IWithDirtyProps & T>
): React.ComponentClass<IWithDirtyProps & T, R> => {
    const mapStateToProps = (state: IReactVaporState): IWithDirtyStateProps => ({
        isDirty: WithDirtySelectors.getIsDirty(state, {id: config.id}),
    });

    const mapDispatchToProps = (dispatch: IDispatch): IWithDirtyDispatchProps => ({
        toggleIsDirty: (isDirty: boolean) => dispatch(WithDirtyActions.toggle(config.id, isDirty)),
    });

    @ReduxConnect(mapStateToProps, mapDispatchToProps)
    class ComponentWithDirty extends React.PureComponent<Partial<IWithDirtyProps> & T, R> {
        componentDidMount() {
            this.props.toggleIsDirty(config.isDirty);
        }

        componentWillUnmount() {
            this.props.toggleIsDirty(false);
        }

        render() {
            return (
                <>
                    <Component {...this.props}>{this.props.children}</Component>
                    {config.showDirty(this.props.isDirty)}
                </>
            );
        }
    }

    return ComponentWithDirty;
};
