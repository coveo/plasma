import {mountWithStore, shallowWithState} from '@test-utils';
import {getStoreMock} from '../../../../utils/tests/TestUtils';
import {ValidationActions} from '../../ValidationActions';
import {ValidationState} from '../../ValidationState';
import {IValidationMessageProps, ValidationMessage} from '../ValidationMessage';

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
        }) as ValidationState;
    const getStateForExistingComponent = (validation: Partial<ValidationState>) => ({
        validation: {
            [defaultProps.id]: getValidationState(validation),
        },
    });

    it('should render nothing if the store is empty', () => {
        const result = shallowWithState(<ValidationMessage {...defaultProps} />, {})
            .dive()
            .dive();

        expect(result.text()).toBe('');
    });

    it('should call the action cleanMessage on unmount to remove the message from the state', () => {
        const store = getStoreMock({});
        mountWithStore(<ValidationMessage {...defaultProps} />, store).unmount();

        expect(store.getActions()).toContainEqual(ValidationActions.cleanMessage(defaultProps.id));
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
        })
            .dive()
            .dive();

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
            }),
        )
            .dive()
            .dive();

        expect(result.find('.mod-error').length).toBe(2);
        expect(result.find('.mod-error').first().text()).toContain(nonEmptyMessage);
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
            }),
        )
            .dive()
            .dive();

        expect(result.find('.mod-warning').length).toBe(2);
        expect(result.find('.mod-warning').first().text()).toContain(nonEmptyMessage);
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
            }),
        )
            .dive()
            .dive();

        expect(result.find('.mod-error').length).toBe(1);
        expect(result.find('.mod-warning').length).toBe(0);
    });

    describe('with the onlyShowIfDirty flag', () => {
        it('should render nothing when there are errors and warnings but the component is not dirty', () => {
            const result = shallowWithState(
                <ValidationMessage {...defaultProps} onlyShowIfDirty />,
                getStateForExistingComponent({
                    isDirty: [
                        {validationType: nonEmptyValidationType, value: false},
                        {validationType: 'somethingelse', value: false},
                    ],
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
                }),
            )
                .dive()
                .dive();

            expect(result.find('.mod-error').length).toBe(0);
            expect(result.find('.mod-warning').length).toBe(0);
        });

        it('should render errors when there are errors and the component is dirty', () => {
            const result = shallowWithState(
                <ValidationMessage {...defaultProps} onlyShowIfDirty />,
                getStateForExistingComponent({
                    isDirty: [
                        {validationType: 'anotherone', value: false},
                        {validationType: nonEmptyValidationType, value: true},
                    ],
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
                }),
            )
                .dive()
                .dive();

            expect(result.find('.mod-error').length).toBe(2);
            expect(result.find('.mod-error').first().text()).toContain(nonEmptyMessage);
        });
    });
});
