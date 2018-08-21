import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {FilterBox, IFilterBoxProps} from '../FilterBox';
import {filterThrough} from '../FilterBoxActions';
import {FilterBoxConnected} from '../FilterBoxConnected';

describe('FilterBox', () => {
    describe('<FilterBoxConnected />', () => {
        let id: string;
        let wrapper: ReactWrapper<any, any>;
        let filterBox: ReactWrapper<IFilterBoxProps, any>;
        let store: Store<IReactVaporState>;

        beforeEach(() => {
            id = 'filter-box';

            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <FilterBoxConnected
                        id={id}
                    />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            filterBox = wrapper.find(FilterBox).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        it('should get its id as a prop', () => {
            const idProp = filterBox.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(id);
        });

        it('should get what to do on render as a prop', () => {
            const onRenderProp = filterBox.props().onRender;

            expect(onRenderProp).toBeDefined();
        });

        it('should get what to do on destroy as a prop', () => {
            const onDestroyProp = filterBox.props().onDestroy;

            expect(onDestroyProp).toBeDefined();
        });

        it('should get what to do on filter as a prop', () => {
            const onFilterProp = filterBox.props().onFilter;

            expect(onFilterProp).toBeDefined();
        });

        it('should render an input to filter', () => {
            expect(filterBox.find('input').length).toBe(1);
        });

        it('should add the filter box in the store on render', () => {
            expect(store.getState().filters.filter((filter) => filter.id === id).length).toBe(1);
        });

        it('should remove the filter box in the store on render', () => {
            wrapper.unmount();
            expect(store.getState().filters.filter((filter) => filter.id === id).length).toBe(0);
        });

        it('should send the text from the filter input to the store on filter', () => {
            const newValue = 'something';

            expect(store.getState().filters.filter((filter) => filter.id === id && filter.filterText === '').length).toBe(1);

            // Use the dispatch since the onFilter is debounced, and is hardly testable
            expect(() => filterBox.props().onFilter(filterBox.props().id, 'anyWouldDo')).not.toThrow();
            store.dispatch(filterThrough(filterBox.props().id, newValue));

            expect(store.getState().filters.filter((filter) => filter.id === id && filter.filterText === '').length).toBe(0);
            expect(store.getState().filters.filter((filter) => filter.id === id && filter.filterText === newValue).length).toBe(1);
        });
    });
});
