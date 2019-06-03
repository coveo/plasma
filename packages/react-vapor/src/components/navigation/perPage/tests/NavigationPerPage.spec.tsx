import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {INavigationPerPageProps, NavigationPerPage, PER_PAGE_LABEL, PER_PAGE_NUMBERS} from '../NavigationPerPage';
import {NavigationPerPageSelect} from '../NavigationPerPageSelect';

describe('NavigationPerPage', () => {
    const NAVIGATION_PER_PAGE_BASIC_PROPS: INavigationPerPageProps = {
        totalEntries: 50,
    };

    describe('<NavigationPerPage />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <NavigationPerPage {...NAVIGATION_PER_PAGE_BASIC_PROPS} />,
                );
            }).not.toThrow();
        });
    });

    describe('<NavigationPerPage />', () => {
        let navigationPerPage: ReactWrapper<INavigationPerPageProps, any>;
        let navigationPerPageInstance: NavigationPerPage;
        let navigationPerPageInstanceAsAny: any;

        beforeEach(() => {
            navigationPerPage = mount(
                <NavigationPerPage {...NAVIGATION_PER_PAGE_BASIC_PROPS} />,
                {attachTo: document.getElementById('App')},
            );
            navigationPerPageInstance = navigationPerPage.instance() as NavigationPerPage;
            navigationPerPageInstanceAsAny = navigationPerPageInstance;
        });

        afterEach(() => {
            navigationPerPage.detach();
        });

        it('should get the number of entries as a prop', () => {
            const totalEntriesProp = navigationPerPage.props().totalEntries;

            expect(totalEntriesProp).toBeDefined();
            expect(totalEntriesProp).toBe(NAVIGATION_PER_PAGE_BASIC_PROPS.totalEntries);
        });

        it('should render zero <NavigationPerPageSelect /> if the total entries are equal to zero', () => {

            // [10, 20, 30]
            expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(3);

            navigationPerPage = mount(
                <NavigationPerPage totalEntries={0} />,
                {attachTo: document.getElementById('App')},
            );

            // []
            expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(0);
        });

        it('should render one <NavigationPerPageSelect /> if the total entries are of at least one over zero', () => {

            // [10, 20, 30]
            expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(3);

            navigationPerPage = mount(
                <NavigationPerPage totalEntries={1} />,
                {attachTo: document.getElementById('App')},
            );

            // [10]
            expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(1);
        });

        it('should render all <NavigationPerPageSelect />s where there are at least 1 element more than the previous <NavigationPerPageSelect />', () => {

            // [10, 20, 30]
            expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(3);

            navigationPerPage = mount(
                <NavigationPerPage totalEntries={11} />,
                {attachTo: document.getElementById('App')},
            );
            expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(2);

            navigationPerPage = mount(
                <NavigationPerPage totalEntries={21} />,
                {attachTo: document.getElementById('App')},
            );
            expect(navigationPerPage.find(NavigationPerPageSelect).length).toBe(3);
        });

        it('should call onRender if prop is set on mount', () => {
            const onRenderSpy = jasmine.createSpy('onRender');

            expect(() => {navigationPerPageInstance.componentWillMount();}).not.toThrow();

            navigationPerPage = mount(
                <NavigationPerPage {...NAVIGATION_PER_PAGE_BASIC_PROPS} onRender={onRenderSpy} />,
                {attachTo: document.getElementById('App')},
            );
            expect(onRenderSpy).toHaveBeenCalled();
        });

        it('should call onDestroy if prop is set when unmounting', () => {
            const onDestroySpy = jasmine.createSpy('onDestroy');

            expect(() => {navigationPerPageInstance.componentWillMount();}).not.toThrow();

            navigationPerPage = mount(
                <NavigationPerPage {...NAVIGATION_PER_PAGE_BASIC_PROPS} onDestroy={onDestroySpy} />,
                {attachTo: document.getElementById('App')},
            );
            navigationPerPage.unmount();
            expect(onDestroySpy).toHaveBeenCalled();
        });

        it('should display the per page label if prop is set else it should show the default one', () => {
            const expectedLabel = 'Show this many items per page';
            const newNavigationPerPageProps = _.extend({}, NAVIGATION_PER_PAGE_BASIC_PROPS, {label: expectedLabel});

            expect(navigationPerPage.html()).toContain(PER_PAGE_LABEL);

            navigationPerPage.setProps(newNavigationPerPageProps);
            expect(navigationPerPage.html()).not.toContain(PER_PAGE_LABEL);
            expect(navigationPerPage.html()).toContain(expectedLabel);
        });

        it('should show the custom per page numbers if set as a prop or show the default ones', () => {
            const expectedPerPageNumbers = [2, 3, 4, 5, 10, 30];
            const newNavigationPerPageProps = _.extend({}, NAVIGATION_PER_PAGE_BASIC_PROPS, {perPageNumbers: expectedPerPageNumbers});

            expect(navigationPerPage.find('NavigationPerPageSelect').length).toBe(PER_PAGE_NUMBERS.length);

            navigationPerPage.setProps(newNavigationPerPageProps);
            expect(navigationPerPage.find('NavigationPerPageSelect').length).toBe(expectedPerPageNumbers.length);
        });

        it('should call onPerPageClick prop if it is set when calling handleClick and perPage is different than currentPerPage', () => {
            const newProps: INavigationPerPageProps = _.extend({}, NAVIGATION_PER_PAGE_BASIC_PROPS,
                {onPerPageClick: jasmine.createSpy('onPerPageClick')});
            const expectedPerPage: number = 22;

            expect(() => navigationPerPageInstanceAsAny.handleClick(expectedPerPage)).not.toThrow();

            navigationPerPage.setProps(newProps);
            navigationPerPageInstanceAsAny.handleClick(expectedPerPage);

            expect(newProps.onPerPageClick).toHaveBeenCalledTimes(1);
        });

        it('should not call onPerPageClick prop if perPage is identical to currentPerPage', () => {
            const newProps: INavigationPerPageProps = _.extend({}, NAVIGATION_PER_PAGE_BASIC_PROPS,
                {onPerPageClick: jasmine.createSpy('onPerPageClick'), currentPerPage: 10});
            const expectedPerPage: number = 10;

            expect(() => navigationPerPageInstanceAsAny.handleClick(expectedPerPage)).not.toThrow();

            navigationPerPage.setProps(newProps);
            // two clicks should call the function once
            navigationPerPageInstanceAsAny.handleClick(expectedPerPage);
            expect(newProps.onPerPageClick).not.toHaveBeenCalled();
        });

        it('should set the per page at the initial position on first render', () => {
            const expectedSelected: number = 2;
            navigationPerPage = mount(
                <NavigationPerPage {...NAVIGATION_PER_PAGE_BASIC_PROPS} initialPosition={expectedSelected} />,
                {attachTo: document.getElementById('App')},
            );

            expect(navigationPerPage.find(NavigationPerPageSelect).at(expectedSelected).props().selected).toBe(true);
        });

        it('should select the middle option if initialPosition prop is not defined on first render', () => {
            navigationPerPage = mount(
                <NavigationPerPage {...NAVIGATION_PER_PAGE_BASIC_PROPS} perPageNumbers={[1, 2, 3, 4, 5]} />,
                {attachTo: document.getElementById('App')},
            );

            expect(navigationPerPage.find(NavigationPerPageSelect).at(2).props().selected).toBe(true);

            navigationPerPage = mount(
                <NavigationPerPage {...NAVIGATION_PER_PAGE_BASIC_PROPS} perPageNumbers={[1, 2]} />,
                {attachTo: document.getElementById('App')},
            );

            expect(navigationPerPage.find(NavigationPerPageSelect).at(0).props().selected).toBe(true);
        });
    });
});
