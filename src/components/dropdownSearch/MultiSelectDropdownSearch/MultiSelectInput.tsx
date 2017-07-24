import * as React from 'react';
import {IDropdownOption} from '../DropdownSearch';
import {SelectedOption} from './SelectedOption';
import {Svg} from '../../svg/Svg';
import {FilterBox} from '../../filterBox/FilterBox';
import {UUID} from '../../../utils/UUID';

export interface IMultiselectInputProps {
  selectedOptions: IDropdownOption[];
  onRemoveClick?: (value: string) => void;
  onRemoveAll?: () => void;
  onFilterClick: (filterText: string) => void;
  onBlur: () => void;
  onKeyDownFilterBox: (keycode: number) => void;
  filterPlaceholder: string;
}

export class MultiselectInput extends React.Component<IMultiselectInputProps, any> {

  handleOnRemoveAll() {
    if (this.props.onRemoveAll) {
      this.props.onRemoveAll();
    }
  }

  handleOnKeyDownFilterBox(e: React.KeyboardEvent<HTMLInputElement>) {
    if (this.props.onKeyDownFilterBox) {
      this.props.onKeyDownFilterBox(e.keyCode);
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
          <FilterBox id={UUID.generate()}
                     onFilter={this.props.onFilterClick}
                     onBlur={this.props.onBlur}
                     onKeyDown={() => this.handleOnKeyDownFilterBox}
                     filterPlaceholder={this.props.filterPlaceholder}
                     isAutoFocus={true} />
        </div>
        {this.getRemoveAllSelectedOptionsButton()}
      </div>
    );
  }
}
