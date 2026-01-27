import {FunctionComponent, PropsWithChildren} from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {ISingleValidation, ValidationSelectors} from '../validation';
import {ModalWizard, ModalWizardProps} from './ModalWizard';

export interface ModalWithValdiationsProps extends Omit<ModalWizardProps, 'validateStep' | 'isDirty'> {
    validationIdsByStep?: string[][];
}

const mapStateToProps = (state: PlasmaState, {validationIdsByStep}: ModalWithValdiationsProps) => ({
    isDirty: ValidationSelectors.isDirty(_.flatten(validationIdsByStep))(state),
    isInError: (stepNumber: number): boolean =>
        ValidationSelectors.isInError(validationIdsByStep[stepNumber] ?? [])(state),
    errors: (stepNumber: number) => ValidationSelectors.getAnyError(validationIdsByStep[stepNumber] ?? [])(state),
    warnings: (stepNumber: number) => ValidationSelectors.getAnyError(validationIdsByStep[stepNumber] ?? [])(state),
});

const extractMessages = (validations: Array<ISingleValidation<string>>) =>
    validations?.map((error) => error.value).join(' ') ?? '';

const ModalWizardWithValidationsDisconnected: FunctionComponent<
    PropsWithChildren<ModalWithValdiationsProps & ReturnType<typeof mapStateToProps>>
> = ({validationIdsByStep = [], isDirty, isInError, errors, warnings, ...modalWizardProps}) => {
    const validateStep = (currentStep: number): {isValid: boolean; message?: string} => ({
        isValid: !isInError(currentStep),
        message: isInError ? extractMessages(errors(currentStep)) : extractMessages(warnings(currentStep)),
    });

    return <ModalWizard validateStep={validateStep} isDirty={isDirty} {...modalWizardProps} />;
};

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export const ModalWizardWithValidations = connect<
    ReturnType<typeof mapStateToProps>,
    null,
    PropsWithChildren<ModalWithValdiationsProps>
>(mapStateToProps)(ModalWizardWithValidationsDisconnected);
