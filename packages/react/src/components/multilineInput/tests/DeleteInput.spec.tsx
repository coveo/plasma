import {mount, ReactWrapper, shallow} from 'enzyme';

import {IInputProps} from '../../input/Input.js';
import {DeletableInput} from '../DeletableInput.js';

describe('DeletableInput', () => {
    it('should render without errors', () => {
        expect(() => {
            shallow(<DeletableInput />);
        }).not.toThrow();
    });

    describe('<DeletableInput />', () => {
        let deleteInput: ReactWrapper<IInputProps, any>;

        beforeEach(() => {
            deleteInput = mount(<DeletableInput />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            deleteInput?.unmount();
        });

        it('should call property onBlur when delete button is clicked and prop is specified', () => {
            const blurSpy = jest.fn();
            const deleteButton = deleteInput.find('.input-actions');

            deleteButton.simulate('click');

            expect(blurSpy).not.toHaveBeenCalled();

            deleteInput.setProps({onBlur: blurSpy});
            deleteInput.mount();

            deleteButton.simulate('click');

            expect(blurSpy).toHaveBeenCalledTimes(1);
        });
    });
});
