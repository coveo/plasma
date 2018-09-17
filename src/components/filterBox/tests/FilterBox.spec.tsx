import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {FILTER_PLACEHOLDER, FilterBox, IFilterBoxProps} from '../FilterBox';

describe('FilterBox', () => {
    const id: string = 'filter-box';

    describe('<FilterBox />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <FilterBox
                        id={id}
                    />,
                );
            }).not.toThrow();
        });
    });

    describe('<FilterBox />', () => {
        let filterBox: ReactWrapper<IFilterBoxProps, any>;
        let filterBoxInstance: FilterBox;

        beforeEach(() => {
            filterBox = mount(
                <FilterBox
                    id={id}
                />,
                {attachTo: document.getElementById('App')},
            );
            filterBoxInstance = filterBox.instance() as FilterBox;
        });

        afterEach(() => {
            filterBox.detach();
        });

        it('should call prop onRender on mounting if set', () => {
            const renderSpy = jasmine.createSpy('onRender');

            expect(() => filterBoxInstance.componentWillMount()).not.toThrow();

            filterBox.setProps({id: id, onRender: renderSpy});
            filterBox.unmount();
            filterBox.mount();
            expect(renderSpy.calls.count()).toBe(1);
        });

        it('should call prop onDestroy on unmounting if set', () => {
            const destroySpy = jasmine.createSpy('onDestroy');

            expect(() => filterBoxInstance.componentWillUnmount()).not.toThrow();

            filterBox.setProps({id: id, onDestroy: destroySpy});
            filterBox.mount();
            filterBox.unmount();
            expect(destroySpy.calls.count()).toBe(1);
        });

        it('should call prop onFilter when the filter input value has changed and prop is set', () => {
            const filterSpy = jasmine.createSpy('onFilter');
            const input = filterBox.find('input');

            input.simulate('change');
            expect(filterSpy.calls.count()).toBe(0);

            filterBox.setProps({id: id, onFilter: filterSpy});
            filterBox.mount();
            input.simulate('change');
            expect(filterSpy.calls.count()).toBe(1);
        });

        it('should call prop onFilterCallback when the filter input value has changed and prop is set', () => {
            const onFilterCallbackSpy = jasmine.createSpy('onFilterCallback');
            const input = filterBox.find('input');

            input.simulate('change');
            expect(onFilterCallbackSpy).not.toHaveBeenCalled();

            filterBox.setProps({id: id, onFilterCallback: onFilterCallbackSpy});
            filterBox.mount();
            input.simulate('change');
            expect(onFilterCallbackSpy).toHaveBeenCalledTimes(1);
        });

        it('should display the filterPlaceholder if set as a prop else, display the default one', () => {
            const expectedPlaceholder = 'new placeholder';

            expect(filterBox.html()).toContain(FILTER_PLACEHOLDER);

            filterBox.setProps({id: id, filterPlaceholder: expectedPlaceholder});
            filterBox.mount();
            expect(filterBox.html()).not.toContain(FILTER_PLACEHOLDER);
            expect(filterBox.html()).toContain(expectedPlaceholder);
        });

        it('should toggle the hidden class of the clear icon if there is a value or not in the filter input', () => {
            expect(filterBox.find('span').first().hasClass('hidden')).toBe(true);

            filterBoxInstance.filterInput.value = 'something';
            filterBox.find('input').simulate('change');
            filterBox.mount().update();
            expect(filterBox.find('span').first().hasClass('hidden')).toBe(false);

            filterBoxInstance.filterInput.value = '';
            filterBox.find('input').simulate('change');
            filterBox.mount().update();
            expect(filterBox.find('span').first().hasClass('hidden')).toBe(true);
        });

        it('should remove the hidden class of the clear icon if there is a value in the input without a change event', () => {
            expect(filterBox.find('span').first().hasClass('hidden')).toBe(true);

            (filterBox.instance() as FilterBox).filterInput.value = 'non empty';
            filterBox.mount().update();

            expect(filterBox.find('span').first().hasClass('hidden')).toBe(false);
        });

        it('should leave the hidden class of the clear icon if there is an empty value in the input without a change event', () => {
            filterBoxInstance.filterInput.value = '';
            filterBox.update();

            expect(filterBox.find('span').first().hasClass('hidden')).toBe(true);
        });

        it('should clear the filter input when clicking the clear icon', () => {
            const clearIcon = filterBox.find('span').first();

            filterBoxInstance.filterInput.value = 'something';

            clearIcon.simulate('click');
            expect(filterBoxInstance.filterInput.value).toBe('');
        });

        it('should focus the filter box input when clicking the clear icon', () => {
            const clearIcon = filterBox.find('span').first();

            expect(filterBoxInstance.filterInput).not.toBe(document.activeElement as HTMLInputElement);

            clearIcon.simulate('click');
            expect(filterBoxInstance.filterInput).toBe(document.activeElement as HTMLInputElement);
        });

        it('should set container class when the container class is specified', () => {
            const containerClass = 'mod-small';
            const containerClasses = [containerClass];
            expect(filterBox.find('div').first().hasClass(containerClass)).toBe(false);

            filterBox.setProps({id: id, containerClasses}).update();
            expect(filterBox.find('div').first().hasClass(containerClass)).toBe(true);
        });

        it('should call onBlur when the input loose focus', () => {
            const onBlur = jasmine.createSpy('onBlur');
            filterBox.setProps({onBlur});

            const element = filterBox.find('.filter-box');
            element.simulate('focus');
            element.simulate('blur');

            expect(onBlur).toHaveBeenCalled();
        });

        it('should call onKeyDown when the input get a key down event', () => {
            const onKeyDown = jasmine.createSpy('onKeyDown');
            filterBox.setProps({onKeyDown});

            const element = filterBox.find('.filter-box');
            element.simulate('keydown');

            expect(onKeyDown).toHaveBeenCalled();
        });

        it('should call onKeyUp when the input get a key up event', () => {
            const onKeyUp = jasmine.createSpy('onKeyUp');
            filterBox.setProps({onKeyUp});

            const element = filterBox.find('.filter-box');
            element.simulate('keyup');

            expect(onKeyUp).toHaveBeenCalled();
        });

        it('should call placeCursorAtEndOfInputValue when a focus event is triggered on the filter box', () => {
            const placeCursorAtEndOfInputValueSpy = spyOn(FilterBox.prototype, 'placeCursorAtEndOfInputValue');

            const element = filterBox.find('.filter-box');
            element.simulate('focus');

            expect(placeCursorAtEndOfInputValueSpy).toHaveBeenCalledTimes(1);
        });

        describe('withTitleOnInput', () => {
            beforeEach(() => {
                filterBox = mount(
                    <FilterBox
                        id={id}
                        withTitleOnInput={true}
                    />,
                    {attachTo: document.getElementById('App')},
                );
            });

            it('should not have a title on the input container if the input has a value in it', () => {
                expect(filterBox.find('.filter-container').prop('title')).toBeUndefined();
            });

            it('should have a title on the input container if the input has a value in it', () => {
                (filterBox.instance() as FilterBox).filterInput.value = 'test';
                filterBox.mount().update();

                expect((filterBox.find('.filter-container').instance() as any).title).toBe('test');
            });
        });

        describe('maxWidth', () => {
            it('should set a max width in px on the filter container and the filter input when max width is set', () => {
                filterBox = mount(
                    <FilterBox
                        id={id}
                        maxWidth={130}
                    />,
                    {attachTo: document.getElementById('App')},
                );

                expect(filterBox.find('.filter-container').prop('style')).toEqual({maxWidth: '130px'});
                expect(filterBox.find('.filter-box').prop('style')).toEqual({maxWidth: '130px'});
            });
        });

        describe('truncate', () => {
            it('should not add the "truncate" class to the filter input if it is not set', () => {
                filterBox = mount(
                    <FilterBox
                        id={id}
                    />,
                    {attachTo: document.getElementById('App')},
                );

                expect(filterBox.find('.filter-box').hasClass('truncate')).toBe(false);
            });

            it('should add the "truncate" class to the filter input if it is true', () => {
                filterBox = mount(
                    <FilterBox
                        id={id}
                        truncate={true}
                    />,
                    {attachTo: document.getElementById('App')},
                );

                expect(filterBox.find('.filter-box').hasClass('truncate')).toBe(true);
            });
        });
    });
});
