import * as React from 'react';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {Svg} from '../../svg/Svg';
import {MenuConnected} from '../MenuConnected';

export class MenuExamples extends React.Component {
    render() {
        const triggerAlertFunction = () => {
            alert(`Alert function triggered`);
        };

        const defaultItems: IItemBoxProps[] = [
            {value: 'Add Digimon'},
            {value: 'Duplicate Meepo'},
            {value: 'Disable Dragon Ball'},
            {value: 'Delete BitConnect'},
        ];

        return (
            <div className='mt2'>
                <h1 className='text-blue mb1'>Menu</h1>

                <div className='form-group'>
                    <label className='form-control-label'>Default Menu</label>
                    <div className='form-control'>
                        <MenuConnected id='menu-example-1' listBox={{items: defaultItems}} />
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>Cannot open more than 1 menu at the same time</label>
                    <div className='form-control'>
                        <MenuConnected id='menu-example-2' className={'mr2'} listBox={{items: defaultItems}} />
                        <MenuConnected id='menu-example-3' className={'mr2'} listBox={{items: defaultItems}} />
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>Menu with list to the right</label>
                    <div className='form-control'>
                        <MenuConnected id='menu-example-4' className={'ml2'} listBox={{items: defaultItems}} positionRight />
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>Menu with a custom Svg component</label>
                    <div className='form-control'>
                        <MenuConnected id='menu-example-5' listBox={{items: defaultItems}} >
                            <Svg
                                svgName='more'
                                svgClass='fill-medium-grey icon mod-lg'
                            />
                        </MenuConnected>
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>Menu with a listBox who trigger an event on click</label>
                    <div className='form-control'>
                        <MenuConnected id='menu-example-6' listBox={{items: defaultItems, onOptionClick: triggerAlertFunction}} >
                            <Svg
                                svgName='more'
                                svgClass='fill-medium-grey icon mod-lg'
                            />
                        </MenuConnected>
                    </div>
                </div>
            </div>
        );
    }
}
