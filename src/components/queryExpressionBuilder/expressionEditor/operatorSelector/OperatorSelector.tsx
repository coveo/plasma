
import * as React from 'react';
import {IItemBoxProps} from '../../../itemBox/ItemBox';
import {SingleSelectWithFilter} from '../../../select/SelectComponents';
import {FieldType} from '../ExpressionEditor';
// import * as _ from 'underscore'; // TODO

export interface IOperatorSelectorProps {
    selectedFieldType: FieldType;
    updateOperator: (operator: string) => void;
}

export interface IOperatorSelectorState {
}

const dateOperators: IItemBoxProps[] = [{value: '='}, {value: '=='}, {value: '<='}, {value: '>='}, {value: '..'}];
const numberOperators: IItemBoxProps[] = [{value: '='}, {value: '=='}, {value: '<='}, {value: '>='}];
const stringOperators: IItemBoxProps[] = [{value: '='}, {value: '=='}];

export class OperatorSelector extends React.Component<IOperatorSelectorProps, IOperatorSelectorState> {

    constructor(props: IOperatorSelectorProps) {
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
                return null;
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
