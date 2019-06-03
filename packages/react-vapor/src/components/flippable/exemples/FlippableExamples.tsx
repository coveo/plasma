import * as React from 'react';

import {Flippable} from '../Flippable';
import {FlippableConnected} from '../FlippableConnected';

export class FlippableExamples extends React.Component<any, any> {
    private scope: HTMLDivElement;

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
                    <div className='form-control flex' style={{width: '300px'}}>
                        <FlippableConnected
                            id='flippable-example2'
                            front={
                                <div className='bg-white center bold p2'>
                                    <span>Some content on the front <br />(Click me)</span>
                                </div>
                            }
                            back={
                                <div className='bg-light-grey bold p2' style={{width: '300px'}}>
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
                                <div className='bg-light-grey bold p2' style={{width: '300px', height: '200px'}}>
                                    Some content on the back.
                                </div>
                            }
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Scoped Flippable with redux state</label>
                    <div className='form-control flex'>
                        <FlippableConnected
                            id='flippable-example4'
                            front={
                                <div className='bg-white center bold p2'>
                                    <span>Some content on the front <br />(Click me)</span>
                                </div>
                            }
                            back={
                                <div className='bg-light-grey bold p2 full-content-x'>
                                    Some content on the back.
                                </div>
                            }
                            allowUnflip={(target: EventTarget) => this.scope.contains(target as Node)}
                        />
                        <div
                            style={{width: '200px'}}
                            className='ml2 bg-white'
                            ref={(thisDiv) => this.scope = thisDiv}
                        >
                            <p className='p2'>Only clicks inside here can unflip the flipped flippable because it's specified as scope by allowUnflip property.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
