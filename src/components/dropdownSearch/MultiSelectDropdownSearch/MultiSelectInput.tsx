import * as React from 'react';
import * as _ from 'underscore';
import {Svg} from '../../svg/Svg';
import {Tooltip} from '../../tooltip/Tooltip';
import {IDropdownOption} from '../DropdownSearch';
import {SelectedOption} from './SelectedOption';

export interface IMultiselectInputProps {
    selectedOptions: IDropdownOption[];
    onRemoveClick?: (value: string) => void;
    onRemoveAll?: () => void;
    onFilterTextChange?: (filterText: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    onKeyDownFilterBox?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    filterPlaceholder?: string;
    filterText?: string;
    deselectAllTooltipText?: string;
}

export class MultiselectInput extends React.Component<IMultiselectInputProps, any> {

    static defaultProps: Partial<IMultiselectInputProps> = {
        deselectAllTooltipText: 'Deselect all options',
    };

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

        _.map(this.props.selectedOptions, (selectedOption) => {
            selectedOptionComponents.push(
                <SelectedOption
                    value={selectedOption.value}
                    label={selectedOption.displayValue}
                    key={selectedOption.value}
                    onRemoveClick={this.props.onRemoveClick}
                />,
            );
        });

        return selectedOptionComponents;
    }

    private getRemoveAllSelectedOptionsButton(): JSX.Element {
        if (this.props.selectedOptions.length) {
            return (
                <Tooltip title={this.props.deselectAllTooltipText} placement={'top'}>
                    <div className='remove-all-selected-options' onClick={() => this.handleOnRemoveAll()}>
                        <Svg svgName='clear' svgClass='icon fill-medium-blue' />
                    </div>
                </Tooltip>
            );
        }
    }

    private getFilterIcon(): JSX.Element {
        if (!this.props.selectedOptions.length) {
            return (
                <Svg svgName='filter' className='icon' />
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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleInputChange(e)}
                        onBlur={() => this.handleOnBlur()}
                        onFocus={() => this.handleOnFocus()}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => this.handleOnKeyDown(e)}
                        value={this.props.filterText}
                    />
                </div>
                {this.getFilterIcon()}
                {this.getRemoveAllSelectedOptionsButton()}
            </div>
        );
    }
}
