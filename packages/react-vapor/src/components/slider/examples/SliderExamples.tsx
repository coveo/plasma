import * as React from 'react';
import {Slider} from '../Slider';

export class SliderExamples extends React.Component<any, any> {

    render() {
        const style = {width: 600, margin: 25};
        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>Slider List</h1>
                <div className='form-group'>
                    <label className='form-control-label'>Default Slider</label>
                    <div className='form-control'>
                        <div style={style}>
                            <Slider classes={['class1', 'class2']} />
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Slider with default value</label>
                    <div className='form-control'>
                        <div style={style}>
                            <Slider
                                slider={{defaultValue: 20}}
                            />
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Slider with marks</label>
                    <div className='form-control'>
                        <div style={style}>
                            <Slider
                                slider={{
                                    marks: {
                                        0: 'Lower',
                                        50: 'Middle',
                                        100: 'Higher',
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Slider with tooltip</label>
                    <div className='form-control'>
                        <div style={style}>
                            <Slider hasTooltip={true}
                            />
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Slider with tooltip and value formatter</label>
                    <div className='form-control'>
                        <div style={style}>
                            <Slider hasTooltip={true} slider={{tipFormatter: (value: number) => `${value}$`}}
                            />
                        </div>
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>Slider with tooltip and value formatter (always showing)</label>
                    <div className='form-control'>
                        <div style={style}>
                            <Slider hasTooltip={true} slider={{
                                tipFormatter: (value: number) => `${value}$`,
                                tipProps: {visible: true},
                            }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
