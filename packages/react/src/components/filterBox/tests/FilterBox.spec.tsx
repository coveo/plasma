import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {mount, ReactWrapper} from 'enzyme';

import {FilterBox, FILTER_PLACEHOLDER, IFilterBoxProps} from '../FilterBox';

describe('<FilterBox />', () => {
    let filterBox: ReactWrapper<IFilterBoxProps, any>;

    it('render a filter box', () => {
        render(<FilterBox />);

        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('calls onRender on render if set', () => {
        const renderSpy = jest.fn();

        render(<FilterBox onRender={renderSpy} />);

        expect(renderSpy).toHaveBeenCalled();
    });

    it('calls onDestroy on unmount if set', () => {
        const destroySpy = jest.fn();

        const {unmount} = render(<FilterBox onDestroy={destroySpy} />);

        unmount();

        expect(destroySpy).toHaveBeenCalled();
    });

    it('calls onFilter when the filter input value has changed and prop is set', () => {
        const filterSpy = jest.fn();

        render(<FilterBox onFilter={filterSpy} />);
        userEvent.click(screen.getByRole('textbox'));

        userEvent.keyboard('{enter}');

        expect(filterSpy).not.toHaveBeenCalled();

        userEvent.keyboard('F');

        expect(filterSpy).toHaveBeenCalled();
    });

    it('calls onFilterCallback when the filter input value has changed and prop is set', () => {
        const onFilterCallbackSpy = jest.fn();

        render(<FilterBox onFilterCallback={onFilterCallbackSpy} />);
        userEvent.click(screen.getByRole('textbox'));
        userEvent.keyboard('{enter}');

        expect(onFilterCallbackSpy).not.toHaveBeenCalled();

        userEvent.keyboard('F');

        expect(onFilterCallbackSpy).toHaveBeenCalled();
    });

    it('calls onBlur when the input loose focus', () => {
        const onBlur = jest.fn();

        render(<FilterBox onBlur={onBlur} />);

        userEvent.click(screen.getByRole('textbox'));
        userEvent.keyboard('{enter}');
        userEvent.tab(); // remove focus from thw input

        expect(onBlur).toHaveBeenCalled();
    });

    it('calls onKeyDown when the input get a key down event', () => {
        const onKeyDownSpy = jest.fn();

        render(<FilterBox onKeyDown={onKeyDownSpy} />);
        userEvent.click(screen.getByRole('textbox'));
        userEvent.keyboard('F');

        expect(onKeyDownSpy).toHaveBeenCalled();
    });

    it('calls onKeyUp when the input get a key up event', () => {
        const onKeyUpSpy = jest.fn();

        render(<FilterBox onKeyUp={onKeyUpSpy} />);
        userEvent.click(screen.getByRole('textbox'));
        userEvent.keyboard('F');

        expect(onKeyUpSpy).toHaveBeenCalled();
    });

    it('calls placeCursorAtEndOfInputValue when a focus event is triggered on the filter box', () => {
        const placeCursorAtEndOfInputValueSpy = jest.spyOn(FilterBox.prototype, 'placeCursorAtEndOfInputValue');

        render(<FilterBox />);

        userEvent.click(screen.getByRole('textbox'));

        expect(placeCursorAtEndOfInputValueSpy).toHaveBeenCalledTimes(1);
    });

    it('render a placeholder by default', () => {
        render(<FilterBox />);

        expect(screen.getByPlaceholderText(FILTER_PLACEHOLDER)).toBeVisible();
    });

    it('render a custom placeholder if set', () => {
        const newPlaceholder = 'new placeholder';

        render(<FilterBox filterPlaceholder={newPlaceholder} />);

        expect(screen.getByPlaceholderText(newPlaceholder)).toBeVisible();
        expect(screen.queryByPlaceholderText(FILTER_PLACEHOLDER)).not.toBeInTheDocument();
    });

    it('render a filter icon by default', () => {
        render(<FilterBox />);

        expect(screen.getByRole('img', {name: 'filter icon'})).toBeVisible();
    });

    it('does not render a cross icon by default', () => {
        render(<FilterBox />);

        expect(screen.queryByRole('img', {name: 'clear icon'})).not.toBeInTheDocument();
    });

    // it('render a cross icon by default when user is typing', async () => {
    //    TO
    //     render(<FilterBox />);

    //     userEvent.type(screen.getByRole('textbox'), 'hello');
    //     userEvent.tab();

    //     await screen.findByDisplayValue(/hello/i);
    //     screen.logTestingPlaygroundURL();

    //     expect(await screen.findByRole('img', {name: 'clear icon'})).toBeInTheDocument();
    // });

    // it('should clear the filter input when clicking the clear icon', () => {
    //    TODO
    // });

    it('should set container class when the container class is specified', () => {
        const id = 'patate';
        const containerClass = 'mod-small';
        const containerClasses = [containerClass];

        filterBox = mount(<FilterBox id={id} />, {attachTo: document.getElementById('App')});

        expect(filterBox.find('.filter-container').first().hasClass(containerClass)).toBe(false);

        filterBox.setProps({id: id, containerClasses}).update();

        expect(filterBox.find('.filter-container').first().hasClass(containerClass)).toBe(true);
    });

    it('should not have a title on the input container if the input has a value in it', () => {
        const id = 'banane';

        filterBox = mount(<FilterBox id={id} withTitleOnInput={true} />, {
            attachTo: document.getElementById('App'),
        });

        expect(filterBox.find('.filter-container').prop('title')).toBeUndefined();
    });

    it('should have a title on the input container if the input has a value in it', () => {
        const id = 'orange';

        filterBox = mount(<FilterBox id={id} withTitleOnInput={true} />, {
            attachTo: document.getElementById('App'),
        });
        (filterBox.instance() as FilterBox).filterInput.value = 'test';
        filterBox.mount().update();

        expect((filterBox.find('.filter-container').instance() as any).title).toBe('test');
    });

    it('should set a max width in px on the filter container and the filter input when max width is set', () => {
        const id = 'pomme';

        filterBox = mount(<FilterBox id={id} maxWidth={130} />, {attachTo: document.getElementById('App')});

        expect(filterBox.find('.filter-container').prop('style')).toEqual({maxWidth: '130px'});
        expect(filterBox.find('.filter-box').prop('style')).toEqual({maxWidth: '130px'});
    });

    it('should not add the "truncate" class to the filter input if it is not set', () => {
        const id = 'melon';

        filterBox = mount(<FilterBox id={id} />, {attachTo: document.getElementById('App')});

        expect(filterBox.find('.filter-box').hasClass('truncate')).toBe(false);
    });

    it('should add the "truncate" class to the filter input if it is true', () => {
        const id = 'cerise';

        filterBox = mount(<FilterBox id={id} truncate={true} />, {attachTo: document.getElementById('App')});

        expect(filterBox.find('.filter-box').hasClass('truncate')).toBe(true);
    });
});
