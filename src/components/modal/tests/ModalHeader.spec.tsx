import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {Svg} from '../../svg/Svg';
import {Tooltip} from '../../tooltip/Tooltip';
import {IModalHeaderProps, ModalHeader} from '../ModalHeader';

describe('ModalHeader', () => {
    const basicProps: IModalHeaderProps = {
        id: 'modal',
        title: 'Title',
    };

    describe('<ModalHeader />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <ModalHeader {...basicProps} />,
                );
            }).not.toThrow();
        });
    });

    describe('<ModalHeader />', () => {
        let modal: ReactWrapper<IModalHeaderProps, any>;

        const setChildren = (children: any = 'any') => {
            modal.setProps(_.extend({}, basicProps, {children}));
        };

        beforeEach(() => {
            modal = mount(
                <ModalHeader {...basicProps} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            modal.detach();
        });

        it('should call prop onClose when modal x clicked and prop is set and last opened is not set', () => {
            jasmine.clock().install();
            const closeSpy = jasmine.createSpy('onClose');

            modal.setProps(_.extend({}, basicProps, {onClose: closeSpy}));
            modal.mount();
            jasmine.clock().tick(5);

            const input = modal.find('.small-close');
            input.simulate('click');
            expect(closeSpy.calls.count()).toBe(1);
            jasmine.clock().uninstall();
        });

        it('should call prop onClose when modal x clicked and modal is last opened', () => {
            jasmine.clock().install();
            const closeSpy = jasmine.createSpy('onClose');

            modal.setProps(_.extend({}, basicProps, {lastOpened: true, onClose: closeSpy}));
            modal.mount();
            jasmine.clock().tick(5);

            const input = modal.find('.small-close');
            input.simulate('click');
            expect(closeSpy.calls.count()).toBe(1);
            jasmine.clock().uninstall();
        });

        it('should not call prop onClose when modal x clicked and modal is not last opened', () => {
            const closeSpy = jasmine.createSpy('onClose');

            modal.setProps(_.extend({}, basicProps, {lastOpened: false, onClose: closeSpy}));
            modal.mount();
            const input = modal.find('.small-close');
            input.simulate('click');
            expect(closeSpy.calls.count()).toBe(0);
        });

        it('should set class when the class is specified', () => {
            const headerClass = 'mod-big';
            const classes = [headerClass];
            expect(modal.find('header').first().html()).not.toContain(headerClass);

            modal.setProps(_.extend({}, basicProps, {classes}));
            modal.mount();
            expect(modal.find('header').first().html()).toContain(headerClass);
        });

        it('should have the class inline on the title only if there are children', () => {
            const expectedClass: string = 'inline';

            expect(modal.find('h1').hasClass(expectedClass)).toBe(false);

            setChildren();

            expect(modal.find('h1').hasClass(expectedClass)).toBe(true);
        });

        it('should not have a tooltip, anchor, and svg for doclink by default', () => {
            expect(modal.find(Tooltip).length).toBe(0);
        });

        it('should have a tooltip, anchor, and svg for doclink if the prop is passed', () => {
            const docLink = {url: 'testomax', tooltip: 'doclinktooltip'};
            modal.setProps({docLink});

            expect(modal.find(Tooltip).length).toBe(1);
            expect(modal.find(Tooltip).prop('title')).toBe(docLink.tooltip);
            expect(modal.find(Tooltip).find('a').prop('href')).toBe(docLink.url);
            expect(modal.find(Tooltip).find('a').find(Svg).prop('svgName')).toBe('help');
        });
    });
});
