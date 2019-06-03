import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {IModalFooterProps, ModalFooter} from '../ModalFooter';

describe('ModalFooter', () => {

    describe('<ModalFooter />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <ModalFooter />,
                );
            }).not.toThrow();
        });
    });

    describe('<ModalFooter />', () => {
        let modalFooter: ReactWrapper<IModalFooterProps, any>;

        beforeEach(() => {
            modalFooter = mount(
                <ModalFooter />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            modalFooter.detach();
        });

        it('should set class when the class is specified', () => {
            const containerClass = 'mod-header-padding';
            const classes = [containerClass];
            expect(modalFooter.find('div').first().html()).not.toContain(containerClass);

            modalFooter.setProps({classes});
            modalFooter.mount();
            expect(modalFooter.find('div').first().html()).toContain(containerClass);
        });
    });
});
