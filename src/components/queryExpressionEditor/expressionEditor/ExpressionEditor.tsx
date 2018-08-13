
import * as React from 'react';
import * as _ from 'underscore';
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

export interface FieldValue {
    numberValue: number;
    dateValue: string[];
    stringValue: string[];
}

export interface IExpressionEditorOwnProps {
    id: string;
    fields: IField[];
    queryTrigger: QueryTrigger;
    addExpressionEditor: () => void;
    deleteExpressionEditor: (id: string) => void;
    ensureLastEditorCanAddRule: () => void;
}

export interface IExpressionEditorOwnState {
    selectedFieldType: FieldType;
    selectedFieldValue: string;
}

export interface IExpressionEditorStateProps {
    expression?: string;
    booleanOperator?: string;
    isExpressionEditorAlone?: boolean;

    selectedField?: string;
    selectedOperator?: string;
}

export interface IExpressionEditorDispatchProps {
    update?: (expression?: string, booleanOperator?: string) => void;
    remove?: () => void;
}

export interface IExpressionEditorProps extends IExpressionEditorOwnProps, IExpressionEditorStateProps, IExpressionEditorDispatchProps {}

export class ExpressionEditor extends React.Component<IExpressionEditorProps, IExpressionEditorOwnState> {
    constructor(props: IExpressionEditorProps) {
        super(props);
        this.state = {selectedFieldType: null, selectedFieldValue: ''};
    }

    componentWillReceiveProps(nextProps: IExpressionEditorProps) {
        this.updateExpressionIfCompleted(nextProps);
        this.updateSelectedFieldType(nextProps.selectedField);
    }

    private updateExpressionIfCompleted(nextProps: IExpressionEditorProps = this.props) {
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
            && this.state.selectedFieldValue != null) || false;
        return isNewExpressionComplete;
    }

    private selectedFieldHasChange(newProps: IExpressionEditorProps): boolean {
        return this.props.selectedField !== newProps.selectedField;
    }

    private expressionHasChanged(nextProps: IExpressionEditorProps): boolean {
        const selectedFieldHasChange: boolean = this.props.selectedField !== nextProps.selectedField;
        const selectedOperatorHasChange: boolean = this.props.selectedOperator !== nextProps.selectedOperator;

        return selectedFieldHasChange || selectedOperatorHasChange;
    }

    private getExpression(nextProps: IExpressionEditorProps): string {
        // TODO : Better parsing
        const selectedField: string = nextProps.selectedField ? nextProps.selectedField : '';
        const selectedOperator: string = nextProps.selectedOperator ? nextProps.selectedOperator : '';
        const selectedFieldValue: string = this.state.selectedFieldValue ? this.state.selectedFieldValue : '';

        const expression: string = selectedField + selectedOperator + selectedFieldValue;

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

    // TODO check condition
    private onBooleanOperatorSelect(selectedBooleanOperator: string) {
        if (!this.props.booleanOperator &&
            selectedBooleanOperator !== 'null' &&
            selectedBooleanOperator !== null &&
            selectedBooleanOperator !== undefined) {
            this.props.addExpressionEditor();
        }

        this.props.update(this.props.expression, selectedBooleanOperator);
    }

    private updateSelectedFieldValue(value: string) {
        // console.log('updateValueSelected')
        this.setState({selectedFieldValue: value});
        this.updateExpressionIfCompleted();
    }

    // private logTest() {
    //     // console.log(this.props.selectedField)

    //     // console.log(this.props.selectedUpperDateValue.toISOString().slice(0,10))

    //     // console.log(this.props.selectedUpperDateValue.toLocaleDateString("en-US"))
    // }

    render() {
        const firstLineContainerPadding: string = this.state.selectedFieldType === FieldType.String ?  styles.slimPadding : styles.loosePadding;

        return (
            <div className={`mt1 text-medium-blue`}>
                <div className={`ml5 bg-light-grey ${styles.firstLineContainer} ${firstLineContainerPadding}`}> 
                    <div className={ `spaced-boxes-container flex flex-nowrap ${styles.firstLineInnerContainer}`}>
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
                        <span className={`${styles.raiseElement}`}>
                            <Button enabled={!this.props.isExpressionEditorAlone} name={'X'} onClick={() => this.deleteExpressionEditor()} />
                        </span>
                    </div>
                </div>

                <div className={`ml3 mt1`}>
                    <BooleanOperatorSelect
                        expressionEditorId={this.props.id}
                        isCurrentExpressionComplete={this.isExpressionComplete(this.props)}
                        onBooleanOperatorSelect={(selectedBooleanOperator) => this.onBooleanOperatorSelect(selectedBooleanOperator)}
                    />   
                </div>
    


                {/* <Button enabled={true} name={'LOG test'} onClick={() => this.logTest()} /> */}

                {/* {this.props.expression} */}
            </div>
        );
    }
}
