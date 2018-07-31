
import * as React from 'react';
import * as _ from 'underscore';
import { Button } from '../../button/Button';
import { QueryTrigger } from '../queryTrigger/QueryTrigger';
import { SingleSelectWithFilter } from '../../select/SelectComponents';
import { IItemBoxProps } from '../../itemBox/ItemBox';
import { IField, IFieldValue } from '../responseParser/ResponseParser';


export interface IFormModeProps {
    queryTrigger: QueryTrigger;
    updateQueryExpression: (expression: string) => void;
}

export interface IFormModeState {
    fieldItems: IItemBoxProps[]; // TODO : I don't think we need to keep it in the state.
    fieldValueItems: IItemBoxProps[];
    selectedField: string;
    selectedOperator: string;
    selectedFieldValue: string;
}

const OPERATORS: IItemBoxProps[] = [{value: '='}, {value: '=='}, {value: '<='}, {value: '>='}];

export class FormMode extends React.Component<IFormModeProps, IFormModeState> {

    constructor(props: IFormModeProps) {
        super(props);
        this.state = {
            fieldItems: [],
            fieldValueItems: [],
            selectedField: '',
            selectedOperator: '',
            selectedFieldValue: ''
        };
    }

    async componentDidMount() {
        const fieldItems = await this.getFieldsItems();
        // const fieldValueItems = await this.getFieldValuesItems();
        this.setState({fieldItems: fieldItems});
    }
    
    private async getFieldsItems(): Promise<IItemBoxProps[]> {
        const fields: IField[] = await this.props.queryTrigger.getFields();

        const fieldsItems: IItemBoxProps[] = [];
        _.forEach(fields, (field: IField) => {
            const getItemBox: IItemBoxProps = {value: field.name};
            fieldsItems.push(getItemBox);
        });
        return fieldsItems;
    }

    private async fieldOnSelect(field: string) {
        await this.updateFieldValues(field);
        this.setState({selectedField: field});
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

    private fieldValueOnSelect(fieldValue: string) {
        this.setState({selectedFieldValue: fieldValue});
    }

    private operatorOnSelect(operator: string) {
        this.setState({selectedOperator: operator});
    }

    private async updateQueryExpression() {
        const expression = `${this.state.selectedField}${this.state.selectedOperator}${this.state.selectedFieldValue}`;
        this.props.updateQueryExpression(expression);
    }

    render() {
        return (
            <div>
                <SingleSelectWithFilter 
                    id={'fields-selector'}
                    items={this.state.fieldItems}
                    placeholder={'Select field'}
                    onSelectOptionCallback={(field: string) => this.fieldOnSelect(field)}
                />
                <SingleSelectWithFilter 
                    id={'operator-selector'}
                    items={OPERATORS}
                    placeholder={'Select operator'}
                    onSelectOptionCallback={(operator: string) => this.operatorOnSelect(operator)}
                />
                <SingleSelectWithFilter 
                    id={'fieldValue-selector'}
                    items={this.state.fieldValueItems}
                    placeholder={'Select field value'}
                    onSelectOptionCallback={(fieldValue: string) => this.fieldValueOnSelect(fieldValue)}
                />
                {/* TODO : Link the button to update queryExpression */}
                <Button enabled={true} name={'Update Query Expression'} onClick={() => {this.updateQueryExpression()}}/>
            </div>
        );
    }
}
