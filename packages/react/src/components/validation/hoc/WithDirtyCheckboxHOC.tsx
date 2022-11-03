import {ComponentType, FunctionComponent, useEffect} from 'react';
import {connect} from 'react-redux';

import {IDispatch} from '../../../utils/ReduxUtils';
import {ICheckboxOwnProps} from '../../checkbox/Checkbox';
import {IInputOwnProps} from '../../input/Input';
import {ValidationActions} from '../ValidationActions';
import {ValidationTypes} from '../ValidationTypes';

export interface IWithDirtyCheckboxOwnProps {
    resetDirtyOnUnmount?: boolean;
}

const mapDispatchToProps = (dispatch: IDispatch) => ({
    setIsDirty: (id: string, isDirty: boolean) =>
        dispatch(ValidationActions.setDirty(id, isDirty, ValidationTypes.wrongInitialValue)),
    clearIsDirty: (id: string) => dispatch(ValidationActions.clearDirty(id, ValidationTypes.wrongInitialValue)),
});
/**
 * @deprecated Use Mantine instead
 */
export const withDirtyCheckboxHOC = <T extends ICheckboxOwnProps & IInputOwnProps>(Component: ComponentType<T>) => {
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrappedCheckbox: FunctionComponent<
        React.PropsWithChildren<T & IWithDirtyCheckboxOwnProps & DispatchProps>
    > = ({setIsDirty, clearIsDirty, handleOnClick, resetDirtyOnUnmount, ...props}) => {
        useEffect(
            () => () => {
                resetDirtyOnUnmount && clearIsDirty(props.id);
            },
            []
        );

        return (
            <Component
                {...(props as T)}
                handleOnClick={(wasChecked: boolean) => {
                    const isNowChecked = !wasChecked;
                    setIsDirty(props.id, isNowChecked !== !!props.defaultChecked);
                    handleOnClick?.(wasChecked);
                }}
            />
        );
    };

    return connect<null, DispatchProps, T>(null, mapDispatchToProps)(WrappedCheckbox as any);
};
