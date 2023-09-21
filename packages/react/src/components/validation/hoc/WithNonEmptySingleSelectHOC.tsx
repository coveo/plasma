import {ComponentType, FunctionComponent, useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {IDispatch} from '../../../utils/ReduxUtils';
import {SelectSelector} from '../../select/SelectSelector';
import {ISingleSelectOwnProps} from '../../select/SingleSelectConnected';
import {ValidationActions} from '../ValidationActions';
import {ValidationTypes} from '../ValidationTypes';

const mapStateToProps = createStructuredSelector({
    selectedValue: SelectSelector.getSelectedValue,
});

const mapDispatchToProps = (dispatch: IDispatch) => ({
    setError: (id: string, error: string) => dispatch(ValidationActions.setError(id, error, ValidationTypes.nonEmpty)),
    clearError: (id: string) => dispatch(ValidationActions.clearError(id, ValidationTypes.nonEmpty)),
});

export interface IWithNonEmptySingleSelectHOCProps {
    nonEmptyValidationMessage?: string;
    resetNonEmptyErrorOnUnmount?: boolean;
}
/**
 * @deprecated Use Mantine instead
 */
export const withNonEmptySingleSelectHOC = <T extends ISingleSelectOwnProps>(Component: ComponentType<T>) => {
    type StateProps = ReturnType<typeof mapStateToProps>;
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrappedSingleSelect: FunctionComponent<
        React.PropsWithChildren<T & IWithNonEmptySingleSelectHOCProps & StateProps & DispatchProps>
    > = ({
        selectedValue,
        setError,
        clearError,
        nonEmptyValidationMessage = 'Selection required',
        resetNonEmptyErrorOnUnmount,
        ...props
    }) => {
        useEffect(() => {
            clearError(props.id);
            return () => {
                resetNonEmptyErrorOnUnmount && clearError(props.id);
            };
        }, [props.id, resetNonEmptyErrorOnUnmount]);

        useEffect(() => {
            setError(props.id, !selectedValue ? nonEmptyValidationMessage : '');
        }, [selectedValue, props.id, nonEmptyValidationMessage]);

        return <Component {...(props as T)} />;
    };

    return connect<StateProps, DispatchProps, T & IWithNonEmptySingleSelectHOCProps>(
        mapStateToProps,
        mapDispatchToProps,
    )(WrappedSingleSelect as any);
};
