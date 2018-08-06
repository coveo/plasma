
import * as React from 'react';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {MultiSelectWithFilter} from '../../select/SelectComponents';

export const fieldValueSelectId: string = 'field-value-select';

export interface IValueSelectProps {
    expressionEditorId: string;
    fieldValueItems: IItemBoxProps[];
}

export interface IValueSelectState {
}

// const mock: IItemBoxProps[] = [{value: 'a'}, {value: 'b'}, {value: 'c'}, {value: 'd'}, {value: 'e'}];

export class ValueSelect extends React.Component<IValueSelectProps, IValueSelectState> {
    constructor(props: IValueSelectProps) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <span>
                <MultiSelectWithFilter
                    id={`${this.props.expressionEditorId}-${fieldValueSelectId}`}
                    items={this.props.fieldValueItems}
                    // items={mock}
                    placeholder={'Select field value'}
                />
            </span>
        );
    }
}
