import { mount, ReactWrapper } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {IMultiselectInputProps, MultiselectInput} from '../MultiSelectInput';

describe('MultiSelectInput', () => {
  const props: IMultiselectInputProps = {
    selectedOptions: [],
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
      it('should render placeholder text', () => {
        const filterPlaceholder = 'placeholdertext';
        multiSelectInput.setProps({ filterPlaceholder });
        
        expect(multiSelectInput.find(`input[placeholder="${filterPlaceholder}"]`).length).toBe(1);
      });

      it('should not render the remove-all button if there are no options given', () => {
        expect(multiSelectInput.find('.remove-all-selected-options').length).toBe(0);
      });
    });
  });
});
