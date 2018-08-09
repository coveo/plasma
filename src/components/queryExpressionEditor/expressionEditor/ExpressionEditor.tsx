
import * as React from 'react';
import * as _ from 'underscore';
import {Button} from '../../button/Button';
import {BooleanOperatorSelect} from '../booleanOperatorSelect/BooleanOperatorSelect';
import {FieldSelect} from '../fieldSelect/FieldSelect';
import {OperatorSelect} from '../operatorSelect/OperatorSelect';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {IField} from '../responseParser/ResponseParser';
import {ValueSelectConnected} from '../valueSelect/ValueSelectConnected';

export enum OriginalFieldType {
    LargeString = 'LargeString',
    Double = 'Double',
    Long = 'Long',
    Long64 = 'Long64',
    Date = 'Date',
}

export enum FieldType {
    Date = 'date',
    Number = 'number',
    String = 'string',
}

export interface IExpressionEditorOwnProps {
    id: string;
    fields: IField[];
    queryTrigger: QueryTrigger;
    updateQueryExpression: (expression: string) => void;
    addExpressionEditor: () => void;
    deleteExpressionEditor: (id: string) => void;
    ensureLastEditorCanAddRule: () => void;
}

export interface IExpressionEditorOwnState {
    selectedFieldType: FieldType;
}

export interface IExpressionEditorStateProps {
    expression?: string;
    booleanOperator?: string;
    isExpressionEditorAlone?: boolean;
    selectedField?: string;
    selectedOperator?: string;
    // TODO : Make an interface to regroup all the type of values and all the selector that could exists
    selectedFieldValues?: string[];
}

export interface IExpressionEditorDispatchProps {
    update?: (expression?: string, booleanOperator?: string) => void;
    remove?: () => void;
}

export interface IExpressionEditorProps extends IExpressionEditorOwnProps, IExpressionEditorStateProps, IExpressionEditorDispatchProps {}

export class ExpressionEditor extends React.Component<IExpressionEditorProps, IExpressionEditorOwnState> {
    constructor(props: IExpressionEditorProps) {
        super(props);
        this.state = {selectedFieldType: null};
    }

    componentWillReceiveProps(nextProps: IExpressionEditorProps) {
        this.updateExpressionIfCompleted(nextProps);
        this.updateSelectedFieldType(nextProps.selectedField);
    }

    private updateExpressionIfCompleted(nextProps: IExpressionEditorProps) {
        if (!this.isExpressionComplete(nextProps) || this.selectedFieldHasChange(nextProps)) {
            this.props.update('', undefined);
            return;
        }

        if (!this.expressionHasChanged(nextProps)) {
            return;
        }

        const expression: string = this.getExpression(nextProps);
        this.props.update(expression, this.props.booleanOperator);
    }

    private isExpressionComplete(props: IExpressionEditorProps): boolean {
        const isNewExpressionComplete: boolean = (props.selectedField && props.selectedOperator
            && props.selectedFieldValues.length > 0) || false;
        return isNewExpressionComplete;
    }

    private selectedFieldHasChange(newProps: IExpressionEditorProps): boolean {
        return this.props.selectedField !== newProps.selectedField;
    }

    private expressionHasChanged(nextProps: IExpressionEditorProps): boolean {
        const selectedFieldHasChange: boolean = this.props.selectedField !== nextProps.selectedField;
        const selectedOperatorHasChange: boolean = this.props.selectedOperator !== nextProps.selectedOperator;
        const selectedFieldValuesHasChange: boolean = this.props.selectedFieldValues !== nextProps.selectedFieldValues;

        return selectedFieldHasChange || selectedOperatorHasChange || selectedFieldValuesHasChange;
    }

    private getExpression(nextProps: IExpressionEditorProps): string {
        // TODO : Better parsing
        const selectedField: string = nextProps.selectedField ? nextProps.selectedField : '';
        const selectedOperator: string = nextProps.selectedOperator ? nextProps.selectedOperator : '';
        const selectedFieldValues: string[] = nextProps.selectedFieldValues ? nextProps.selectedFieldValues : [];

        const expression: string = selectedField + selectedOperator + selectedFieldValues;

        const sanitizedExpression: string = expression.replace(/\s/g, '');
        return sanitizedExpression;
    }

    private updateSelectedFieldType(selectedFieldName: string) {
        const selectedField = _.find(this.props.fields, (field: IField) => field.name === selectedFieldName);

        if (selectedField === undefined) {
            this.setState({selectedFieldType: null});
            return;
        }

        const fieldType: FieldType = this.parseOriginalFieldType(selectedField.fieldType);
        this.setState({selectedFieldType: fieldType});
    }

    private parseOriginalFieldType(originalFieldType: string): FieldType {
        // TODO : Review that all types are handled
        if (originalFieldType === OriginalFieldType.Date) {
            return FieldType.Date;
        } else if (originalFieldType === (OriginalFieldType.Long64 || OriginalFieldType.Long || OriginalFieldType.Double)) {
            return FieldType.Number;
        } else {
            return FieldType.String;
        }
    }

    private deleteExpressionEditor() {
        this.props.ensureLastEditorCanAddRule();
        this.props.remove();
        this.props.deleteExpressionEditor(this.props.id);
    }

    private onBooleanOperatorSelect(selectedBooleanOperator: string) {
        if (!this.props.booleanOperator) {
            this.props.addExpressionEditor();
        }

        this.props.update(this.props.expression, selectedBooleanOperator);
    }

    render() {
        return (
            <div>
                <FieldSelect
                    expressionEditorId={this.props.id}
                    fields={this.props.fields}
                    queryTrigger={this.props.queryTrigger}
                />
                <OperatorSelect
                    expressionEditorId={this.props.id}
                    selectedFieldType={this.state.selectedFieldType}
                />
                <ValueSelectConnected
                    expressionEditorId={this.props.id}
                    queryTrigger={this.props.queryTrigger}
                    selectedFieldType={this.state.selectedFieldType}
                />
                <BooleanOperatorSelect
                    expressionEditorId={this.props.id}
                    isCurrentExpressionComplete={this.isExpressionComplete(this.props)}
                    onBooleanOperatorSelect={(selectedBooleanOperator) => this.onBooleanOperatorSelect(selectedBooleanOperator)}
                />
                <Button enabled={!this.props.isExpressionEditorAlone} name={'Delete'} onClick={() => this.deleteExpressionEditor()} />
                {this.props.expression}
            </div>
        );
    }
}
