import {ValidationActionsTypes} from '../ValidationActions';
import {validationReducer} from '../ValidationReducer';

describe('ValidationReducer', () => {
    const componentId = '🐟';
    const nonEmptyValidationType = '🕳';
    const aMessage = 'ohno';

    it('should ignore a random action type', () => {
        const newState = validationReducer(
            {},
            {type: 'sorandom', payload: {id: 'jenkins', validationType: 'wow', value: 'bloup'}}
        );

        expect(newState).toEqual({});
    });

    describe('updateError', () => {
        it('should create the validation state of a new component', () => {
            const newState = validationReducer(
                {},
                {
                    type: ValidationActionsTypes.updateError,
                    payload: {
                        id: componentId,
                        validationType: nonEmptyValidationType,
                        value: aMessage,
                    },
                }
            );

            expect(newState[componentId].error).toContain({
                validationType: nonEmptyValidationType,
                value: aMessage,
            });
        });

        it('should append a new validationType to an existing component', () => {
            const newState = validationReducer(
                {
                    [componentId]: {
                        error: [
                            {
                                validationType: 'wow',
                                value: 'ok',
                            },
                        ],
                        warning: [],
                        isDirty: [],
                    },
                },
                {
                    type: ValidationActionsTypes.updateError,
                    payload: {
                        id: componentId,
                        validationType: nonEmptyValidationType,
                        value: aMessage,
                    },
                }
            );

            expect(newState[componentId].error.length).toBe(2);
        });

        it('should update an existing validationType', () => {
            const newState = validationReducer(
                {
                    [componentId]: {
                        error: [
                            {
                                validationType: nonEmptyValidationType,
                                value: 'oldvalue',
                            },
                        ],
                        warning: [],
                        isDirty: [],
                    },
                },
                {
                    type: ValidationActionsTypes.updateError,
                    payload: {
                        id: componentId,
                        validationType: nonEmptyValidationType,
                        value: aMessage,
                    },
                }
            );

            expect(newState[componentId].error[0]).toEqual({
                validationType: nonEmptyValidationType,
                value: aMessage,
            });
        });
    });

    describe('updateWarning', () => {
        it('should create the validation state of a new component', () => {
            const newState = validationReducer(
                {},
                {
                    type: ValidationActionsTypes.updateWarning,
                    payload: {
                        id: componentId,
                        validationType: nonEmptyValidationType,
                        value: aMessage,
                    },
                }
            );

            expect(newState[componentId].warning).toContain({
                validationType: nonEmptyValidationType,
                value: aMessage,
            });
        });

        it('should append a new validationType to an existing component', () => {
            const newState = validationReducer(
                {
                    [componentId]: {
                        error: [],
                        warning: [
                            {
                                validationType: 'wow',
                                value: 'ok',
                            },
                        ],
                        isDirty: [],
                    },
                },
                {
                    type: ValidationActionsTypes.updateWarning,
                    payload: {
                        id: componentId,
                        validationType: nonEmptyValidationType,
                        value: aMessage,
                    },
                }
            );

            expect(newState[componentId].warning.length).toBe(2);
        });

        it('should update an existing validationType', () => {
            const newState = validationReducer(
                {
                    [componentId]: {
                        error: [,],
                        warning: [
                            {
                                validationType: nonEmptyValidationType,
                                value: 'oldvalue',
                            },
                        ],
                        isDirty: [],
                    },
                },
                {
                    type: ValidationActionsTypes.updateWarning,
                    payload: {
                        id: componentId,
                        validationType: nonEmptyValidationType,
                        value: aMessage,
                    },
                }
            );

            expect(newState[componentId].warning[0]).toEqual({
                validationType: nonEmptyValidationType,
                value: aMessage,
            });
        });
    });

    describe('updateWarning', () => {
        it('should create the validation state of a new component', () => {
            const newState = validationReducer(
                {},
                {
                    type: ValidationActionsTypes.updateDirty,
                    payload: {
                        id: componentId,
                        validationType: nonEmptyValidationType,
                        value: true,
                    },
                }
            );

            expect(newState[componentId].isDirty).toContain({
                validationType: nonEmptyValidationType,
                value: true,
            });
        });

        it('should append a new validationType to an existing component', () => {
            const newState = validationReducer(
                {
                    [componentId]: {
                        error: [],
                        warning: [],
                        isDirty: [
                            {
                                validationType: 'wow',
                                value: true,
                            },
                        ],
                    },
                },
                {
                    type: ValidationActionsTypes.updateDirty,
                    payload: {
                        id: componentId,
                        validationType: nonEmptyValidationType,
                        value: false,
                    },
                }
            );

            expect(newState[componentId].isDirty.length).toBe(2);
        });

        it('should update an existing validationType', () => {
            const newState = validationReducer(
                {
                    [componentId]: {
                        error: [,],
                        warning: [],
                        isDirty: [
                            {
                                validationType: nonEmptyValidationType,
                                value: false,
                            },
                        ],
                    },
                },
                {
                    type: ValidationActionsTypes.updateDirty,
                    payload: {
                        id: componentId,
                        validationType: nonEmptyValidationType,
                        value: true,
                    },
                }
            );

            expect(newState[componentId].isDirty[0]).toEqual({
                validationType: nonEmptyValidationType,
                value: true,
            });
        });
    });
});
