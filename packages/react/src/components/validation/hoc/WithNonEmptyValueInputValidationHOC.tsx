import {ComponentClass, FunctionComponent, useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {IDispatch} from '../../../utils/ReduxUtils.js';
import {IInputOwnProps} from '../../input/Input.js';
import {ValidationActions} from '../ValidationActions.js';
import {ValidationTypes} from '../ValidationTypes.js';

export interface IWithNonEmptyValueInputValidationProps {
    validationMessage?: string;
    resetErrorOnUnmount?: boolean;
}

const mapDispatchToProps = (dispatch: IDispatch) => ({
    setError: (id: string, error: string) => dispatch(ValidationActions.setError(id, error, ValidationTypes.nonEmpty)),
    clearError: (id: string) => dispatch(ValidationActions.clearError(id, ValidationTypes.nonEmpty)),
});
/**
 * @deprecated Use Mantine instead
 */
export const withNonEmptyValueInputValidationHOC = <T extends IInputOwnProps>(
    Component: ComponentClass<T> | FunctionComponent<T>
) => {
    type NewOwnProps = T & IWithNonEmptyValueInputValidationProps;
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrappedInput: FunctionComponent<NewOwnProps & DispatchProps> = ({
        setError,
        clearError,
        validationMessage = 'Input is empty and should not be empty',
        resetErrorOnUnmount,
        validate,
        ...props
    }) => {
        const [lastState, setLastState] = useState<boolean | null>(null);

        useEffect(
            () => () => {
                resetErrorOnUnmount && clearError(props.id);
            },
            [props.id, resetErrorOnUnmount]
        );

        return (
            <Component
                {...(props as unknown as T)}
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

    return connect<null, DispatchProps, T & IWithNonEmptyValueInputValidationProps>(
        null,
        mapDispatchToProps
    )(WrappedInput as any);
};
