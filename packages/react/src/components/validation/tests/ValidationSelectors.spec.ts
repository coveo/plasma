import {ValidationSelectors} from '../ValidationSelectors';
import {ValidationState} from '../ValidationState';

describe('ValidationSelectors', () => {
    const existingComponentId = '🥝';

    const getValidationState = (validation: Partial<ValidationState>) =>
        ({
            isDirty: [],
            error: [],
            warning: [],
            ...validation,
        } as ValidationState);
    const getStateForExistingComponent = (validation: Partial<ValidationState>) => ({
        validation: {
            [existingComponentId]: getValidationState(validation),
        },
    });

    describe('getErrors', () => {
        it('should return an empty array if the state is empty', () => {
            const errors = ValidationSelectors.getErrors(existingComponentId)({
                validation: {},
            });

            expect(errors.length).toBe(0);
        });

        it('should return the error for the given component', () => {
            const validationType = 'something';
            const errorValue = '🔴';
            const result = ValidationSelectors.getErrors(existingComponentId)(
                getStateForExistingComponent({
                    error: [
                        {
                            validationType,
                            value: errorValue,
                        },
                    ],
                })
            );

            expect(result.length).toBe(1);
            expect(result[0]).toEqual({
                validationType,
                value: errorValue,
            });
        });

        it('should not return errors that have been cleared for the given component', () => {
            const validationType = 'something';
            const result = ValidationSelectors.getErrors(existingComponentId)(
                getStateForExistingComponent({
                    error: [
                        {
                            validationType,
                            value: '',
                        },
                    ],
                })
            );

            expect(result.length).toBe(0);
        });
    });

    describe('getWarnings', () => {
        it('should return an empty array if the state is empty', () => {
            const result = ValidationSelectors.getWarnings(existingComponentId)({
                validation: {},
            });

            expect(result.length).toBe(0);
        });

        it('should return the warning', () => {
            const validationType = 'something';
            const warningValue = '🟡';
            const result = ValidationSelectors.getWarnings(existingComponentId)(
                getStateForExistingComponent({
                    warning: [
                        {
                            validationType,
                            value: warningValue,
                        },
                    ],
                })
            );

            expect(result.length).toBe(1);
            expect(result[0]).toEqual({
                validationType,
                value: warningValue,
            });
        });

        it('should not return warnings that have been cleared', () => {
            const validationType = 'something';
            const result = ValidationSelectors.getErrors(existingComponentId)(
                getStateForExistingComponent({
                    warning: [
                        {
                            validationType,
                            value: '',
                        },
                    ],
                })
            );

            expect(result.length).toBe(0);
        });
    });

    describe('getIsDirty', () => {
        it('should return an empty array if the state is empty', () => {
            const result = ValidationSelectors.getIsDirty(existingComponentId)({
                validation: {},
            });

            expect(result.length).toBe(0);
        });

        it('should return the registered dirty component', () => {
            const validationType = 'something';
            const result = ValidationSelectors.getIsDirty(existingComponentId)(
                getStateForExistingComponent({
                    isDirty: [
                        {
                            validationType,
                            value: true,
                        },
                    ],
                })
            );

            expect(result.length).toBe(1);
            expect(result[0]).toEqual({
                validationType,
                value: true,
            });
        });

        it('should return the registered non-dirty component', () => {
            const validationType = 'something';
            const result = ValidationSelectors.getIsDirty(existingComponentId)(
                getStateForExistingComponent({
                    isDirty: [
                        {
                            validationType,
                            value: false,
                        },
                    ],
                })
            );

            expect(result.length).toBe(1);
            expect(result[0]).toEqual({
                validationType,
                value: false,
            });
        });
    });

    describe('getAnyError', () => {
        it('should return an empty array if the state is empty', () => {
            const result = ValidationSelectors.getAnyError([existingComponentId])({
                validation: {},
            });

            expect(result.length).toBe(0);
        });

        it('should return only error states for the given ids', () => {
            const anotherComponentId = '🌷';
            const state = {
                validation: {
                    [existingComponentId]: getValidationState({
                        error: [
                            {
                                validationType: 'some-input',
                                value: 'someerror',
                            },
                        ],
                    }),
                    [anotherComponentId]: getValidationState({
                        error: [
                            {
                                validationType: 'not-empty',
                                value: 'hey this should not be empty',
                            },
                            {
                                validationType: 'thisvalidationsucceeded',
                                value: '',
                            },
                        ],
                    }),
                },
            };
            const result = ValidationSelectors.getAnyError([existingComponentId, anotherComponentId])(state);

            expect(result.length).toBe(2);
            expect(result).toContain(state.validation[existingComponentId].error[0]);
            expect(result).toContain(state.validation[anotherComponentId].error[0]);
            expect(result).not.toContain(state.validation[anotherComponentId].error[1]);
        });
    });

    describe('getAnyWarning', () => {
        it('should return an empty array if the state is empty', () => {
            const result = ValidationSelectors.getAnyWarning([existingComponentId])({
                validation: {},
            });

            expect(result.length).toBe(0);
        });

        it('should return only error states for the given ids', () => {
            const anotherComponentId = '🌷';
            const state = {
                validation: {
                    [existingComponentId]: getValidationState({
                        warning: [
                            {
                                validationType: 'some-input',
                                value: 'somewarning',
                            },
                        ],
                    }),
                    [anotherComponentId]: getValidationState({
                        warning: [
                            {
                                validationType: 'not-empty',
                                value: 'be careful',
                            },
                            {
                                validationType: 'thisvalidationsucceeded',
                                value: '',
                            },
                        ],
                    }),
                },
            };
            const result = ValidationSelectors.getAnyWarning([existingComponentId, anotherComponentId])(state);

            expect(result.length).toBe(2);
            expect(result).toContain(state.validation[existingComponentId].warning[0]);
            expect(result).toContain(state.validation[anotherComponentId].warning[0]);
            expect(result).not.toContain(state.validation[anotherComponentId].warning[1]);
        });
    });

    describe('getAnyDirty', () => {
        it('should return an empty array if the state is empty', () => {
            const result = ValidationSelectors.getAnyDirty([existingComponentId])({
                validation: {},
            });

            expect(result.length).toBe(0);
        });

        it('should return only dirty states for the given ids', () => {
            const anotherComponentId = '🌷';
            const state = {
                validation: {
                    [existingComponentId]: getValidationState({
                        isDirty: [
                            {
                                validationType: 'some-input',
                                value: true,
                            },
                        ],
                    }),
                    [anotherComponentId]: getValidationState({
                        isDirty: [
                            {
                                validationType: 'not-empty',
                                value: true,
                            },
                            {
                                validationType: 'thisisnotdirty',
                                value: false,
                            },
                        ],
                    }),
                },
            };
            const result = ValidationSelectors.getAnyDirty([existingComponentId, anotherComponentId])(state);

            expect(result.length).toBe(2);
            expect(result).toContain(state.validation[existingComponentId].isDirty[0]);
            expect(result).toContain(state.validation[anotherComponentId].isDirty[0]);
            expect(result).not.toContain(state.validation[anotherComponentId].isDirty[1]);
        });
    });
});
