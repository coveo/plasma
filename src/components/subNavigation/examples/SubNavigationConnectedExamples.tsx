import * as React from 'react';
import {SubNavigationConnected} from '../SubNavigationConnected';

export class SubNavigationConnectedExamples extends React.Component<any, any> {
    render() {
        return (
            <div className='mt2'>
                <label className='form-control-label'>Sub Navigation with Redux state</label>
                <div className='flex flex-row flex-stretch' style={{height: '200px'}}>
                    <SubNavigationConnected id='first-sub-nav' items={[
                        {label: 'Avatar', id: 'avatar'},
                        {label: 'Titanic', id: 'titanic'},
                        {label: 'Star Wars: The Force Awakens', id: 'star-wars'},
                        {label: 'Jurassic World', id: 'jurasic-world'},
                        {label: 'The Avengers', id: 'the-avengers'},
                    ]} />
                </div>
                <div className='flex flex-row flex-stretch mt2' style={{height: '120px'}}>
                    <SubNavigationConnected id='second-sub-nav' items={[
                        {label: 'Avatar', id: 'avatar'},
                        {label: 'Titanic', id: 'titanic'},
                        {label: 'Star Wars: The Force Awakens', id: 'star-wars'},
                        {label: 'Jurassic World', id: 'jurasic-world'},
                        {label: 'The Avengers', id: 'the-avengers'},
                    ]} defaultSelected='star-wars' />
                </div>
            </div>
        );
    }
}
