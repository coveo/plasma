import {mount, ReactWrapper, ShallowWrapper} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {withServerSideProcessing} from '../../../../hoc/withServerSideProcessing/withServerSideProcessing';
import {IReactVaporState} from '../../../../ReactVapor';
import {keyCode} from '../../../../utils/InputUtils';
import {clearState} from '../../../../utils/ReduxUtils';
import {TestUtils} from '../../../../utils/tests/TestUtils';
import {Button} from '../../../button/Button';
import {FilterBoxSelectors} from '../../../filterBox';
import {filterThrough} from '../../../filterBox/FilterBoxActions';
import {FilterBoxConnected} from '../../../filterBox/FilterBoxConnected';
import {IItemBoxProps, ItemBox} from '../../../itemBox/ItemBox';
import {selectListBoxOption, setActiveListBoxOption} from '../../../listBox/ListBoxActions';
import {toggleSelect} from '../../SelectActions';
import {SelectConnected} from '../../SelectConnected';
import {ISingleSelectOwnProps, SingleSelectConnected} from '../../SingleSelectConnected';
import {SingleSelectWithFilter} from '../SelectComponents';
import {ISelectWithFilterOwnProps, selectWithFilter} from '../SelectWithFilter';

describe('Select', () => {
    describe('<SingleSelectWithFilter/>', () => {
        let wrapper: ReactWrapper<any, any>;
        let singleSelect: ReactWrapper<ISingleSelectOwnProps, void>;
        let store: Store<IReactVaporState>;

        const id: string = 'single-select-with-filter';
        const basicProps: ISelectWithFilterOwnProps & ISingleSelectOwnProps = {
            id,
        };

        const mountSingleSelect = (props?: Partial<ISelectWithFilterOwnProps & ISingleSelectOwnProps>) => {
            wrapper = mount(
                <Provider store={store}>
                    <SingleSelectWithFilter {...basicProps} {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')}
            );
            singleSelect = wrapper.find(SelectConnected).first();
        };

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
            if (wrapper && wrapper.exists()) {
                wrapper.detach();
            }
        });

        beforeAll(() => {
            TestUtils.makeDebounceStatic();
        });

        describe('mount and unmount', () => {
            it('should not throw on mount', () => {
                expect(() => mountSingleSelect()).not.toThrow();
            });

            it('should not throw on unmount', () => {
                mountSingleSelect();
                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('should add the list box to the state when mounted', () => {
                expect(store.getState().selects.length).toBe(0);

                mountSingleSelect();

                expect(store.getState().selects.length).toBe(1);
            });

            it('should add the string list to the state when mounted', () => {
                expect(store.getState().selectWithFilter[id]).toBeUndefined();

                mountSingleSelect();

                expect(store.getState().selectWithFilter[id]).toBeDefined();
            });

            it('should remove the list box from the state when the component unmount', () => {
                mountSingleSelect();

                expect(store.getState().selects.length).toBe(1);
                wrapper.unmount();

                expect(store.getState().selects.length).toBe(0);
            });

            it('should remove the list box from the state when the component unmount', () => {
                mountSingleSelect();

                expect(store.getState().selectWithFilter[id]).toBeDefined();

                wrapper.unmount();

                expect(store.getState().selectWithFilter[id]).toBeUndefined();
            });
        });

        it('should hide items when they do not match the filter', () => {
            const items = [{value: 'a'}, {value: 'b', selected: true}, {value: 'c'}];

            mountSingleSelect({items});
            store.dispatch(toggleSelect(id, true));
            store.dispatch(filterThrough(id, 'wontmatchanything'));
            wrapper.update();
            singleSelect = wrapper.find(SelectConnected);

            expect(singleSelect.props().items.length).toBe(items.length);
            singleSelect
                .find(SelectConnected)
                .props()
                .items.every((item: IItemBoxProps) => expect(item.hidden).toBe(true));
        });

        it('should not show items that are already hidden', () => {
            const items = [{value: 'a', hidden: true}, {value: 'b', selected: true}, {value: 'c'}];

            mountSingleSelect({items});
            store.dispatch(toggleSelect(id, true));
            store.dispatch(filterThrough(id, 'wontmatchanything'));
            store.dispatch(filterThrough(id, ''));
            wrapper.update();
            singleSelect = wrapper.find(SelectConnected);

            expect(singleSelect.props().items.length).toBe(items.length);
            expect(singleSelect.find(SelectConnected).props().items[0].hidden).toBe(true);
            expect(singleSelect.find(SelectConnected).props().items[1].hidden).toBe(false);
            expect(singleSelect.find(SelectConnected).props().items[2].hidden).toBe(false);
        });

        it('should hide items that do not match custom filter', () => {
            const items = [{value: 'a'}, {value: 'b', selected: true}, {value: 'c'}];

            mountSingleSelect({items, matchFilter: () => false});
            store.dispatch(toggleSelect(id, true));
            store.dispatch(filterThrough(id, 'wontmatchanything'));
            wrapper.update();
            singleSelect = wrapper.find(SelectConnected);

            expect(singleSelect.props().items.length).toBe(items.length);
            singleSelect
                .find(SelectConnected)
                .props()
                .items.every((item: IItemBoxProps) => expect(item.hidden).toBe(true));
        });

        it('should set the highlight value equal to the filter', () => {
            const filterValue = 'a';
            const items = [{value: 'aaaa'}, {value: 'baba', selected: true}, {value: 'dada'}];

            mountSingleSelect({items, matchFilter: () => true});
            store.dispatch(toggleSelect(id, true));
            store.dispatch(filterThrough(id, filterValue));
            wrapper.update();
            singleSelect = wrapper.find(SelectConnected);

            expect(singleSelect.props().items.length).toBe(items.length);
            singleSelect
                .find(SelectConnected)
                .props()
                .items.every((item: IItemBoxProps) => expect(item.highlight).toBe(filterValue));
        });

        describe('interactions', () => {
            const items = [{value: 'a'}, {value: 'b', selected: true}, {value: 'c'}];
            let dispatchSpy: jasmine.Spy;

            beforeEach(() => {
                dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
                mountSingleSelect({items});
            });

            it('should select the active element if the user press enter', () => {
                store.dispatch(toggleSelect(id, true));

                wrapper
                    .find('.dropdown-toggle')
                    .simulate('keydown', {keyCode: keyCode.enter})
                    .simulate('keyup', {keyCode: keyCode.enter});

                expect(dispatchSpy).toHaveBeenCalledWith(selectListBoxOption(id, undefined, items[1].value, 1));
            });

            it('should dispatch a setActiveListBoxOption when the user press the up or down arrow', () => {
                store.dispatch(toggleSelect(id, true));
                wrapper.update();

                expect(dispatchSpy).not.toHaveBeenCalledWith(setActiveListBoxOption(id, 1));
                wrapper
                    .find(FilterBoxConnected)
                    .find('input')
                    .simulate('keydown', {keyCode: keyCode.downArrow})
                    .simulate('keyup', {keyCode: keyCode.downArrow});

                expect(dispatchSpy).toHaveBeenCalledWith(setActiveListBoxOption(id, 1));

                expect(dispatchSpy).not.toHaveBeenCalledWith(setActiveListBoxOption(id, -1));
                wrapper
                    .find(FilterBoxConnected)
                    .find('input')
                    .simulate('keydown', {keyCode: keyCode.upArrow})
                    .simulate('keyup', {keyCode: keyCode.upArrow});

                expect(dispatchSpy).toHaveBeenCalledWith(setActiveListBoxOption(id, -1));
            });

            it('should dispatch a toggleSelect to open the Select when the user press the up or down arrow', () => {
                singleSelect
                    .find('.dropdown-toggle')
                    .simulate('keydown', {keyCode: keyCode.downArrow})
                    .simulate('keyup', {keyCode: keyCode.downArrow});
                expect(dispatchSpy).toHaveBeenCalledWith(toggleSelect(id));

                // Close the dropdown
                store.dispatch(toggleSelect(id, false));
                dispatchSpy.calls.reset();

                singleSelect
                    .find('.dropdown-toggle')
                    .simulate('keydown', {keyCode: keyCode.upArrow})
                    .simulate('keyup', {keyCode: keyCode.upArrow});

                expect(dispatchSpy).toHaveBeenCalledWith(toggleSelect(id));
            });
        });

        describe('With CustomValue Props', () => {
            const items = [{value: 'a'}, {value: 'b', selected: true}, {value: 'c'}];

            const mountSingleSelectCustomValues = (
                props: Partial<ISelectWithFilterOwnProps & ISingleSelectOwnProps> = {}
            ) => {
                wrapper = mount(
                    <Provider store={store}>
                        <SingleSelectWithFilter {...basicProps} {...props} customValues />
                    </Provider>,
                    {attachTo: document.getElementById('App')}
                );

                store.dispatch(toggleSelect(id, true));
                wrapper.update();
            };

            it('should not add a button with the filter if customValue is false', () => {
                mountSingleSelect({items, matchFilter: () => false});

                expect(wrapper.find(Button).length).toBe(0);
            });

            it('should add a button with the filter', () => {
                mountSingleSelectCustomValues({items, matchFilter: () => false});

                expect(wrapper.find(Button).length).toBe(1);
            });

            it('should not add the value in the store list on click button if the filter value is empty', () => {
                mountSingleSelectCustomValues({items, matchFilter: () => false});

                expect(store.getState().selectWithFilter[id].list.length).toBe(0);
                store.dispatch(filterThrough(id, ''));

                wrapper
                    .find(SelectConnected)
                    .find(Button)
                    .find('button')
                    .simulate('click');

                expect(store.getState().selectWithFilter[id].list.length).toBe(0);
            });

            it('should add the value in the store list on click button if the filterValue is not empty', () => {
                const filterValue: string = 'wontmatchanything';

                mountSingleSelectCustomValues({items, matchFilter: () => false});

                expect(store.getState().selectWithFilter[id].list.length).toBe(0);
                store.dispatch(filterThrough(id, filterValue));

                wrapper
                    .find(SelectConnected)
                    .find(Button)
                    .find('button')
                    .simulate('click');

                expect(store.getState().selectWithFilter[id].list.length).toBe(1);
                expect(store.getState().selectWithFilter[id].list[0]).toBe(filterValue);
            });

            it('should add an itemBox with the filter value in the list if it is not already in the initial list', () => {
                const complexItems: IItemBoxProps[] = [{value: 'abc'}, {value: 'afg'}];
                const filterValue: string = 'a';

                mountSingleSelectCustomValues({items: complexItems});
                store.dispatch(filterThrough(id, filterValue));

                wrapper.update();
                const itemsBox = wrapper
                    .find(SelectConnected)
                    .find(ItemBox)
                    .first();

                expect(itemsBox.props().value).toBe(filterValue);
            });

            it('should add an itemBox divider with the add itemBox in the list', () => {
                const complexItems: IItemBoxProps[] = [{value: 'abc'}, {value: 'afg'}];
                const filterValue: string = 'a';

                mountSingleSelectCustomValues({items: complexItems});
                store.dispatch(filterThrough(id, filterValue));

                wrapper.update();
                const itemsBox = wrapper
                    .find(SelectConnected)
                    .find(ItemBox)
                    .get(1);

                expect(itemsBox.props.divider).toBe(true);
            });

            it('should add an itemBox with the filter value in the list on click list item', () => {
                const filterValue: string = 'a';

                mountSingleSelectCustomValues({items: []});
                store.dispatch(filterThrough(id, filterValue));

                wrapper.update();
                wrapper
                    .find(SelectConnected)
                    .find(ItemBox)
                    .find('li')
                    .simulate('click');

                expect(store.getState().selectWithFilter[id].list.length).toBe(1);
                expect(store.getState().selectWithFilter[id].list[0]).toBe(filterValue);
            });
        });

        describe('when filter is processed on the server side', () => {
            const ServerSideMultiSingleSelectWithFilter: React.ComponentType<ISelectWithFilterOwnProps &
                ISingleSelectOwnProps> = _.compose(withServerSideProcessing, selectWithFilter)(SingleSelectConnected);

            const items = [{value: 'a'}, {value: 'b', selected: true}, {value: 'c'}];

            it('should not filter the items because it is done on the server', () => {
                spyOn(FilterBoxSelectors, 'getFilterText').and.returnValue('a');
                const component: ShallowWrapper<ISelectWithFilterOwnProps & ISingleSelectOwnProps> = shallowWithStore(
                    <ServerSideMultiSingleSelectWithFilter {...basicProps} items={items} />,
                    store
                ).dive();

                expect(component.props().items).toEqual(items);
            });

            it('should trigger the onUpdate prop when the selected predicate changes', () => {
                const onUpdateSpy = jasmine.createSpy('onUpdate');
                spyOn(FilterBoxSelectors, 'getFilterText').and.returnValue('current-filter-value');
                const component: ShallowWrapper<ISelectWithFilterOwnProps & ISingleSelectOwnProps> = shallowWithStore(
                    <ServerSideMultiSingleSelectWithFilter {...basicProps} items={items} onUpdate={onUpdateSpy} />,
                    store
                )
                    .dive()
                    .dive();

                expect(onUpdateSpy).not.toHaveBeenCalled();

                component.setProps({filterValue: 'some-new-filter-value'} as any);

                expect(onUpdateSpy).toHaveBeenCalledTimes(1);
            });
        });
    });
});
