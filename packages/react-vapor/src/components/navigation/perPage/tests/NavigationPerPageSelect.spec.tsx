import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {INavigationPerPageSelectProps, NavigationPerPageSelect} from '../NavigationPerPageSelect';

describe('NavigationPerPageSelect', () => {
    const basicNavigationPerPageSelectProps: INavigationPerPageSelectProps = {
        perPageNb: 20,
        selected: false,
        onPerPageClick: jasmine.createSpy('onPerPageClick'),
    };

    describe('<NavigationPerPageSelect />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <NavigationPerPageSelect {...basicNavigationPerPageSelectProps} />,
                );
            }).not.toThrow();
        });
    });

    describe('NavigationPerPageSelectView', () => {
        let navigationPerPageSelect: ReactWrapper<INavigationPerPageSelectProps, any>;

        beforeEach(() => {
            navigationPerPageSelect = mount(
                <NavigationPerPageSelect {...basicNavigationPerPageSelectProps} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            navigationPerPageSelect.detach();
        });

        it('should get the per page number as a prop', () => {
            const perPageNumberProp = navigationPerPageSelect.props().perPageNb;

            expect(perPageNumberProp).toBeDefined();
            expect(perPageNumberProp).toBe(basicNavigationPerPageSelectProps.perPageNb);
        });

        it('should get if it is selected  as a prop', () => {
            const selectedProp = navigationPerPageSelect.props().selected;

            expect(selectedProp).toBeDefined();
            expect(selectedProp).toBe(basicNavigationPerPageSelectProps.selected);
        });

        it('should get what to do on click as a prop', () => {
            const onPerPageClickProp = navigationPerPageSelect.props().onPerPageClick;

            expect(onPerPageClickProp).toBeDefined();
        });

        it('should have "selectable" class if it is not selected', () => {
            const newNavigationPerPageSelectProps = _.extend({}, basicNavigationPerPageSelectProps, {selected: true});

            expect(navigationPerPageSelect.find('.flat-select-option').hasClass('selectable')).toBe(true);

            navigationPerPageSelect.setProps(newNavigationPerPageSelectProps).update();

            expect(navigationPerPageSelect.find('.flat-select-option').hasClass('selectable')).toBe(false);
        });

        it('should have "selected-value" "state-selected" classes when selected', () => {
            const newNavigationPerPageSelectProps = _.extend({}, basicNavigationPerPageSelectProps, {selected: true});

            expect(navigationPerPageSelect.find('.flat-select-option .enabled').hasClass('selected-value')).toBe(false);
            expect(navigationPerPageSelect.find('.flat-select-option .enabled').hasClass('state-selected')).toBe(false);

            navigationPerPageSelect.setProps(newNavigationPerPageSelectProps).update();

            expect(navigationPerPageSelect.find('.flat-select-option .enabled').hasClass('selected-value')).toBe(true);
            expect(navigationPerPageSelect.find('.flat-select-option .enabled').hasClass('state-selected')).toBe(true);
        });

        it('should call onPerPageClick when clicking link', () => {
            expect(basicNavigationPerPageSelectProps.onPerPageClick).not.toHaveBeenCalled();

            navigationPerPageSelect.find('a').simulate('click');
            expect(basicNavigationPerPageSelectProps.onPerPageClick).toHaveBeenCalled();
        });
    });
});
