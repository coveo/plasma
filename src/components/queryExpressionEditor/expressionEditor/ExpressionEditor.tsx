
import * as React from 'react';
import * as _ from 'underscore';
import {Button} from '../../button/Button';
import {AddRuleSelect} from '../addRuleSelect/AddRuleSelect';
import {FieldSelect} from '../fieldSelect/FieldSelect';
import {OperatorSelect} from '../operatorSelect/OperatorSelect';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {IField} from '../responseParser/ResponseParser';
import {ValueSelectConnected} from '../valueSelect/ValueSelectConnected';
// import { ReactVaporStore } from '../../../../docs/ReactVaporStore';

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
    queryTrigger: QueryTrigger;
    updateQueryExpression: (expression: string) => void;
}

export interface IExpressionEditorOwnState {
}

export interface IExpressionEditorStateProps {
    expression?: string;
    selectedField?: string;
    selectedOperator?: string;
    // TODO : Make an interface to regroup all the type of values and all the selector that could exists
    selectedFieldValues?: string[];
}

export interface IExpressionEditorDispatchProps {
    update?: (expression?: string) => void;
}

export interface IExpressionEditorProps extends IExpressionEditorOwnProps, IExpressionEditorStateProps, IExpressionEditorDispatchProps {}

export class ExpressionEditor extends React.Component<IExpressionEditorProps, IExpressionEditorOwnState> {
    private fields: IField[];

    constructor(props: IExpressionEditorProps) {
        super(props);
        this.state = {};
        this.fields = [];
    }

    async componentDidMount() {
        this.fields = await this.props.queryTrigger.getFields();
        this.forceUpdate();
    }

    componentWillReceiveProps(nextProps: IExpressionEditorProps) {
        // console.log(nextProps.selectedFieldValues)

        this.updateExpressionIfCompleted(nextProps);
    }

    private updateExpressionIfCompleted(nextProps: IExpressionEditorProps) {
        if (!this.isNewExpressionComplete(nextProps)) {
            this.props.update('');
            return;
        }

        if (!this.expressionHasChanged(nextProps)) {
            return;
        }

        const expression: string = this.getExpression(nextProps);
        this.props.update(expression);
    }

    private isNewExpressionComplete(nextProps: IExpressionEditorProps): boolean {
        const isNewExpressionComplete: boolean = (nextProps.selectedField && nextProps.selectedOperator
            && nextProps.selectedFieldValues.length > 0) || false;
        return isNewExpressionComplete;
    }

    private isCurrentExpressionComplete(): boolean {
        const isCurrentExpressionComplete: boolean = (this.props.selectedField && this.props.selectedOperator
            && this.props.selectedFieldValues.length > 0) || false;
        return isCurrentExpressionComplete;
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

    private getSelectedFieldType(): FieldType {
        const selectedField = _.find(this.fields, (field: IField) => field.name === this.props.selectedField);
        if (!selectedField) {
            return null;
        }

        return this.parseOriginalFieldType(selectedField.fieldType);
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

    // TODO remove if no used
    private logReduxState() {
        // console.log(ReactVaporStore.getState())
        // console.log(ReactVaporStore.getState().expressionEditors)
    }

    render() {
        return (
            <div>
                <FieldSelect
                    fields={this.fields}
                    expressionEditorId={this.props.id}
                    queryTrigger={this.props.queryTrigger}
                />
                <OperatorSelect
                    expressionEditorId={this.props.id}
                    selectedFieldType={this.getSelectedFieldType()}
                />
                <ValueSelectConnected
                    expressionEditorId={this.props.id}
                    queryTrigger={this.props.queryTrigger}
                />
                <AddRuleSelect
                    expressionEditorId={this.props.id}
                    isCurrentExpressionComplete={this.isCurrentExpressionComplete()}
                />
                <Button enabled={true} name={'Log Redux State'} onClick={() => {this.logReduxState();}} />
                {this.props.expression}
            </div>
        );
    }
}
