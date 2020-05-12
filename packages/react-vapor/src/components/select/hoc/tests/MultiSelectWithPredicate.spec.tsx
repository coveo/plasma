import {mount, ReactWrapper, ShallowWrapper} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {act} from 'react-dom/test-utils';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {withServerSideProcessing} from '../../../../hoc/withServerSideProcessing/withServerSideProcessing';
import {IReactVaporState} from '../../../../ReactVapor';
import {clearState} from '../../../../utils/ReduxUtils';
import {TestUtils} from '../../../../utils/tests/TestUtils';
import {UUID} from '../../../../utils/UUID';
import {DraggableSelectedOption} from '../../../dropdownSearch/MultiSelectDropdownSearch/DraggableSelectedOption';
import {selectFlatSelect} from '../../../flatSelect/FlatSelectActions';
import {IFlatSelectOptionProps} from '../../../flatSelect/FlatSelectOption';
import {IItemBoxProps} from '../../../itemBox/ItemBox';
import {reorderListBoxOption, unselectListBoxOption} from '../../../listBox/ListBoxActions';
import {IMultiSelectOwnProps, MultiSelectConnected} from '../../MultiSelectConnected';
import {toggleSelect} from '../../SelectActions';
import {ISelectOwnProps, SelectConnected} from '../../SelectConnected';
import {MultiSelectWithPredicate} from '../SelectComponents';
import {ISelectWithPredicateOwnProps, selectWithPredicate} from '../SelectWithPredicate';

describe('Select', () => {
    describe('<MultiSelectWithPredicate />', () => {
        let wrapper: ReactWrapper<any, any>;
        let multiSelect: ReactWrapper<ISelectOwnProps, void>;
        let store: Store<IReactVaporState>;

        const id: string = 'multi-select-with-predicate';
        const defaultFlatSelectOptions: IFlatSelectOptionProps[] = [
            {id: UUID.generate(), option: {content: 'All'}, selected: true},
            {id: UUID.generate(), option: {content: 'None'}},
        ];
        const matchPredicate = (predicate: string, item: IItemBoxProps) => {
            return predicate === defaultFlatSelectOptions[0].id;
        };

        const basicProps: ISelectWithPredicateOwnProps & IMultiSelectOwnProps = {
            id,
            items: [],
            options: defaultFlatSelectOptions,
            matchPredicate,
        };

        const mountMultiSelect = (props?: Partial<ISelectWithPredicateOwnProps & IMultiSelectOwnProps>) => {
            wrapper = mount(
                <Provider store={store}>
                    <MultiSelectWithPredicate {...basicProps} {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')}
            );
            multiSelect = wrapper.find(SelectConnected).first();
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

        describe('mount and unmount', () => {
            it('should not throw on mount', () => {
                expect(() => mountMultiSelect()).not.toThrow();
            });

            it('should not throw on unmount', () => {
                mountMultiSelect();
                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('should add the list box to the state when mounted', () => {
                expect(store.getState().selects.length).toBe(0);

                mountMultiSelect();

                expect(store.getState().selects.length).toBe(1);
            });

            it('should remove the list box from the state when the component unmount', () => {
                mountMultiSelect();

                expect(store.getState().selects.length).toBe(1);
                wrapper.unmount();

                expect(store.getState().selects.length).toBe(0);
            });
        });

        it('should hide items when they do not match the predicates', () => {
            const items = [{value: 'a'}, {value: 'b', selected: true}, {value: 'c', selected: true}];

            mountMultiSelect({items});
            store.dispatch(toggleSelect(id, true));
            store.dispatch(selectFlatSelect(id, defaultFlatSelectOptions[1].id));
            wrapper.update();
            multiSelect = wrapper.find(SelectConnected);

            expect(multiSelect.props().items.length).toBe(items.length);
            multiSelect
                .find(SelectConnected)
                .props()
                .items.every((item: IItemBoxProps) => expect(item.hidden).toBe(true));
        });

        it('should not show items that are already hidden', () => {
            const items = [
                {value: 'a', hidden: true},
                {value: 'b', selected: true},
                {value: 'c', selected: true},
            ];

            mountMultiSelect({items});
            store.dispatch(toggleSelect(id, true));
            store.dispatch(selectFlatSelect(id, defaultFlatSelectOptions[0].id));
            wrapper.update();
            multiSelect = wrapper.find(SelectConnected);

            expect(multiSelect.props().items.length).toBe(items.length);
            expect(multiSelect.find(SelectConnected).props().items[0].hidden).toBe(true);
            expect(multiSelect.find(SelectConnected).props().items[1].hidden).toBeUndefined();
            expect(multiSelect.find(SelectConnected).props().items[2].hidden).toBeUndefined();
        });

        describe('Sortable', () => {
            it('should be possible to reorder items', () => {
                const spy = spyOn(store, 'dispatch').and.callThrough();
                const items = [
                    {value: 'a', hidden: true},
                    {value: 'b', selected: true},
                    {value: 'c', selected: true},
                ];

                mountMultiSelect({items, sortable: true});

                // Move b from 0 to 1
                multiSelect
                    .find(DraggableSelectedOption)
                    .first()
                    .prop('move')(0, 1);
                expect(spy).toHaveBeenCalledWith(reorderListBoxOption(id, [items[2].value, items[1].value]));
            });

            it('should be possible to delete an item', () => {
                const spy = spyOn(store, 'dispatch').and.callThrough();
                const items = [
                    {value: 'a', hidden: true},
                    {value: 'b', selected: true},
                    {value: 'c', selected: true},
                ];

                mountMultiSelect({items, sortable: true});

                // Move b from 0 to 1
                multiSelect
                    .find(DraggableSelectedOption)
                    .first()
                    .prop('onRemoveClick')();
                expect(spy).toHaveBeenCalledWith(unselectListBoxOption(id, items[1].value));
            });
        });

        describe('when predicates are processed on the server side', () => {
            const ServerSideMultiSelectWithPredicates = _.compose(
                withServerSideProcessing,
                selectWithPredicate
            )(MultiSelectConnected);

            const items = [
                {value: 'a', hidden: true},
                {value: 'b', selected: true},
                {value: 'c', selected: true},
            ];

            it('should not filter the items based on any predicate because it is done on the server', () => {
                const component: ShallowWrapper<ISelectOwnProps & ISelectWithPredicateOwnProps> = shallowWithStore(
                    <ServerSideMultiSelectWithPredicates
                        {...basicProps}
                        items={items}
                        predicate={basicProps.options[1].id}
                    />,
                    store
                )
                    .dive()
                    .dive();
                expect(component.props().items).toEqual(items);
            });

            it('should trigger the onUpdate prop when the selected predicate changes', () => {
                const onUpdateSpy = jasmine.createSpy('onUpdate');

                wrapper = mount(
                    <Provider store={store}>
                        <ServerSideMultiSelectWithPredicates {...basicProps} onUpdate={onUpdateSpy} />
                    </Provider>,
                    {attachTo: document.getElementById('App')}
                );

                expect(onUpdateSpy).toHaveBeenCalledTimes(1);

                store.dispatch(toggleSelect(id, true));
                act(() => {
                    store.dispatch(selectFlatSelect(id, defaultFlatSelectOptions[1].id));
                });

                expect(onUpdateSpy).toHaveBeenCalledTimes(2);
            });
        });
    });
});
