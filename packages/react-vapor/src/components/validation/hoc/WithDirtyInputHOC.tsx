import * as React from 'react';
import {connect} from 'react-redux';
import {IDispatch} from '../../../utils/ReduxUtils';
import {IInputOwnProps} from '../../input/Input';
import {ValidationActions} from '../ValidationActions';
import {ValidationTypes} from '../ValidationTypes';
import {InferableComponentEnhancer} from './connectHOC';

export interface IWithDirtyInputOwnProps {
    resetDirtyOnUnmount?: boolean;
}

const mapDispatchToProps = (dispatch: IDispatch) => ({
    setIsDirty: (id: string, isDirty: boolean) =>
        dispatch(ValidationActions.setDirty(id, isDirty, ValidationTypes.wrongInitialValue)),
    clearIsDirty: (id: string) => dispatch(ValidationActions.clearDirty(id, ValidationTypes.wrongInitialValue)),
});

export const withDirtyInputHOC = <T extends IInputOwnProps>(Component: React.ComponentType<T>) => {
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrappedInput: React.FunctionComponent<T & IWithDirtyInputOwnProps & DispatchProps> = ({
        setIsDirty,
        clearIsDirty,
        validate,
        resetDirtyOnUnmount,
        ...props
    }) => {
        React.useEffect(() => {
            return () => {
                resetDirtyOnUnmount && clearIsDirty(props.id);
            };
        }, []);

        return (
            <Component
                {...(props as T)}
                validate={(value: string) => {
                    setIsDirty(props.id, value !== (props.defaultValue || ''));
                    return validate ? validate(value) : true;
                }}
                validateOnChange
            />
        );
    };

    const enhance = connect(null, mapDispatchToProps) as InferableComponentEnhancer<DispatchProps>;
    return enhance(WrappedInput);
};
