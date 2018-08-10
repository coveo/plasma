
import * as React from 'react';
import * as _ from 'underscore';
import { IItemBoxProps } from '../../itemBox/ItemBox';
import { MultiSelectWithFilter } from '../../select/SelectComponents';
import { QueryTrigger } from '../queryTrigger/QueryTrigger';
import { IFieldValue } from '../responseParser/ResponseParser';

export const valueSelectStringId: string = 'value-select-string';

export interface IValueSelectStringOwnProps {
    expressionEditorId: string;
    queryTrigger: QueryTrigger;
}

export interface IValueSelectStringOwnState {
    fieldValueItems: IItemBoxProps[];
}

export interface IValueSelectStringStateProps {
    selectedField?: string;
    selectedOperator?: string;
}

export interface IValueSelectStringProps extends IValueSelectStringOwnProps, IValueSelectStringStateProps {}

export class ValueSelectString extends React.Component<IValueSelectStringProps, IValueSelectStringOwnState> {
    constructor(props: IValueSelectStringProps) {
        super(props);
        this.state = {fieldValueItems: []};
    }

    componentWillReceiveProps(nextProps: IValueSelectStringProps) {
        this.updateFieldValues(nextProps.selectedField);
    }

    private async updateFieldValues(field: string) {
        const newFieldValuesItems: IItemBoxProps[] = await this.getFieldValuesItems(field);
        this.setState({fieldValueItems: newFieldValuesItems});
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
                <MultiSelectWithFilter
                    id={`${this.props.expressionEditorId}-${valueSelectStringId}`}
                    items={this.state.fieldValueItems}
                    placeholder={'Select field value'}
                />
            </span>
        );
    }
}
