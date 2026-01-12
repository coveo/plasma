import {PropsWithChildren, ComponentType, FunctionComponent, useEffect} from 'react';
import {PropsWithChildren, connect} from 'react-redux';
import {PropsWithChildren, PlasmaState} from '../../../PlasmaState';

import {PropsWithChildren, IDispatch} from '../../../utils/ReduxUtils';
import {PropsWithChildren, IInputOwnProps} from '../../input/Input';
import {PropsWithChildren, ValidationActions} from '../ValidationActions';
import {PropsWithChildren, ValidationSelectors} from '../ValidationSelectors';
import {PropsWithChildren, ValidationTypes} from '../ValidationTypes';

export interface IWithDirtyInputOwnProps {
    id?: string;
    resetDirtyOnUnmount?: boolean;
}

const mapStateToProps = (state: PlasmaState, ownProps: IWithDirtyInputOwnProps) => ({
    wasDirty: ValidationSelectors.isDirty([ownProps.id ?? ''])(state),
});

const mapDispatchToProps = (dispatch: IDispatch) => ({
    setIsDirty: (id: string, isDirty: boolean) =>
        dispatch(ValidationActions.setDirty(id, isDirty, ValidationTypes.wrongInitialValue)),
    clearIsDirty: (id: string) => dispatch(ValidationActions.clearDirty(id, ValidationTypes.wrongInitialValue)),
});
/**
 * @deprecated Use Mantine instead
 */
export const withDirtyInputHOC = <T extends IInputOwnProps>(Component: ComponentType<T>) => {
    type StateProps = ReturnType<typeof mapStateToProps>;
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrappedInput: FunctionComponent<
        PropsWithChildren<T & IWithDirtyInputOwnProps & StateProps & DispatchProps>
    > = ({wasDirty, setIsDirty, clearIsDirty, validate, resetDirtyOnUnmount, ...props}) => {
        useEffect(
            () => () => {
                resetDirtyOnUnmount && clearIsDirty(props.id);
            },
            [],
        );

        return (
            <Component
                {...(props as T)}
                validate={(value: string) => {
                    const isDirty = value !== (props.defaultValue || '');
                    if (isDirty !== wasDirty) {
                        setIsDirty(props.id, isDirty);
                    }
                    return validate ? validate(value) : true;
                }}
                validateOnChange
            />
        );
    };

    return connect<StateProps, DispatchProps, T & IWithDirtyInputOwnProps>(
        mapStateToProps,
        mapDispatchToProps,
    )(WrappedInput as any);
};
