import {mount, ReactWrapper, shallow} from 'enzyme';

import {screen} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {FILTER_PLACEHOLDER, FilterBox, IFilterBoxProps} from '../FilterBox';

describe('FilterBox', () => {
    const id: string = 'filter-box';

    it('should render without errors', () => {
        expect(() => {
            shallow(<FilterBox id={id} />);
        }).not.toThrow();
    });

    describe('<FilterBox />', () => {
        let filterBox: ReactWrapper<IFilterBoxProps, any>;
        let filterBoxInstance: FilterBox;

        beforeEach(() => {
            filterBox = mount(<FilterBox id={id} />, {attachTo: document.getElementById('app')});
            filterBoxInstance = filterBox.instance() as FilterBox;
        });

        it('should call prop onRender on mounting if set', () => {
            const renderSpy = jest.fn();

            expect(() => filterBoxInstance.componentDidMount()).not.toThrow();

            filterBox.setProps({id: id, onRender: renderSpy});
            filterBox.unmount();
            filterBox.mount();

            expect(renderSpy.mock.calls.length).toBe(1);
        });

        it('should call prop onDestroy on unmounting if set', () => {
            const destroySpy = jest.fn();

            expect(() => filterBoxInstance.componentDidMount()).not.toThrow();

            filterBox.setProps({id: id, onDestroy: destroySpy});
            filterBox.mount();
            filterBox.unmount();

            expect(destroySpy.mock.calls.length).toBe(1);
        });

        it('should call prop onFilter when the filter input value has changed and prop is set', () => {
            const filterSpy = jest.fn();
            const input = filterBox.find('input');

            input.simulate('change');

            expect(filterSpy.mock.calls.length).toBe(0);

            filterBox.setProps({id: id, onFilter: filterSpy});
            filterBox.mount();
            input.simulate('change');

            expect(filterSpy.mock.calls.length).toBe(1);
        });

        it('should call prop onFilterCallback when the filter input value has changed and prop is set', () => {
            const onFilterCallbackSpy = jest.fn();
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

        it('should toggle the hidden class of the clear icon if there is a value or not in the filter input', async () => {
            expect(await screen.findByRole('img', {name: /cross/i})).toHaveClass('hidden');

            filterBoxInstance.filterInput.value = 'something';
            filterBox.find('input').simulate('change');
            filterBox.mount().update();

            expect(await screen.findByRole('img', {name: /cross/i})).not.toHaveClass('hidden');

            filterBoxInstance.filterInput.value = '';
            filterBox.find('input').simulate('change');
            filterBox.mount().update();

            expect(await screen.findByRole('img', {name: /cross/i})).toHaveClass('hidden');
        });

        it('should clear the filter input when clicking the clear icon', async () => {
            const clearIcon = await screen.findByRole('img', {name: /cross/i});

            filterBoxInstance.filterInput.value = 'something';

            userEvent.click(clearIcon);

            expect(filterBoxInstance.filterInput.value).toBe('');
        });

        it('should set container class when the container class is specified', () => {
            const containerClass = 'mod-small';
            const containerClasses = [containerClass];

            expect(filterBox.find('.filter-container').first().hasClass(containerClass)).toBe(false);

            filterBox.setProps({id: id, containerClasses}).update();

            expect(filterBox.find('.filter-container').first().hasClass(containerClass)).toBe(true);
        });

        it('should call onBlur when the input loose focus', () => {
            const onBlur = jest.fn();
            filterBox.setProps({onBlur});

            const element = filterBox.find('.filter-box');
            element.simulate('focus');
            element.simulate('blur');

            expect(onBlur).toHaveBeenCalled();
        });

        it('should call onKeyDown when the input get a key down event', () => {
            const onKeyDown = jest.fn();
            filterBox.setProps({onKeyDown});

            const element = filterBox.find('.filter-box');
            element.simulate('keydown');

            expect(onKeyDown).toHaveBeenCalled();
        });

        it('should call onKeyUp when the input get a key up event', () => {
            const onKeyUp = jest.fn();
            filterBox.setProps({onKeyUp});

            const element = filterBox.find('.filter-box');
            element.simulate('keyup');

            expect(onKeyUp).toHaveBeenCalled();
        });

        it('should call placeCursorAtEndOfInputValue when a focus event is triggered on the filter box', () => {
            const placeCursorAtEndOfInputValueSpy = jest.spyOn(FilterBox.prototype, 'placeCursorAtEndOfInputValue');

            const element = filterBox.find('.filter-box');
            element.simulate('focus');

            expect(placeCursorAtEndOfInputValueSpy).toHaveBeenCalledTimes(1);
        });

        describe('withTitleOnInput', () => {
            beforeEach(() => {
                filterBox = mount(<FilterBox id={id} withTitleOnInput={true} />, {
                    attachTo: document.getElementById('App'),
                });
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
                filterBox = mount(<FilterBox id={id} maxWidth={130} />, {attachTo: document.getElementById('App')});

                expect(filterBox.find('.filter-container').prop('style')).toEqual({maxWidth: '130px'});
                expect(filterBox.find('.filter-box').prop('style')).toEqual({maxWidth: '130px'});
            });
        });

        describe('truncate', () => {
            it('should not add the "truncate" class to the filter input if it is not set', () => {
                filterBox = mount(<FilterBox id={id} />, {attachTo: document.getElementById('App')});

                expect(filterBox.find('.filter-box').hasClass('truncate')).toBe(false);
            });

            it('should add the "truncate" class to the filter input if it is true', () => {
                filterBox = mount(<FilterBox id={id} truncate={true} />, {attachTo: document.getElementById('App')});

                expect(filterBox.find('.filter-box').hasClass('truncate')).toBe(true);
            });
        });
    });
});
