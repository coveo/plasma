import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {filterThrough} from '../../filterBox/FilterBoxActions';
import {ItemBox} from '../../itemBox/ItemBox';
import {toggleSelect} from '../SelectActions';
import {MultiSelectWithFilter} from '../SelectComponents';
import {SelectConnected} from '../SelectConnected';
import {ISelectWithFilterProps} from '../SelectWithFilter';

describe('Select', () => {
    describe('MultiSelectWithFilter', () => {

        let wrapper: ReactWrapper<any, any>;
        let store: Store<IReactVaporState>;

        const id: string = 'multi-select-with-filter';

        const mountMultiSelect = (props: Partial<ISelectWithFilterProps> = {items: []}) => {
            wrapper = mount(
                <Provider store={store}>
                    <MultiSelectWithFilter id={id} {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
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
            const itemBox = wrapper.find(SelectConnected)
                .find(ItemBox)
                .first();

            expect(itemBox.props().value).toBe(duplicateText);
        });
    });
});
