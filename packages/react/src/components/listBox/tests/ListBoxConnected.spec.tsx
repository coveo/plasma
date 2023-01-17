import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../../PlasmaState.js';
import {clearState} from '../../../utils/ReduxUtils.js';
import {TestUtils} from '../../../utils/tests/TestUtils.js';
import {IItemBoxProps, ItemBox} from '../../itemBox/ItemBox.js';
import {IListBoxProps, ListBox} from '../ListBox.js';
import {ListBoxConnected} from '../ListBoxConnected.js';

describe('ListBox', () => {
    describe('<ListBoxConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let listBox: ReactWrapper<IListBoxProps, void>;
        let store: Store<PlasmaState>;

        const id: string = 'list-box-connected';

        const mountListBox = (items: IItemBoxProps[] = []) => {
            wrapper = mount(
                <Provider store={store}>
                    <ListBoxConnected id={id} items={items} />
                </Provider>,
                {attachTo: document.getElementById('App')}
            );
            listBox = wrapper.find(ListBox).first();
        };

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
        });

        describe('mount and unmount', () => {
            it('should not throw on mount', () => {
                expect(() => mountListBox()).not.toThrow();
            });

            it('should not throw on unmount', () => {
                mountListBox();

                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('should add the list box to the state when mounted', () => {
                expect(store.getState().listBoxes.length).toBe(0);

                mountListBox();

                expect(store.getState().listBoxes.length).toBe(1);
            });

            it('should remove the list box from the state when the component unmount', () => {
                mountListBox();

                expect(store.getState().listBoxes.length).toBe(1);
                wrapper.unmount();

                expect(store.getState().listBoxes.length).toBe(0);
            });
        });

        it('should get what to do on onMount as a prop', () => {
            mountListBox();
            const view = listBox.props().onRender;

            expect(view).toBeDefined();
        });

        it('should get what to do on destroy as a prop', () => {
            mountListBox();
            const onDestroyProp = listBox.props().onDestroy;

            expect(onDestroyProp).toBeDefined();
        });

        it('should get what to do on option click as a prop', () => {
            mountListBox();
            const onOptionClickProp = listBox.props().onOptionClick;

            expect(onOptionClickProp).toBeDefined();
        });

        it('should get the selected as a prop', () => {
            const items = [{value: 'a'}, {value: 'b', selected: true}, {value: 'c'}];
            const expected = _.chain(items).where({selected: true}).pluck('value').value();
            mountListBox(items);

            const selected = listBox.props().selected;

            expect(selected).toBeDefined();
            expect(selected.length).toBe(expected.length);
            expect(selected).toEqual(expected);
        });

        it('should dispatch a selectListBoxOption on click on an item', () => {
            const items = [{value: 'a'}, {value: 'b', selected: true}, {value: 'c'}];
            mountListBox(items);

            listBox.find(ItemBox).first().find('li').simulate('click');
            const state = _.findWhere(store.getState().listBoxes, {id});

            expect(state.selected).toEqual([items[0].value]);
        });
    });
});
