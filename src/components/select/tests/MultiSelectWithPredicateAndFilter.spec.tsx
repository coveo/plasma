import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {UUID} from '../../../utils/UUID';
import {IFlatSelectOptionProps} from '../../flatSelect/FlatSelectOption';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {MultiSelectWithPredicateAndFilter} from '../SelectComponents';

describe('Select', () => {
    describe('<MultiSelectWithPredicateAndFilter/>', () => {
        let wrapper: ReactWrapper<any, any>;
        let store: Store<IReactVaporState>;

        const id: string = 'multi-select-with-predicate-and-filter';

        const defaultFlatSelectOptions: IFlatSelectOptionProps[] = [
            {id: UUID.generate(), option: {content: 'All'}, selected: true},
            {id: UUID.generate(), option: {content: 'None'}},
        ];

        const matchPredicate = (predicate: string, item: IItemBoxProps) => {
            return predicate === defaultFlatSelectOptions[0].id;
        };

        const mountMultiSelect = () => {
            wrapper = mount(
                <Provider store={store}>
                    <MultiSelectWithPredicateAndFilter id={id} items={[]} options={defaultFlatSelectOptions} matchPredicate={matchPredicate} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
        };

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
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
    });
});
