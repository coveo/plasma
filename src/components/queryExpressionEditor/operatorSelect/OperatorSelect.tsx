
import * as React from 'react';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {SingleSelectWithFilter} from '../../select/SelectComponents';
import {FieldType} from '../expressionEditor/ExpressionEditor';

export interface IOperatorSelectProps {
    selectedFieldType: FieldType;
    updateOperator: (operator: string) => void;
}

export interface IOperatorSelectState {
}

const dateOperators: IItemBoxProps[] = [{value: '='}, {value: '=='}, {value: '<='}, {value: '>='}, {value: '..'}];
const numberOperators: IItemBoxProps[] = [{value: '='}, {value: '=='}, {value: '<='}, {value: '>='}];
const stringOperators: IItemBoxProps[] = [{value: '='}, {value: '=='}];

export class OperatorSelect extends React.Component<IOperatorSelectProps, IOperatorSelectState> {

    constructor(props: IOperatorSelectProps) {
        super(props);
        this.state = {
        };
    }

    // TODO : Could call this.props.updateOperator(operator); directly
    private operatorOnSelect(operator: string) {
        this.props.updateOperator(operator);
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
                return dateOperators; // TODO put null instead of dateOperators
        }
    }

    render() {
        return (
            <span>
                <SingleSelectWithFilter
                    id={'operator-selector'}
                    items={this.getOperatorItems()}
                    placeholder={'Select operator'}
                    onSelectOptionCallback={(operator: string) => this.operatorOnSelect(operator)}
                />
            </span>
        );
    }
}
