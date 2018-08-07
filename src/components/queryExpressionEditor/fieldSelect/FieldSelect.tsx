
import * as React from 'react';
// import * as _ from 'underscore';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {SingleSelectWithFilter} from '../../select/SelectComponents';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {IField} from '../responseParser/ResponseParser';

const mockFields: IItemBoxProps[] = [{value: '@filetype'}, {value: '@language'}, {value: '@date'}];

export const fieldSelectId: string = 'field-select';

export interface IFieldSelectProps {
    fields: IField[];
    expressionEditorId: string;
    // TODO remove if not used
    queryTrigger: QueryTrigger;
}

export interface IFieldSelectState {

}

// TODO this component should dispatch what type of field hase been selected; No need of reducer (no redux state needs to be held)
// Hte problem we need to have acces to the fiedls object

export class FieldSelect extends React.Component<IFieldSelectProps, IFieldSelectState> {

    // TODO remove if not used
    constructor(props: IFieldSelectProps) {
        super(props);
    }

    // private getFieldsItems(): IItemBoxProps[] {
    //     const fieldsItems: IItemBoxProps[] = [];
    //     _.forEach(this.props.fields, (field: IField) => {
    //         const getItemBox: IItemBoxProps = {value: field.name};
    //         fieldsItems.push(getItemBox);
    //     });
    //     return fieldsItems;
    // }

    render() {
        return (
            <span>
                {/* TODO : if we want the infinite scroll we need to use dropdownSearchConnected */}
                <SingleSelectWithFilter
                    id={`${this.props.expressionEditorId}-${fieldSelectId}`}
                    // items={this.getFieldsItems()}
                    items={mockFields}
                    placeholder={'Select field'}
                />
            </span>
        );
    }
}
