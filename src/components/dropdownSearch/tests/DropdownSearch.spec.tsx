import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {keyCode} from '../../../utils/InputUtils';
import {UUID} from '../../../utils/UUID';
import {Content} from '../../content/Content';
import {FilterBox} from '../../filterBox/FilterBox';
import {Tooltip} from '../../tooltip/Tooltip';
import {DropdownSearch, IDropdownOption, IDropdownSearchProps} from '../DropdownSearch';
import {DropdownSearchInfiniteScrollOptions} from '../DropdownSearchInfiniteScrollOptions';
import {defaultSelectedOptionPlaceholder} from '../DropdownSearchReducers';

describe('DropdownSearch', () => {
    const id: string = UUID.generate();
    const options = [
        {value: 'test a', displayValue: 'test a', prefix: 'test'},
        {value: 'test b', displayValue: 'test b', svg: {svgClass: 'svg-class', svgName: 'svg-name'}},
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

    describe('<DropdownSearch />', () => {
        let dropdownSearch: ReactWrapper<IDropdownSearchProps, any>;
        let dropdownSearchInstance: DropdownSearch;
        let dropdownSearchInstanceAsAny: any;

        const renderDropdownSearch = (props?: IDropdownSearchProps) => {
            dropdownSearch = mount(
                <DropdownSearch {...props} />,
                {attachTo: document.getElementById('App')},
            );
            dropdownSearchInstance = dropdownSearch.instance() as DropdownSearch;
            dropdownSearchInstanceAsAny = dropdownSearchInstance;
        };

        afterEach(() => {
            dropdownSearch.detach();
        });

        describe('default props', () => {

            beforeEach(() => {
                renderDropdownSearch(ownProps);
            });

            it('should have the same object sent has parameter than the component props', () => {
                expect(dropdownSearch.props()).toEqual(_.extend({}, DropdownSearch.defaultProps, ownProps));
            });
        });

        describe('render', () => {
            it('should render without error', () => {
                expect(() => {
                    renderDropdownSearch(_.extend({}, ownProps));
                }).not.toThrow();
            });

            it('should render without error with no options provided', () => {
                expect(() => {
                    renderDropdownSearch(_.extend({}, ownProps, {
                        options: [],
                    }));
                }).not.toThrow();
            });
        });

        describe('event props', () => {

            beforeEach(() => {
                renderDropdownSearch(ownProps);
            });

            it('should call onMountCallBack prop if set when mounting', () => {
                const onMountCallBack = jasmine.createSpy('onMountCallBack');

                expect(() => dropdownSearchInstance.componentWillMount()).not.toThrow();

                dropdownSearch.unmount();
                dropdownSearch.setProps({onMountCallBack});
                dropdownSearch.mount();

                expect(onMountCallBack).toHaveBeenCalled();
            });

            it('should call onMount prop if set when mounting', () => {
                const onMountSpy = jasmine.createSpy('onMount');

                expect(() => dropdownSearchInstance.componentWillMount()).not.toThrow();

                dropdownSearch.unmount();
                dropdownSearch.setProps({onMount: onMountSpy});
                dropdownSearch.mount();

                expect(onMountSpy).toHaveBeenCalled();
            });

            it('should call onDestroy prop if set when will unmount', () => {
                const onDestroy = jasmine.createSpy('onDestroy');

                expect(() => dropdownSearchInstance.componentWillUnmount()).not.toThrow();

                dropdownSearch.setProps({onDestroy});
                dropdownSearch.unmount();

                expect(onDestroy).toHaveBeenCalled();
            });

            it('should call onFilterTextChange if defined when onChange the "filter-box" input', () => {
                const onFilterTextChange = jasmine.createSpy('onFilterTextChange');
                dropdownSearch.setProps({isOpened: true, onFilterTextChange});
                dropdownSearch.find('input.filter-box').simulate('change');

                expect(onFilterTextChange).toHaveBeenCalled();
            });

            it('should not call onFilterTextChange if defined when the filter box input changes and customFiltering is defined', () => {
                const onFilterTextChange = jasmine.createSpy('onFilterTextChange');
                dropdownSearch.setProps({isOpened: true, onFilterTextChange, customFiltering: jasmine.createSpy('customFiltering')});
                dropdownSearch.find('input.filter-box').simulate('change');

                expect(onFilterTextChange).not.toHaveBeenCalled();
            });

            it('shoudl call customFiltering if defined when the filter box input changes', () => {
                const customFiltering = jasmine.createSpy('customFiltering');
                dropdownSearch.setProps({isOpened: true, customFiltering});
                dropdownSearch.find('input.filter-box').simulate('change');

                expect(customFiltering).toHaveBeenCalledTimes(1);
            });

            it('should call onBlur if defined when we lost focus on "filter-box" input', () => {
                const onBlur = jasmine.createSpy('onBlur');
                dropdownSearch.setProps({onBlur, isOpened: true});

                const element = dropdownSearch.find('.filter-box');
                element.simulate('focus');
                element.simulate('blur');

                expect(onBlur).toHaveBeenCalled();
            });

            it('should call onToggleDropdown if defined when click the "dropdown-toggle" button', () => {
                const onToggleDropdown = jasmine.createSpy('onToggleDropdown');
                dropdownSearch.setProps({onToggleDropdown});

                dropdownSearch.find('button.dropdown-toggle').simulate('click');

                expect(onToggleDropdown).toHaveBeenCalled();
            });

            it('should call onClickCallBack if defined when click the "dropdown-toggle" button', () => {
                const onClickCallBack = jasmine.createSpy('onClickCallBack');
                dropdownSearch.setProps({onClickCallBack});

                dropdownSearch.find('button.dropdown-toggle').simulate('click');

                expect(onClickCallBack).toHaveBeenCalled();
            });

            it('should call onOptionClickCallBack if defined when click an option "dropdown-toggle" button', () => {
                const onOptionClickCallBack = jasmine.createSpy('onOptionClickCallBack');
                dropdownSearch.setProps({isOpened: true, onOptionClickCallBack});

                dropdownSearch.find('[data-value="test a"]').simulate('mousedown');

                expect(onOptionClickCallBack).toHaveBeenCalled();
            });

            it('should call onMouseEnterDropdown if defined when enter over the ul element and dropdown is opened', () => {
                renderDropdownSearch(_.extend({}, ownProps, {isOpened: true}));

                const onMouseEnterDropdown = jasmine.createSpy('onMouseEnterDropdown');
                dropdownSearch.setProps({onMouseEnterDropdown});

                dropdownSearch.find('ul.dropdown-menu').simulate('mouseenter');

                expect(onMouseEnterDropdown).toHaveBeenCalled();
            });

            it('should call onKeyDownFilterBox if defined when key down on "filter-box"', () => {
                const onKeyDownFilterBox = jasmine.createSpy('onKeyDownFilterBox');
                dropdownSearch.setProps({isOpened: true, onKeyDownFilterBox, activeOption: options[0]});

                dropdownSearch.find('input.filter-box').simulate('keydown');

                expect(onKeyDownFilterBox).toHaveBeenCalled();
            });

            it('should call onOptionClickCallBack if defined and they key is enter when key down on "filter-box"', () => {
                const onOptionClickCallBack = jasmine.createSpy('onOptionClickCallBack');
                dropdownSearch.setProps({
                    isOpened: true,
                    activeOption: {value: 'test a'},
                    onOptionClickCallBack,
                });

                dropdownSearch.find('input.filter-box').simulate('keydown', {keyCode: keyCode.enter});

                expect(onOptionClickCallBack).toHaveBeenCalled();
            });

            it('should call onOptionClickCallBack if defined and they key is tab when key down on "filter-box"', () => {
                const onOptionClickCallBack = jasmine.createSpy('onOptionClickCallBack');
                dropdownSearch.setProps({
                    isOpened: true,
                    activeOption: {value: 'test a'},
                    onOptionClickCallBack,
                });

                dropdownSearch.find('input.filter-box').simulate('keydown', {keyCode: keyCode.tab});

                expect(onOptionClickCallBack).toHaveBeenCalled();
            });

            it('should call onKeyDownDropdownButton if defined when key down on button "dropdown-toggle"', () => {
                const onKeyDownDropdownButton = jasmine.createSpy('onKeyDownDropdownButton');
                dropdownSearch.setProps({onKeyDownDropdownButton});

                dropdownSearch.find('button.dropdown-toggle').simulate('keydown');

                expect(onKeyDownDropdownButton).toHaveBeenCalled();
            });

            it('should call handleOnOptionClickOnKeyDown if search is off', () => {
                spyOn(DropdownSearch.prototype as any, 'isSearchOn').and.returnValue(false);
                const handleOnOptionClickOnKeyDownSpy = spyOn(DropdownSearch.prototype as any, 'handleOnOptionClickOnKeyDown');

                dropdownSearch.find('button.dropdown-toggle').simulate('keydown');

                expect(handleOnOptionClickOnKeyDownSpy).toHaveBeenCalledTimes(1);
            });

            it('should not call handleOnOptionClickOnKeyDown if search is on', () => {
                spyOn(DropdownSearch.prototype as any, 'isSearchOn').and.returnValue(true);
                const handleOnOptionClickOnKeyDownSpy = spyOn(DropdownSearch.prototype as any, 'handleOnOptionClickOnKeyDown');

                dropdownSearch.find('button.dropdown-toggle').simulate('keydown');

                expect(handleOnOptionClickOnKeyDownSpy).not.toHaveBeenCalled();
            });

            it('should call updateOptions when receiving new default options when the option list is empty', () => {
                const updateOptionsSpy: jasmine.Spy = jasmine.createSpy('updateOptions');
                const newProps: IDropdownSearchProps = _.extend({}, ownProps, {updateOptions: updateOptionsSpy});
                dropdownSearch.setProps(newProps);

                expect(updateOptionsSpy).not.toHaveBeenCalled();

                dropdownSearch.setProps(_.extend(newProps, {options: [], defaultOptions: [{value: 'something'}]}));

                expect(updateOptionsSpy).toHaveBeenCalledTimes(1);
            });

            describe('getDropdownOptionAppend', () => {
                it('should return a non null append jsx.element if append is defined', () => {
                    expect(shallow(dropdownSearchInstanceAsAny.getDropdownOptionAppend({value: 'test', append: 'test append'}))
                        .find('.dropdown-option-append').text()).toBe('test append');
                });

                it('should a null value if option is undefined or append is undefined', () => {
                    expect(dropdownSearchInstanceAsAny.getDropdownOptionAppend()).toBeNull();
                    expect(dropdownSearchInstanceAsAny.getDropdownOptionAppend({value: 'test'})).toBeNull();
                });
            });

            describe('handleOnOptionClick', () => {
                it('should call onOptionClick if option is found in options', () => {
                    const onOptionClick = jasmine.createSpy('onOptionClick');
                    dropdownSearch.setProps({...ownProps, onOptionClick});

                    dropdownSearchInstanceAsAny.handleOnOptionClick({target: 'defined', currentTarget: {dataset: {value: options[0].value}}});
                    expect(onOptionClick).toHaveBeenCalledTimes(1);
                });

                it('should call onOptionClick if option is found in options', () => {
                    const onOptionClick = jasmine.createSpy('onOptionClick');
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
                it('should return li elements if the infiniteScrollProps are undefined', () => {
                    expect(dropdownSearchInstanceAsAny.getDropdownOptions()[0].type).toBe('li');
                });

                it('should return div elements if the infiniteScrollProps are defined', () => {
                    dropdownSearch.setProps({
                        ...ownProps,
                        infiniteScroll: {
                            dataLength: 2,
                            hasMore: true,
                            next: jasmine.createSpy('next'),
                            endMessage: 'no more',
                            loader: undefined,
                        },
                    });
                    expect(dropdownSearchInstanceAsAny.getDropdownOptions()[0].type).toBe('div');
                });
            });

            describe('getDropdownMenu', () => {
                it('should return null if isOpened is false', () => {
                    expect(dropdownSearchInstanceAsAny.getDropdownMenu()).toBeNull();
                });

                it('should return a ul if the infiniteScrollProps are undefined', () => {
                    dropdownSearch.setProps({
                        ...ownProps,
                        isOpened: true,
                    });
                    expect(dropdownSearchInstanceAsAny.getDropdownMenu().type).toBe('ul');
                });

                it('should return a DropdownSearchInfiniteScrollOptions if the infiniteScrollProps are defined', () => {
                    dropdownSearch.setProps({
                        ...ownProps,
                        isOpened: true,
                        infiniteScroll: {
                            dataLength: 2,
                            hasMore: true,
                            next: jasmine.createSpy('next'),
                            endMessage: 'no more',
                            loader: undefined,
                        },
                    });
                    expect(dropdownSearchInstanceAsAny.getDropdownMenu().type).toBe(DropdownSearchInfiniteScrollOptions);
                });

                it('should call the hasMoreItems prop to let the infinite scroll if there are more items', () => {
                    const hasMoreItemsSpy: jasmine.Spy = jasmine.createSpy('hasMoreItems');
                    dropdownSearch.setProps({
                        ...ownProps,
                        isOpened: true,
                        infiniteScroll: {
                            dataLength: 2,
                            hasMore: true,
                            next: jasmine.createSpy('next'),
                            endMessage: 'no more',
                            loader: undefined,
                        },
                        hasMoreItems: hasMoreItemsSpy,
                    });
                    const hasMoreItemsCallsCount = hasMoreItemsSpy.calls.count();
                    dropdownSearchInstanceAsAny.getDropdownMenu();

                    expect(hasMoreItemsSpy).toHaveBeenCalledTimes(hasMoreItemsCallsCount + 1);
                });

                it('should call handleOnMouseEnter when calling DropdownSearchInfiniteScrollOptions onMouseEnter prop', () => {
                    const handleOnMouseEnterSpy = spyOn<any>(dropdownSearchInstance, 'handleOnMouseEnter');

                    dropdownSearch.setProps({
                        ...ownProps,
                        isOpened: true,
                        infiniteScroll: {
                            dataLength: 2,
                            hasMore: true,
                            next: jasmine.createSpy('next'),
                            endMessage: 'no more',
                            loader: undefined,
                        },
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
                    prefix: 'test', value: 'test1', displayValue: 'test 2',
                    svg: {
                        svgName: 'close',
                        svgClass: 'small',
                    },
                    selected: true,
                };
            });

            it('should show the filterBox if the dropdown is open and search is on', () => {
                renderDropdownSearch(_.extend({}, ownProps, {
                    isOpened: true,
                }));

                expect(dropdownSearch.find(FilterBox).length).toBe(1);
            });

            it('should show the button if the dropdown is open and search is off and supportSingleCustomOption is true', () => {
                const infiniteSearchThreshold = 1000000000000;
                renderDropdownSearch(_.extend({}, ownProps, {
                    isOpened: true,
                    searchThresold: infiniteSearchThreshold,
                    supportSingleCustomOption: true,
                }));

                expect(dropdownSearch.find(FilterBox).length).toBe(1);
            });

            it('should show the button if the dropdown is open and search is off and supportSingleCustomOption is false', () => {
                const infiniteSearchThreshold = 1000000000000;
                renderDropdownSearch(_.extend({}, ownProps, {
                    isOpened: true,
                    searchThresold: infiniteSearchThreshold,
                }));

                expect(dropdownSearch.find('button.dropdown-toggle').length).toBe(1);
            });

            it('should show the button if the dropdown is close', () => {
                renderDropdownSearch(_.extend({}, ownProps, {
                    isOpened: false,
                }));

                expect(dropdownSearch.find('button.dropdown-toggle').length).toBe(1);
            });

            it('should call handleOnClose if a blur event occurs on the dropdown button', () => {
                renderDropdownSearch(_.extend({}, ownProps, {
                    isOpened: false,
                }));

                const handleOnCloseSpy = spyOn(DropdownSearch.prototype as any, 'handleOnClose');
                dropdownSearch.find('button.dropdown-toggle').simulate('blur');
                expect(handleOnCloseSpy).toHaveBeenCalledTimes(1);
            });

            it('should call this.props.onClose if a blur event occurs on the dropdown button and the onClose prop is defined', () => {
                const onCloseSpy = jasmine.createSpy('onCloseSpy');
                renderDropdownSearch(_.extend({}, ownProps, {
                    isOpened: false,
                    onClose: onCloseSpy,
                }));

                dropdownSearch.find('button.dropdown-toggle').simulate('blur');
                expect(onCloseSpy).toHaveBeenCalledTimes(1);
            });

            it('should show the button with a fixed prepend if it has one', () => {
                const fixedPrepend = 'prependo';
                renderDropdownSearch(_.extend({}, ownProps, {
                    isOpened: false,
                    fixedPrepend,
                }));

                expect(dropdownSearch.find(Content).text()).toContain(fixedPrepend);
            });

            it('should show the dropdown prepend if the selected option has one', () => {
                renderDropdownSearch(_.extend({}, {...ownProps, isOpened: true}));

                expect(dropdownSearch.find('.dropdown-prepend').text()).toBe(selectedOption.prefix);
            });

            it('should show the dropdown svg if the selected option has one', () => {
                renderDropdownSearch(_.extend({}, {...ownProps, isOpened: true}));

                expect(dropdownSearch.find('.value-icon').length).toBe(1);
            });

            it('should show the dropdown value if the selected option has one', () => {
                renderDropdownSearch(_.extend({}, {
                    ownProps,
                    options: [...options, selectedOption],
                },
                ));

                expect(dropdownSearch.find('.dropdown-selected-value').text()).toBe(selectedOption.displayValue);
            });

            it('should add the mod-menu class if the modMenu is set to true', () => {
                renderDropdownSearch(_.extend({}, ownProps, {
                    modMenu: true,
                }));

                expect(dropdownSearch.find('.mod-menu').length).toBe(1);
            });

            it('should show options with the highlight set on a span with the class bold when dropdown is opened', () => {
                renderDropdownSearch(_.extend({}, ownProps, {
                    highlightAllFilterResult: true,
                    filterText: 'tes',
                    isOpened: true,
                }));

                expect(dropdownSearch.find('span.bold').length).toBe(3);
            });

            it('should show the highlight if the filterText is contained in the middle of a word', () => {
                renderDropdownSearch(_.extend({}, ownProps, {
                    highlightAllFilterResult: true,
                    filterText: 'es',
                    isOpened: true,
                }));

                expect(dropdownSearch.find('span.bold').length).toBe(3);
            });

            it('should not show the highlight if the number of result if greater than the highlightThreshold', () => {
                renderDropdownSearch(_.extend({}, ownProps, {
                    highlightThreshold: 1,
                    filterText: 'tes',
                }));

                expect(dropdownSearch.find('span.bold').length).toBe(0);
            });

            it('should disabled the dropdown', () => {
                renderDropdownSearch(_.extend({}, ownProps, {
                    isDisabled: true,
                }));

                expect(dropdownSearch.find('.dropdown-toggle').prop('disabled')).toBe(true);
            });

            it('should call getNoOptions if no options are in the dropdown', () => {
                const getNoOptionsSpy = spyOn((DropdownSearch.prototype as any), 'getNoOptions');
                renderDropdownSearch(_.extend({}, ownProps, {
                    selectedOption: undefined,
                    isOpened: true,
                    options: [],
                }));

                expect(getNoOptionsSpy).toHaveBeenCalledTimes(1);
            });

            it('should return a list of one descriptive element when getNoOptions is called', () => {
                renderDropdownSearch(_.extend({}, ownProps, {
                    selectedOption: undefined,
                    isOpened: true,
                    options: [],
                }));

                expect(JSON.stringify(dropdownSearchInstanceAsAny.getNoOptions()))
                    .toBe(JSON.stringify([
                        <li key='noResultDropdownSearch'>
                            <span className='no-search-results'>{dropdownSearchInstance.props.noResultText}</span>
                        </li>,
                    ]));
            });

            it('should scroll down if the active option is not visible by the user inside the dropdown list', () => {
                const opts = _.times(20, (n: number) => {
                    return {value: `test ${n}`};
                });

                renderDropdownSearch(_.extend({}, ownProps, {
                    selectedOption: {value: 'test 1', displayValue: 'test 1'},
                    isOpened: true,
                    options: opts,
                    displayedOptions: options,
                    activeOption: {value: 'testd 1', displayValue: 'test 1'},
                }));

                spyOn(dropdownSearchInstanceAsAny, 'isScrolledIntoView').and.returnValue(false);
                const spy = spyOn(dropdownSearchInstanceAsAny, 'updateScrollPositionBasedOnActiveElement').and.callThrough();

                const ul: Element = dropdownSearch.find('ul.dropdown-menu').getDOMNode();
                spyOn(ul, 'getBoundingClientRect').and.returnValue({bottom: 10, top: 10});

                dropdownSearch.setProps({activeOption: {value: 'test 15'}});
                expect(spy).toHaveBeenCalledTimes(1);
            });

            it('should scroll up if the active option is not visible by the user inside the dropdown list', () => {
                const opts = _.times(20, (n: number) => {
                    return {value: `test ${n}`, displayValue: `test ${n}`};
                });

                renderDropdownSearch(_.extend({}, ownProps, {
                    selectedOption: {value: 'test 1', displayValue: 'test 1'},
                    isOpened: true,
                    options: opts,
                    displayedOptions: options,
                    activeOption: {value: 'test 19', displayValue: 'test 19'},
                }));

                spyOn(dropdownSearchInstanceAsAny, 'isScrolledIntoView').and.returnValue(false);
                const spy = spyOn<any>(dropdownSearchInstance, 'updateScrollPositionBasedOnActiveElement').and.callThrough();

                const ul: Element = dropdownSearch.find('ul.dropdown-menu').getDOMNode();
                spyOn(ul, 'getBoundingClientRect').and.returnValue({bottom: 200000, top: 200000});

                dropdownSearch.setProps({activeOption: {value: 'test 1', displayValue: 'test 1'}});
                expect(spy).toHaveBeenCalledTimes(1);
            });
        });

        describe('isSearchOn', () => {
            const renderDropdownSearchWithNumberOfOptions = (numberOfOptions: number) => {
                renderDropdownSearch(_.extend({}, ownProps, {
                    selectedOption: {value: 'test 1', displayValue: 'test 1'},
                    isOpened: true,
                    options: _.times(numberOfOptions, (n: number) => ({value: `${n}`})),
                    searchThresold: 2,
                    displayedOptions: options,
                    activeOption: {value: 'test 19', displayValue: 'test 19'},
                }));
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
                    options: options.map((opt: IDropdownOption) => ({...opt, disabled: true, disabledTooltip: {title: 'i am disabled'}})),
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
