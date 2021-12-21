import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {IModalBodyProps, ModalBody} from '../ModalBody';

describe('ModalBody', () => {
    it('should render without errors', () => {
        expect(() => {
            shallow(<ModalBody />);
        }).not.toThrow();
    });

    describe('<ModalBody />', () => {
        let modalBody: ReactWrapper<IModalBodyProps, any>;

        beforeEach(() => {
            modalBody = mount(<ModalBody />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            modalBody?.unmount();
        });

        it('should set class when the class is specified', () => {
            const containerClass = 'mod-header-padding';
            const classes = [containerClass];

            expect(modalBody.find('div').first().html()).not.toContain(containerClass);

            modalBody.setProps({classes});
            modalBody.mount();

            expect(modalBody.find('div').first().html()).toContain(containerClass);
        });
    });
});
