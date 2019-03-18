import * as React from 'react';
import * as _ from 'underscore';
import {Button} from '../../button/Button';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {ListBox} from '../../listBox/ListBox';
import {Drop} from '../Drop';
import {dropWithDropdown} from '../hoc/DropWithDropdown';
import {UUID} from '../../../utils/UUID';

const DropFormDropdownExamples1 = _.compose(
    dropWithDropdown(),
)(Drop);

export class DropFormDropdownExamples extends React.PureComponent {

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
                    <label className='form-control-label'>Default drop with dropdown</label>
                    <div className='form-control pt5'>
                        <DropFormDropdownExamples1
                            id={UUID.generate()}
                            buttonContainerProps={{
                                className: 'inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={onClick}
                                />
                            )}
                        >
                            <ListBox items={defaultItems} />
                        </DropFormDropdownExamples1>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Drop with dropdown without close on click inside drop</label>
                    <div className='form-control pt5'>
                        <DropFormDropdownExamples1
                            id={UUID.generate()}
                            buttonContainerProps={{
                                className: 'inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={onClick}
                                />
                            )}
                            closeOnClickDrop={false}
                        >
                            <ListBox items={defaultItems} />
                        </DropFormDropdownExamples1>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Drop with dropdown without close on click outside drop</label>
                    <div className='form-control pt5'>
                        <DropFormDropdownExamples1
                            id={UUID.generate()}
                            buttonContainerProps={{
                                className: 'inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={onClick}
                                />
                            )}
                            closeOnClickOutside={false}
                        >
                            <ListBox items={defaultItems} />
                        </DropFormDropdownExamples1>
                    </div>
                </div>
            </div>
        );
    }
}
