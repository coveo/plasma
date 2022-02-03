import * as React from 'react';
import {connect} from 'react-redux';
import {PlasmaState} from '../../../PlasmaState';

import {IDispatch} from '../../../utils/ReduxUtils';
import {IInputOwnProps} from '../../input/Input';
import {ValidationActions} from '../ValidationActions';
import {ValidationSelectors} from '../ValidationSelectors';
import {ValidationTypes} from '../ValidationTypes';

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

export const withDirtyInputHOC = <T extends IInputOwnProps>(Component: React.ComponentType<T>) => {
    type StateProps = ReturnType<typeof mapStateToProps>;
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrappedInput: React.FunctionComponent<T & IWithDirtyInputOwnProps & StateProps & DispatchProps> = ({
        wasDirty,
        setIsDirty,
        clearIsDirty,
        validate,
        resetDirtyOnUnmount,
        ...props
    }) => {
        React.useEffect(
            () => () => {
                resetDirtyOnUnmount && clearIsDirty(props.id);
            },
            []
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
        mapDispatchToProps
    )(WrappedInput as any);
};
