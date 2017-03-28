import { shallow, mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { TabPane, ITabPaneProps } from '../TabPane';

describe('TabPane', () => {
  let id: string = 'tab';

  describe('<TabPane />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <TabPane
            id={id}
          />
        );
      }).not.toThrow();
    });
  });

  describe('<Tab />', () => {
    let tab: ReactWrapper<ITabPaneProps, any>;
    let tabPaneInstance: TabPane;

    beforeEach(() => {
      tab = mount(
        <TabPane
          id={id}
        />,
        { attachTo: document.getElementById('App') }
      );
      tabPaneInstance = tab.instance() as TabPane;
    });

    afterEach(() => {
      tab.unmount();
      tab.detach();
    });

    it('should set active class on container when isActive is true', () => {
      let container = tab.find('div').first();
      expect(container.hasClass('active')).toBe(false);

      tab.setProps({ id, isActive: true });
      tab.mount();
      expect(container.hasClass('active')).toBe(true);
    });
  });
});
