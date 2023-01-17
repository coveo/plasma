import {ComponentType, FunctionComponent, useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {IDispatch} from '../../../utils/ReduxUtils.js';
import {IMultiSelectOwnProps} from '../../select/MultiSelectConnected.js';
import {SelectSelector} from '../../select/SelectSelector.js';
import {ValidationActions} from '../ValidationActions.js';
import {ValidationTypes} from '../ValidationTypes.js';

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
/**
 * @deprecated Use Mantine instead
 */
export const withNonEmptyMultiSelectHOC = <T extends IMultiSelectOwnProps>(Component: ComponentType<T>) => {
    type NewOwnProps = T & WithNonEmptyValueMultiSelectValidationProps;
    type StateProps = ReturnType<typeof mapStateToProps>;
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrappedMultiSelect: FunctionComponent<NewOwnProps & StateProps & DispatchProps> = ({
        selectedValues,
        setError,
        clearError,
        nonEmptyValidationMessage = 'Selection required',
        resetNonEmptyMultiSelectErrorOnUnmount,
        ...props
    }) => {
        const hasValuesSelected = selectedValues.length > 0;

        useEffect(() => {
            clearError(props.id);
            return () => {
                resetNonEmptyMultiSelectErrorOnUnmount && clearError(props.id);
            };
        }, [props.id, resetNonEmptyMultiSelectErrorOnUnmount]);

        useEffect(() => {
            setError(props.id, !hasValuesSelected ? nonEmptyValidationMessage : '');
        }, [hasValuesSelected, props.id, nonEmptyValidationMessage]);

        return <Component {...(props as unknown as T)} />;
    };

    return connect<StateProps, DispatchProps, T & WithNonEmptyValueMultiSelectValidationProps>(
        mapStateToProps,
        mapDispatchToProps
    )(WrappedMultiSelect as any);
};
