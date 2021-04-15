import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {IDispatch} from '../../../utils/ReduxUtils';
import {IMultiSelectOwnProps} from '../../select/MultiSelectConnected';
import {SelectSelector} from '../../select/SelectSelector';
import {ValidationActions} from '../ValidationActions';
import {ValidationTypes} from '../ValidationTypes';

const mapStateToProps = createStructuredSelector({
    selectedValues: SelectSelector.getMultiSelectSelectedValues,
});

const mapDispatchToProps = (dispatch: IDispatch) => ({
    setError: (id: string, error: string) => dispatch(ValidationActions.setError(id, error, ValidationTypes.nonEmpty)),
    clearError: (id: string) => dispatch(ValidationActions.clearError(id, ValidationTypes.nonEmpty)),
});

export interface WithNonEmptyValueMultiSelectValidationProps {
    nonEmptyValidationMessage?: string;
    resetNonEmptyMultiSelectErrorOnUnmount?: boolean;
}

export const withNonEmptyMultiSelectHOC = <T extends IMultiSelectOwnProps>(Component: React.ComponentType<T>) => {
    type NewOwnProps = T & WithNonEmptyValueMultiSelectValidationProps;
    type StateProps = ReturnType<typeof mapStateToProps>;
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrappedMultiSelect: React.FunctionComponent<NewOwnProps & StateProps & DispatchProps> = ({
        selectedValues,
        setError,
        clearError,
        nonEmptyValidationMessage = 'Selection required',
        resetNonEmptyMultiSelectErrorOnUnmount,
        ...props
    }) => {
        const hasValuesSelected = selectedValues.length > 0;

        React.useEffect(() => {
            clearError(props.id);
            return () => {
                resetNonEmptyMultiSelectErrorOnUnmount && clearError(props.id);
            };
        }, [props.id, resetNonEmptyMultiSelectErrorOnUnmount]);

        React.useEffect(() => {
            setError(props.id, !hasValuesSelected ? nonEmptyValidationMessage : '');
        }, [hasValuesSelected, props.id, nonEmptyValidationMessage]);

        return <Component {...(props as T)} />;
    };

    return connect(mapStateToProps, mapDispatchToProps)(WrappedMultiSelect);
};
