import {CrossSize16Px, FilterAddSize16Px} from '@coveord/plasma-react-icons';
import {KeyboardEvent, ChangeEvent, Component} from 'react';
import * as _ from 'underscore';
import {Tooltip} from '../../tooltip/Tooltip.js';
import {IDropdownOption} from '../DropdownSearch.js';
import {SelectedOption} from './SelectedOption.js';

export interface IMultiselectInputProps {
    selectedOptions: IDropdownOption[];
    onRemoveClick?: (value: string) => void;
    onRemoveAll?: () => void;
    onFilterTextChange?: (filterText: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    onKeyDownFilterBox?: (e: KeyboardEvent<HTMLInputElement>) => void;
    filterPlaceholder?: string;
    filterText?: string;
    deselectAllTooltipText?: string;
}

/**
 * @deprecated use Mantine instead
 */
export class MultiselectInput extends Component<IMultiselectInputProps, any> {
    static defaultProps: Partial<IMultiselectInputProps> = {
        deselectAllTooltipText: 'Deselect all options',
    };

    private handleOnRemoveAll() {
        if (this.props.onRemoveAll) {
            this.props.onRemoveAll();
        }
    }

    private handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (this.props.onFilterTextChange) {
            this.props.onFilterTextChange(e.target.value);
        }
    };

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

    private handleOnKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (this.props.onKeyDownFilterBox) {
            this.props.onKeyDownFilterBox(e);
        }
    }

    private getSelectedOptionComponents(): JSX.Element[] {
        const selectedOptionComponents: JSX.Element[] = [];

        _.map(this.props.selectedOptions, (selectedOption) => {
            selectedOptionComponents.push(
                <SelectedOption
                    value={selectedOption.value}
                    selectedTooltip={selectedOption.selectedTooltip}
                    label={selectedOption.displayValue}
                    key={selectedOption.value}
                    onRemoveClick={this.props.onRemoveClick}
                />
            );
        });

        return selectedOptionComponents;
    }

    private getRemoveAllSelectedOptionsButton(): JSX.Element {
        if (this.props.selectedOptions.length) {
            return (
                <Tooltip title={this.props.deselectAllTooltipText} placement={'top'}>
                    <div className="remove-all-selected-options" onClick={() => this.handleOnRemoveAll()}>
                        <CrossSize16Px height={16} />
                    </div>
                </Tooltip>
            );
        }
    }

    render() {
        return (
            <div className="multiselect-input">
                <div className="multiselect-selected flex flex-center flex-auto">
                    <div className="selected-options-container">{this.getSelectedOptionComponents()}</div>
                    {this.getRemoveAllSelectedOptionsButton()}
                </div>
                <div className="multiselect-add flex flex-center flex-auto">
                    <input
                        className="mod-no-border flex-auto"
                        placeholder={this.props.filterPlaceholder}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleInputChange(e)}
                        onBlur={() => this.handleOnBlur()}
                        onFocus={() => this.handleOnFocus()}
                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => this.handleOnKeyDown(e)}
                        value={this.props.filterText}
                    />
                    <FilterAddSize16Px height={16} />
                </div>
            </div>
        );
    }
}
