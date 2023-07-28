import {ComponentType, FunctionComponent, useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as _ from 'underscore';

import {IDispatch} from '../../../utils/ReduxUtils';
import {IMultiSelectOwnProps} from '../../select/MultiSelectConnected';
import {SelectSelector} from '../../select/SelectSelector';
import {ValidationActions} from '../ValidationActions';

const mapStateToProps = createStructuredSelector({
    selectedValues: SelectSelector.getMultiSelectSelectedValues,
});

const mapDispatchToProps = (dispatch: IDispatch, {id}: IMultiSelectOwnProps) => ({
    toggleIsDirty: (isDirty: boolean) => dispatch(ValidationActions.setDirty(id, isDirty)),
});

export type IMultiSelectWithDirtyOwnProps = {
    initialValues: string[];
};
/**
 * @deprecated Use Mantine instead
 */
export const withDirtyMultiSelectHOC = <T extends IMultiSelectOwnProps>(Component: ComponentType<T>) => {
    type StateProps = ReturnType<typeof mapStateToProps>;
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrappedMultiSelect: FunctionComponent<
        React.PropsWithChildren<T & IMultiSelectWithDirtyOwnProps & StateProps & DispatchProps>
    > = ({initialValues = [], selectedValues, toggleIsDirty, ...props}) => {
        const hasDifferentValuesSelected =
            _.difference(initialValues, selectedValues).length > 0 ||
            _.difference(selectedValues, initialValues).length > 0;

        useEffect(() => {
            toggleIsDirty(hasDifferentValuesSelected);
        }, [hasDifferentValuesSelected]);

        return <Component {...(props as T)} />;
    };

    return connect<StateProps, DispatchProps, T & IMultiSelectWithDirtyOwnProps>(
        mapStateToProps,
        mapDispatchToProps,
    )(WrappedMultiSelect as any);
};
