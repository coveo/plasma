import {shallowWithStore} from '@test-utils';
import {ShallowWrapper} from 'enzyme';

import {getStoreMock} from '../../../../utils/tests/TestUtils';
import {IInputOwnProps, InputConnected} from '../../../input/Input';
import {ValidationActions} from '../../ValidationActions';
import {ValidationTypes} from '../../ValidationTypes';
import {withDirtyInputHOC} from '../WithDirtyInputHOC';

describe('WithDirtyInputHOC', () => {
    const InputWithHOC = withDirtyInputHOC(InputConnected);

    let store: ReturnType<typeof getStoreMock>;
    let inputWrapper: ShallowWrapper<IInputOwnProps>;

    const INPUT_PROPS: IInputOwnProps = {
        id: '🥔',
        title: 'ok',
        defaultValue: '🧀',
    };

    beforeEach(() => {
        store = getStoreMock({
            validation: {},
        });
    });

    afterEach(() => {
        store.clearActions();
    });

    describe('<InputWithHOC />', () => {
        it('should render without error', () => {
            expect(() =>
                shallowWithStore(<InputWithHOC {...INPUT_PROPS} />, store)
                    .dive()
                    .dive(),
            ).not.toThrow();
        });

        it('should mount and unmount/detach without error', () => {
            expect(() => {
                inputWrapper = shallowWithStore(<InputWithHOC {...INPUT_PROPS} />, store)
                    .dive()
                    .dive();
                inputWrapper.unmount();
            }).not.toThrow();
        });

        describe('after mount', () => {
            const getStoreWithDirtyInput = (isDirty: boolean) =>
                getStoreMock({
                    validation: {
                        [INPUT_PROPS.id]: {
                            error: [],
                            warning: [],
                            isDirty: [
                                {
                                    validationType: ValidationTypes.wrongInitialValue,
                                    value: isDirty,
                                },
                            ],
                        },
                    },
                });

            it('should dispatch a set dirty action with true when the input was not dirty and the value is different from the initial value', () => {
                store = getStoreWithDirtyInput(false);
                inputWrapper = shallowWithStore(<InputWithHOC {...INPUT_PROPS} />, store)
                    .dive()
                    .dive();

                inputWrapper.prop('validate')('🍕');

                expect(store.getActions()).toContainEqual(
                    ValidationActions.setDirty(INPUT_PROPS.id, true, ValidationTypes.wrongInitialValue),
                );
            });

            it('should dispatch a set dirty action with false when the input was dirty and the value is the same as the initial value', () => {
                store = getStoreWithDirtyInput(true);
                inputWrapper = shallowWithStore(<InputWithHOC {...INPUT_PROPS} />, store)
                    .dive()
                    .dive();

                inputWrapper.prop('validate')(INPUT_PROPS.defaultValue);

                expect(store.getActions()).toContainEqual(
                    ValidationActions.setDirty(INPUT_PROPS.id, false, ValidationTypes.wrongInitialValue),
                );
            });

            it('should not dispatch a set dirty action when the input was not dirty and the value is the same as the initial value', () => {
                store = getStoreWithDirtyInput(false);
                inputWrapper = shallowWithStore(<InputWithHOC {...INPUT_PROPS} />, store)
                    .dive()
                    .dive();

                inputWrapper.prop('validate')(INPUT_PROPS.defaultValue);

                expect(store.getActions().length).toBe(0);
            });

            it('should not dispatch a set dirty action when the input was dirty and the value is different from the initial value', () => {
                store = getStoreWithDirtyInput(true);
                inputWrapper = shallowWithStore(<InputWithHOC {...INPUT_PROPS} />, store)
                    .dive()
                    .dive();

                inputWrapper.prop('validate')('🍕');

                expect(store.getActions().length).toBe(0);
            });

            it('should call the original validate function and return the same value', () => {
                const validateSpy = jest.fn().mockReturnValue(true);
                inputWrapper = shallowWithStore<typeof InputWithHOC>(
                    <InputWithHOC {...INPUT_PROPS} validate={validateSpy} />,
                    store,
                )
                    .dive()
                    .dive();

                const result = inputWrapper.prop('validate')('🧀');

                expect(validateSpy).toHaveBeenCalledWith('🧀');
                expect(result).toBe(true);
            });
        });
    });
});
