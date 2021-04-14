import * as React from 'react';
import {connect} from 'react-redux';

import {IDispatch} from '../../../utils/ReduxUtils';
import {IInputOwnProps} from '../../input/Input';
import {ValidationActions} from '../ValidationActions';
import {ValidationTypes} from '../ValidationTypes';

export interface IWithNonEmptyValueInputValidationProps {
    validationMessage?: string;
    resetErrorOnUnmount?: boolean;
}

const mapDispatchToProps = (dispatch: IDispatch) => ({
    setError: (id: string, error: string) => dispatch(ValidationActions.setError(id, error, ValidationTypes.nonEmpty)),
    clearError: (id: string) => dispatch(ValidationActions.clearError(id, ValidationTypes.nonEmpty)),
});

export const withNonEmptyValueInputValidationHOC = <T extends IInputOwnProps>(
    Component: React.ComponentClass<T> | React.FunctionComponent<T>
) => {
    type NewOwnProps = T & IWithNonEmptyValueInputValidationProps;
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrappedInput: React.FunctionComponent<NewOwnProps & DispatchProps> = ({
        setError,
        clearError,
        validationMessage = 'Input is empty and should not be empty',
        resetErrorOnUnmount,
        validate,
        ...props
    }) => {
        const [lastState, setLastState] = React.useState<boolean | null>(null);

        React.useEffect(
            () => () => {
                resetErrorOnUnmount && clearError(props.id);
            },
            [props.id, resetErrorOnUnmount]
        );

        return (
            <Component
                {...(props as T)}
                validate={(value: string) => {
                    const isEmpty = !/\S/.test(value);
                    if (isEmpty !== lastState) {
                        setLastState(isEmpty);
                        setError(props.id, isEmpty ? validationMessage : '');
                    }
                    return !isEmpty || (validate ? validate(value) : true);
                }}
            />
        );
    };

    return connect(null, mapDispatchToProps)(WrappedInput);
};
