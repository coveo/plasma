import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {
    INavigationPaginationProps,
    NavigationPagination,
    NEXT_LABEL,
    NUMBER_OF_PAGES_SHOWING,
    PREVIOUS_LABEL,
} from '../NavigationPagination';

describe('NavigationPagination', () => {
    const NAVIGATION_PAGINATION_BASIC_PROPS: INavigationPaginationProps = {
        totalPages: 22,
    };

    describe('<NavigationPagination />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <NavigationPagination {...NAVIGATION_PAGINATION_BASIC_PROPS} />,
                );
            }).not.toThrow();
        });
    });

    describe('<NavigationPagination />', () => {
        let navigationPagination: ReactWrapper<INavigationPaginationProps, any>;
        let navigationPaginationInstance: NavigationPagination;

        beforeEach(() => {
            navigationPagination = mount(
                <NavigationPagination
                    {...NAVIGATION_PAGINATION_BASIC_PROPS}
                />,
                {attachTo: document.getElementById('App')});
            navigationPaginationInstance = navigationPagination.instance() as NavigationPagination;
        });

        afterEach(() => {
            navigationPagination.detach();
        });

        it('should call prop onRender on mounting if set', () => {
            const renderSpy: jasmine.Spy = jasmine.createSpy('onRender');

            expect(() => {navigationPaginationInstance.componentWillMount();}).not.toThrow();

            navigationPagination = mount(
                <NavigationPagination
                    {...NAVIGATION_PAGINATION_BASIC_PROPS}
                    onRender={renderSpy}
                />,
                {attachTo: document.getElementById('App')});
            expect(renderSpy).toHaveBeenCalledTimes(1);
        });

        it('should call prop onDestroy on unmounting if set', () => {
            const destroySpy: jasmine.Spy = jasmine.createSpy('onDestroy');

            expect(() => {navigationPaginationInstance.componentWillUnmount();}).not.toThrow();

            navigationPagination = mount(
                <NavigationPagination
                    {...NAVIGATION_PAGINATION_BASIC_PROPS}
                    onDestroy={destroySpy}
                />,
                {attachTo: document.getElementById('App')});
            navigationPagination.unmount();
            expect(destroySpy).toHaveBeenCalledTimes(1);
        });

        it('should call onPageClick prop if set when clicking on next/previous or page number and page number is greater' +
            'than or is 0 and does not equal the current page', () => {
                const clickSpy: jasmine.Spy = jasmine.createSpy('onClick');
                const newNavigationPaginationProps: INavigationPaginationProps = _.extend({}, NAVIGATION_PAGINATION_BASIC_PROPS,
                    {onPageClick: clickSpy});

                expect(() => {
                    navigationPaginationInstance['handlePageClick']
                        .call(navigationPaginationInstance, 3);
                }).not.toThrow();

                navigationPagination.setProps(newNavigationPaginationProps);

                navigationPaginationInstance['handlePageClick'].call(navigationPaginationInstance, -2);
                expect(clickSpy).not.toHaveBeenCalled();

                // Previous button (does not call spy since current page is zero)
                navigationPagination.find('.mod-link').first().simulate('click');
                expect(clickSpy).not.toHaveBeenCalled();

                // Number button
                navigationPagination.find('.selectable').first().simulate('click');
                expect(clickSpy).toHaveBeenCalledTimes(1);

                // Number button (does not call again since already on this page)
                navigationPagination.find('.flat-select-option').first().simulate('click');
                expect(clickSpy).toHaveBeenCalledTimes(1);

                // Next button
                navigationPagination.find('.mod-link').last().simulate('click');
                expect(clickSpy).toHaveBeenCalledTimes(2);
            });

        it('should show the previous label sent as a prop else show the default one', () => {
            const expectedLabel: string = 'Previous page';
            const newNavigationPaginationProps: INavigationPaginationProps = _.extend({}, NAVIGATION_PAGINATION_BASIC_PROPS,
                {previousLabel: expectedLabel});

            expect(navigationPagination.html()).toContain(PREVIOUS_LABEL);

            navigationPagination.setProps(newNavigationPaginationProps);
            expect(navigationPagination.html()).toContain(expectedLabel);
        });

        it('should show the next label sent as a prop else show the default one', () => {
            const expectedLabel: string = 'Next page';
            const newNavigationPaginationProps: INavigationPaginationProps = _.extend({}, NAVIGATION_PAGINATION_BASIC_PROPS,
                {nextLabel: expectedLabel});

            expect(navigationPagination.html()).toContain(NEXT_LABEL);

            navigationPagination.setProps(newNavigationPaginationProps);
            expect(navigationPagination.html()).toContain(expectedLabel);
        });

        it('should show as many pages as numberOfPagesToShow prop else show the default number', () => {
            const expectedNbOfPagesToShow: number = 2;
            const newNavigationPaginationProps: INavigationPaginationProps = _.extend({}, NAVIGATION_PAGINATION_BASIC_PROPS,
                {numberOfPagesToShow: 2});

            expect(navigationPagination.find('NavigationPaginationSelect').length).toBe(NUMBER_OF_PAGES_SHOWING);

            navigationPagination.setProps(newNavigationPaginationProps);
            expect(navigationPagination.find('NavigationPaginationSelect').length).toBe(expectedNbOfPagesToShow);
        });

        it('should not show any page number if the prop hidePages is set to true', () => {
            const newNavigationPaginationProps: INavigationPaginationProps = _.extend({}, NAVIGATION_PAGINATION_BASIC_PROPS,
                {hidePages: true});

            expect(navigationPagination.find('NavigationPaginationSelect').length).toBeGreaterThan(0);

            navigationPagination.setProps(newNavigationPaginationProps);

            expect(navigationPagination.find('NavigationPaginationSelect').length).toBe(0);

            expect(navigationPagination.find('.flat-select-option.mod-link').length).toBe(2); // Next and previous buttons
        });
    });
});
