import * as React from 'react';
import {Button} from '../../button/Button';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {ListBox} from '../../listBox/ListBox';
import {DropPodPosition} from '../DropPod';
import {TooltipHOC} from '../TooltipHOC';

export class TooltipsHOCExamples extends React.PureComponent {

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

        const defaultItemsLongText: IItemBoxProps[] = [
            {value: 'Add Digimon'},
            {value: 'Duplicate Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo, Meepo'},
        ];

        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Default tooltip</label>
                    <div className='form-control'>
                        <TooltipHOC
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
                        </TooltipHOC>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Tooltip with list position left</label>
                    <div className='form-control'>
                        <TooltipHOC
                            positions={[DropPodPosition.left, DropPodPosition.right]}
                            buttonContainer={{
                                className: 'right inline-block',
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
                        </TooltipHOC>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Tooltip with list position bottom</label>
                    <div className='form-control'>
                        <TooltipHOC
                            positions={[DropPodPosition.bottom, DropPodPosition.top]}
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
                        </TooltipHOC>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Tooltip with list position top</label>
                    <div className='form-control'>
                        <TooltipHOC
                            positions={[DropPodPosition.top, DropPodPosition.bottom]}
                            buttonContainer={{
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
                        </TooltipHOC>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Tooltip: no position. no toolip</label>
                    <div className='form-control'>
                        <TooltipHOC
                            positions={[]}
                            buttonContainer={{
                                className: 'right inline-block',
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
                        </TooltipHOC>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Tooltip with list position right with long text</label>
                    <div className='form-control'>
                        <TooltipHOC
                            positions={[DropPodPosition.right, DropPodPosition.left, DropPodPosition.bottom]}
                            buttonContainer={{
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
                            <ListBox items={defaultItemsLongText} />
                        </TooltipHOC>
                    </div>
                </div>
            </div>
        );
    }
}
