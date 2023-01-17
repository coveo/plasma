import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {keyCode} from '../../../utils/InputUtils.js';
import {clearState} from '../../../utils/ReduxUtils.js';
import {PlasmaTestState, TestUtils} from '../../../utils/tests/TestUtils.js';
import {UUID} from '../../../utils/UUID.js';
import {DropdownSearch, IDropdownSearchProps} from '../DropdownSearch.js';
import {
    DropdownSearchActions,
    toggleDropdownSearch,
    updateActiveOptionDropdownSearch,
    updateOptionsDropdownSearch,
} from '../DropdownSearchActions.js';
import {DropdownSearchConnected} from '../DropdownSearchConnected.js';
import {defaultSelectedOptionPlaceholder} from '../DropdownSearchReducers.js';

describe('DropdownSearch', () => {
    const id: string = UUID.generate();

    describe('<DropdownSearchConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let dropdownSearch: ReactWrapper<IDropdownSearchProps, any>;
        let store: Store<PlasmaTestState>;

        const defaultOptions = [{value: 'a'}, {value: 'b'}];

        const renderDropdownSearchConnected = () => {
            wrapper = mount(
                <Provider store={store}>
                    <DropdownSearchConnected id={id} defaultOptions={defaultOptions} />
                </Provider>,
                {attachTo: document.getElementById('App')}
            );
            dropdownSearch = wrapper.find(DropdownSearch).first();
        };

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
        });

        describe('mount and unmount', () => {
            it('should call onMount prop when mounted', () => {
                renderDropdownSearchConnected();

                wrapper.unmount();
                store.dispatch(clearState());

                expect(store.getState().dropdownSearch.length).toBe(0);

                wrapper.mount();

                expect(store.getState().dropdownSearch.length).toBe(1);
            });

            it('should also dispatch a updateOptionsDropdownSearch onMount if there is a defaultSelectedOption', () => {
                renderDropdownSearchConnected();

                expect(store.getState().lastAction.type).not.toBe(DropdownSearchActions.update);

                wrapper.unmount();

                wrapper = mount(
                    <Provider store={store}>
                        <DropdownSearchConnected
                            id={id}
                            defaultOptions={defaultOptions}
                            defaultSelectedOption={defaultSelectedOptionPlaceholder}
                        />
                    </Provider>,
                    {attachTo: document.getElementById('App')}
                );

                expect(store.getState().lastAction.type).toBe(DropdownSearchActions.update);
            });

            it('should call onDestroy prop when will unmount', () => {
                renderDropdownSearchConnected();

                wrapper.unmount();

                expect(store.getState().dropdownSearch.length).toBe(0);
            });
        });

        describe('mapStateToProps', () => {
            it('should get an id as a prop', () => {
                renderDropdownSearchConnected();

                const idProp = dropdownSearch.props().id;

                expect(idProp).toBeDefined();
                expect(idProp).toBe(id);
            });

            it('should get the isOpened as a prop', () => {
                renderDropdownSearchConnected();

                const isOpenedProp = dropdownSearch.props().isOpened;

                expect(isOpenedProp).toBeDefined();
                expect(isOpenedProp).toBe(false);
            });

            it('should get the options as a prop', () => {
                renderDropdownSearchConnected();

                const optionsProp = dropdownSearch.props().options;

                expect(optionsProp).toBeDefined();
                expect(optionsProp.length).toBe(3);
            });

            it('should get the default selected option as a prop', () => {
                renderDropdownSearchConnected();

                const defaultSelectedOptionProp = _.findWhere(dropdownSearch.props().options, {selected: true});

                expect(defaultSelectedOptionProp).toBeDefined();
                expect(defaultSelectedOptionProp).toBe(defaultSelectedOptionPlaceholder);
            });

            it('should get the filterText as a prop', () => {
                renderDropdownSearchConnected();

                const filterTextProp = dropdownSearch.props().filterText;

                expect(filterTextProp).toBeDefined();
                expect(filterTextProp).toBe('');
            });

            it('should get the setFocusOnDropdownButton undefined as a prop on mount', () => {
                renderDropdownSearchConnected();

                const setFocusOnDropdownButtonProp = dropdownSearch.props().setFocusOnDropdownButton;

                expect(setFocusOnDropdownButtonProp).toBeUndefined();
            });

            it('should get the activeOption undefined as a prop on mount', () => {
                renderDropdownSearchConnected();

                const activeOptionProp = dropdownSearch.props().activeOption;

                expect(activeOptionProp).toBeUndefined();
            });
        });

        describe('mapDispatchToProps', () => {
            it('should get what to do on destroy as a prop', () => {
                renderDropdownSearchConnected();

                const onDestroyProp = dropdownSearch.props().onDestroy;

                expect(onDestroyProp).toBeDefined();
            });

            it('should get what to do on onMount as a prop', () => {
                renderDropdownSearchConnected();

                const onMountProp = dropdownSearch.props().onMount;

                expect(onMountProp).toBeDefined();
            });

            it('should get what to do on onBlur as a prop', () => {
                renderDropdownSearchConnected();

                const onBlurProp = dropdownSearch.props().onBlur;

                expect(onBlurProp).toBeDefined();
            });

            it('should get what to do on onOptionClick as a prop', () => {
                renderDropdownSearchConnected();

                const onOptionClickProp = dropdownSearch.props().onOptionClick;

                expect(onOptionClickProp).toBeDefined();
            });

            it('should get what to do on onFilterTextChange as a prop', () => {
                renderDropdownSearchConnected();

                const onFilterClickProp = dropdownSearch.props().onFilterTextChange;

                expect(onFilterClickProp).toBeDefined();
            });

            it('should get what to do on onKeyDownFilterBox as a prop', () => {
                renderDropdownSearchConnected();

                const onKeyDownFilterBox = dropdownSearch.props().onKeyDownFilterBox;

                expect(onKeyDownFilterBox).toBeDefined();
            });

            it('should get what to do on onKeyDownDropdownButton as a prop', () => {
                renderDropdownSearchConnected();

                const onKeyDownDropdownButton = dropdownSearch.props().onKeyDownDropdownButton;

                expect(onKeyDownDropdownButton).toBeDefined();
            });

            it('should get what to do on onMouseEnterDropdown as a prop', () => {
                renderDropdownSearchConnected();

                const onMouseEnterDropdown = dropdownSearch.props().onMouseEnterDropdown;

                expect(onMouseEnterDropdown).toBeDefined();
            });

            it('should get what to do on onClose as a prop', () => {
                renderDropdownSearchConnected();

                const onClose = dropdownSearch.props().onClose;

                expect(onClose).toBeDefined();
            });

            it('should toggle the dropdown class to open and close on click on the dropdown button', () => {
                renderDropdownSearchConnected();

                expect(wrapper.find('.dropdown').find('.open').length).toBe(0);
                wrapper.find('.dropdown-toggle').simulate('click');

                expect(wrapper.find('.dropdown').find('.open').length).toBe(1);
            });

            it('should close the dropdown on calling onClose', () => {
                renderDropdownSearchConnected();

                wrapper.find('.dropdown-toggle').simulate('click');

                expect(wrapper.find('.open').length).toBe(1);
                wrapper.find(DropdownSearch).props().onClose();
                wrapper.update();

                expect(wrapper.find('.dropdown').find('.open').length).toBe(0);
            });

            it('should toggle the close dropdown on blur', () => {
                renderDropdownSearchConnected();

                const dropdown = wrapper.find('.dropdown');

                store.dispatch(toggleDropdownSearch(id));

                dropdownSearch.props().onBlur([]);

                expect(dropdown.find('.open').length).toBe(0);
            });

            it('should add the selected value in the state on click an option', () => {
                renderDropdownSearchConnected();

                store.dispatch(updateOptionsDropdownSearch(id, [{value: 'test 1'}, {value: 'test 2'}]));
                store.dispatch(toggleDropdownSearch(id));
                wrapper.update();

                wrapper.find('li span').first().simulate('mouseDown');

                const selectedOption = store.getState().dropdownSearch[0].options[0];

                expect(selectedOption).not.toBe(defaultSelectedOptionPlaceholder);
                expect(selectedOption.value).toBe('test 1');
            });

            it('should add the filterText in the state on onFilterTextChange', () => {
                renderDropdownSearchConnected();

                const filter: string = 't';

                expect(store.getState().dropdownSearch[0].filterText).toBe('');

                dropdownSearch.props().onFilterTextChange(filter);

                expect(store.getState().dropdownSearch[0].filterText).toBe(filter);
            });

            it('should set the setFocusOnDropdownButton to true if the keyCode send on onKeyDownDropdownButton is "Enter"', () => {
                renderDropdownSearchConnected();

                expect(dropdownSearch.props().setFocusOnDropdownButton).toBeUndefined();

                store.dispatch(updateActiveOptionDropdownSearch(id, keyCode.downArrow));
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);

                wrapper
                    .find(DropdownSearch)
                    .props()
                    .onKeyDownDropdownButton(keyCode.enter, {value: 'anywoulddo', selected: false});
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(true);
            });

            it('should set the setFocusOnDropdownButton to true if the keyCode send on onKeyDownDropdownButton is "Tab"', () => {
                renderDropdownSearchConnected();

                expect(dropdownSearch.props().setFocusOnDropdownButton).toBeUndefined();

                store.dispatch(updateActiveOptionDropdownSearch(id, keyCode.downArrow));
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);

                wrapper
                    .find(DropdownSearch)
                    .props()
                    .onKeyDownDropdownButton(keyCode.tab, {value: 'anywoulddo', selected: false});
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(true);
            });

            it('should set the setFocusOnDropdownButton to true if the keyCode send on onKeyDownFilterBox is "Tab"', () => {
                renderDropdownSearchConnected();

                expect(dropdownSearch.props().setFocusOnDropdownButton).toBeUndefined();

                store.dispatch(updateActiveOptionDropdownSearch(id, keyCode.downArrow));
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);

                wrapper
                    .find(DropdownSearch)
                    .props()
                    .onKeyDownFilterBox(keyCode.tab, {value: 'anywoulddo', selected: false});
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(true);
            });

            it('should update the activeOption on "upArrow" and set the setFocusOnDropdownButton to false', () => {
                renderDropdownSearchConnected();

                expect(dropdownSearch.props().activeOption).toBeUndefined();

                dropdownSearch.props().onKeyDownDropdownButton(keyCode.upArrow);
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().activeOption).toBeDefined();
                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);
            });

            it('should update the activeOption on "upArrow" for the first element if not defined', () => {
                renderDropdownSearchConnected();

                expect(dropdownSearch.props().activeOption).toBeUndefined();

                dropdownSearch.props().onKeyDownDropdownButton(keyCode.upArrow);
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().activeOption).toEqual(defaultOptions[0]);
            });

            it('should update the activeOption on "downArrow" and set the setFocusOnDropdownButton to false', () => {
                renderDropdownSearchConnected();

                expect(dropdownSearch.props().activeOption).toBeUndefined();

                dropdownSearch.props().onKeyDownDropdownButton(keyCode.downArrow);
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().activeOption).toBeDefined();
                expect(wrapper.find(DropdownSearch).props().setFocusOnDropdownButton).toBe(false);
            });

            it('should update the activeOption on "downArrow" for the first element if not defined', () => {
                renderDropdownSearchConnected();

                expect(dropdownSearch.props().activeOption).toBeUndefined();

                dropdownSearch.props().onKeyDownDropdownButton(keyCode.downArrow);
                wrapper.update();

                expect(wrapper.find(DropdownSearch).props().activeOption).toEqual(defaultOptions[0]);
            });

            it('should reset the activeOption and remove focus on dropdown on onMouseEnterDropdown', () => {
                renderDropdownSearchConnected();

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
