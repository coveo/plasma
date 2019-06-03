import * as React from 'react';

import {Svg} from '../../svg/Svg';
import {SubNavigationConnected} from '../SubNavigationConnected';

const exampleItems = [
    {label: 'Avatar', id: 'avatar'},
    {label: 'Titanic', id: 'titanic'},
    {label: 'Star Wars: The Force Awakens', id: 'star-wars'},
    {label: 'Jurassic World', id: 'jurasic-world'},
    {label: 'The Avengers', id: 'the-avengers'},
];

export class SubNavigationConnectedExamples extends React.Component<any, any> {
    render() {
        return (
            <>
                <div>
                    <label className='form-control-label'>Sub Navigation</label>
                    <div className='flex' style={{height: '200px'}}>
                        <SubNavigationConnected
                            id='first-sub-nav'
                            items={exampleItems}
                        />
                    </div>
                </div>
                <div className='mt3'>
                    <label className='form-control-label'>Sub Navigation with default selected</label>
                    <div className='flex' style={{height: '120px'}}>
                        <SubNavigationConnected
                            id='second-sub-nav'
                            items={exampleItems}
                            defaultSelected='star-wars'
                        />
                    </div>
                </div>
                <div className='mt3'>
                    <label className='form-control-label'>Sub-navigation with custom links</label>
                    <div className='flex' style={{width: '250px', height: '200px'}}>
                        <SubNavigationConnected
                            id='third-sub-nav'
                            items={[
                                {
                                    label: (
                                        <span className='flex space-between'>
                                            <span className='truncate'>Avatar</span>
                                            <Svg svgName='thumb-up' svgClass='icon fill-green' />
                                        </span>
                                    ),
                                    id: 'avatar',
                                },
                                {
                                    label: (
                                        <span className='flex space-between'>
                                            <span className='truncate'>Titanic</span>
                                            <Svg svgName='thumb-up' svgClass='icon fill-green' />
                                        </span>
                                    ),
                                    id: 'titanic',
                                },
                                {
                                    label: (
                                        <span className='flex space-between'>
                                            <span className='truncate pr1'>Star Wars: The Force Awakens</span>
                                            <Svg svgName='thumb-up' svgClass='icon fill-green' />
                                        </span>
                                    ),
                                    id: 'star-wars',
                                },
                                {
                                    label: (
                                        <span className='flex space-between'>
                                            <span className='truncate'>Jurassic World</span>
                                            <Svg svgName='thumb-down' svgClass='icon fill-red' />
                                        </span>
                                    ),
                                    id: 'jurasic-world',
                                },
                                {
                                    label: (
                                        <span className='flex space-between'>
                                            <span className='truncate'>The Avengers</span>
                                            <Svg svgName='thumb-down' svgClass='icon fill-red' />
                                        </span>
                                    ),
                                    id: 'the-avengers',
                                },
                            ]}
                        />
                    </div>
                </div>
            </>
        );
    }
}
