import {mount, ReactWrapper, shallow} from 'enzyme';
import * as _ from 'underscore';
import {createTestAppContainer, removeTestAppContainer} from '../../../utils/tests/TestUtils.js';

import {ILinkSvgProps} from '../../linkSvg/LinkSvg.js';
import {Title} from '../../title.js';
import {Tooltip} from '../../tooltip/Tooltip.js';
import {IModalHeaderProps, ModalHeader} from '../ModalHeader.js';

describe('ModalHeader', () => {
    const basicProps: IModalHeaderProps = {
        id: 'modal',
        title: 'Title',
    };

    it('should render without errors', () => {
        expect(() => {
            shallow(<ModalHeader {...basicProps} />);
        }).not.toThrow();
    });

    describe('<ModalHeader />', () => {
        let modal: ReactWrapper<IModalHeaderProps, any>;

        beforeEach(() => {
            createTestAppContainer();
            modal = mount(<ModalHeader {...basicProps} />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            modal.unmount();
            removeTestAppContainer();
        });

        it('should call prop onClose when modal x clicked and prop is set and last opened is not set', () => {
            jest.useFakeTimers();
            const closeSpy = jest.fn();

            modal.setProps(_.extend({}, basicProps, {onClose: closeSpy}));
            modal.mount();
            jest.advanceTimersByTime(5);

            const input = modal.find('.small-close');
            input.simulate('click');

            expect(closeSpy.mock.calls.length).toBe(1);
            jest.clearAllTimers();
        });

        it('should call prop onClose when modal x clicked and modal is last opened', () => {
            jest.useFakeTimers();
            const closeSpy = jest.fn();

            modal.setProps(_.extend({}, basicProps, {lastOpened: true, onClose: closeSpy}));
            modal.mount();
            jest.advanceTimersByTime(5);

            const input = modal.find('.small-close');
            input.simulate('click');

            expect(closeSpy.mock.calls.length).toBe(1);
            jest.clearAllTimers();
        });

        it('should not call prop onClose when modal x clicked and modal is not last opened', () => {
            const closeSpy = jest.fn();

            modal.setProps(_.extend({}, basicProps, {lastOpened: false, onClose: closeSpy}));
            modal.mount();
            const input = modal.find('.small-close');
            input.simulate('click');

            expect(closeSpy.mock.calls.length).toBe(0);
        });

        it('should set class when the class is specified', () => {
            const headerClass = 'mod-big';
            const classes = [headerClass];

            expect(modal.find('header').first().html()).not.toContain(headerClass);

            modal.setProps(_.extend({}, basicProps, {classes}));
            modal.mount();

            expect(modal.find('header').first().html()).toContain(headerClass);
        });

        it('should not have a tooltip, anchor, and svg for doclink by default', () => {
            expect(modal.find(Tooltip).exists()).toBe(false);
        });

        it('should have a tooltip, anchor, and svg for doclink if the prop is passed', () => {
            const docLink: ILinkSvgProps = {url: 'testomax', tooltip: {title: 'doclinktooltip'}};
            modal.setProps({docLink});

            expect(modal.find(Title).exists()).toBe(true);
            expect(modal.find(Title).props().documentationLink).toBe(docLink);
        });
    });
});
