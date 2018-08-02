
import * as React from 'react';
import { SingleSelectWithFilter } from '../../../select/SelectComponents';
import { IItemBoxProps } from '../../../itemBox/ItemBox';

export interface IValueSelectorProps {
    fieldValueItems: IItemBoxProps[];
    updateFieldValues: (value: string[]) => void;
}

export interface IValueSelectorState {
}

export class ValueSelector extends React.Component<IValueSelectorProps, IValueSelectorState> {
    constructor(props: IValueSelectorProps) {
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


                {/* <MultiSelectWithFilter
                    id={'fieldValues-selector'}
                    items={this.state.fieldValueItems}
                    placeholder={'Select field value'}
                /> */}

            </span>
        );
    }
}
