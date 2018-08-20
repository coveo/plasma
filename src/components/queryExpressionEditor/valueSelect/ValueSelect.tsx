
import * as React from 'react';
import * as _ from 'underscore';
import {SingleSelectConnected} from '../../select/SingleSelectConnected';
import {FieldType} from '../expressionEditor/ExpressionEditor';
import {addQuotesIfContainsWhiteSpace} from '../QueryExpressionEditorUtils';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {ValueSelectDate} from '../valueSelectDate/ValueSelectDate';
import {ValueSelectNumber} from '../valueSelectNumber/ValueSelectNumber';
import {ValueSelectStringConnected} from '../valueSelectString/ValueSelectStringConnected';
import * as styles from './ValueSelect.scss';

export interface IValueSelectOwnProps {
    expressionEditorId: string;
    queryTrigger: QueryTrigger;
    selectedFieldType: FieldType;
    updateSelectedFieldValue: (value: string) => void;
}

export interface IValueSelectStateProps {
    selectedStringValue?: string[];
    selectedNumberValue?: string;
    selectedLowerDateValue?: Date;
    selectedUpperDateValue?: Date;
}

export interface IValueSelectProps extends IValueSelectOwnProps, IValueSelectStateProps {}

export class ValueSelect extends React.Component<IValueSelectProps> {
    private selectedValue: string;

    constructor(props: IValueSelectProps) {
        super(props);
        this.state = {fieldValueItems: []};
        this.selectedValue = '';
    }

    componentWillReceiveProps(nextProps: IValueSelectProps) {
        this.updateSelectedValue(nextProps);
    }

    private updateSelectedValue(nextProps: IValueSelectProps) {
        const newSelectedValue: string = this.getSelectedValue(nextProps);

        if (this.selectedValue !== newSelectedValue) {
            this.selectedValue = newSelectedValue;
            this.props.updateSelectedFieldValue(this.selectedValue);
        }
    }

    private getSelectedValue(nextProps: IValueSelectProps): string {
        switch (this.props.selectedFieldType) {
            case FieldType.String:
                return this.getSelectedStringValue(nextProps);
            case FieldType.Number:
                return this.getSelectedNumberValue(nextProps);
            case FieldType.Date:
                return this.getSelectedDateValue(nextProps);
            default:
                return '';
        }
    }

    private getSelectedStringValue(nextProps: IValueSelectProps): string {
        const values = nextProps.selectedStringValue;

        if (_.isUndefined(values) || _.isNull(values) || values.join('') === '') {
            return null;
        }

        const updatedValues = values.map((value) => addQuotesIfContainsWhiteSpace(value)).join(', ');

        return `(${updatedValues})`;
    }

    private getSelectedNumberValue(nextProps: IValueSelectProps): string {
        const selectedNumber: string = nextProps.selectedNumberValue;
        if (_.isUndefined(selectedNumber) || _.isNull(selectedNumber) || selectedNumber === '') {
            return null;
        }

        return selectedNumber;
    }

    private getSelectedDateValue(nextProps: IValueSelectProps): string {
        const date: Date = nextProps.selectedLowerDateValue;

        if (_.isUndefined(date) || _.isNull(date)) {
            return null;
        }

        const dateStringified: string = date.toLocaleDateString();
        const reformatedDate: string = dateStringified.split('/').reverse().join('/');

        return reformatedDate;
    }

    private get isSelectedFieldTypeIsValid(): boolean {
        return this.props.selectedFieldType === FieldType.String ||
            this.props.selectedFieldType === FieldType.Number ||
            this.props.selectedFieldType === FieldType.Date;
    }

    render() {
        const isRaised: string = this.props.selectedFieldType === FieldType.String ? '' : styles.raiseElement;

        return (
            <span className={`mr3 ${styles.container} ${isRaised} ${styles.selectValueWidth}`}>
                <span className={this.props.selectedFieldType === FieldType.String ? '' : styles.isHidden}>
                    <ValueSelectStringConnected expressionEditorId={this.props.expressionEditorId} queryTrigger={this.props.queryTrigger} />
                </span>
                <span className={this.props.selectedFieldType === FieldType.Number ? '' : styles.isHidden}>
                    <ValueSelectNumber expressionEditorId={this.props.expressionEditorId} />
                </span>
                <span className={this.props.selectedFieldType === FieldType.Date ? '' : styles.isHidden}>
                    <ValueSelectDate expressionEditorId={this.props.expressionEditorId} />
                </span>
                <span className={this.isSelectedFieldTypeIsValid ? styles.isHidden : ''}>
                    <SingleSelectConnected id={`disabled-select-value`} placeholder='Select Value' disabled={true} toggleClasses={styles.selectValueWidth} />
                </span>
            </span>
        );
    }
}
