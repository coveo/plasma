import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import {ValidationState} from '../../ValidationState';
import {IValidationMessageProps, ValidationMessage, ValidationMessageClasses} from '../ValidationMessage';

describe('ValidationMessage', () => {
    const defaultProps: IValidationMessageProps = {
        id: 'wow',
    };
    const nonEmptyValidationType = '⛳';
    const nonEmptyMessage = 'ohnoitshouldbeempty';

    const getValidationState = (validation: Partial<ValidationState>) =>
        ({
            isDirty: [],
            error: [],
            warning: [],
            ...validation,
        } as ValidationState);
    const getStateForExistingComponent = (validation: Partial<ValidationState>) => ({
        validation: {
            [defaultProps.id]: getValidationState(validation),
        },
    });

    it('should render nothing if the store is empty', () => {
        const result = shallowWithState(<ValidationMessage {...defaultProps} />, {}).dive();
        expect(result.text()).toBe('');
    });

    it('should render nothing if the store does not contain errors for the given ID', () => {
        const result = shallowWithState(<ValidationMessage {...defaultProps} />, {
            validation: {
                anotherone: getValidationState({
                    error: [
                        {
                            validationType: nonEmptyValidationType,
                            value: nonEmptyMessage,
                        },
                    ],
                }),
            },
        }).dive();
        expect(result.text()).toBe('');
    });

    it('should render errors when there are errors', () => {
        const result = shallowWithState(
            <ValidationMessage {...defaultProps} />,
            getStateForExistingComponent({
                error: [
                    {
                        validationType: nonEmptyValidationType,
                        value: nonEmptyMessage,
                    },
                    {
                        validationType: 'anotherone',
                        value: 'wow',
                    },
                ],
            })
        ).dive();

        expect(result.find(`.${ValidationMessageClasses.error}`).length).toBe(2);
        expect(
            result
                .find(`.${ValidationMessageClasses.error}`)
                .first()
                .text()
        ).toContain(nonEmptyMessage);
    });

    it('should render warnings when there are warnings', () => {
        const result = shallowWithState(
            <ValidationMessage {...defaultProps} />,
            getStateForExistingComponent({
                warning: [
                    {
                        validationType: nonEmptyValidationType,
                        value: nonEmptyMessage,
                    },
                    {
                        validationType: 'anotherone',
                        value: 'bloup',
                    },
                ],
            })
        ).dive();

        expect(result.find(`.${ValidationMessageClasses.warning}`).length).toBe(2);
        expect(
            result
                .find(`.${ValidationMessageClasses.warning}`)
                .first()
                .text()
        ).toContain(nonEmptyMessage);
    });

    it('should render not render warnings if there are already errors', () => {
        const result = shallowWithState(
            <ValidationMessage {...defaultProps} />,
            getStateForExistingComponent({
                error: [
                    {
                        validationType: nonEmptyValidationType,
                        value: nonEmptyMessage,
                    },
                ],
                warning: [
                    {
                        validationType: 'somethingelse',
                        value: 'ohno',
                    },
                ],
            })
        ).dive();

        expect(result.find(`.${ValidationMessageClasses.error}`).length).toBe(1);
        expect(result.find(`.${ValidationMessageClasses.warning}`).length).toBe(0);
    });
});
