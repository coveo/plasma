import * as React from 'react';
import {InputSelectors} from '../input';
import {FormValidationChild} from './FormValidationChild';

export interface FormValidationOwnProps {
    id: string;
}

export const FormValidation: React.FunctionComponent<FormValidationOwnProps> = ({id, children}) => {
    let selector: any;
    let selectorParam: any;
    let selectorValue: any;
    const children1 = children as any;
    if (!selector && children1?.type.displayName?.indexOf('Input') !== -1) {
        selectorValue = InputSelectors.getValue;
        selector = InputSelectors.getIsValid;
        selectorParam = {id: children1?.props?.id};
    }

    return (
        <FormValidationChild
            id={id}
            childId={children1?.props?.id}
            selector={selector}
            selectorParam={selectorParam}
            selectorValue={selectorValue}
        >
            {children}
        </FormValidationChild>
    );
};
