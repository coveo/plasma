
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

    // TODO : this was updated with componentWillReceiveProps
    // localExpression: string;
}

export interface IExpressionEditorStateProps {
    expression?: string;
    selectedField?: string;
    selectedOperator?: string;
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
            // localExpression: '',
        };
        this.fields = [];
    }

    // TODO : Is it good practice to use componentWillReceiveProps?
    componentWillReceiveProps(nextProps: IExpressionEditorProps) {
        // this.setState({localExpression: expression});

        // const expression: string = this.getExpression();

        // this.props.update(expression);
        // this.updateExpression(nextProps);
    }

    async componentDidMount() {
        this.fields = await this.props.queryTrigger.getFields();
        this.forceUpdate();
    }

    private getExpression(): string {
        // TODO : Better parsing
        return `${this.props.selectedField ? this.props.selectedField : ''}
                ${this.props.selectedOperator ? this.props.selectedOperator : ''}
                (${this.props.selectedFieldValues ? this.props.selectedFieldValues : ''})`;
    }

    // TODO : Version with componentWillReceiveProps
    // private getExpression(nextProps: IExpressionEditorProps): string {
    //     // TODO : Better parsing
    //     return `${nextProps.selectedField ? nextProps.selectedField : ''}
    //             ${nextProps.selectedOperator ? nextProps.selectedOperator : ''}
    //             (${nextProps.selectedFieldValues ? nextProps.selectedFieldValues : ''})`
    // }

    private getSelectedFieldType(): FieldType {
        const selectedField = _.find(this.fields, (field: IField) => field.name === this.props.selectedField);
        if (!selectedField) {
            return null;
        }

        return this.parseOriginalFieldType(selectedField.fieldType);
    }

    private parseOriginalFieldType(originalFieldType: string): FieldType {
        // TODO : Review that all types handled
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

    private async updateQueryExpression() {
        // TODO : example for parsing the string initially
        // ReactVaporStore.dispatch(selectListBoxOption(`${expressionEditor1ID}-${singleSelectFieldId}`, false, '@uri'))

        const expression: string = this.getExpression();
        this.props.update(expression);
        // console.log(ReactVaporStore.getState())

        // this.props.update(this.state.localExpression);
        // this.props.updateQueryExpression(this.state.localExpression);
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
                <Button enabled={true} name={'Update Query Expression'} onClick={() => {this.updateQueryExpression();}} />
                {this.props.expression}
            </div>
        );
    }
}
