import { shallow, mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { ChildForm, IChildFormProps } from '../ChildForm';
import { Checkbox } from '../../checkbox/Checkbox';
import { Radio } from '../../radio/Radio';

describe('ChildForm', () => {
  describe('<ChildForm />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <ChildForm parentControl={<div />} />
        );
      }).not.toThrow();
    });
  });

  describe('<ChildForm />', () => {
    let childForm: ReactWrapper<IChildFormProps, any>;
    let childFormInstance: ChildForm;

    beforeEach(() => {
      childForm = mount(
        <ChildForm parentControl={<Checkbox />}>
          <Radio id='id' label='label' />
        </ChildForm>,
        { attachTo: document.getElementById('App') }
      );
      childFormInstance = childForm.instance() as ChildForm;
    });

    afterEach(() => {
      childForm.unmount();
      childForm.detach();
    });

    it('should set classes when specified', () => {
      const innerClass = 'salut';
      const classes = [innerClass];
      const innerLabel = childForm.find('div').first();
      expect(innerLabel.hasClass(innerClass)).toBe(false);

      childForm.setProps({ classes });
      childForm.mount();
      expect(innerLabel.hasClass(innerClass)).toBe(true);
    });

    it('should check parent control when active property is true', () => {
      const parentControl = childForm.find('Checkbox').first();
      childForm.setProps({ active: false });
      childForm.mount();
      expect(parentControl.prop('checked')).toBe(false);

      childForm.setProps({ active: true });
      childForm.mount();
      expect(parentControl.prop('checked')).toBe(true);
    });

    it('should call onChange handler when parent control is clicked and prop is set', () => {
      const changeSpy = jasmine.createSpy('onChange');
      const parentControlInnerInput = childForm.find('label').first();

      childForm.setProps({ onChange: changeSpy });
      childForm.mount();
      parentControlInnerInput.simulate('click');

      expect(changeSpy.calls.count()).toBe(1);
    });

    it('should disable children when active property is false', () => {
      const childElement = childForm.find('Radio').first();
      expect(childElement.prop('disabled')).toBe(true);

      childForm.setProps({ active: false });
      childForm.mount();
      expect(childElement.prop('disabled')).toBe(true);

      childForm.setProps({ active: true });
      childForm.mount();
      expect(childElement.prop('disabled')).toBe(false);
    });
  });
});
