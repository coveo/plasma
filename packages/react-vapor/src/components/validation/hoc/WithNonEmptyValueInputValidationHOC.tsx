import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IDispatch} from '../../../utils/ReduxUtils';
import {IInputOwnProps} from '../../input/Input';
import {ValidationActions} from '../ValidationActions';
import {ValidationTypes} from '../ValidationTypes';
import {InferableComponentEnhancer} from './connectHOC';

export interface IWithNonEmptyValueInputValidationProps {
    validationMessage?: string;
    resetErrorOnUnmount?: boolean;
}

const mapDispatchToProps = (dispatch: IDispatch) => ({
    setError: (id: string, error: string) => dispatch(ValidationActions.setError(id, error, ValidationTypes.nonEmpty)),
    clearError: (id: string) => dispatch(ValidationActions.clearError(id)),
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
        React.useEffect(() => {
            clearError(props.id);
            return () => {
                resetErrorOnUnmount && clearError(props.id);
            };
        }, []);

        return (
            <Component
                {...(props as T)}
                validate={(value: string) => {
                    const isEmpty = _.isEmpty(value);
                    setError(props.id, isEmpty ? validationMessage : '');
                    return !isEmpty || (validate ? validate(value) : true);
                }}
            />
        );
    };

    const enhance = connect(null, mapDispatchToProps) as InferableComponentEnhancer<DispatchProps>;
    return enhance(WrappedInput);
};
