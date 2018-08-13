
import * as React from 'react';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {SingleSelectConnected} from '../../select/SingleSelectConnected';
import {FieldType} from '../expressionEditor/ExpressionEditor';
import * as styles from './OperatorSelect.scss';

export const operatorSelectId: string = 'operator-select';

export interface IOperatorSelectProps {
    expressionEditorId: string;
    selectedFieldType: FieldType;
}

export interface IOperatorSelectState {
}

const dateOperators: IItemBoxProps[] = [{value: '=', displayValue: 'equal'}, {value: '<=', displayValue: 'less or equal'}, {value: '>=', displayValue: 'greater or equal'}, {value: '<', displayValue: 'less'}, {value: '>', displayValue: 'greater'}, {value: '..', displayValue: 'between'}];
const numberOperators: IItemBoxProps[] = [{value: '=', displayValue: 'equal'}, {value: '<=', displayValue: 'less or equal'}, {value: '>=', displayValue: 'greater or equal'}, {value: '<', displayValue: 'less'}, {value: '>', displayValue: 'greater'}];
const stringOperators: IItemBoxProps[] = [{value: '==', displayValue: 'equal'}];

export class OperatorSelect extends React.Component<IOperatorSelectProps, IOperatorSelectState> {

    constructor(props: IOperatorSelectProps) {
        super(props);
        this.state = {};
    }

    private getOperatorItems(): IItemBoxProps[] {
        switch (this.props.selectedFieldType) {
            case FieldType.Date:
                return dateOperators;
            case FieldType.Number:
                return numberOperators;
            case FieldType.String:
                return stringOperators;
            default:
                return null;
        }
    }

    render() {
        return (
            <span>
                <SingleSelectConnected
                    id={`${this.props.expressionEditorId}-${operatorSelectId}`}
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
