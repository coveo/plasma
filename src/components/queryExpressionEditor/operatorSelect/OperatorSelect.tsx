
import * as React from 'react';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import { SingleSelectConnected } from '../../select/SingleSelectConnected';
import {FieldType} from '../expressionEditor/ExpressionEditor';

export const operatorSelectId: string = 'operator-select';

export interface IOperatorSelectProps {
    expressionEditorId: string;
    selectedFieldType: FieldType;
}

export interface IOperatorSelectState {
}

const dateOperators: IItemBoxProps[] = [{value: '='}, {value: '=='}, {value: '<='}, {value: '>='}, {value: '..'}];
const numberOperators: IItemBoxProps[] = [{value: '='}, {value: '=='}, {value: '<='}, {value: '>='}];
const stringOperators: IItemBoxProps[] = [{value: '='}, {value: '=='}];

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
                    // TODO : review le disabled,
                    disabled={this.getOperatorItems() === null}
                />
            </span>
        );
    }
}
