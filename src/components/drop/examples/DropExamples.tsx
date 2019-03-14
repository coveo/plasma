import * as React from 'react';
import {UUID} from '../../../utils/UUID';
import {Button} from '../../button/Button';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {ListBox} from '../../listBox/ListBox';
import {Drop} from '../Drop';
import {DropPodPosition} from '../DropPod';

export class DropExamples extends React.PureComponent {

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
                    <label className='form-control-label'>Default drop</label>
                    <div className='form-control'>
                        <Drop
                            id={UUID.generate()}
                            selector={'#App'}
                            buttonContainerProps={{
                                className: 'inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )
                            }
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Drop with list position left</label>
                    <div className='form-control'>
                        <Drop
                            id={UUID.generate()}
                            selector={'#App'}
                            positions={[DropPodPosition.left, DropPodPosition.right]}
                            buttonContainerProps={{
                                className: 'right inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )
                            }
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Drop with list position bottom</label>
                    <div className='form-control'>
                        <Drop
                            id={UUID.generate()}
                            selector={'#App'}
                            positions={[DropPodPosition.bottom, DropPodPosition.top]}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )
                            }
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Drop with list position top</label>
                    <div className='form-control'>
                        <Drop
                            id={UUID.generate()}
                            selector={'#App'}
                            positions={[DropPodPosition.top, DropPodPosition.bottom]}
                            buttonContainerProps={{
                                className: 'inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )}
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Drop: no position. no toolip</label>
                    <div className='form-control'>
                        <Drop
                            id={UUID.generate()}
                            selector={'#App'}
                            positions={[]}
                            buttonContainerProps={{
                                className: 'right inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )
                            }
                        >
                            <ListBox items={defaultItems} />
                        </Drop>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Drop with list position right with long text</label>
                    <div className='form-control'>
                        <Drop
                            id={UUID.generate()}
                            selector={'#App'}
                            positions={[DropPodPosition.right, DropPodPosition.left, DropPodPosition.bottom]}
                            buttonContainerProps={{
                                className: 'inline-block',
                            }}
                            renderOpenButton={(onClick: () => void) => (
                                <Button
                                    name={'Text'}
                                    enabled={true}
                                    onClick={() => onClick()}
                                />
                            )}
                        >
                            <ListBox items={defaultItemsLongText} />
                        </Drop>
                    </div>
                </div>
            </div>
        );
    }
}
