import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {ILabelProps, Label} from '../Label';

describe('Label', () => {
    describe('<Label />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <Label />,
                );
            }).not.toThrow();
        });
    });

    describe('<Label />', () => {
        let label: ReactWrapper<ILabelProps, any>;

        beforeEach(() => {
            label = mount(
                <Label />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            label.detach();
        });

        it('should set inner label classes when specified', () => {
            const innerLabelClass = 'valid';
            const classes = [innerLabelClass];
            expect(label.find('label').hasClass(innerLabelClass)).toBe(false);

            label.setProps({classes}).mount().update();
            expect(label.find('label').hasClass(innerLabelClass)).toBe(true);
        });

        it('should set inner label valid message when specified', () => {
            const message = 'salut';
            expect(label.find('label').prop('data-valid-message')).toBe(undefined);

            label.setProps({validMessage: message}).mount().update();
            expect(label.find('label').prop('data-valid-message')).toBe(message);
        });

        it('should set inner label invalid message when specified', () => {
            const message = 'salut';
            expect(label.find('label').prop('data-invalid-message')).toBe(undefined);

            label.setProps({invalidMessage: message}).mount().update();
            expect(label.find('label').prop('data-invalid-message')).toBe(message);
        });
    });
});
