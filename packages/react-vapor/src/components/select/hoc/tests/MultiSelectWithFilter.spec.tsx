import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../../ReactVapor';
import {clearState} from '../../../../utils/ReduxUtils';
import {TestUtils} from '../../../../utils/tests/TestUtils';
import {filterThrough} from '../../../filterBox/FilterBoxActions';
import {ItemBox} from '../../../itemBox/ItemBox';
import {toggleSelect} from '../../SelectActions';
import {ISelectOwnProps, SelectConnected} from '../../SelectConnected';
import {MultiSelectWithFilter} from '../SelectComponents';
import {ISelectWithFilterOwnProps} from '../SelectWithFilter';

describe('Select', () => {
    describe('MultiSelectWithFilter', () => {
        let wrapper: ReactWrapper<any, any>;
        let store: Store<IReactVaporState>;

        const id: string = 'multi-select-with-filter';

        const mountMultiSelect = (props: Partial<ISelectOwnProps & ISelectWithFilterOwnProps> = {items: []}) => {
            wrapper = mount(
                <Provider store={store}>
                    <MultiSelectWithFilter id={id} {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')}
            );

            store.dispatch(toggleSelect(id, true));
            wrapper.update();
        };

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        beforeAll(() => {
            TestUtils.makeDebounceStatic();
        });

        it('should add a duplicate if the filterValue is already selected', () => {
            const filterValue: string = 'a';
            const duplicateText: string = 'duplicate';

            mountMultiSelect({items: [{value: filterValue, selected: true}], duplicateText});
            store.dispatch(filterThrough(id, filterValue));

            wrapper.update();
            const itemBox = wrapper
                .find(SelectConnected)
                .find(ItemBox)
                .first();

            expect(itemBox.props().value).toBe(duplicateText);
        });

        it('should open the dropdown even if the list is empty with customValue', () => {
            const noItemsText = 'not an item text';

            mountMultiSelect({items: [], noItemsText, customValues: true});

            const itemBox = wrapper
                .find(SelectConnected)
                .find(ItemBox)
                .first();

            expect(itemBox.props().value).toBe(noItemsText);
        });

        it('should set the noItems in noResultItem if items is not empty and all values are selected', () => {
            const noItemsText = 'not an item text';

            mountMultiSelect({
                items: [
                    {value: 'a', selected: true},
                    {value: 'b', selected: true},
                ],
                noItemsText,
                customValues: true,
            });

            const itemBox = wrapper
                .find(SelectConnected)
                .find(ItemBox)
                .first();

            expect(itemBox.props().value).toBe(noItemsText);
        });
    });
});
