import * as React from 'react';
import {SubNavigation} from '../SubNavigation';

export class SubNavigationExamples extends React.Component<any, any> {
    render() {
        return (
            <div className='mt2'>
                <label className='form-control-label'>Sub Navigation</label>
                <div className='flex flex-row flex-stretch' style={{height: '200px'}}>
                    <SubNavigation items={[
                        {label: 'Avatar', id: 'avatar'},
                        {label: 'Titanic', id: 'titanic'},
                        {label: 'Star Wars: The Force Awakens', id: 'star-wars'},
                        {label: 'Jurassic World', id: 'jurasic-world'},
                        {label: 'The Avengers', id: 'the-avengers'},
                    ]} />
                </div>
                <div className='flex flex-row flex-stretch mt2' style={{height: '120px'}}>
                    <SubNavigation items={[
                        {label: 'Avatar', id: 'avatar'},
                        {label: 'Titanic', id: 'titanic'},
                        {label: 'Star Wars: The Force Awakens', id: 'star-wars'},
                        {label: 'Jurassic World', id: 'jurasic-world'},
                        {label: 'The Avengers', id: 'the-avengers'},
                    ]} defaultSelected='star-wars' onClickItem={(id) => alert(id)} />
                </div>
            </div>
        );
    }
}
