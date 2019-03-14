import * as React from 'react';
import * as _ from 'underscore';
import {Button} from '../../button/Button';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {ListBox} from '../../listBox/ListBox';
import {Drop} from '../Drop';
import {dropFormDropdown} from '../hoc/DropFormDropdown';

const DropFormDropdownExamples1 = _.compose(
    dropFormDropdown(),
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
                    <label className='form-control-label'>Default drop form dropdown</label>
                    <div className='form-control pt5'>
                        <DropFormDropdownExamples1
                            buttonContainer={{
                                className: 'inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={onClick}
                                />
                            )
                            }
                        >
                            <ListBox items={defaultItems} />
                        </DropFormDropdownExamples1>
                    </div>
                </div>
            </div>
        );
    }
}
