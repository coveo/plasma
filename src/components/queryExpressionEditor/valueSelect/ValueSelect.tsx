
import * as React from 'react';
import {SingleSelectConnected} from '../../select/SingleSelectConnected';
import {FieldType} from '../expressionEditor/ExpressionEditor';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {ValueSelectDate} from '../valueSelectDate/ValueSelectDate';
import {ValueSelectNumber} from '../valueSelectNumber/ValueSelectNumber';
import {ValueSelectStringConnected} from '../valueSelectString/ValueSelectStringConnected';

export interface IValueSelectOwnProps {
    expressionEditorId: string;
    queryTrigger: QueryTrigger;
    selectedFieldType: FieldType;
    updateSelectedFieldValue: (value: string) =>  void;
}

export interface IValueSelectOwnState {
}

export interface IValueSelectStateProps {
    selectedStringValue?: string[];
    selectedNumberValue?: string;
    selectedLowerDateValue?: Date;
    selectedUpperDateValue?: Date;
}

export interface IValueSelectProps extends IValueSelectOwnProps, IValueSelectStateProps {}

export class ValueSelect extends React.Component<IValueSelectProps, IValueSelectOwnState> {
    private selectedValue: string;

    constructor(props: IValueSelectProps) {
        super(props);
        this.state = {fieldValueItems: []};
        this.selectedValue = '';
    }

    componentWillReceiveProps(nextProps: IValueSelectProps) {
        // this.props.updateValueSelected('nextProps.selectedStringValue[0]')
        this.updateValueSelected(nextProps);
    }

    private updateValueSelected(nextProps: IValueSelectProps) {
        let newSelectedValue: string;

        // TODO nextProps or this.props
        switch (this.props.selectedFieldType) {
            case FieldType.String:
                newSelectedValue = this.getSelectedStringValue(nextProps);
            case FieldType.Number:
                newSelectedValue = this.getSelectedNumberValue(nextProps);
            case FieldType.Date:
                newSelectedValue = this.getSelectedDateValue(nextProps);
            default:
                newSelectedValue = 'default';

        }

        if (this.selectedValue !== newSelectedValue) {
            // console.log('this.selectedValue !== newSelectedValue');
            this.selectedValue = newSelectedValue;
            this.props.updateSelectedFieldValue(newSelectedValue);
        }
    }

    private getSelectedStringValue(nextProps: IValueSelectProps): string {
        return 'string';
    }

    private getSelectedNumberValue(nextProps: IValueSelectProps): string {

        return 'number';
    }

    private getSelectedDateValue(nextProps: IValueSelectProps): string {
        return 'date';
    }

    private getValueSelector(): JSX.Element {
        switch (this.props.selectedFieldType) {
            case FieldType.String:
                return <ValueSelectStringConnected expressionEditorId={this.props.expressionEditorId} queryTrigger={this.props.queryTrigger} />;
            case FieldType.Number:
                return <ValueSelectNumber expressionEditorId={this.props.expressionEditorId} />;
            case FieldType.Date:
                return <ValueSelectDate expressionEditorId={this.props.expressionEditorId} />;
            default:
                return <SingleSelectConnected id={`temporary-disable-select-value`} placeholder='Select Value' disabled={true} />;
        }
    }

    render() {
        return (
            <span>
                {this.getValueSelector()}
            </span>
        );
    }
}
