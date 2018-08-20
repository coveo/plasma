
import * as React from 'react';
import * as _ from 'underscore';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {MultiSelectWithFilter} from '../../select/SelectComponents';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {IFieldValue} from '../responseParser/ResponseParser';

export const VALUE_SELECT_STRING_ID: string = 'value-select-string';

export interface IValueSelectStringOwnProps {
    expressionEditorId: string;
    queryTrigger: QueryTrigger;
}

export interface IValueSelectStringOwnState {
    fieldValueItems: IItemBoxProps[];
}

export interface IValueSelectStringStateProps {
    selectedField?: string;
}

export interface IValueSelectStringDispatchProps {
    clearSelectedFieldValues?: (id: string) => void;
}

export interface IValueSelectStringProps extends IValueSelectStringOwnProps, IValueSelectStringStateProps, IValueSelectStringDispatchProps {}

export class ValueSelectString extends React.Component<IValueSelectStringProps, IValueSelectStringOwnState> {
    readonly multiSelectWithFilterId: string;

    constructor(props: IValueSelectStringProps) {
        super(props);
        this.state = {fieldValueItems: []};
        this.multiSelectWithFilterId = `${this.props.expressionEditorId}-${VALUE_SELECT_STRING_ID}`;
    }

    componentWillReceiveProps(nextProps: IValueSelectStringProps) {
        this.props.clearSelectedFieldValues(this.multiSelectWithFilterId);
        this.updateFieldValues(nextProps.selectedField);
    }

    private async updateFieldValues(field: string) {
        // TODO : This is a temporary fix,
        // See the comment (BUG?) in FieldSelect.tsx
        if (field === 'Select an option') {
            this.setState({fieldValueItems: []});
            return;
        }

        const newFieldValuesItems: IItemBoxProps[] = await this.getFieldValuesItems(field);
        this.setState({fieldValueItems: newFieldValuesItems});
    }

    private async getFieldValuesItems(field: string): Promise<IItemBoxProps[]> {
        // TODO : This is a temporary fix,
        // (it makes the API call works for certain fields)
        // See the comment (Improve the API calls and handling of errors) in QueryTrigger.tsx
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
            <MultiSelectWithFilter
                id={this.multiSelectWithFilterId}
                items={this.state.fieldValueItems}
                placeholder={'Select field value'}
            />
        );
    }
}
