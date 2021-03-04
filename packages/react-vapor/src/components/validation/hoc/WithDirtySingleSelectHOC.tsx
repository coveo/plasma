import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {IDispatch} from '../../../utils/ReduxUtils';
import {SelectSelector} from '../../select/SelectSelector';
import {ISingleSelectOwnProps} from '../../select/SingleSelectConnected';
import {ValidationActions} from '../ValidationActions';
import {ValidationTypes} from '../ValidationTypes';
import {InferableComponentEnhancer} from './connectHOC';

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

export const withDirtySingleSelectHOC = <T extends ISingleSelectOwnProps>(Component: React.ComponentType<T>) => {
    type StateProps = ReturnType<typeof mapStateToProps>;
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrapperSingleSelect: React.FunctionComponent<
        T & IWithDirtySingleSelectHOCProps & StateProps & DispatchProps
    > = ({initialValue, selectedValue, setIsDirty, clearIsDirty, resetDirtyOnUnmount, items, ...props}) => {
        React.useEffect(
            () => () => {
                resetDirtyOnUnmount && clearIsDirty(props.id);
            },
            []
        );

        React.useEffect(() => {
            setIsDirty(props.id, initialValue !== selectedValue);
        }, [selectedValue]);

        const itemsWithSelectedInitialValue = React.useMemo(
            () => items.map((item) => ({...item, selected: item.value === initialValue})),
            [items, initialValue]
        );

        return <Component {...(props as T)} items={itemsWithSelectedInitialValue} />;
    };

    const enhance = connect(mapStateToProps, mapDispatchToProps) as InferableComponentEnhancer<
        StateProps & DispatchProps
    >;

    return enhance(WrapperSingleSelect);
};
