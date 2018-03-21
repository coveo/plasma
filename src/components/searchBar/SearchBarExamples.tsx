import * as React from 'react';
import {SearchBar} from './SearchBar';

export class SearchBarExamples extends React.Component<any, any> {
    render() {
        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>SearchBar List</h1>
                <div className='form-group'>
                    <label className='form-control-label'>SearchBar enabled and not currently searching</label>
                    <div className='text-dark-grey'>
                        <SearchBar id='search-bar-1' placeholder='Search awesome things' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>SearchBar disabled</label>
                    <div className='text-dark-grey'>
                        <SearchBar id='search-bar-2' disabled placeholder='Currently disabled.' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>SearchBar searching</label>
                    <div className='text-dark-grey'>
                        <SearchBar id='search-bar-3' searching searchText='searching for something' />
                    </div>
                </div>
            </div>
        );
    }
}
