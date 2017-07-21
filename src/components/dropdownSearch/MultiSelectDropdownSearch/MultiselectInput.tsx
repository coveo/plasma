import * as React from 'react';
import {IDropdownOption} from '../DropdownSearch';
import {SelectedOption} from './SelectedOption';

export interface IMultiselectInputProps {
  selectedOptions: IDropdownOption[];
  onRemoveClick?: (value: string) => void;
}

export class MultiselectInput extends React.Component<IMultiselectInputProps, any> {

  private getSelectedOptionComponents(): JSX.Element[] {
    const selectedOptionComponents: JSX.Element[] = [];

    for (const selectedOption of this.props.selectedOptions) {
      selectedOptionComponents.push(
        <SelectedOption displayValue={selectedOption.displayValue}
                        key={selectedOption.value}
                        onRemoveClick={this.props.onRemoveClick}
        />);
    }

    return selectedOptionComponents;
  }

  render() {
    return (
      <div className='multiselect-input'>
        {this.getSelectedOptionComponents()}
        <input/>
      </div>
    );
  }
}
