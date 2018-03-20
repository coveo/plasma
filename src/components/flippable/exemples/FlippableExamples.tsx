import * as React from 'react';

import {Flippable} from '../Flippable';
import {FlippableConnected} from '../FlippableConnected';
import {sizedDiv} from './FlippableExamplesCommon';

export class FlippableExamples extends React.Component<any, any> {

    render() {
        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>Flippable List</h1>
                <div className='form-group'>
                    <label className='form-control-label'>Default Flippable</label>
                    <div className='form-control flex'>
                        <Flippable
                            id='flippable-example1'
                            front={
                                <div className='bg-white center bold p2'>
                                    Some content on the front.
                                </div>
                            }
                            back={
                                <div className='bg-light-grey bold p2' >
                                    Some content on the back.
                                </div>
                            }
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Flippable with redux state</label>
                    <div className='form-control flex'>
                        <FlippableConnected
                            id='flippable-example2'
                            front={
                                <div className='bg-white center bold p2'>
                                    <span>Some content on the front <br />(Click me)</span>
                                </div>
                            }
                            back={
                                <div className='bg-light-grey bold p2'>
                                    Some content on the back.
                                </div>
                            }
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Flippable with uneven sized sides and redux state</label>
                    <div className='form-control flex'>
                        <FlippableConnected
                            id='flippable-example3'
                            front={
                                <div className='bg-white center bold p2'>
                                    <span>Some content on the front <br />(Click me)</span>
                                </div>
                            }
                            back={
                                <div className='bg-light-grey bold p2' style={sizedDiv}>
                                    Some content on the back.
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}
