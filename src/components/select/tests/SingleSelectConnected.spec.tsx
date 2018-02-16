import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider, Store} from 'react-redux';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {SelectConnected} from '../SelectConnected';
import {ISingleSelectProps, SingleSelectConnected} from '../SingleSelectConnected';

describe('Select', () => {
  describe('<SingleSelectConnected/>', () => {
    let wrapper: ReactWrapper<any, any>;
    let singleSelect: ReactWrapper<ISingleSelectProps, void>;
    let store: Store<IReactVaporState>;

    const id: string = 'list-box-connected';

    const mountSingleSelect = (items: IItemBoxProps[] = []) => {
      wrapper = mount(
        <Provider store={store}>
          <SingleSelectConnected id={id} items={items}/>
        </Provider>,
        { attachTo: document.getElementById('App') },
      );
      singleSelect = wrapper.find(SelectConnected).first();
    };

    beforeEach(() => {
      store = TestUtils.buildStore();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
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

      it('should remove the list box from the state when the component unmount', () => {
        mountSingleSelect();

        expect(store.getState().selects.length).toBe(1);
        wrapper.unmount();

        expect(store.getState().selects.length).toBe(0);
      });
    });

    it('should get the selected items as a prop', () => {
      const selectedValue = 'dis 1';
      mountSingleSelect([
        {value: 'a', prepend: {content: 'pre'}, append: {content: 'post'}},
        {value: selectedValue, selected: true},
      ]);
      const selectedProp = singleSelect.props().selected;

      expect(selectedProp).toBeDefined();
      expect(selectedProp).toEqual([selectedValue]);
    });

    it('should contains the prepend and append in the button when selected', () => {
      const selectedValue = 'dis 1';
      mountSingleSelect([
        {value: 'a', prepend: {content: 'pre'}, append: {content: 'post'}},
        {value: selectedValue, selected: true},
      ]);
      const selectedProp = singleSelect.props().selected;

      expect(selectedProp).toBeDefined();
      expect(selectedProp).toEqual([selectedValue]);
    });
  });
});
