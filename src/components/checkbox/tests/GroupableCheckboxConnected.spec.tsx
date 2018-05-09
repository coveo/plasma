import { mount, ReactWrapper} from 'enzyme';
import { Provider} from 'react-redux';
import { Store } from 'redux';
import { IReactVaporState } from '../../../ReactVapor';
import { clearState } from '../../../utils/ReduxUtils';
import { TestUtils } from '../../../utils/TestUtils';
import { Checkbox } from '../Checkbox';
import {ICheckboxState} from '../CheckboxReducers';
import { GroupableCheckboxConnected, IGroupableCheckboxOwnProps } from '../GroupableCheckboxConnected';
import {groupableCheckboxInitialState} from '../GroupableCheckboxReducers';

describe('GroupableCheckbox', () => {

  describe('<GroupableCheckboxConnected />', () => {
    let groupableCheckbox: ReactWrapper<IGroupableCheckboxOwnProps, any>;
    let parentGroupableCheckbox: ReactWrapper<IGroupableCheckboxOwnProps, any>;
    let childWrapper: ReactWrapper<any, any>;
    let parentWrapper: ReactWrapper<any, any>;
    let store: Store<IReactVaporState>;
    const parentId = 'checkboxParent1';

    const renderChildCheckbox = (number: number = 1, isChecked: boolean = false) => {
      childWrapper = mount(
        <Provider store={store}>
          <GroupableCheckboxConnected
            id={parentId + number}
            parentId={parentId}
            isParent={false}
            checked={isChecked}
          />
        </Provider>,
        { attachTo: document.getElementById('Region2') },
      );
      groupableCheckbox = childWrapper.find(Checkbox).first();
    };

    const renderParentCheckbox = () => {
      parentWrapper = mount(
        <Provider store={store}>
          <GroupableCheckboxConnected
            id={parentId}
            isParent={true}
          />
        </Provider>,
        { attachTo: document.getElementById('Region1') },
      );
      parentGroupableCheckbox = parentWrapper.find(Checkbox).first();
    };

    const renderAllCheckboxes = () => {
      renderParentCheckbox();
      renderChildCheckbox();
    };

    beforeEach(() => {
      document.getElementById('App').innerHTML += '<div id="Region1"></div><div id="Region2"></div><div id="Region3"></div>';

      store = TestUtils.buildStore();
    });

    afterEach(() => {
      store.dispatch(clearState());
      parentWrapper.unmount();
      parentWrapper.detach();
      childWrapper.unmount();
      childWrapper.detach();
    });

    describe('Own props', () => {
      it('should have the parentId', () => {
        renderAllCheckboxes();
        expect(groupableCheckbox.props().parentId).toBe(parentId);
      });

      it(`should have the parentId for id if it's parent checkbox`, () => {
        renderParentCheckbox();
        expect(parentGroupableCheckbox.props().id).toBe(parentId);
      });

      it('should have isParent set to false', () => {
        renderAllCheckboxes();
        expect(groupableCheckbox.props().isParent).toBe(false);
      });

      it('should have isParent set to true', () => {
        renderParentCheckbox();
        expect(parentGroupableCheckbox.props().isParent).toBe(true);
      });

      it('should have the parentId + 1 for id', () => {
        renderChildCheckbox();
        expect(groupableCheckbox.props().id).toBe(parentId + '1');
      });
    });

    describe('Dispatch to props', () => {
      it('should get onRender as a prop', () => {
        renderAllCheckboxes();
        const onRenderProp = groupableCheckbox.props().onRender;
        expect(onRenderProp).toBeDefined();
      });

      it('should get onDestroy as a prop', () => {
        renderAllCheckboxes();
        const onDestroyProp = groupableCheckbox.props().onDestroy;
        expect(onDestroyProp).toBeDefined();
      });

      it('should get onClick as a prop', () => {
        renderAllCheckboxes();
        const onClickProp = groupableCheckbox.props().onClick;
        expect(onClickProp).toBeDefined();
      });

      it('should trigger the onClick to dispatch a toggle for the checkbox', () => {
        renderAllCheckboxes();

        childWrapper.find('div').simulate('click');

        const childCheckbox: ICheckboxState = store.getState().groupableCheckboxes[0].checkboxes[0];
        expect(childCheckbox.checked).toBe(true);
      });
    });
    describe('State to props', () => {
      it('should have checked set to false by default', () => {
        renderAllCheckboxes();

        expect(groupableCheckbox.props().checked).toBe(false);
      });

      it('should have indeterminate set to false by default if the checkbox is a parent', () => {
        renderParentCheckbox();

        expect(parentGroupableCheckbox.props().indeterminate).toBe(false);
      });

      it('should have indeterminate set to true if one child checkbox is checked', () => {
        renderChildCheckbox(1);
        renderChildCheckbox(2);
        renderParentCheckbox();

        expect(parentGroupableCheckbox.props().checked).toBe(false);
      });
    });
  });
});
