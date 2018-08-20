
import * as React from 'react';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {SingleSelectConnected} from '../../select/SingleSelectConnected';
import {FieldType} from '../expressionEditor/ExpressionEditor';
import * as styles from './OperatorSelect.scss';

export const OPERATOR_SELECT_ID: string = 'operator-select';
export const BASIC_OPERATORS: IItemBoxProps[] = [{value: '=', displayValue: 'equal'}, {value: '<=', displayValue: 'less or equal'}, {value: '>=', displayValue: 'greater or equal'}, {value: '<', displayValue: 'less'}, {value: '>', displayValue: 'greater'}];
export const DATE_OPERATORS: IItemBoxProps[] = BASIC_OPERATORS; // TODO : this operator will eventually be added with the Between Dates feature : {value: '..', displayValue: 'between'}];
export const NUMBER_OPERATORS: IItemBoxProps[] = BASIC_OPERATORS;
export const STRING_OPERATORS: IItemBoxProps[] = [{value: '==', displayValue: 'equal'}];

export interface IOperatorSelectProps {
    expressionEditorId: string;
    selectedFieldType: FieldType;
}

export class OperatorSelect extends React.Component<IOperatorSelectProps> {

    private getOperatorItems(): IItemBoxProps[] {
        switch (this.props.selectedFieldType) {
            case FieldType.Date:
                return DATE_OPERATORS;
            case FieldType.Number:
                return NUMBER_OPERATORS;
            case FieldType.String:
                return STRING_OPERATORS;
            default:
                return null;
        }
    }

    render() {
        return (
            <span>
                <SingleSelectConnected
                    id={`${this.props.expressionEditorId}-${OPERATOR_SELECT_ID}`}
                    items={this.getOperatorItems()}
                    placeholder={'Select operator'}
                    disabled={!this.props.selectedFieldType}
                    toggleClasses={styles.selector}
                />
                <span className={'h3 mr2 ml2'}>to</span>
            </span>
        );
    }
}
