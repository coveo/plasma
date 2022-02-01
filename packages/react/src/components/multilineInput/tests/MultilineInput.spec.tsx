import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {Store} from 'redux';

import {PlasmaState} from '../../../ReactVaporState';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {ILabelProps} from '../../input';
import {validateInputValue} from '../../input/InputActions';
import {AddInput} from '../AddInput';
import {DeletableInput} from '../DeletableInput';
import {IMultilineInputProps, IMultilineInputValue, MultilineInput} from '../MultilineInput';

describe('MultilineInput', () => {
    it('should render without errors', () => {
        expect(() => {
            shallow(<MultilineInput />);
        }).not.toThrow();
    });

    describe('<MultilineInput />', () => {
        let store: Store<PlasmaState>;

        let multilineInput: ReactWrapper<IMultilineInputProps, any>;
        const valueId = 'an-id';
        const valueValue = 'a-value';
        const multilineInputValue: IMultilineInputValue = {
            id: valueId,
            value: valueValue,
        };
        const aNewValue = 'a-new-value';

        beforeEach(() => {
            store = TestUtils.buildStore();
            multilineInput = mount(<MultilineInput />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            multilineInput?.unmount();
        });

        it('should render an AddInput when no values are specified', () => {
            const innerAddInput = multilineInput.find('AddInput');

            expect(innerAddInput.length).toBe(1);
        });

        it('should be able to render an invalid message if the input is not valid', () => {
            store.dispatch(validateInputValue(valueId, false));

            const invalidMessage = '📦';
            const inputLabel = shallow(<MultilineInput invalidMessage={invalidMessage} />)
                .find('AddInput')
                .prop('labelProps') as ILabelProps;

            expect(inputLabel.invalidMessage).toBe(invalidMessage);
        });

        it('should render no DeletableInput when no values are specified.', () => {
            const innerDeleteInput = multilineInput.find(DeletableInput);

            expect(innerDeleteInput.length).toBe(0);
        });

        it('should render one DeletableInput when one value is specified', () => {
            multilineInput.setProps({values: [multilineInputValue]});
            multilineInput.mount();
            const innerDeleteInput = multilineInput.find(DeletableInput);

            expect(innerDeleteInput.length).toBe(1);
        });

        it('should call prop onChange with new value when add input changes', () => {
            const changeSpy = jest.fn();
            multilineInput.setProps({onChange: changeSpy, values: []});
            multilineInput.mount();

            const innerAddInput = multilineInput.find(AddInput);

            expect(innerAddInput.length).toBe(1);

            innerAddInput.props().onBlur(aNewValue);

            expect(changeSpy).toHaveBeenCalledTimes(1);
            expect(changeSpy).toHaveBeenCalledWith([expect.objectContaining({value: aNewValue})]);
        });

        it('should call prop onChange with updated value when delete input changes', () => {
            const changeSpy = jest.fn();
            multilineInput.setProps({onChange: changeSpy, values: [multilineInputValue]});
            multilineInput.mount();

            const innerDeleteInput = multilineInput.find(DeletableInput);

            expect(innerDeleteInput.length).toBe(1);

            innerDeleteInput.props().onBlur(aNewValue);

            expect(changeSpy).toHaveBeenCalledTimes(1);
            expect(changeSpy).toHaveBeenCalledWith([{...multilineInputValue, value: aNewValue}]);
        });

        it('should call prop onChange with removed value when delete input changes for something empty', () => {
            const changeSpy = jest.fn();
            multilineInput.setProps({onChange: changeSpy, values: [multilineInputValue]});
            multilineInput.mount();

            const innerDeleteInput = multilineInput.find(DeletableInput);

            expect(innerDeleteInput.length).toBe(1);

            innerDeleteInput.props().onBlur('');

            expect(changeSpy).toHaveBeenCalledTimes(1);
        });
    });
});
