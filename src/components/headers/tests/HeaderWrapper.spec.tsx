import * as React from 'react';
import { mount, ReactWrapper, shallow } from 'enzyme';
import { HeaderWrapper, IHeaderWrapperProps } from '../HeaderWrapper';
import { Button, Content } from '../../../';
import { TabsHeader } from '../TabsHeader';
import { Store } from 'redux';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { clearState } from '../../../utils/ReduxUtils';
import { Provider } from 'react-redux';

describe('<HeaderWrapper/>', () => {

  let headerWrapperComponent: ReactWrapper<IHeaderWrapperProps, any>;
  let store: Store<IReactVaporState>;

  beforeEach(() => {
    store = TestUtils.buildStore();
  });

  afterEach(() => {
    store.dispatch(clearState());
  });

  it('should render without errors', () => {
    expect(() => {
      shallow(<HeaderWrapper />);
    }).not.toThrow();
  });

  describe('<HeaderWrapper /> with custom props', () => {

    const customProps: IHeaderWrapperProps = {
      description: 'description test',
      actions: [{ content: Button }, { content: Button }],
      classes: ['class-test'],
      tabs: [{ id: '1', title: '1' }, { id: '2', title: '2' }],
    };

    beforeEach(() => {
      headerWrapperComponent = mount(
        <Provider store={store}>
          <HeaderWrapper {...customProps} />
        </Provider>,
        { attachTo: document.getElementById('App') },
      );
    });

    afterEach(() => {
      headerWrapperComponent.unmount();
      headerWrapperComponent.detach();
    });

    it('should render the description', () => {
      expect(headerWrapperComponent.find('h4').text()).toEqual(customProps.description);
    });

    it('should render actions', () => {
      const contents = headerWrapperComponent.find(Content);

      expect(contents.length).toEqual(2);
      expect(contents.first().props().content).toEqual(Button);
      expect(contents.last().props().content).toEqual(Button);
    });

    it('should render tabs', () => {
      const tabs = headerWrapperComponent.find(TabsHeader);

      expect(tabs.length).toEqual(1);
    });
  });
});
