import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {INavigationPaginationSelectProps, NavigationPaginationSelect} from '../NavigationPaginationSelect';

describe('NavigationPaginationSelect', () => {
    const basicNavigationPaginationSelectProps: INavigationPaginationSelectProps = {
        selected: false,
        pageNb: 2,
        onPageClick: jasmine.createSpy('onPageClick'),
    };

    describe('<NavigationPaginationSelect />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <NavigationPaginationSelect {...basicNavigationPaginationSelectProps} />,
                );
            }).not.toThrow();
        });
    });

    describe('<NavigationPaginationSelect />', () => {
        let navigationPaginationSelect: ReactWrapper<INavigationPaginationSelectProps, any>;

        beforeEach(() => {
            navigationPaginationSelect = mount(
                <NavigationPaginationSelect {...basicNavigationPaginationSelectProps} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            navigationPaginationSelect.detach();
        });

        it('should get if it is selected as a prop', () => {
            const selectedProp = navigationPaginationSelect.props().selected;

            expect(selectedProp).toBeDefined();
            expect(selectedProp).toBe(basicNavigationPaginationSelectProps.selected);
        });

        it('should get the page number as a prop', () => {
            const pageNbProp = navigationPaginationSelect.props().pageNb;

            expect(pageNbProp).toBeDefined();
            expect(pageNbProp).toBe(basicNavigationPaginationSelectProps.pageNb);
        });

        it('should get what to do on click as a prop', () => {
            const onPageClickProp = navigationPaginationSelect.props().onPageClick;

            expect(onPageClickProp).toBeDefined();
        });

        it('should be selectable if not selected', () => {
            const newNavigationPaginationSelectProps = _.extend(basicNavigationPaginationSelectProps, {selected: true});
            expect(navigationPaginationSelect.find('.flat-select-option').hasClass('selectable')).toBe(true);

            navigationPaginationSelect.setProps(newNavigationPaginationSelectProps);

            expect(navigationPaginationSelect.find('.flat-select-option').hasClass('selectable')).toBe(false);
        });

        it('should display the page number', () => {
            expect(navigationPaginationSelect.html()).toContain((basicNavigationPaginationSelectProps.pageNb + 1).toString());
        });

        it('should call onPageClick on page click', () => {
            expect(basicNavigationPaginationSelectProps.onPageClick).not.toHaveBeenCalled();

            navigationPaginationSelect.find('a').simulate('click');

            expect(basicNavigationPaginationSelectProps.onPageClick).toHaveBeenCalled();
        });
    });
});
