import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {Loading} from '../../loading/Loading';
import {INavigationProps, Navigation} from '../Navigation';
import {NavigationPagination} from '../pagination/NavigationPagination';
import {NavigationPerPage, PER_PAGE_NUMBERS} from '../perPage/NavigationPerPage';
import {NavigationPerPageSelect} from '../perPage/NavigationPerPageSelect';

describe(' navigation', () => {
    const basicNavigationProps: INavigationProps = {
        totalPages: 4,
        totalEntries: 12,
    };

    describe('<Navigation />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <Navigation {...basicNavigationProps} />,
                );
            }).not.toThrow();
        });
    });

    describe('<Navigation />', () => {
        let navigation: ReactWrapper<INavigationProps, any>;

        beforeEach(() => {
            navigation = mount(
                <Navigation {...basicNavigationProps} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            navigation.detach();
        });

        it('should get the number of pages as a prop', () => {
            const totalPagesProp = navigation.props().totalPages;

            expect(totalPagesProp).toBeDefined();
            expect(totalPagesProp).toBe(basicNavigationProps.totalPages);
        });

        it('should get the number of entries as a prop', () => {
            const totalEntriesProp = navigation.props().totalEntries;

            expect(totalEntriesProp).toBeDefined();
            expect(totalEntriesProp).toBe(basicNavigationProps.totalEntries);
        });

        it('should render a <Loading /> component', () => {
            expect(navigation.find(Loading).length).toBe(1);
        });

        it('should render a <NavigationPagination /> component if totalPages is higher than 1', () => {
            const newNavigationProps = _.extend({}, basicNavigationProps, {totalPages: 1});

            expect(navigation.find(NavigationPagination).closest('div').hasClass('hidden')).toBe(false);

            navigation.setProps(newNavigationProps);
            expect(navigation.find(NavigationPagination).closest('div').hasClass('hidden')).toBe(true);
        });

        it('should render a <NavigationPerPage /> component if totalEntries is higher than the first perPageNumber', () => {
            const newNavigationProps = _.extend({}, basicNavigationProps, {totalEntries: PER_PAGE_NUMBERS[0]});

            expect(navigation.find(NavigationPerPage).closest('div').hasClass('hidden')).toBe(false);

            navigation.setProps(newNavigationProps);
            expect(navigation.find(NavigationPerPage).closest('div').hasClass('hidden')).toBe(true);
        });

        it('should pass on the currentPerPage prop if it is set (used without Redux)', () => {
            const expectedPerPage: number = 33;
            const newNavigationProps: INavigationProps = _.extend({}, basicNavigationProps, {currentPerPage: expectedPerPage});

            expect(navigation.find(NavigationPerPage).props().currentPerPage).toBeUndefined();

            navigation.setProps(newNavigationProps).update();
            expect(navigation.find(NavigationPerPage).props().currentPerPage).toBe(expectedPerPage);
        });

        it('should call onPerPageClick prop with the correct values when it is set', () => {
            const onPerPageClick = jasmine.createSpy('mockOnPerPageClick');
            const perPageNumbers: number[] = [2, 3, 4];
            const currentPerPage: number = perPageNumbers[1];
            const expectedPerPage: number = perPageNumbers[perPageNumbers.length - 1];

            const newNavigationProps: INavigationProps = _.extend({}, basicNavigationProps, {currentPerPage, perPageNumbers, onPerPageClick});
            navigation.setProps(newNavigationProps).update().find(NavigationPerPageSelect).last().simulate('click');
            expect(onPerPageClick).toHaveBeenCalledWith(expectedPerPage, currentPerPage, undefined); // newPerPage, currentPerPage, currentPage (currentPerPage and currentPage are undefined unless passed as props)
        });
    });
});
