import * as React from 'react';
import {IDropdownOption} from '../DropdownSearch';
import {SelectedOption} from './SelectedOption';
import {Svg} from '../../svg/Svg';

export interface IMultiselectInputProps {
  selectedOptions: IDropdownOption[];
  onRemoveClick?: (value: string) => void;
  onRemoveAll?: () => void;
  onFilterTextChange?: (filterText: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onKeyDownFilterBox?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  filterPlaceholder?: string;
  filterText?: string;
}

export class MultiselectInput extends React.Component<IMultiselectInputProps, any> {

  private handleOnRemoveAll() {
    if (this.props.onRemoveAll) {
      this.props.onRemoveAll();
    }
  }

  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (this.props.onFilterTextChange) {
      this.props.onFilterTextChange(e.target.value);
    }
  }


  private handleOnBlur() {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  private handleOnFocus() {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  private handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (this.props.onKeyDownFilterBox) {
      this.props.onKeyDownFilterBox(e);
    }
  }

  private getSelectedOptionComponents(): JSX.Element[] {
    const selectedOptionComponents: JSX.Element[] = [];

    for (let selectedOption of this.props.selectedOptions) {
      selectedOptionComponents.push(
        <SelectedOption displayValue={selectedOption.displayValue}
                        key={selectedOption.value}
                        onRemoveClick={this.props.onRemoveClick}
        />);
    }

    return selectedOptionComponents;
  }

  private getRemoveAllSelectedOptionsButton(): JSX.Element {
    if (this.props.selectedOptions.length > 0) {
      return (
        <div className='remove-all-selected-options' onClick={() => this.handleOnRemoveAll()}>
          <Svg svgName='clear' svgClass='icon fill-medium-blue' />
        </div>
      );
    }
  }

  render() {
    return (
      <div className='multiselect-input'>
        <div className='selected-options-container'>
          {this.getSelectedOptionComponents()}
          <input
            placeholder={this.props.filterPlaceholder}
            onChange={(e) => this.handleInputChange(e)}
            onBlur={() => this.handleOnBlur()}
            onFocus={() => this.handleOnFocus()}
            onKeyDown={(e) => this.handleOnKeyDown(e)}
            autoFocus={true}
            value={this.props.filterText}
          />
        </div>
        {this.getRemoveAllSelectedOptionsButton()}
      </div>
    );
  }
}
