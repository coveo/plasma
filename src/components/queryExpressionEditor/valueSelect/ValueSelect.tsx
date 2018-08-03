
import * as React from 'react';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {SingleSelectWithFilter, MultiSelectWithFilter} from '../../select/SelectComponents';

export interface IValueSelectProps {
    fieldValueItems: IItemBoxProps[];
    updateFieldValues: (value: string[]) => void;
}

export interface IValueSelectState {
}

export class ValueSelect extends React.Component<IValueSelectProps, IValueSelectState> {
    constructor(props: IValueSelectProps) {
        super(props);
        this.state = {
        };
    }

    // TODO : Could call this.props.updateOperator(operator); directly
    private fieldValueOnSelect(value: string) {
        this.props.updateFieldValues([value]);
    }

    render() {
        return (
            <span>
                <SingleSelectWithFilter
                    id={'fieldValues-selector'}
                    items={this.props.fieldValueItems}
                    placeholder={'Select operator'}
                    onSelectOptionCallback={(value: string) => this.fieldValueOnSelect(value)}
                />

                <MultiSelectWithFilter
                    id={'fieldValues-selector'}
                    items={this.props.fieldValueItems}
                    placeholder={'Select field value'}
                />

            </span>
        );
    }
}
