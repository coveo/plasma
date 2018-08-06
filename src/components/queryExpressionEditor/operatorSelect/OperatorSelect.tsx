
import * as React from 'react';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {SingleSelectWithFilter} from '../../select/SelectComponents';
import {FieldType} from '../expressionEditor/ExpressionEditor';

export const operatorSelectId: string = 'operator-select';

export interface IOperatorSelectProps {
    selectedFieldType: FieldType;
    expressionEditorId: string;
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
                    id={`${this.props.expressionEditorId}-${operatorSelectId}`}
                    items={this.getOperatorItems()}
                    placeholder={'Select operator'}
                />
            </span>
        );
    }
}
