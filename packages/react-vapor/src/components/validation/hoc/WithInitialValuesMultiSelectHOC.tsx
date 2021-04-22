import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {IDispatch} from '../../../utils/ReduxUtils';
import {IMultiSelectOwnProps} from '../../select/MultiSelectConnected';
import {ValidationActions} from '../ValidationActions';
import {ValidationTypes} from '../ValidationTypes';

const mapDispatchToProps = (dispatch: IDispatch, {id}: IMultiSelectOwnProps) => ({
    setWarning: (warning: string) =>
        dispatch(ValidationActions.setWarning(id, warning, ValidationTypes.wrongInitialValue)),
    clearWarning: () => dispatch(ValidationActions.clearWarning(id, ValidationTypes.wrongInitialValue)),
});

export type IMultiSelectWithInitialValuesOwnProps = {
    initialValues: string[];
    invalidInitialValuesMessage?: (invalidValues: string[]) => string;
    resetInitialValueWarningOnUnmount?: boolean;
};

const defaultInvalidInitialValuesMessageGenerator = (values: string[]) =>
    `The initial values ('${values.join("', '")}') were selected, but not found. They will be ignored.`;

export const withInitialValuesMultiSelectHOC = <T extends IMultiSelectOwnProps>(Component: React.ComponentType<T>) => {
    type DispatchProps = ReturnType<typeof mapDispatchToProps>;
    const WrappedMultiSelect: React.FunctionComponent<T & IMultiSelectWithInitialValuesOwnProps & DispatchProps> = ({
        setWarning,
        clearWarning,
        invalidInitialValuesMessage = defaultInvalidInitialValuesMessageGenerator,
        items = [],
        ...props
    }) => {
        const {initialValues = [] as string[]} = props;

        const notFoundInitialValues =
            initialValues?.length &&
            _.difference(
                initialValues,
                items.map((item) => item.value)
            );

        const newItems = items.map((item) => ({
            ...item,
            selected: _.contains(initialValues, item.value),
        }));

        React.useEffect(
            () => () => {
                props.resetInitialValueWarningOnUnmount && clearWarning();
            },
            []
        );

        React.useEffect(() => {
            const message = invalidInitialValuesMessage?.(notFoundInitialValues) || '';
            setWarning(notFoundInitialValues.length > 0 ? message : '');
        }, [invalidInitialValuesMessage, notFoundInitialValues.length]);

        return <Component {...(props as T)} items={newItems} />;
    };

    return connect(null, mapDispatchToProps)(WrappedMultiSelect);
};
