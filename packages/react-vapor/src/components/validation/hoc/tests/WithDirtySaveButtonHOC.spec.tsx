import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';
import {getStoreMock} from '../../../../utils/tests/TestUtils';
import {Button, IButtonProps} from '../../../button';
import {IWithDirtySaveButtonHOCProps, withDirtySaveButtonHOC} from '../WithDirtySaveButtonHOC';

describe('WithDirtySaveButtonHOC', () => {
    const ButtonWithHOC = withDirtySaveButtonHOC(Button);
    const buttonValidationId = 'someid';

    let store: ReturnType<typeof getStoreMock>;

    const BUTTON_PROPS: IButtonProps & IWithDirtySaveButtonHOCProps = {
        enabled: true,
        validationIds: [buttonValidationId],
    };

    beforeEach(() => {
        store = getStoreMock({
            validation: {},
        });
    });

    afterEach(() => {
        store.clearActions();
    });

    it('should render without error', () => {
        expect(() => shallowWithStore(<ButtonWithHOC {...BUTTON_PROPS} />, store)).not.toThrow();
    });

    it('should mount and unmount/detach without error', () => {
        expect(() => {
            const buttonWrapper = shallowWithStore(<ButtonWithHOC {...BUTTON_PROPS} />, store);
            buttonWrapper.unmount();
        }).not.toThrow();
    });

    describe('<ButtonWithHOC />', () => {
        const storeWithErrorsAndDirty: ReturnType<typeof getStoreMock> = getStoreMock({
            validation: {
                [buttonValidationId]: {
                    error: [{validationType: 'something', value: 'bad'}],
                    warning: [],
                    isDirty: [{validationType: 'something', value: true}],
                },
            },
        });
        const storeWithWarningsAndDirty: ReturnType<typeof getStoreMock> = getStoreMock({
            validation: {
                [buttonValidationId]: {
                    error: [],
                    warning: [{validationType: 'something', value: 'slightly bad'}],
                    isDirty: [{validationType: 'something', value: true}],
                },
            },
        });
        const storeWithDirty = getStoreMock({
            validation: {
                [buttonValidationId]: {
                    error: [],
                    warning: [],
                    isDirty: [{validationType: 'dirty', value: true}],
                },
            },
        });
        const shallowButton = (props: Partial<typeof BUTTON_PROPS>, storeToUse: ReturnType<typeof getStoreMock>) =>
            shallowWithStore<typeof ButtonWithHOC>(<ButtonWithHOC {...BUTTON_PROPS} {...props} />, storeToUse).dive();

        beforeEach(() => {
            storeWithErrorsAndDirty.clearActions();
            storeWithWarningsAndDirty.clearActions();
            storeWithDirty.clearActions();
        });

        describe('button enabled prop', () => {
            it('should be enabled when the component is dirty without errors', () => {
                const buttonWrapper = shallowButton({}, storeWithDirty);

                const enabled = buttonWrapper.find(Button).prop('enabled');

                expect(enabled).toBe(true);
            });

            it('should be disabled when the enabled prop is passed down', () => {
                const buttonWrapper = shallowButton({enabled: false}, storeWithDirty);

                const enabled = buttonWrapper.find(Button).prop('enabled');

                expect(enabled).toBe(false);
            });

            it('should be disabled when no component is dirty', () => {
                const buttonWrapper = shallowButton({}, getStoreMock());

                const enabled = buttonWrapper.find(Button).prop('enabled');

                expect(enabled).toBe(false);
            });

            it('should be enabled when no component is dirty but the HOC is configured to skip the dirty check', () => {
                const buttonWrapper = shallowButton({skipDirty: true}, getStoreMock());

                const enabled = buttonWrapper.find(Button).prop('enabled');

                expect(enabled).toBe(true);
            });

            it('should be enabled when the component is dirty with warnings', () => {
                const buttonWrapper = shallowButton({}, storeWithWarningsAndDirty);

                const enabled = buttonWrapper.find(Button).prop('enabled');

                expect(enabled).toBe(true);
            });

            it('should be disabled when there are errors', () => {
                const buttonWrapper = shallowButton({}, storeWithErrorsAndDirty);

                const enabled = buttonWrapper.find(Button).prop('enabled');

                expect(enabled).toBe(false);
            });
        });

        describe('button tooltip prop', () => {
            it('should change the tooltip to the error message formatter', () => {
                const message = 'this is bad';
                const buttonWrapper = shallowButton(
                    {
                        errorMessage: () => message,
                    },
                    storeWithErrorsAndDirty
                );

                const tooltip = buttonWrapper.find(Button).prop('tooltip');

                expect(tooltip).toEqual(message);
            });

            it('should change the tooltip to the warning message formatter', () => {
                const message = 'this is slightly bad';
                const buttonWrapper = shallowButton(
                    {
                        warningMessage: () => message,
                    },
                    storeWithWarningsAndDirty
                );

                const tooltip = buttonWrapper.find(Button).prop('tooltip');

                expect(tooltip).toEqual(message);
            });

            it('should change the tooltip to the dirty message formatter', () => {
                const message = 'you must change stuff';
                const buttonWrapper = shallowButton(
                    {
                        dirtyMessage: () => message,
                    },
                    getStoreMock()
                );

                const tooltip = buttonWrapper.find(Button).prop('tooltip');

                expect(tooltip).toEqual(message);
            });

            it('should not change the tooltip when there is a warning but the component is not dirty', () => {
                const storeWithOnlyWarning = getStoreMock({
                    validation: {
                        [buttonValidationId]: {
                            error: [],
                            warning: [{validationType: 'something', value: 'slightly bad'}],
                            isDirty: [],
                        },
                    },
                });
                const message = 'this is slightly bad';
                const buttonWrapper = shallowButton(
                    {
                        warningMessage: () => message,
                    },
                    storeWithOnlyWarning
                );

                const tooltip = buttonWrapper.find(Button).prop('tooltip');

                expect(tooltip).not.toEqual(message);
            });
        });
    });
});
