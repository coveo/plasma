
import * as React from 'react';
import * as _ from 'underscore';
import {convertUndefinedAndNullToEmptyString} from '../../../utils/FalsyValuesUtils';
import {Button} from '../../button/Button';
import {BooleanOperatorSelect} from '../booleanOperatorSelect/BooleanOperatorSelect';
import {FieldSelectConnected} from '../fieldSelect/FieldSelectConnected';
import {OperatorSelect} from '../operatorSelect/OperatorSelect';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {IField} from '../responseParser/ResponseParser';
import {ValueSelectConnected} from '../valueSelect/ValueSelectConnected';
import * as styles from './ExpressionEditor.scss';

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

export interface SelectedFieldValue {
    value: string;
    hasChange: boolean;
}

export interface IExpressionEditorOwnProps {
    id: string;
    fields: IField[];
    queryTrigger: QueryTrigger;
    addExpressionEditor: () => void;
    deleteExpressionEditor: (id: string) => void;
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
}

export interface IExpressionEditorDispatchProps {
    updateExpression?: (expression?: string, booleanOperator?: string) => void;
    removeExpressionEditorState?: () => void;
}

export interface IExpressionEditorProps extends IExpressionEditorOwnProps, IExpressionEditorStateProps, IExpressionEditorDispatchProps {}

export class ExpressionEditor extends React.Component<IExpressionEditorProps, IExpressionEditorOwnState> {
    private selectedFieldValue: SelectedFieldValue;

    constructor(props: IExpressionEditorProps) {
        super(props);
        this.state = {selectedFieldType: null};
        this.selectedFieldValue = {value: '', hasChange: false};
    }

    componentWillReceiveProps(nextProps: IExpressionEditorProps) {
        this.updateExpressionIfCompleted(nextProps);
        this.updateSelectedFieldType(nextProps.selectedField);
    }

    private updateExpressionIfCompleted(nextProps: IExpressionEditorProps) {
        if (!this.isExpressionComplete(nextProps) || this.selectedFieldHasChange(nextProps)) {
            this.props.updateExpression('', this.props.booleanOperator);
            return;
        }

        if (!this.expressionHasChanged(nextProps)) {
            return;
        }

        const expression: string = this.getExpression(nextProps);
        this.props.updateExpression(expression, this.props.booleanOperator);
        this.selectedFieldValue.hasChange = false;
    }

    private isExpressionComplete(props: IExpressionEditorProps): boolean {
        const isNewExpressionComplete: boolean = (props.selectedField && props.selectedOperator
            && (this.selectedFieldValue.value !== null && this.selectedFieldValue.value !== '')) || false;

        return isNewExpressionComplete;
    }

    private selectedFieldHasChange(newProps: IExpressionEditorProps): boolean {
        return this.props.selectedField !== newProps.selectedField;
    }

    private expressionHasChanged(nextProps: IExpressionEditorProps): boolean {
        const selectedFieldHasChange: boolean = this.props.selectedField !== nextProps.selectedField;
        const selectedOperatorHasChange: boolean = this.props.selectedOperator !== nextProps.selectedOperator;

        return selectedFieldHasChange || selectedOperatorHasChange || this.selectedFieldValue.hasChange;
    }

    private getExpression(nextProps: IExpressionEditorProps): string {
        const selectedField: string = convertUndefinedAndNullToEmptyString(nextProps.selectedField);
        const selectedOperator: string = convertUndefinedAndNullToEmptyString(nextProps.selectedOperator);
        const selectedFieldValue: string = convertUndefinedAndNullToEmptyString(this.selectedFieldValue.value);

        const expression: string = `${selectedField}${selectedOperator}${selectedFieldValue}`;

        return expression;
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
        // TODO : Review if all types are handled
        if (originalFieldType === OriginalFieldType.Date) {
            return FieldType.Date;
        }

        if (originalFieldType === (OriginalFieldType.Long64 || OriginalFieldType.Long || OriginalFieldType.Double)) {
            return FieldType.Number;
        }

        if (originalFieldType === OriginalFieldType.LargeString) {
            return FieldType.String;
        }

        return null;
    }

    private deleteExpressionEditor() {
        this.props.removeExpressionEditorState();
        this.props.deleteExpressionEditor(this.props.id);
    }

    private onBooleanOperatorSelect(selectedBooleanOperator: string) {
        if (!this.props.booleanOperator && selectedBooleanOperator !== null) {
            this.props.addExpressionEditor();
        }

        this.props.updateExpression(this.props.expression, selectedBooleanOperator);
    }

    private updateSelectedFieldValue(value: string) {
        this.selectedFieldValue.value = value;
        this.selectedFieldValue.hasChange = true;
        this.updateExpressionIfCompleted(this.props);
    }

    render() {
        const firstLineContainerPadding: string = this.state.selectedFieldType === FieldType.String ? styles.slimPadding : styles.loosePadding;

        return (
            <div className={`mt1 text-medium-blue`}>
                <div className={`ml5 bg-light-grey ${styles.firstLineContainer} ${firstLineContainerPadding}`}>
                    <div className={`spaced-boxes-container flex flex-nowrap ${styles.firstLineInnerContainer}`}>
                        <div className={`${styles.raiseElement}`}>
                            <FieldSelectConnected
                                expressionEditorId={this.props.id}
                                fields={this.props.fields}
                            />
                            <OperatorSelect
                                expressionEditorId={this.props.id}
                                selectedFieldType={this.state.selectedFieldType}
                            />
                        </div>
                        <ValueSelectConnected
                            expressionEditorId={this.props.id}
                            queryTrigger={this.props.queryTrigger}
                            selectedFieldType={this.state.selectedFieldType}
                            updateSelectedFieldValue={(value: string) => this.updateSelectedFieldValue(value)}
                        />
                        <span className={`ml2 ${styles.raiseElement}`}>
                            <Button enabled={!this.props.isExpressionEditorAlone} name={'X'} onClick={() => this.deleteExpressionEditor()} />
                        </span>
                    </div>
                </div>

                <div className={`ml3 mt1`}>
                    <BooleanOperatorSelect
                        expressionEditorId={this.props.id}
                        isExpressionComplete={this.isExpressionComplete(this.props)}
                        onBooleanOperatorSelect={(selectedBooleanOperator) => this.onBooleanOperatorSelect(selectedBooleanOperator)}
                    />
                </div>
            </div>
        );
    }
}
