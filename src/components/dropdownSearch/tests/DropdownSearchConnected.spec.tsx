import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {keyCode} from '../../../utils/InputUtils';
import {clearState} from '../../../utils/ReduxUtils';
import {IReactVaporTestState, TestUtils} from '../../../utils/TestUtils';
import {UUID} from '../../../utils/UUID';
import {DropdownSearch, IDropdownSearchProps} from '../DropdownSearch';
import {
    DropdownSearchActions,
    toggleDropdownSearch,
    updateActiveOptionDropdownSearch,
    updateOptionsDropdownSearch,
} from '../DropdownSearchActions';
import {DropdownSearchConnected} from '../DropdownSearchConnected';
import {defaultSelectedOptionPlaceholder} from '../DropdownSearchReducers';

describe('DropdownSearch', () => {
    const id: string = UUID.generate();

    describe('<DropdownSearchConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let dropdownSearch: ReactWrapper<IDropdownSearchProps, any>;
        let store: Store<IReactVaporTestState>;

        const defaultOptions = [{value: 'a'}, {value: 'b'}];

        const renderDropdownSearchConnected = () => {
            wrapper = mount(
                <Provider store={store}>
                    <DropdownSearchConnected id={id} defaultOptions={defaultOptions} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            dropdownSearch = wrapper.find(DropdownSearch).first();
        };

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        describe('mount and unmount', () => {

            beforeEach(() => {
                renderDropdownSearchConnected();
            });

            it('should call onMount prop when mounted', () => {
                wrapper.unmount();
                store.dispatch(clearState());
                expect(store.getState().dropdownSearch.length).toBe(0);

                wrapper.mount();
                expect(store.getState().dropdownSearch.length).toBe(1);
            });

            it('should also dispatch a updateOptionsDropdownSearch onMount if there is a defaultSelectedOption', () => {
                expect(store.getState().lastAction.type).not.toBe(DropdownSearchActions.update);

                wrapper.unmount();

                wrapper = mount(
                    <Provider store={store}>
                        <DropdownSearchConnected id={id} defaultOptions={defaultOptions} defaultSelectedOption={defaultSelectedOptionPlaceholder} />
                    </Provider>,
                    {attachTo: document.getElementById('App')},
                );

                expect(store.getState().lastAction.type).toBe(DropdownSearchActions.update);
            });

            it('should call onDestroy prop when will unmount', () => {
                wrapper.unmount();
                expect(store.getState().dropdownSearch.length).toBe(0);
            });
        });

        describe('mapStateToProps', () => {

            beforeEach(() => {
                renderDropdownSearchConnected();
            });

            it('should get an id as a prop', () => {
                const idProp = dropdownSearch.props().id;

                expect(idProp).toBeDefined();
                expect(idProp).toBe(id);
            });

            it('should get the isOpened as a prop', () => {
                const isOpenedProp = dropdownSearch.props().isOpened;

                expect(isOpenedProp).toBeDefined();
                expect(isOpenedProp).toBe(false);
            });

            it('should get the options as a prop', () => {
                const optionsProp = dropdownSearch.props().options;

                expect(optionsProp).toBeDefined();
                expect(optionsProp.length).toBe(3);
            });

            it('should get the default selected option as a prop', () => {
                const defaultSelectedOptionProp = _.findWhere(dropdownSearch.props().options, {selected: true});

                expect(defaultSelectedOptionProp).toBeDefined();
                expect(defaultSelectedOptionProp).toBe(defaultSelectedOptionPlaceholder);
            });

            it('should get the filterText as a prop', () => {
                const filterTextProp = dropdownSearch.props().filterText;

                expect(filterTextProp).toBeDefined();
                expect(filterTextProp).toBe('');
            });

            it('should get the setFocusOnDropdownButton undefined as a prop on mount', () => {
                const setFocusOnDropdownButtonProp = dropdownSearch.props().setFocusOnDropdownButton;

                expect(setFocusOnDropdownButtonProp).toBeUndefined();
            });

            it('should get the activeOption undefined as a prop on mount', () => {
                const activeOptionProp = dropdownSearch.props().activeOption;

                expect(activeOptionProp).toBeUndefined();
            });

        });

        describe('mapDispatchToProps', () => {

            beforeEach(() => {
                renderDropdownSearchConnected();
            });

            it('should get what to do on destroy as a prop', () => {
                const onDestroyProp = dropdownSearch.props().onDestroy;

                expect(onDestroyProp).toBeDefined();
            });

            it('should get what to do on onMount as a prop', () => {
                const onMountProp = dropdownSearch.props().onMount;

                expect(onMountProp).toBeDefined();
            });

            it('should get what to do on onBlur as a prop', () => {
                const onBlurProp = dropdownSearch.props().onBlur;

                expect(onBlurProp).toBeDefined();
            });
            it('should get what to do on onOptionClick as a prop', () => {
                const onOptionClickProp = dropdownSearch.props().onOptionClick;

                expect(onOptionClickProp).toBeDefined();
            });

            it('should get what to do on onFilterTextChange as a prop', () => {
                const onFilterClickProp = dropdownSearch.props().onFilterTextChange;

                expect(onFilterClickProp).toBeDefined();
            });

            it('should get what to do on onKeyDownFilterBox as a prop', () => {
                const onKeyDownFilterBox = dropdownSearch.props().onKeyDownFilterBox;

                expect(onKeyDownFilterBox).toBeDefined();
            });

            it('should get what to do on onKeyDownDropdownButton as a prop', () => {
                const onKeyDownDropdownButton = dropdownSearch.props().onKeyDownDropdownButton;

                expect(onKeyDownDropdownButton).toBeDefined();
            });

            it('should get what to do on onMouseEnterDropdown as a prop', () => {
                const onMouseEnterDropdown = dropdownSearch.props().onMouseEnterDropdown;

                expect(onMouseEnterDropdown).toBeDefined();
            });

            it('should get what to do on onClose as a prop', () => {
                const onClose = dropdownSearch.props().onClose;

                expect(onClose).toBeDefined();
            });

            it('should toggle the dropdown class to open and close on click on the dropdown button', () => {
                expect(wrapper.find('.dropdown').find('.open').length).toBe(0, 'start closed');
                wrapper.find('.dropdown-toggle').simulate('click');
                expect(wrapper.find('.dropdown').find('.open').length).toBe(1, 'open on first click');
            });

            it('should close the dropdown on calling onClose', () => {
                wrapper.find('.dropdown-toggle').simulate('click');
                expect(wrapper.find('.open').length).toBe(1);
                wrapper.find(DropdownSearch).props().onClose();
                wrapper.update();
                expect(wrapper.find('.dropdown').find('.open').length).toBe(0);
            });

            it('should toggle the close dropdown on blur', () => {
                const dropdown = wrapper.find('.dropdown');

                store.dispatch(toggleDropdownSearch(id));

                dropdownSearch.props().onBlur([]);

                expect(dropdown.find('.open').length).toBe(0, 'close the dropdown on blur');
            });

            it('should add the selected value in the state on click an option', () => {
                store.dispatch(updateOptionsDropdownSearch(id, [{value: 'test 1'}, {value: 'test 2'}]));
                store.dispatch(toggleDropdownSearch(id));
                wrapper.update();

                wrapper.find('li span').first().simulate('mouseDown');

                const selectedOption = store.getState().dropdownSearch[0].options[0];
                expect(selectedOption).not.toBe(defaultSelectedOptionPlaceholder);
                expect(selectedOption.value).toBe('test 1');
            });

            it('should add the filterText in the state on onFilterTextChange', () => {
                const filter: string = 't';
                expect(store.getState().dropdownSearch[0].filterText).toBe('');

                dropdownSearch.props().onFilterTextChange(filter);
                expect(store.getState().dropdownSearch[0].filterText).toBe(filter);
            });

            it('should set the setFocusOnDropdownButton to true if the keyCode send on onKeyDownDropdownButton is "Enter"', () => {
                expect(dropdownSearch.props().setFocusOnDropdownButton).toBeUndefined();

                store.dispatch(updateActiveOptionDropdownSearch(id, keyCode.downArrow));
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);

                wrapper.find(DropdownSearch).props().onKeyDownDropdownButton(keyCode.enter, {value: 'anywoulddo', selected: false});
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(true);
            });

            it('should set the setFocusOnDropdownButton to true if the keyCode send on onKeyDownDropdownButton is "Tab"', () => {
                expect(dropdownSearch.props().setFocusOnDropdownButton).toBeUndefined();

                store.dispatch(updateActiveOptionDropdownSearch(id, keyCode.downArrow));
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);

                wrapper.find(DropdownSearch).props().onKeyDownDropdownButton(keyCode.tab, {value: 'anywoulddo', selected: false});
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(true);
            });

            it('should set the setFocusOnDropdownButton to true if the keyCode send on onKeyDownFilterBox is "Tab"', () => {
                expect(dropdownSearch.props().setFocusOnDropdownButton).toBeUndefined();

                store.dispatch(updateActiveOptionDropdownSearch(id, keyCode.downArrow));
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);

                wrapper.find(DropdownSearch).props().onKeyDownFilterBox(keyCode.tab, {value: 'anywoulddo', selected: false});
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(true);
            });

            it('should update the activeOption on "upArrow" and set the setFocusOnDropdownButton to false', () => {
                expect(dropdownSearch.props().activeOption).toBeUndefined();

                dropdownSearch.props().onKeyDownDropdownButton(keyCode.upArrow);
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().activeOption).toBeDefined();
                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);
            });

            it('should update the activeOption on "upArrow" for the first element if not defined', () => {
                expect(dropdownSearch.props().activeOption).toBeUndefined();

                dropdownSearch.props().onKeyDownDropdownButton(keyCode.upArrow);
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().activeOption).toEqual(defaultOptions[0]);
            });

            it('should update the activeOption on "downArrow" and set the setFocusOnDropdownButton to false', () => {
                expect(dropdownSearch.props().activeOption).toBeUndefined();

                dropdownSearch.props().onKeyDownDropdownButton(keyCode.downArrow);
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().activeOption).toBeDefined();
                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);
            });

            it('should update the activeOption on "downArrow" for the first element if not defined', () => {
                expect(dropdownSearch.props().activeOption).toBeUndefined();

                dropdownSearch.props().onKeyDownDropdownButton(keyCode.downArrow);
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().activeOption).toEqual(defaultOptions[0]);
            });

            it('should update the activeOption on "downArrow" for the first element if not defined', () => {
                expect(dropdownSearch.props().activeOption).toBeUndefined();

                dropdownSearch.props().onKeyDownDropdownButton(keyCode.downArrow);
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().activeOption).toEqual(defaultOptions[0]);
            });

            it('should reset the activeOption and remove focus on dropdown on onMouseEnterDropdown', () => {
                dropdownSearch.props().onKeyDownDropdownButton(keyCode.upArrow);
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().activeOption).toBeDefined();

                dropdownSearch.props().onMouseEnterDropdown();
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().activeOption).toBeUndefined();
                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);
            });
        });
    });
});
