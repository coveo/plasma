/* eslint-disable testing-library/no-render-in-setup */
import {CrossSize16Px, EditSize16Px} from '@coveord/plasma-react-icons';
import {mount, ReactWrapper, shallow} from 'enzyme';
import {InfiniteScrollProps} from 'react-infinite-scroll-component';
import * as _ from 'underscore';

import {keyCode} from '../../../utils/InputUtils';
import {UUID} from '../../../utils/UUID';
import {Content} from '../../content/Content';
import {FilterBox} from '../../filterBox/FilterBox';
import {Tooltip} from '../../tooltip/Tooltip';
import {DropdownSearch, IDropdownOption, IDropdownSearchProps} from '../DropdownSearch';
import {
    DropdownSearchAutoInfiniteScroll,
    IDropdownSearchAutoInfiniteScrollOptions,
} from '../DropdownSearchAutoInfiniteScroll';
import {DropdownSearchInfiniteScrollOptions} from '../DropdownSearchInfiniteScrollOptions';
import {defaultSelectedOptionPlaceholder} from '../DropdownSearchReducers';

describe('DropdownSearch', () => {
    const id: string = UUID.generate();
    const options: IDropdownOption[] = [
        {value: 'test a', displayValue: 'test a', prefix: 'test'},
        {value: 'test b', displayValue: 'test b', icon: EditSize16Px},
        {value: 'test c', displayValue: 'test c'},
    ];

    const ownProps: IDropdownSearchProps = {
        id,
        options,
        modMenu: false,
        filterPlaceholder: 'fill me',
        maxWidth: 400,
        width: 300,
        hasFilterSuggestionBoxWidthFixed: true,
        isDisabled: false,
        isOpened: false,
        searchThresold: 1,
    };

    const infiniteScrollProps: InfiniteScrollProps = {
        dataLength: 2,
        hasMore: true,
        next: jest.fn(),
        endMessage: 'no more',
        loader: null,
    };

    const autoInfiniteScrollOptions: IDropdownSearchAutoInfiniteScrollOptions = {
        optionsPerPage: 10,
    };

    describe('<DropdownSearch />', () => {
        let dropdownSearch: ReactWrapper<IDropdownSearchProps, any>;
        let dropdownSearchInstance: DropdownSearch;
        let dropdownSearchInstanceAsAny: any;

        const renderDropdownSearch = (props?: IDropdownSearchProps) => {
            dropdownSearch = mount(<DropdownSearch {...props} />, {attachTo: document.getElementById('App')});
            dropdownSearchInstance = dropdownSearch.instance() as DropdownSearch;
            dropdownSearchInstanceAsAny = dropdownSearchInstance;
        };

        afterEach(() => {
            if (dropdownSearch?.exists()) {
                dropdownSearch.unmount();
            }
            jest.restoreAllMocks();
        });

        describe('default props', () => {
            beforeEach(() => {
                renderDropdownSearch(ownProps);
            });

            it('should have the same object sent has parameter than the component props', () => {
                expect(dropdownSearch.props()).toEqual({...DropdownSearch.defaultProps, ...ownProps});
            });
        });

        describe('render', () => {
            it('should render without error', () => {
                expect(() => {
                    renderDropdownSearch(ownProps);
                }).not.toThrow();
            });

            it('should render without error with no options provided', () => {
                expect(() => {
                    renderDropdownSearch({...ownProps, options: []});
                }).not.toThrow();
            });
        });

        describe('event props', () => {
            beforeEach(() => {
                renderDropdownSearch(ownProps);
            });

            it('should call onMountCallBack prop if set when mounting', () => {
                const onMountCallBack = jest.fn();

                dropdownSearch.unmount();
                dropdownSearch.setProps({onMountCallBack});
                dropdownSearch.mount();

                expect(onMountCallBack).toHaveBeenCalled();
            });

            it('should call onMount prop if set when mounting', () => {
                const onMountSpy = jest.fn();

                dropdownSearch.unmount();
                dropdownSearch.setProps({onMount: onMountSpy});
                dropdownSearch.mount();

                expect(onMountSpy).toHaveBeenCalled();
            });

            it('should call onDestroy prop if set when will unmount', () => {
                const onDestroy = jest.fn();

                expect(() => dropdownSearchInstance.componentWillUnmount()).not.toThrow();

                dropdownSearch.setProps({onDestroy});
                dropdownSearch.unmount();

                expect(onDestroy).toHaveBeenCalled();
            });

            it('should call onFilterTextChange if defined when onChange the "filter-box" input', () => {
                const onFilterTextChange = jest.fn();
                dropdownSearch.setProps({isOpened: true, onFilterTextChange});
                dropdownSearch.find('input.filter-box').simulate('change');

                expect(onFilterTextChange).toHaveBeenCalled();
            });

            it('should not call onFilterTextChange if defined when the filter box input changes and customFiltering is defined', () => {
                const onFilterTextChange = jest.fn();
                dropdownSearch.setProps({
                    isOpened: true,
                    onFilterTextChange,
                    customFiltering: jest.fn(),
                });
                dropdownSearch.find('input.filter-box').simulate('change');

                expect(onFilterTextChange).not.toHaveBeenCalled();
            });

            it('shoudl call customFiltering if defined when the filter box input changes', () => {
                const customFiltering = jest.fn();
                dropdownSearch.setProps({isOpened: true, customFiltering});
                dropdownSearch.find('input.filter-box').simulate('change');

                expect(customFiltering).toHaveBeenCalledTimes(1);
            });

            it('should call onBlur if defined when we lost focus on "filter-box" input', () => {
                const onBlur = jest.fn();
                dropdownSearch.setProps({onBlur, isOpened: true});

                const element = dropdownSearch.find('.filter-box');
                element.simulate('focus');
                element.simulate('blur');

                expect(onBlur).toHaveBeenCalled();
            });

            it('should call onToggleDropdown if defined when click the "dropdown-toggle" button', () => {
                const onToggleDropdown = jest.fn();
                dropdownSearch.setProps({onToggleDropdown});

                dropdownSearch.find('button.dropdown-toggle').simulate('click');

                expect(onToggleDropdown).toHaveBeenCalled();
            });

            it('should call onClickCallBack if defined when click the "dropdown-toggle" button', () => {
                const onClickCallBack = jest.fn();
                dropdownSearch.setProps({onClickCallBack});

                dropdownSearch.find('button.dropdown-toggle').simulate('click');

                expect(onClickCallBack).toHaveBeenCalled();
            });

            it('should call onOptionClickCallBack if defined when click an option "dropdown-toggle" button', () => {
                const onOptionClickCallBack = jest.fn();
                dropdownSearch.setProps({isOpened: true, onOptionClickCallBack});

                dropdownSearch.find('[data-value="test a"]').simulate('mousedown');

                expect(onOptionClickCallBack).toHaveBeenCalled();
            });

            it('should call onMouseEnterDropdown if defined when enter over the ul element and dropdown is opened', () => {
                renderDropdownSearch({...ownProps, isOpened: true});

                const onMouseEnterDropdown = jest.fn();
                dropdownSearch.setProps({onMouseEnterDropdown});

                dropdownSearch.find('ul.dropdown-menu').simulate('mouseenter');

                expect(onMouseEnterDropdown).toHaveBeenCalled();
            });

            it('should call onKeyDownFilterBox if defined when key down on "filter-box"', () => {
                const onKeyDownFilterBox = jest.fn();
                dropdownSearch.setProps({isOpened: true, onKeyDownFilterBox, activeOption: options[0]});

                dropdownSearch.find('input.filter-box').simulate('keydown');

                expect(onKeyDownFilterBox).toHaveBeenCalled();
            });

            it('should call onOptionClickCallBack if defined and they key is enter when key down on "filter-box"', () => {
                const onOptionClickCallBack = jest.fn();
                dropdownSearch.setProps({
                    isOpened: true,
                    activeOption: {value: 'test a'},
                    onOptionClickCallBack,
                });

                dropdownSearch.find('input.filter-box').simulate('keydown', {keyCode: keyCode.enter});

                expect(onOptionClickCallBack).toHaveBeenCalled();
            });

            it('should call onOptionClickCallBack if defined and they key is tab when key down on "filter-box"', () => {
                const onOptionClickCallBack = jest.fn();
                dropdownSearch.setProps({
                    isOpened: true,
                    activeOption: {value: 'test a'},
                    onOptionClickCallBack,
                });

                dropdownSearch.find('input.filter-box').simulate('keydown', {keyCode: keyCode.tab});

                expect(onOptionClickCallBack).toHaveBeenCalled();
            });

            it('should call onKeyDownDropdownButton if defined when key down on button "dropdown-toggle"', () => {
                const onKeyDownDropdownButton = jest.fn();
                dropdownSearch.setProps({onKeyDownDropdownButton});

                dropdownSearch.find('button.dropdown-toggle').simulate('keydown');

                expect(onKeyDownDropdownButton).toHaveBeenCalled();
            });

            it('should call handleOnOptionClickOnKeyDown if search is off', () => {
                jest.spyOn(DropdownSearch.prototype as any, 'isSearchOn').mockReturnValue(false);
                const handleOnOptionClickOnKeyDownSpy = jest.spyOn(
                    DropdownSearch.prototype as any,
                    'handleOnOptionClickOnKeyDown',
                );

                dropdownSearch.find('button.dropdown-toggle').simulate('keydown');

                expect(handleOnOptionClickOnKeyDownSpy).toHaveBeenCalledTimes(1);
            });

            it('should not call handleOnOptionClickOnKeyDown if search is on', () => {
                jest.spyOn(DropdownSearch.prototype as any, 'isSearchOn').mockReturnValue(true);
                const handleOnOptionClickOnKeyDownSpy = jest.spyOn(
                    DropdownSearch.prototype as any,
                    'handleOnOptionClickOnKeyDown',
                );

                dropdownSearch.find('button.dropdown-toggle').simulate('keydown');

                expect(handleOnOptionClickOnKeyDownSpy).not.toHaveBeenCalled();
            });

            it('should call updateOptions when receiving new default options when the option list is empty', () => {
                const updateOptionsSpy: jest.Mock<any, any> = jest.fn();
                const newProps: IDropdownSearchProps = {...ownProps, updateOptions: updateOptionsSpy};
                dropdownSearch.setProps(newProps);

                expect(updateOptionsSpy).not.toHaveBeenCalled();

                dropdownSearch.setProps({...newProps, options: [], defaultOptions: [{value: 'something'}]});

                expect(updateOptionsSpy).toHaveBeenCalledTimes(1);
            });

            describe('getDropdownOptionAppend', () => {
                it('should return a non null append jsx.element if append is defined', () => {
                    expect(
                        shallow(
                            dropdownSearchInstanceAsAny.getDropdownOptionAppend({value: 'test', append: 'test append'}),
                        )
                            .find('.dropdown-option-append')
                            .text(),
                    ).toBe('test append');
                });

                it('should a null value if option is undefined or append is undefined', () => {
                    expect(dropdownSearchInstanceAsAny.getDropdownOptionAppend()).toBeNull();
                    expect(dropdownSearchInstanceAsAny.getDropdownOptionAppend({value: 'test'})).toBeNull();
                });
            });

            describe('handleOnOptionClick', () => {
                it('should call onOptionClick if option is found in options', () => {
                    const onOptionClick = jest.fn();
                    dropdownSearch.setProps({...ownProps, onOptionClick});

                    dropdownSearchInstanceAsAny.handleOnOptionClick({
                        target: 'defined',
                        currentTarget: {dataset: {value: options[0].value}},
                    });

                    expect(onOptionClick).toHaveBeenCalledTimes(1);
                });

                it('should not call onOptionClick if option was not found in options', () => {
                    const onOptionClick = jest.fn();
                    dropdownSearch.setProps({...ownProps, onOptionClick});

                    dropdownSearchInstanceAsAny.handleOnOptionClick({
                        target: 'defined',
                        currentTarget: {dataset: {value: 'i do not exist in options'}},
                        preventDefault: _.noop,
                        stopPropagation: _.noop,
                    });

                    expect(onOptionClick).not.toHaveBeenCalled();
                });
            });

            describe('getSelectedOption', () => {
                it('should return undefined if there are no selected options', () => {
                    expect(dropdownSearchInstanceAsAny.getSelectedOption()).toBeUndefined();
                });

                it('should return the selected option if there is one', () => {
                    const selected = {value: 'test', selected: true};
                    dropdownSearch.setProps({...ownProps, options: [selected, ...ownProps.options]});

                    expect(dropdownSearchInstanceAsAny.getSelectedOption()).toEqual(selected);
                });
            });

            describe('getDropdownOptions', () => {
                it('should return li elements if the infiniteScroll and autoInfiniteScroll props are undefined', () => {
                    expect(dropdownSearchInstanceAsAny.getDropdownOptions()[0].type).toBe('li');
                });

                it('should return div elements if the infiniteScrollProps are defined', () => {
                    dropdownSearch.setProps({
                        ...ownProps,
                        infiniteScroll: {...infiniteScrollProps},
                    });

                    expect(dropdownSearchInstanceAsAny.getDropdownOptions()[0].type).toBe('div');
                });

                it('should return div elements if the autoInfiniteScroll prop is defined', () => {
                    dropdownSearch.setProps({
                        ...ownProps,
                        autoInfiniteScroll: {...autoInfiniteScrollOptions},
                    });

                    expect(dropdownSearchInstanceAsAny.getDropdownOptions()[0].type).toBe('div');
                });
            });

            describe('getDropdownMenu', () => {
                it('should return null if isOpened is false', () => {
                    expect(dropdownSearchInstanceAsAny.getDropdownMenu()).toBeNull();
                });

                it('should return a ul if the infiniteScroll and autoInfiniteScroll props are undefined', () => {
                    dropdownSearch.setProps({
                        ...ownProps,
                        isOpened: true,
                    });

                    expect(dropdownSearchInstanceAsAny.getDropdownMenu().type).toBe('ul');
                });

                it('should return a DropdownSearchInfiniteScrollOptions if the infiniteScroll prop is defined', () => {
                    dropdownSearch.setProps({
                        ...ownProps,
                        isOpened: true,
                        infiniteScroll: {...infiniteScrollProps},
                    });

                    expect(dropdownSearchInstanceAsAny.getDropdownMenu().type).toBe(
                        DropdownSearchInfiniteScrollOptions,
                    );
                });

                it('should return a DropdownSearchInfiniteScrollOptions if the autoInfiniteScroll prop is defined', () => {
                    dropdownSearch.setProps({
                        ...ownProps,
                        isOpened: true,
                        autoInfiniteScroll: {...autoInfiniteScrollOptions},
                    });

                    expect(dropdownSearchInstanceAsAny.getDropdownMenu().type).toBe(DropdownSearchAutoInfiniteScroll);
                });

                it('should call the hasMoreItems prop to let the infinite scroll if there are more items', () => {
                    const hasMoreItemsSpy: jest.Mock<any, any> = jest.fn();
                    dropdownSearch.setProps({
                        ...ownProps,
                        isOpened: true,
                        infiniteScroll: {...infiniteScrollProps},
                        hasMoreItems: hasMoreItemsSpy,
                    });
                    const hasMoreItemsCallsCount = hasMoreItemsSpy.mock.calls.length;
                    dropdownSearchInstanceAsAny.getDropdownMenu();

                    expect(hasMoreItemsSpy).toHaveBeenCalledTimes(hasMoreItemsCallsCount + 1);
                });

                it(`if infiniteScroll prop is defined
                    should call handleOnMouseEnter when calling DropdownSearchInfiniteScrollOptions onMouseEnter prop`, () => {
                    const handleOnMouseEnterSpy = jest.spyOn<any, string>(dropdownSearchInstance, 'handleOnMouseEnter');

                    dropdownSearch.setProps({
                        ...ownProps,
                        isOpened: true,
                        infiniteScroll: {...infiniteScrollProps},
                    });

                    dropdownSearchInstanceAsAny.getDropdownMenu().props.onMouseEnter();

                    expect(handleOnMouseEnterSpy).toHaveBeenCalledTimes(1);
                });

                it(`if autoInfiniteScroll prop is defined
                    should call handleOnMouseEnter when calling DropdownSearchInfiniteScrollOptions onMouseEnter prop`, () => {
                    const handleOnMouseEnterSpy = jest.spyOn<any, string>(dropdownSearchInstance, 'handleOnMouseEnter');

                    dropdownSearch.setProps({
                        ...ownProps,
                        isOpened: true,
                        autoInfiniteScroll: {...autoInfiniteScrollOptions},
                    });

                    dropdownSearchInstanceAsAny.getDropdownMenu().props.onMouseEnter();

                    expect(handleOnMouseEnterSpy).toHaveBeenCalledTimes(1);
                });
            });
        });

        describe('Props functionality', () => {
            let selectedOption: IDropdownOption = defaultSelectedOptionPlaceholder;

            beforeEach(() => {
                selectedOption = {
                    prefix: 'test',
                    value: 'test1',
                    displayValue: 'test 2',
                    icon: CrossSize16Px,
                    selected: true,
                };
            });

            it('should show the filterBox if the dropdown is open and search is on', () => {
                renderDropdownSearch({...ownProps, isOpened: true});

                expect(dropdownSearch.find(FilterBox).length).toBe(1);
            });

            it('should show the FilterBox if the dropdown is open and search is off and supportSingleCustomOption is true', () => {
                const infiniteSearchThreshold = 1000000000000;
                renderDropdownSearch({
                    ...ownProps,
                    isOpened: true,
                    searchThresold: infiniteSearchThreshold,
                    supportSingleCustomOption: true,
                });

                expect(dropdownSearch.find(FilterBox).length).toBe(1);
            });

            it('should show the button if the dropdown is open and search is off and supportSingleCustomOption is false', () => {
                const infiniteSearchThreshold = 1000000000000;
                const dropdown = mount(
                    <DropdownSearch
                        {...ownProps}
                        searchThresold={infiniteSearchThreshold}
                        isOpened
                        supportSingleCustomOption={false}
                    />,
                );

                expect(dropdown.find('button.dropdown-toggle').length).toBe(1);
            });

            it('should show the button if the dropdown is close', () => {
                renderDropdownSearch({...ownProps, isOpened: false});

                expect(dropdownSearch.find('button.dropdown-toggle').length).toBe(1);
            });

            it('should call handleOnClose if a blur event occurs on the dropdown button', () => {
                renderDropdownSearch({...ownProps, isOpened: false});

                const handleOnCloseSpy = jest.spyOn(DropdownSearch.prototype as any, 'handleOnClose');
                dropdownSearch.find('button.dropdown-toggle').simulate('blur');

                expect(handleOnCloseSpy).toHaveBeenCalledTimes(1);
            });

            it('should call this.props.onClose if a blur event occurs on the dropdown button and the onClose prop is defined', () => {
                const onCloseSpy = jest.fn();
                renderDropdownSearch({...ownProps, isOpened: false, onClose: onCloseSpy});

                dropdownSearch.find('button.dropdown-toggle').simulate('blur');

                expect(onCloseSpy).toHaveBeenCalledTimes(1);
            });

            it('should show the button with a fixed prepend if it has one', () => {
                const fixedPrepend = 'prependo';
                renderDropdownSearch({...ownProps, isOpened: false, fixedPrepend});

                expect(dropdownSearch.find(Content).text()).toContain(fixedPrepend);
            });

            it('should show the dropdown prepend if the selected option has one', () => {
                renderDropdownSearch({...ownProps, isOpened: true});

                expect(dropdownSearch.find('.dropdown-prepend').text()).toBe(selectedOption.prefix);
            });

            it('should show the dropdown svg if the selected option has one', () => {
                renderDropdownSearch({...ownProps, isOpened: true});

                expect(dropdownSearch.find('.value-icon').length).toBe(1);
            });

            it('should show the dropdown value if the selected option has one', () => {
                renderDropdownSearch({
                    ...ownProps,
                    options: [...options, selectedOption],
                });

                expect(dropdownSearch.find('.dropdown-selected-value').text()).toBe(selectedOption.displayValue);
            });

            it('should add the mod-menu class if the modMenu is set to true', () => {
                renderDropdownSearch({...ownProps, modMenu: true});

                expect(dropdownSearch.find('.mod-menu').length).toBe(1);
            });

            it('should show options with the highlight set on a span with the class bold when dropdown is opened', () => {
                renderDropdownSearch({...ownProps, highlightAllFilterResult: true, filterText: 'tes', isOpened: true});

                expect(dropdownSearch.find('span.bold').length).toBe(3);
            });

            it('should show the highlight if the filterText is contained in the middle of a word', () => {
                renderDropdownSearch({...ownProps, highlightAllFilterResult: true, filterText: 'es', isOpened: true});

                expect(dropdownSearch.find('span.bold').length).toBe(3);
            });

            it('should not show the highlight if the number of result if greater than the highlightThreshold', () => {
                renderDropdownSearch({...ownProps, highlightThreshold: 1, filterText: 'tes'});

                expect(dropdownSearch.find('span.bold').length).toBe(0);
            });

            it('should disabled the dropdown', () => {
                renderDropdownSearch({...ownProps, isDisabled: true});

                expect(dropdownSearch.find('.dropdown-toggle').prop('disabled')).toBe(true);
            });

            it('should call getNoOptions if no options are in the dropdown', () => {
                const getNoOptionsSpy = jest.spyOn(DropdownSearch.prototype as any, 'getNoOptions');
                renderDropdownSearch({...ownProps, isOpened: true, options: []});

                expect(getNoOptionsSpy).toHaveBeenCalledTimes(1);
            });

            it('should return a list of one descriptive element when getNoOptions is called', () => {
                renderDropdownSearch({...ownProps, isOpened: true, options: []});

                expect(JSON.stringify(dropdownSearchInstanceAsAny.getNoOptions())).toBe(
                    JSON.stringify([
                        <li key="noResultDropdownSearch">
                            <span className="no-search-results">{dropdownSearchInstance.props.noResultText}</span>
                        </li>,
                    ]),
                );
            });

            it('should scroll down if the active option is not visible by the user inside the dropdown list', () => {
                const opts = _.times(20, (n: number) => ({value: `test ${n}`}));

                renderDropdownSearch({
                    ...ownProps,
                    defaultSelectedOption: {value: 'test 1', displayValue: 'test 1'},
                    isOpened: true,
                    options: opts,
                    activeOption: {value: 'testd 1', displayValue: 'test 1'},
                });

                jest.spyOn(dropdownSearchInstanceAsAny, 'isScrolledIntoView').mockReturnValue(false);
                const spy = jest.spyOn(dropdownSearchInstanceAsAny, 'updateScrollPositionBasedOnActiveElement');

                const ul: Element = dropdownSearch.find('ul.dropdown-menu').getDOMNode();
                jest.spyOn(ul, 'getBoundingClientRect').mockReturnValue({bottom: 10, top: 10} as DOMRect);

                dropdownSearch.setProps({activeOption: {value: 'test 15'}});

                expect(spy).toHaveBeenCalledTimes(1);
            });

            it('should scroll up if the active option is not visible by the user inside the dropdown list', () => {
                const opts = _.times(20, (n: number) => ({value: `test ${n}`, displayValue: `test ${n}`}));

                renderDropdownSearch({
                    ...ownProps,
                    defaultSelectedOption: {value: 'test 1', displayValue: 'test 1'},
                    isOpened: true,
                    options: opts,
                    activeOption: {value: 'test 19', displayValue: 'test 19'},
                });

                jest.spyOn(dropdownSearchInstanceAsAny, 'isScrolledIntoView').mockReturnValue(false);
                const spy = jest.spyOn<any, string>(dropdownSearchInstance, 'updateScrollPositionBasedOnActiveElement');

                const ul: Element = dropdownSearch.find('ul.dropdown-menu').getDOMNode();
                jest.spyOn(ul, 'getBoundingClientRect').mockReturnValue({bottom: 200000, top: 200000} as DOMRect);

                dropdownSearch.setProps({activeOption: {value: 'test 1', displayValue: 'test 1'}});

                expect(spy).toHaveBeenCalledTimes(1);
            });
        });

        describe('isSearchOn', () => {
            const renderDropdownSearchWithNumberOfOptions = (numberOfOptions: number) => {
                renderDropdownSearch({
                    ...ownProps,
                    defaultSelectedOption: {value: 'test 1', displayValue: 'test 1'},
                    isOpened: true,
                    options: _.times(numberOfOptions, (n: number) => ({value: `${n}`})),
                    searchThresold: 2,
                    activeOption: {value: 'test 19', displayValue: 'test 19'},
                });
            };

            it('should return true if the number of options is greater than the search thresold', () => {
                renderDropdownSearchWithNumberOfOptions(3);

                expect(dropdownSearchInstanceAsAny.isSearchOn()).toBe(true);
            });

            it('should return false if the number of options is equal to the search thresold', () => {
                renderDropdownSearchWithNumberOfOptions(2);

                expect(dropdownSearchInstanceAsAny.isSearchOn()).toBe(false);
            });

            it('should return false if the number of options is lower to the search thresold', () => {
                renderDropdownSearchWithNumberOfOptions(1);

                expect(dropdownSearchInstanceAsAny.isSearchOn()).toBe(false);
            });
        });

        describe('disabled tooltip', () => {
            it('should render each option wrapped by a tooltip if they are disabled and disabledTooltip is defined', () => {
                renderDropdownSearch({
                    ...ownProps,
                    isOpened: true,
                    options: options.map((opt: IDropdownOption) => ({
                        ...opt,
                        disabled: true,
                        disabledTooltip: {title: 'i am disabled'},
                    })),
                });

                expect(dropdownSearch.find(Tooltip).length).toBe(options.length);
            });

            it('should not render each option wrapped by a tooltip if they are disabled and disabledTooltip is undefined', () => {
                renderDropdownSearch({
                    ...ownProps,
                    isOpened: true,
                    options: options.map((opt: IDropdownOption) => ({...opt, disabled: true})),
                });

                expect(dropdownSearch.find(Tooltip).length).toBe(0);
            });

            it('should not render each option wrapped by a tooltip if they are not disabled', () => {
                renderDropdownSearch({
                    ...ownProps,
                    isOpened: true,
                });

                expect(dropdownSearch.find(Tooltip).length).toBe(0);
            });
        });
    });
});
