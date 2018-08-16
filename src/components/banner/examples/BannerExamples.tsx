import * as React from 'react';
import {Banner, BannerMessageStates} from '../Banner';

export class BannerExamples extends React.Component {

    render() {
        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>Banners</h1>
                <div className='form-group'>
                    <label className='form-control-label'>Simple banner</label>
                    <div className='form-control'>
                        <Banner
                            name='Page Name'
                            nameSubtitle='Section name'
                            messageTitle='This is the new page'
                            topRightInfos={<div>More information</div>}
                            alignCenter
                        >
                            <div>You should find all the information you need here</div>
                            <button className='mt2 btn'>Click me!</button>
                        </Banner>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Warning banner</label>
                    <div className='form-control'>
                        <Banner
                            name='Page Name'
                            nameSubtitle='Section name'
                            messageTitle='Look at me'
                            messageState={BannerMessageStates.Warning}
                            alignCenter
                        >I think we should do something about it</Banner>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Error banner</label>
                    <div className='form-control'>
                        <Banner
                            name='Page Name'
                            nameSubtitle='Section name'
                            messageTitle='You broke it'
                            messageState={BannerMessageStates.Error}
                            alignCenter
                        >I think you're in deep trouble now. You better run.</Banner>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Banner on the left</label>
                    <div className='form-control'>
                        <Banner
                            name='Page Name'
                            nameSubtitle='Section name'
                            messageTitle='Not centered'
                            topRightInfos={<div>More information</div>}
                            bottomRightInfos={[
                                <div key='infos'>Even more information for you to enjoy</div>,
                                <button key='button' className='mt2 btn mod-primary'>Here is a button</button>,
                            ]}
                        >Sometimes we need to give you more information.</Banner>
                    </div>
                </div>
            </div>
        );
    }
}
