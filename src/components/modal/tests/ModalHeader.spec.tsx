import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {IModalHeaderProps, ModalHeader} from '../ModalHeader';

describe('ModalHeader', () => {
    const id: string = 'modal';
    const title: string = 'Title';

    describe('<ModalHeader />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <ModalHeader
                        title={title}
                    />,
                );
            }).not.toThrow();
        });
    });

    describe('<ModalHeader />', () => {
        let modal: ReactWrapper<IModalHeaderProps, any>;

        beforeEach(() => {
            modal = mount(
                <ModalHeader
                    title={title}
                />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            modal.unmount();
            modal.detach();
        });

        it('should call prop onClose when modal x clicked and prop is set', () => {
            const closeSpy = jasmine.createSpy('onClose');

            modal.setProps({id: id, title: title, onClose: closeSpy});
            modal.mount();
            const input = modal.find('.small-close');
            input.simulate('click');
            expect(closeSpy.calls.count()).toBe(1);
        });

        it('should set class when the class is specified', () => {
            const headerClass = 'mod-big';
            const classes = [headerClass];
            const header = modal.find('header').first();
            expect(header.hasClass(headerClass)).toBe(false);

            modal.setProps({id, title, classes});
            modal.mount();
            expect(header.hasClass(headerClass)).toBe(true);
        });
    });
});
