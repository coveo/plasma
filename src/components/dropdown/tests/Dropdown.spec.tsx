import { shallow, ReactWrapper, mount } from 'enzyme';
import { IDropdownProps, Dropdown } from '../Dropdown';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Dropdown', () => {
  let basicDropdownProps: IDropdownProps = {
    toggleContent: [<span key='toggle'>Toggle</span>],
    dropdownItems: [
      <li key='option1'>Option 1</li>,
      <li key='option2'>Option 2</li>
    ]
  };

  describe('<Dropdown />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <Dropdown {...basicDropdownProps} />
        );
      }).not.toThrow();
    });
  });

  describe('<Dropdown />', () => {
    let dropdown: ReactWrapper<IDropdownProps, any>;
    let dropdownInstance: Dropdown;

    beforeEach(() => {
      dropdown = mount(
        <Dropdown {...basicDropdownProps} />,
        { attachTo: document.getElementById('App') }
      );
      dropdownInstance = dropdown.instance() as Dropdown;
    });

    afterEach(() => {
      dropdown.unmount();
      dropdown.detach();
    });

    it('should get the toggleContent as a prop', () => {
      let toggleContentProp = dropdown.props().toggleContent;

      expect(toggleContentProp).toBeDefined();
      expect(toggleContentProp.length).toBe(basicDropdownProps.toggleContent.length);
    });

    it('should get the dropdown items as a prop', () => {
      let dropdownItemsProp = dropdown.props().dropdownItems;

      expect(dropdownItemsProp).toBeDefined();
      expect(dropdownItemsProp.length).toBe(basicDropdownProps.dropdownItems.length);
    });

    it('should have "open" class if opened', () => {
      let newDropdownProps = _.extend({}, basicDropdownProps, { isOpened: true });

      expect(dropdown.find('.open').length).toBe(0);

      dropdown.setProps(newDropdownProps);
      expect(dropdown.find('.open').length).toBe(1);
    });

    it('should add a listener on document on mount and remove it on unmount if prop onDocumentClick is set', () => {
      let onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
      let newDropdownProps = _.extend({}, basicDropdownProps, { onDocumentClick: onDocumentClickSpy });

      dropdown.mount();
      document.getElementById('App').click();
      expect(onDocumentClickSpy).not.toHaveBeenCalled();

      dropdown.unmount();
      dropdown.setProps(newDropdownProps);
      dropdown.mount();
      document.getElementById('App').click();
      expect(onDocumentClickSpy.calls.count()).toBe(1);

      dropdown.unmount();
      document.getElementById('App').click();
      expect(onDocumentClickSpy.calls.count()).toBe(1);
    });

    it('should not call onDocumentClick when prop is set and clicking on the dropdown', () => {
      let onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
      let newDropdownProps = _.extend({}, basicDropdownProps, { onDocumentClick: onDocumentClickSpy });

      dropdown = mount(
        <Dropdown {...newDropdownProps} />,
        { attachTo: document.getElementById('App') }
      );

      (document.getElementsByClassName('dropdown-wrapper')[0] as HTMLDivElement).click();
      expect(onDocumentClickSpy).not.toHaveBeenCalled();

      document.getElementById('App').click();
      expect(onDocumentClickSpy).toHaveBeenCalled();
    });

    it('should call onClick prop if set when clicking the toggle', () => {
      let onClickSpy = jasmine.createSpy('onClick');
      let newDropdownProps = _.extend({}, basicDropdownProps, { onClick: onClickSpy });

      expect(() => dropdownInstance['handleClick'].call(dropdownInstance)).not.toThrow();

      dropdown.setProps(newDropdownProps);
      dropdown.find('.dropdown-toggle').simulate('click');
      expect(onClickSpy).toHaveBeenCalled();
    });
  });
});
