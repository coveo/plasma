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
        let modalBody: ReactWrapper<IModalFooterProps, any>;

        beforeEach(() => {
            modalBody = mount(
                <ModalFooter />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            modalBody.unmount();
            modalBody.detach();
        });

        it('should set class when the class is specified', () => {
            const containerClass = 'mod-header-padding';
            const classes = [containerClass];
            const container = modalBody.find('div').first();
            expect(container.hasClass(containerClass)).toBe(false);

            modalBody.setProps({classes});
            modalBody.mount();
            expect(container.hasClass(containerClass)).toBe(true);
        });
    });
});
