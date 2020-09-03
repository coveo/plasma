import {useLayoutEffect, useState} from 'react';
import * as _ from 'underscore';
import * as React from 'react';
import {connect} from 'react-redux';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch} from '../../utils';
import {FormValidationActions} from './redux/FormValidationActions';

export interface FormValidationChildOwnProps {
    readonly id: string;
    readonly childId: string;
    selector: any;
    selectorParam: any;
    selectorValue: any;
}

const mapStateToProps = (state: IReactVaporState, ownProps: FormValidationChildOwnProps) => ({
    isValid: ownProps.selector(state, ownProps?.selectorParam),
    componentValue: ownProps.selectorValue(state, ownProps?.selectorParam),
});
const mapDispatchToProps = (dispatch: IDispatch, ownProps: FormValidationChildOwnProps) => ({
    toggleValidation: (isValid: boolean) =>
        dispatch(FormValidationActions.toggleIsValid(ownProps.id, ownProps.childId, isValid)),
    toggleIsInitialValue: (isInitialValue: boolean) =>
        dispatch(FormValidationActions.toggleIsInitialValue(ownProps.id, ownProps.childId, isInitialValue)),
});

const FormValidationChildDisconnected: React.FunctionComponent<
    ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & FormValidationChildOwnProps
> = ({isValid, componentValue, toggleIsInitialValue, children, toggleValidation}) => {
    const [initialValue, setInitialValue] = useState(undefined);

    useLayoutEffect(() => {
        if (!_.isUndefined(componentValue) && _.isUndefined(initialValue)) {
            setInitialValue(componentValue);
            toggleIsInitialValue(true);
        } else {
            toggleIsInitialValue(componentValue === initialValue);
        }
    }, [componentValue]);
    useLayoutEffect(() => {
        toggleValidation(isValid);
    }, [isValid]);
    return <>{children}</>;
};

export const FormValidationChild = connect(mapStateToProps, mapDispatchToProps)(FormValidationChildDisconnected);
