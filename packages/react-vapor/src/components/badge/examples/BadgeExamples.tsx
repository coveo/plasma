import * as React from 'react';
import {Badge} from '../Badge';

export class BadgeExamples extends React.Component<any, any> {

    render() {
        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>Badge List</h1>
                <div className='form-group'>
                    <label className='form-control-label'>Default Badge</label>
                    <div className='form-control'>
                        <Badge label='Badge label' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Badge with extra classes</label>
                    <div className='form-control'>
                        <Badge
                            label='Badge with classes'
                            extraClasses={['bg-blue']}
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Badge group</label>
                    <div className='form-control'>
                        <Badge
                            label='Multiple'
                            extraClasses={['bg-blue']}
                        />
                        <Badge
                            label='Badges'
                            extraClasses={['bg-medium-blue']}
                        />
                        <Badge
                            label='Group'
                            extraClasses={['bg-darker-blue']}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
