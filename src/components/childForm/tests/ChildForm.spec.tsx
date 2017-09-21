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
          <ChildForm />
        );
      }).not.toThrow();
    });
  });

  describe('<ChildForm />', () => {
    let childForm: ReactWrapper<IChildFormProps, any>;
    let childFormInstance: ChildForm;

    beforeEach(() => {
      childForm = mount(
        <ChildForm>
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

    it('should disable children when disabled property is true', () => {
      const childElement = childForm.find('Radio').first();
      expect(childElement.prop('disabled')).toBe(false);

      childForm.setProps({ disabled: false });
      childForm.mount();
      expect(childElement.prop('disabled')).toBe(false);

      childForm.setProps({ disabled: true });
      childForm.mount();
      expect(childElement.prop('disabled')).toBe(true);
    });
  });
});
