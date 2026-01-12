import {PropsWithChildren, ComponentType, FunctionComponent, useEffect} from 'react';
import {PropsWithChildren, connect} from 'react-redux';
import {PropsWithChildren, createStructuredSelector} from 'reselect';

import {PropsWithChildren, IDispatch} from '../../../utils/ReduxUtils';
import {PropsWithChildren, SelectSelector} from '../../select/SelectSelector';
import {PropsWithChildren, ISingleSelectOwnProps} from '../../select/SingleSelectConnected';
import {PropsWithChildren, ValidationActions} from '../ValidationActions';
import {PropsWithChildren, ValidationTypes} from '../ValidationTypes';

const mapStateToProps = createStructuredSelector({
    selectedValue: SelectSelector.getSelectedValue,
});

const mapDispatchToProps = (dispatch: IDispatch) => ({
    setIsDirty: (id: string, isDirty: boolean) =>
        dispatch(ValidationActions.setDirty(id, isDirty, ValidationTypes.wrongInitialValue)),
    clearIsDirty: (id: string) => dispatch(ValidationActions.clearDirty(id, ValidationTypes.wrongInitialValue)),
});

export type IWithDirtySingleSelectHOCProps = {
    initialValue?: string;
    resetDirtyOnUnmount?: boolean;
};
/**
 * @deprecated Use Mantine instead
 */
export const withDirtySingleSelectHOC = <T extends ISingleSelectOwnProps>(Component: ComponentType<T>) => {
    type StateProps = ReturnType<typeof mapStateToProps>;
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrapperSingleSelect: FunctionComponent<
        PropsWithChildren<T & IWithDirtySingleSelectHOCProps & StateProps & DispatchProps>
    > = ({initialValue, selectedValue, setIsDirty, clearIsDirty, resetDirtyOnUnmount, items, ...props}) => {
        useEffect(
            () => () => {
                resetDirtyOnUnmount && clearIsDirty(props.id);
            },
            [],
        );

        useEffect(() => {
            setIsDirty(props.id, initialValue !== selectedValue);
        }, [selectedValue]);

        const itemsWithSelectedInitialValue = items.map((item) => ({...item, selected: item.value === initialValue}));

        return <Component {...(props as T)} items={itemsWithSelectedInitialValue} />;
    };

    return connect<StateProps, DispatchProps, T & IWithDirtySingleSelectHOCProps>(
        mapStateToProps,
        mapDispatchToProps,
    )(WrapperSingleSelect as any);
};
