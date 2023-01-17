import {ShallowWrapper} from 'enzyme';
import {shallowWithStore} from '@test-utils';

import {getStoreMock} from '../../../../utils/tests/TestUtils.js';
import {ICheckboxOwnProps} from '../../../checkbox/Checkbox.js';
import {CheckboxConnected} from '../../../checkbox/CheckboxConnected.js';
import {IInputOwnProps} from '../../../input.js';
import {ValidationActions} from '../../ValidationActions.js';
import {ValidationTypes} from '../../ValidationTypes.js';
import {withDirtyCheckboxHOC} from '../WithDirtyCheckboxHOC.js';

describe('WithDirtyCheckboxHOC', () => {
    const CheckboxWithHOC = withDirtyCheckboxHOC(CheckboxConnected);

    let store: ReturnType<typeof getStoreMock>;
    let checkboxWrapper: ShallowWrapper<ICheckboxOwnProps & IInputOwnProps>;

    const CHECKBOX_PROPS: ICheckboxOwnProps & IInputOwnProps = {
        id: '🥔',
        title: 'ok',
    };

    const triggerUncheck = () => checkboxWrapper.prop('handleOnClick')(true);
    const triggerCheck = () => checkboxWrapper.prop('handleOnClick')(false);

    beforeEach(() => {
        store = getStoreMock({
            validation: {},
        });
    });

    afterEach(() => {
        store.clearActions();
    });

    describe('<CheckboxWithHOC />', () => {
        it('should render without error', () => {
            expect(() => shallowWithStore(<CheckboxWithHOC {...CHECKBOX_PROPS} />, store)).not.toThrow();
        });

        it('should mount and unmount/detach without error', () => {
            expect(() => {
                checkboxWrapper = shallowWithStore(<CheckboxWithHOC {...CHECKBOX_PROPS} />, store);
                checkboxWrapper.unmount();
            }).not.toThrow();
        });

        describe('after mount', () => {
            let handleOnClickSpy: jest.Mock;

            const shallowCheckbox = (props?: Partial<ICheckboxOwnProps & IInputOwnProps>) =>
                shallowWithStore<typeof CheckboxWithHOC>(
                    <CheckboxWithHOC {...CHECKBOX_PROPS} {...props} handleOnClick={handleOnClickSpy} />,
                    store
                ).dive();

            beforeEach(() => {
                handleOnClickSpy = jest.fn();
                checkboxWrapper = shallowCheckbox();
            });

            it('should dispatch a set dirty action with true when the value is different from the initial value (undefined, evaluated as false)', () => {
                triggerCheck();

                expect(store.getActions()).toContainEqual(
                    ValidationActions.setDirty(CHECKBOX_PROPS.id, true, ValidationTypes.wrongInitialValue)
                );
            });

            it('should dispatch a set dirty action with false when the value is the same as the initial value (undefined, evaluated as false)', () => {
                triggerUncheck();

                expect(store.getActions()).toContainEqual(
                    ValidationActions.setDirty(CHECKBOX_PROPS.id, false, ValidationTypes.wrongInitialValue)
                );
            });

            it('should dispatch a set dirty action with true when the value is different from the initial value (true)', () => {
                checkboxWrapper = shallowCheckbox({
                    defaultChecked: true,
                });
                triggerUncheck();

                expect(store.getActions()).toContainEqual(
                    ValidationActions.setDirty(CHECKBOX_PROPS.id, true, ValidationTypes.wrongInitialValue)
                );
            });

            it('should dispatch a set dirty action with false when the value is the same as the initial value (true)', () => {
                checkboxWrapper = shallowCheckbox({
                    defaultChecked: true,
                });
                triggerCheck();

                expect(store.getActions()).toContainEqual(
                    ValidationActions.setDirty(CHECKBOX_PROPS.id, false, ValidationTypes.wrongInitialValue)
                );
            });

            it('should call the original handleOnClick function', () => {
                triggerUncheck();

                expect(handleOnClickSpy).toHaveBeenCalledWith(true);
            });
        });
    });
});
