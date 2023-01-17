import {ComponentType, FunctionComponent, useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {IDispatch} from '../../../utils/ReduxUtils.js';
import {SelectSelector} from '../../select/SelectSelector.js';
import {ISingleSelectOwnProps} from '../../select/SingleSelectConnected.js';
import {ValidationActions} from '../ValidationActions.js';
import {ValidationTypes} from '../ValidationTypes.js';

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
        React.PropsWithChildren<T & IWithDirtySingleSelectHOCProps & StateProps & DispatchProps>
    > = ({initialValue, selectedValue, setIsDirty, clearIsDirty, resetDirtyOnUnmount, items, ...props}) => {
        useEffect(
            () => () => {
                resetDirtyOnUnmount && clearIsDirty(props.id);
            },
            []
        );

        useEffect(() => {
            setIsDirty(props.id, initialValue !== selectedValue);
        }, [selectedValue]);

        const itemsWithSelectedInitialValue = items.map((item) => ({...item, selected: item.value === initialValue}));

        return <Component {...(props as T)} items={itemsWithSelectedInitialValue} />;
    };

    return connect<StateProps, DispatchProps, T & IWithDirtySingleSelectHOCProps>(
        mapStateToProps,
        mapDispatchToProps
    )(WrapperSingleSelect as any);
};
