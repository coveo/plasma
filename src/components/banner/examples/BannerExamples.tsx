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
                            messageDescription={
                                <div>
                                    <div>You should find all the information you need here</div>
                                    <button className='mt2'>Click me!</button>
                                </div>
                            }
                            topRightInfos={<div>More information</div>}
                            alignCenter
                        />
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
                            messageDescription={<div>I think we should do something about it</div>}
                            alignCenter
                        />
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
                            messageDescription={<div>I think you're in deep trouble now. You better run.</div>}
                            alignCenter
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Banner on the left</label>
                    <div className='form-control'>
                        <Banner
                            name='Page Name'
                            nameSubtitle='Section name'
                            messageTitle='Not centered'
                            messageDescription={<div>Sometimes we need to give you more information.</div>}
                            topRightInfos={<div>More information</div>}
                            bottomRightInfos={[
                                <div key='infos'>Even more information for you to enjoy</div>,
                                <button key='button' className='primary mt2'>Here is a button</button>,
                            ]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
