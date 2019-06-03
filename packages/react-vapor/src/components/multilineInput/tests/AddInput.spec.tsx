import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {IInputProps} from '../../input/Input';
import {AddInput} from '../AddInput';

describe('AddInput', () => {

    describe('<AddInput />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <AddInput />,
                );
            }).not.toThrow();
        });
    });

    describe('<AddInput />', () => {
        let addInput: ReactWrapper<IInputProps, any>;

        beforeEach(() => {
            addInput = mount(
                <AddInput />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            addInput.detach();
        });

        it('should call property onBlur when input loses focus and prop is specified', () => {
            const blurSpy = jasmine.createSpy('onBlur');
            const innerInput = addInput.find('input');

            innerInput.simulate('blur');
            expect(blurSpy).not.toHaveBeenCalled();

            addInput.setProps({onBlur: blurSpy}).mount();

            innerInput.simulate('blur');
            expect(blurSpy).toHaveBeenCalledTimes(1);
        });

        it('should call property onBlur when inner input has focus and Enter key is released', () => {
            const blurSpy = jasmine.createSpy('onBlur');
            const innerInput = addInput.find('input');

            innerInput.simulate('keyUp', {
                key: 'Enter',
            });
            expect(blurSpy).not.toHaveBeenCalled();

            addInput.setProps({onBlur: blurSpy}).mount();

            innerInput.simulate('keyUp', {
                key: 'Enter',
            });
            expect(blurSpy).toHaveBeenCalledTimes(1);
        });

        it('should call property onBlur when inner add button is clicked', () => {
            const blurSpy = jasmine.createSpy('onBlur');
            const innerAddInputButton = addInput.find('.input-actions');

            innerAddInputButton.simulate('click');
            expect(blurSpy).not.toHaveBeenCalled();

            addInput.setProps({onBlur: blurSpy}).mount();

            innerAddInputButton.simulate('click');
            expect(blurSpy).toHaveBeenCalledTimes(1);
        });
    });
});
