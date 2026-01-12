import {PropsWithChildren, ComponentType, FunctionComponent, useEffect} from 'react';
import {PropsWithChildren, connect} from 'react-redux';

import {PropsWithChildren, IDispatch} from '../../../utils/ReduxUtils';
import {PropsWithChildren, ICheckboxOwnProps} from '../../checkbox/Checkbox';
import {PropsWithChildren, IInputOwnProps} from '../../input/Input';
import {PropsWithChildren, ValidationActions} from '../ValidationActions';
import {PropsWithChildren, ValidationTypes} from '../ValidationTypes';

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
    const WrappedCheckbox: FunctionComponent<PropsWithChildren<T & IWithDirtyCheckboxOwnProps & DispatchProps>> = ({
        setIsDirty,
        clearIsDirty,
        handleOnClick,
        resetDirtyOnUnmount,
        ...props
    }) => {
        useEffect(
            () => () => {
                resetDirtyOnUnmount && clearIsDirty(props.id);
            },
            [],
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
