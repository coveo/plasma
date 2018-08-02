
import * as React from 'react';
import * as _ from 'underscore';
import { Button } from '../../button/Button';
import { QueryTrigger } from '../queryTrigger/QueryTrigger';
import { IItemBoxProps } from '../../itemBox/ItemBox';
import { IField } from '../responseParser/ResponseParser';
import { OperatorSelector } from './operatorSelector/OperatorSelector';
import { FieldSelector } from './fieldSelector/FieldSelector';
import { ValueSelector } from './valueSelector/ValueSelector';

export enum OriginalFieldType {
    LargeString = 'LargeString',
    Double = 'Double',
    Long = 'Long',
    Long64 = 'Long64',
    Date = 'Date'
}

export enum FieldType {
    Date = 'date',
    Number = 'number',
    String = 'string'
}

export interface IExpressionEditorProps {
    queryTrigger: QueryTrigger;
    updateQueryExpression: (expression: string) => void;
}

// TODO : Review les fieldValue vs fieldValues maintenant ça devrait être des fieldValues  
export interface IExpressionEditorState {
    fieldValueItems: IItemBoxProps[];
    selectedField: string;
    selectedOperator: string;
    selectedFieldValues: string[];
}

export class ExpressionEditor extends React.Component<IExpressionEditorProps, IExpressionEditorState> {
    // TODO : Would it be better to have it in the state?
    private fields:  IField[];

    constructor(props: IExpressionEditorProps) {
        super(props);
        this.state = {
            fieldValueItems: [],
            selectedField: '',
            selectedOperator: '',
            selectedFieldValues: []
        };
        this.fields = [];
    }

    async componentDidMount() {
        this.fields = await this.props.queryTrigger.getFields();
        this.forceUpdate();
    }

    private getSelectedFieldType(): FieldType {
        const selectedField = _.find(this.fields, (field: IField) => field.name === this.state.selectedField);
        if (!selectedField) {
            return null;
        }

        return this.parseOriginalFieldType(selectedField.fieldType);
    }

    private parseOriginalFieldType(originalFieldType: string): FieldType {
        // TODO : Review that we have all types
        if (originalFieldType === OriginalFieldType.Date) {
            return FieldType.Date;
        } else if  (originalFieldType === (OriginalFieldType.Long64 || OriginalFieldType.Long || OriginalFieldType.Double)) {
            return FieldType.Number;
        } else {
            return FieldType.String;
        } 
    }

    // TODO : those functions could be removed; we could just use this.setState directly
    private updateFieldValues(fieldValues: string[]) {
        this.setState({selectedFieldValues: fieldValues});
    }

    private updateOperator(operator: string) {
        this.setState({selectedOperator: operator});
    }

    private updateField(field: string) {
        this.setState({selectedField: field});
    }

    private updateFieldValueItems(fieldValueItems: IItemBoxProps[]) {
        
        this.setState({fieldValueItems: fieldValueItems});
    }


    private async updateQueryExpression() {
        // TODO review buildding expression
        const expression = `${this.state.selectedField}${this.state.selectedOperator}${this.state.selectedFieldValues[0]}`;
        this.props.updateQueryExpression(expression);
    }

    // private onSelectValue(value: string) {
    //     this.state.selectedFieldValues.push(value);
    //     console.log(this.state.selectedFieldValues)
    // }

    render() {
        return (
            <div>
                <FieldSelector 
                    fields={this.fields}
                    queryTrigger={this.props.queryTrigger}
                    updateField={(field: string) => this.updateField(field)}
                    updateFieldValueItems={(fieldValueItems: IItemBoxProps[]) => this.updateFieldValueItems(fieldValueItems)}
                />
                <OperatorSelector
                    selectedFieldType={this.getSelectedFieldType()}
                    updateOperator={(operator: string) => this.updateOperator(operator)}
                />
                <ValueSelector fieldValueItems={this.state.fieldValueItems} updateFieldValues={(fieldValues: string[]) => this.updateFieldValues(fieldValues)} />

                <Button enabled={true} name={'Update Query Expression'} onClick={() => {this.updateQueryExpression()}}/>
            </div>
        );
    }
}
