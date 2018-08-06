
import * as React from 'react';
import * as _ from 'underscore';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {SingleSelectWithFilter} from '../../select/SelectComponents';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {IField, IFieldValue} from '../responseParser/ResponseParser';

export const fieldSelectId: string = 'field-select';

export interface IFieldSelectProps {
    fields: IField[];
    expressionEditorId: string;
    queryTrigger: QueryTrigger;
    updateFieldValueItems: (fieldValueItems: IItemBoxProps[]) => void;
}

export interface IFieldSelectState {

}

export class FieldSelect extends React.Component<IFieldSelectProps, IFieldSelectState> {

    // TODO remove if not used
    constructor(props: IFieldSelectProps) {
        super(props);
    }

    private getFieldsItems(): IItemBoxProps[] {
        const fieldsItems: IItemBoxProps[] = [];
        _.forEach(this.props.fields, (field: IField) => {
            const getItemBox: IItemBoxProps = {value: field.name};
            fieldsItems.push(getItemBox);
        });
        return fieldsItems;
    }

    private async fieldOnSelect(field: string) {
        await this.updateFieldValues(field);
    }

    private async updateFieldValues(field: string) {
        const newFieldValuesItems: IItemBoxProps[] = await this.getFieldValuesItems(field);
        this.props.updateFieldValueItems(newFieldValuesItems);
    }

    private async getFieldValuesItems(field: string): Promise<IItemBoxProps[]> {
        // TODO use the expressionParser
        const parsedField = [field.slice(0, 1), 'sys', field.slice(1)].join('');

        const fieldValues: IFieldValue[] = await this.props.queryTrigger.getFieldValues(parsedField);
        const fieldValuesItems: IItemBoxProps[] = [];
        _.forEach(fieldValues, (fieldValue: IFieldValue) => {
            const getItemBox: IItemBoxProps = {value: fieldValue.value};
            fieldValuesItems.push(getItemBox);
        });
        return fieldValuesItems;
    }

    render() {
        return (
            <span>
                <SingleSelectWithFilter
                    id={`${this.props.expressionEditorId}-${fieldSelectId}`}
                    items={this.getFieldsItems()}
                    placeholder={'Select field'}
                    onSelectOptionCallback={(field: string) => this.fieldOnSelect(field)}
                />
            </span>
        );
    }
}
