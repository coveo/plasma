
import * as React from 'react';
import * as _ from 'underscore';
import { IDropdownOption } from '../../dropdownSearch/DropdownSearch';
import { DropdownSearchConnected } from '../../dropdownSearch/DropdownSearchConnected';
import {IField} from '../responseParser/ResponseParser';

export const fieldSelectId: string = 'field-select';
export const optionsPerPage: number = 10;

export interface IFieldSelectOwnProps {
    fields: IField[];
    expressionEditorId: string;
}

export interface IFieldSelectOwnState {
    hasMoreItems?: boolean;
}

export interface IFieldSelectDispatchProps {
    onOptionsChanged?: (id: string, options: IDropdownOption[]) => void;
}

export interface IFieldSelectProps extends IFieldSelectOwnProps, IFieldSelectDispatchProps {}

export class FieldSelect extends React.Component<IFieldSelectProps, IFieldSelectOwnState> {
    private allFieldOptions: IDropdownOption[];
    private currentFieldOptions: IDropdownOption[];
    private optionsPage: number;

    constructor(props: IFieldSelectProps) {
        super(props);
        this.state = {hasMoreItems: true};
        this.allFieldOptions = null;
        this.currentFieldOptions = [];
        this.optionsPage = 1;
    }

    componentWillMount() {
        this.allFieldOptions = this.getFieldsOptions();
        this.updateInfinteScroll();
    }

    private getFieldsOptions(): IDropdownOption[] {
        const fieldsDropdownOptions: IDropdownOption[] = [];
        _.forEach(this.props.fields, (field: IField) => {
            const getDropDownOption: IDropdownOption = {value: field.name};
            fieldsDropdownOptions.push(getDropDownOption);
        });
        return fieldsDropdownOptions;
    }

    private updateInfinteScroll() {
        this.updateHasMoreItems();
        this.updateCurrentOptions();
        this.optionsPage++;
    }

    private updateHasMoreItems() {
        const startingIndex: number = (this.optionsPage - 1) * optionsPerPage;
        if (startingIndex > (this.allFieldOptions.length - 1)) {
            this.setState({hasMoreItems: false});
        }
    }

    private updateCurrentOptions() {
        const newOptions: IDropdownOption[] = this.getNewOptions();
        this.currentFieldOptions = this.currentFieldOptions.concat(newOptions);
        this.props.onOptionsChanged(`${this.props.expressionEditorId}-${fieldSelectId}`, this.currentFieldOptions);
    }

    private getNewOptions(): IDropdownOption[] {
        const startingIndex: number = (this.optionsPage - 1) * optionsPerPage;
        const newOptions: IDropdownOption[] = this.allFieldOptions.slice(startingIndex, startingIndex + optionsPerPage);
        return newOptions;
    }

    render() {
        return (
            <span>
                <DropdownSearchConnected
                    defaultOptions={this.currentFieldOptions}
                    id={`${this.props.expressionEditorId}-${fieldSelectId}`}
                    infiniteScroll={{
                        next: () => this.updateInfinteScroll(),
                        dataLength: 0,
                        hasMore: true,
                        endMessage: <div className='option-wrapper'><span className='dropdown-option'>No more items to show</span></div>,
                        loader: <div className='option-wrapper'><span className='dropdown-option'>Loading more items...</span></div>,
                    }}
                    hasMoreItems={() => this.state.hasMoreItems}
                    defaultSelectedOption={{value: 'Select field'}}
                />
            </span>
        );
    }
}
