
import * as React from 'react';
import * as _ from 'underscore';
import {IDropdownOption} from '../../dropdownSearch/DropdownSearch';
import {DropdownSearchConnected} from '../../dropdownSearch/DropdownSearchConnected';
import {IField} from '../responseParser/ResponseParser';
import * as styles from './FieldSelect.scss';

export const FIELD_SELECT_ID: string = 'field-select';
export const OPTIONS_PER_PAGE: number = 10;
export const FIELD_SELECT_DEFAULT_OPTION: string = 'Select field';

export interface IFieldSelectOwnProps {
    fields: IField[];
    expressionEditorId: string;
}

export interface IFieldSelectOwnState {
    hasMoreFieldOptions?: boolean;
}

export interface IFieldSelectDispatchProps {
    onOptionsChanged?: (id: string, options: IDropdownOption[]) => void;
}

export interface IFieldSelectProps extends IFieldSelectOwnProps, IFieldSelectDispatchProps {}

export class FieldSelect extends React.Component<IFieldSelectProps, IFieldSelectOwnState> {
    readonly dropdownSearchId: string;
    private allFieldOptions: IDropdownOption[];
    private currentFieldOptions: IDropdownOption[];
    private optionsPage: number;

    constructor(props: IFieldSelectProps) {
        super(props);
        this.state = {hasMoreFieldOptions: true};
        this.dropdownSearchId = `${this.props.expressionEditorId}-${FIELD_SELECT_ID}`;
        this.allFieldOptions = null;
        this.currentFieldOptions = [];
        this.optionsPage = 1;
    }

    async componentWillMount() {
        this.allFieldOptions = await this.getFieldsOptions();
        this.updateInfinteScroll();
    }

    private getFieldsOptions(): IDropdownOption[] {
        const fieldsDropdownOptions: IDropdownOption[] = [];
        _.forEach(this.props.fields, (field: IField) => {
            const dropDownOption: IDropdownOption = {value: field.name};
            fieldsDropdownOptions.push(dropDownOption);
        });
        return fieldsDropdownOptions;
    }

    private updateInfinteScroll() {
        this.updateHasMoreItems();
        this.updateCurrentOptions();
        this.optionsPage++;
    }

    private updateHasMoreItems() {
        const startingIndex: number = (this.optionsPage - 1) * OPTIONS_PER_PAGE;
        if (startingIndex > (this.allFieldOptions.length - 1)) {
            this.setState({hasMoreFieldOptions: false});
        }
    }

    private updateCurrentOptions() {
        const newOptions: IDropdownOption[] = this.getNewOptions();
        this.currentFieldOptions = this.currentFieldOptions.concat(newOptions);
        this.props.onOptionsChanged(this.dropdownSearchId, this.currentFieldOptions);
    }

    private getNewOptions(): IDropdownOption[] {
        const startingIndex: number = (this.optionsPage - 1) * OPTIONS_PER_PAGE;
        const newOptions: IDropdownOption[] = this.allFieldOptions.slice(startingIndex, startingIndex + OPTIONS_PER_PAGE);
        return newOptions;
    }

    render() {
        return (
            <span className={`${styles.container}`}>
                {/*
                // TODO QUESTION R-V : BUG?
                // When loading more values in the infinte scroll,
                // The selected value resets to 'Select an option'
                // Why does the value gets reset?
                */}
                <DropdownSearchConnected
                    defaultOptions={this.currentFieldOptions}
                    id={this.dropdownSearchId}
                    infiniteScroll={{
                        next: () => this.updateInfinteScroll(),
                        dataLength: 0,
                        hasMore: true,
                        endMessage: <div className='option-wrapper'><span className='dropdown-option'>No more fields to show</span></div>,
                        loader: <div className='option-wrapper'><span className='dropdown-option'>Loading more fields...</span></div>,
                    }}
                    hasMoreItems={() => this.state.hasMoreFieldOptions}
                    defaultSelectedOption={{value: FIELD_SELECT_DEFAULT_OPTION}}
                />
                <span className={'mr2 ml2 h3'}>is</span>
            </span>
        );
    }
}
