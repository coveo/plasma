
import * as React from 'react';
import * as _ from 'underscore';
import {Button} from '../../button/Button';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {FieldSelect} from '../fieldSelect/FieldSelect';
import {OperatorSelect} from '../operatorSelect/OperatorSelect';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {IField} from '../responseParser/ResponseParser';
import {ValueSelect} from '../valueSelect/ValueSelect';
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
     // TODO maybe do not pass it as a props... to review
    fieldValueItems: IItemBoxProps[];
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
        this.state = {
            fieldValueItems: [],
        };
        this.fields = [];
    }

    async componentDidMount() {
        this.fields = await this.props.queryTrigger.getFields();
        this.forceUpdate();
    }

    componentWillReceiveProps(nextProps: IExpressionEditorProps) {
        this.updateExpressionIfCompleted(nextProps);
    }

    private updateExpressionIfCompleted(nextProps: IExpressionEditorProps) {
        if (!this.isExpressionComplete(nextProps)) {
            this.props.update('');
            return;
        }

        if (!this.expressionHasChanged(nextProps)) {
            return;
        }

        const expression: string = this.getExpression(nextProps);
        this.props.update(expression);
    }

    private isExpressionComplete(nextProps: IExpressionEditorProps): boolean {
        const isExpressionComplete: boolean = (nextProps.selectedField && nextProps.selectedOperator && nextProps.selectedFieldValues.length > 0) || false;
        return isExpressionComplete;
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

        const sanitizedExpression: string = expression.replace(/\s/g,'');
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

    // TODO : could be removed; we could just use this.setState directly
    private updateFieldValueItems(fieldValueItems: IItemBoxProps[]) {
        this.setState({fieldValueItems: fieldValueItems});
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
                    updateFieldValueItems={(fieldValueItems: IItemBoxProps[]) => this.updateFieldValueItems(fieldValueItems)}
                />
                <OperatorSelect
                    expressionEditorId={this.props.id}
                    selectedFieldType={this.getSelectedFieldType()}
                />
                <ValueSelect
                    expressionEditorId={this.props.id}
                    fieldValueItems={this.state.fieldValueItems}
                />
                <Button enabled={true} name={'Log Redux State'} onClick={() => {this.logReduxState();}} />
                {this.props.expression}
            </div>
        );
    }
}
