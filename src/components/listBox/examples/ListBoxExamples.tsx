import * as React from 'react';
import {IDispatch, ReduxConnect} from '../../../utils/ReduxUtils';
import {defaultMapStateToProps, TestUtils} from '../../../utils/TestUtils';
import {UUID} from '../../../utils/UUID';
import {Button} from '../../button/Button';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {ITooltipProps} from '../../tooltip/Tooltip';
import {ListBox} from '../ListBox';
import {updateListBoxOption} from '../ListBoxActions';
import {ListBoxConnected} from '../ListBoxConnected';

interface IListBoxExamplesProps {
    updateOptions?: (id: string, options: IItemBoxProps[], reset: boolean) => void;
}

const mapDispatchToProps = (dispatch: IDispatch) => ({
    updateOptions: (id: string, items: IItemBoxProps[], reset: boolean) => dispatch(updateListBoxOption(id, items, reset)),
});

@ReduxConnect(defaultMapStateToProps, mapDispatchToProps)
export class ListBoxExamples extends React.Component<IListBoxExamplesProps> {

    private handleOnClick(id: string, currentItems: IItemBoxProps[], reset: boolean) {
        const items: IItemBoxProps[] = currentItems.concat([{
            value: `${TestUtils.randomValue1To100()}_new_value`,
        }]);

        this.props.updateOptions(id, items, reset);
    }

    render() {
        const idSingle: string = 'listbox_connected_updated_single';
        const idMulti: string = 'listbox_connected_updated_multi';
        const triggerAlertFunction = (item: IItemBoxProps) => {
            alert(`The item value triggered is ${item.value}`);
        };

        const tooltip: ITooltipProps = {
            title: 'title test',
            placement: 'bottom',
            container: 'body',
        };
        const defaultItems: IItemBoxProps[] = [
            {value: 'test'},
            {value: 'test1'},
            {value: 'test2 disabled', disabled: true},
            {value: 'test3', tooltip: tooltip},
            {value: 'test4'},
            {value: 'test5'},
            {value: 'test6'},
            {value: 'test7'},
        ];

        const clickableItems: IItemBoxProps[] = defaultItems.concat([
            {
                value: 'test8',
                onOptionClick: triggerAlertFunction,
            },
        ]);

        return (
            <div className='mt2'>
                <h1 className='text-blue mb1'>List Box</h1>

                <div className='form-group'>
                    <label className='form-control-label'>Default List Box</label>
                    <div className='form-control'>
                        <ListBox items={defaultItems} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>List Box with no items</label>
                    <div className='form-control'>
                        <ListBox items={[]} noResultItem={{value: 'no items'}} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>List Box with an trigger on click items</label>
                    <div className='form-control'>
                        <ListBox items={defaultItems} selected={['test1']} onOptionClick={triggerAlertFunction} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>List Box with custom classes</label>
                    <div className='form-control'>
                        <ListBox items={defaultItems} classes={['bg-light-blue']} />
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>List Box with an onClick event on the last element</label>
                    <div className='form-control'>
                        <ListBox items={clickableItems} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>List Box Connected (single)</label>
                    <div className='form-control'>
                        <ListBoxConnected id={UUID.generate()} items={defaultItems} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>List Box Connected (multi)</label>
                    <div className='form-control'>
                        <ListBoxConnected id={UUID.generate()} items={defaultItems} multi />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>List Box Connected updated with new options (single)</label>
                    <div className='form-control'>
                        <ListBoxConnected id={idSingle} items={defaultItems} />
                        <Button classes={['my2']} enabled={true} name='Update options without a reset on the selected value' onClick={() => this.handleOnClick(idSingle, defaultItems, false)} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>List Box Connected updated with new options (multi)</label>
                    <div className='form-control'>
                        <ListBoxConnected id={idMulti} items={defaultItems} multi />
                        <Button classes={['my2']} enabled={true} name='Update options with a reset on selected values' onClick={() => this.handleOnClick(idMulti, defaultItems, true)} />
                    </div>
                </div>
            </div>
        );
    }
}
