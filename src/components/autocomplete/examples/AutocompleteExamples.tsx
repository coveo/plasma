import * as React from 'react';
import * as _ from 'underscore';
import {UUID} from '../../../utils/UUID';
import {Label} from '../../input/Label';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {AutocompleteConnected} from '../AutocompleteConnected';

const defaultItems: IItemBoxProps[] = [
    {displayValue: 'Test', value: '0'},
    {displayValue: 'Test One', value: '1'},
    {displayValue: 'Disabled', value: 'disabled', disabled: true},
    {displayValue: 'Three', value: '3'},
    {displayValue: 'Four', value: '4'},
    {displayValue: 'Five', value: '5'},
    {displayValue: 'Six', value: '6'},
    {displayValue: 'Seven', value: '7'},
];

export interface ISingleSelectExamplesState {
    first: IItemBoxProps[];
    second: IItemBoxProps[];
    third: IItemBoxProps[];
}

export class AutocompleteExamples extends React.Component<{}, ISingleSelectExamplesState> {
    constructor(props: {}, state: ISingleSelectExamplesState) {
        super(props, state);

        const second = _.map(defaultItems, (item: IItemBoxProps): IItemBoxProps => ({value: item.displayValue, disabled: item.disabled}));
        second[0].selected = true;

        this.state = {
            first: _.map(defaultItems, (item: IItemBoxProps) => ({value: item.displayValue, disabled: item.disabled})),
            second,
            third: _.clone(defaultItems),
        };
    }

    render() {
        return (
            <div className='mt2'>
                <h1>Autocomplete</h1>
                <div className='form-group'>
                    <AutocompleteConnected id={UUID.generate()} items={this.state.first}>
                        <Label>An autocomplete</Label>
                    </AutocompleteConnected>
                </div>

                <div className='form-group'>
                    <AutocompleteConnected id={UUID.generate()} items={this.state.second} inline>
                        <Label>An inline autocomplete with a selected value</Label>
                    </AutocompleteConnected>
                </div>

                <div className='form-group'>
                    <AutocompleteConnected id={UUID.generate()} className='block' items={this.state.third}>
                        <Label>An autocomplete with a display value different than the value</Label>
                    </AutocompleteConnected>
                </div>
            </div>
        );
    }
}
