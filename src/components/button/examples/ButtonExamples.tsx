import * as React from 'react';
import {Svg} from '../../svg/Svg';
import {Button} from '../Button';

export class ButtonExamples extends React.Component<any, any> {

    render() {
        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>Buttons List</h1>
                <div className='form-group'>
                    <label className='form-control-label'>Default Button</label>
                    <div className='form-control'>
                        <Button enabled={true} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Primary Button</label>
                    <div className='form-control'>
                        <Button enabled={true} primary={true} name='Primary Button' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Small Button</label>
                    <div className='form-control'>
                        <Button enabled={true} small={true} name='Small Button' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Link Button</label>
                    <div className='form-control'>
                        <Button enabled={true} name='Link Button' link='http://perdu.com/' target='_blank' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Button with a callback on click</label>
                    <div className='form-control'>
                        <Button enabled={true} name='Button click me!' onClick={() => alert('Hello')} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Button with tooltip</label>
                    <div className='form-control'>
                        <Button enabled={true} name='Button with tooltip' tooltip='Tooltip test' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Button with tooltip and placement</label>
                    <div className='form-control'>
                        <Button enabled={true} name='Button with tooltip top' tooltip='Tooltip test' tooltipPlacement='top' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Button link with tooltip</label>
                    <div className='form-control'>
                        <Button enabled={true} name='Button link with tooltip' link='http://perdu.com/' target='_blank' tooltip='Tooltip test' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Button link with a callback on click</label>
                    <div className='form-control'>
                        <Button enabled={true} name='Link Button click me!' link='http://perdu.com/' target='_blank'
                            onClick={() => alert('Hello')} />
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>Disabled Button</label>
                    <div className='form-control'>
                        <Button enabled={false} name='Disabled Button' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Disabled Button with tooltip</label>
                    <div className='form-control'>
                        <Button enabled={false} name='Disabled Button with tooltip' tooltip='Tooltip test' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Disabled Button link</label>
                    <div className='form-control'>
                        <Button enabled={false} name='Disabled Button link' link='http://perdu.com/' target='_blank' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Disabled Button link with tooltip</label>
                    <div className='form-control'>
                        <Button enabled={false} name='Disabled Button link with tooltip' tooltip='Tooltip test' link='http://perdu.com/'
                            target='_blank' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Disabled Button link with tooltip placement top</label>
                    <div className='form-control'>
                        <Button enabled={false} name='Disabled Button link with tooltip top' tooltip='Tooltip test' tooltipPlacement='top'
                            link='http://perdu.com/'
                            target='_blank' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Disabled Button link with onClick</label>
                    <div className='form-control'>
                        <Button enabled={false} name='Disabled Button link with onClick' link='http://perdu.com/' target='_blank'
                            onClick={() => alert('Hello')} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Button with children Svg</label>
                    <div className='form-control'>
                        <Button classes={['p1', 'full-content-y']} enabled>
                            <Svg svgName={'add'} className='icon mod-2x' />
                        </Button>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Button with children name and Svg</label>
                    <div className='form-control'>
                        <Button classes={['p1', 'full-content-y']} name={'Button'} enabled>
                            <Svg svgName={'add'} className='ml1 icon mod-2x' />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
