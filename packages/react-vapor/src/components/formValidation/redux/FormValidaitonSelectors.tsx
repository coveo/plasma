import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {FormValidationValueState} from './FormValidationReducer';

const isValid = (state: IReactVaporState, id: string) =>
    _.chain(state.formValidation?.[id])
        .values()
        .every((valueState: FormValidationValueState) => valueState?.isValid)
        .value();

const isAllInitialValue = (state: IReactVaporState, id: string) =>
    _.chain(state.formValidation?.[id])
        .values()
        .every((valueState: FormValidationValueState) => valueState?.isInitialValue)
        .value();

export const FormValidationSelectors = {
    isValid,
    isAllInitialValue,
};
