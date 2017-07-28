import { mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { IMultiselectInputProps, MultiselectInput } from '../MultiSelectInput';
import { IDropdownOption } from '../../DropdownSearch';

describe('MultiSelectInput', () => {
  const selectedOptions: IDropdownOption[] = [
    { value: 'test 1', displayValue: 'test 1 display' },
    { value: 'test 2', displayValue: 'test 2 display' },
    { value: 'test 3', displayValue: 'test 3 display' },
    { value: 'test 4', displayValue: 'test 4 display' },
  ];
  const props: IMultiselectInputProps = {
    selectedOptions: [],
    filterText: '',
  };

  describe('<SelectedOption />', () => {
    let multiSelectInput: ReactWrapper<IMultiselectInputProps, any>;
    let multiSelectInputInstance: MultiselectInput;

    const renderMultiSelectInput = (props?: IMultiselectInputProps) => {
      multiSelectInput = mount(
        <MultiselectInput {...props} />,
        { attachTo: document.getElementById('App') },
      );
      multiSelectInputInstance = multiSelectInput.instance() as MultiselectInput;
    };

    beforeEach(() => {
      renderMultiSelectInput(props);
    });

    afterEach(() => {
      multiSelectInput.unmount();
      multiSelectInput.detach();
    });

    describe('render', () => {
      it('should render placeholder text', () =>  {
        const filterPlaceholder = 'placeholdertext';
        multiSelectInput.setProps({ filterPlaceholder });

        expect(multiSelectInput.find(`input[placeholder="${filterPlaceholder}"]`).length).toBe(1);
      });

      it('should render filter text', () =>  {
        const filterText = 'text';
        multiSelectInput.setProps({ filterText });

        expect(multiSelectInput.find(`input[value="${filterText}"]`).length).toBe(1);
      });

      it('should not render the remove-all button if there are no options given', () =>  {
        expect(multiSelectInput.find('.remove-all-selected-options').length).toBe(0);
      });

      it('should render all the supplied selected options', () => {
        multiSelectInput.setProps({ selectedOptions });

        expect(multiSelectInput.find('SelectedOption').length).toBe(selectedOptions.length);
      });

      it('should not render any selected options if none provided', () => {
        expect(multiSelectInput.find('SelectedOption').length).toBe(0);
      });

      it('should not render the remove-all button if there are no selected options', () =>  {
        expect(multiSelectInput.find('.remove-all-selected-options').length).toBe(0);
      });

      it('should render the remove-all button if there are selected options', () =>  {
        multiSelectInput.setProps({ selectedOptions });

        expect(multiSelectInput.find('.remove-all-selected-options').length).toBe(1);
      });
    });
  });
});
