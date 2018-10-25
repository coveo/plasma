import * as React from 'react';
import {UUID} from '../../../utils/UUID';
import {Badge} from '../../badge/Badge';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {ListBox} from '../../listBox/ListBox';
import {Svg} from '../../svg/Svg';
import {MenuConnected} from '../MenuConnected';

export class MenuExamples extends React.Component {

    private getCustomSvg(): React.ReactNode {
        return (<Svg
            svgName='more'
            svgClass='fill-medium-grey icon mod-lg'
        />);
    }

    render() {
        const triggerAlertFunction = () => {
            alert(`Alert function triggered`);
        };

        const defaultItems: IItemBoxProps[] = [
            {value: 'Add Digimon'},
            {value: 'Duplicate Meepo'},
            {value: 'Disable Dragon Ball', onOptionClick: () => triggerAlertFunction()},
            {value: 'Delete BitConnect'},
        ];

        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Default Menu</label>
                    <div className='form-control'>
                        <MenuConnected id={UUID.generate()}  >
                            <ListBox items={defaultItems} />
                        </MenuConnected>
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>Cannot open more than 1 menu at the same time</label>
                    <div className='form-control'>
                        <MenuConnected id={UUID.generate()} className={'mr2'}>
                            <ListBox items={defaultItems} />
                        </MenuConnected>
                        <MenuConnected id={UUID.generate()} className={'mr2'} >
                            <ListBox items={defaultItems} />
                        </MenuConnected>
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>Menu with list to the right</label>
                    <div className='form-control'>
                        <MenuConnected id={UUID.generate()} className={'ml2'} positionRight >
                            <ListBox items={defaultItems} />
                        </MenuConnected>
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>Menu with a custom Svg component</label>
                    <div className='form-control'>
                        <MenuConnected id={UUID.generate()} buttonSvg={this.getCustomSvg()}>
                            <ListBox items={defaultItems} />
                        </MenuConnected>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Menu with a Badge instead of a list</label>
                    <div className='form-control'>
                        <MenuConnected id={UUID.generate()}>
                            <Badge label={'Badges'} />
                        </MenuConnected>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Menu with a custom offset of 10px</label>
                    <div className='form-control'>
                        <MenuConnected id={UUID.generate()} customOffset={10}>
                            <ListBox items={defaultItems} />
                        </MenuConnected>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Menu not close on items click</label>
                    <div className='form-control'>
                        <MenuConnected id={UUID.generate()} closeOnSelectItem={false}>
                            <ListBox items={defaultItems} />
                        </MenuConnected>
                    </div>
                </div>
            </div>
        );
    }
}
