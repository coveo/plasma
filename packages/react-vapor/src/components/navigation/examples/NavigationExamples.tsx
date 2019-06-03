import * as React from 'react';
import {INavigationProps, Navigation} from '../Navigation';

export class NavigationExamples extends React.Component<any, any> {

    render() {
        const navigationProps: INavigationProps = {
            totalPages: 10,
            totalEntries: 50,
            currentPerPage: 10,
            onPageClick: (newPage) => alert('New page selected: ' + (newPage + 1)),
            onPerPageClick: (newPerPage) => alert('New per page option selected: ' + newPerPage),
        };
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Navigation</label>
                    <Navigation {...navigationProps} />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Navigation with loading</label>
                    <Navigation {...navigationProps} isLoading={true} />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Navigation with custom values</label>
                    <Navigation
                        {...navigationProps}
                        previousLabel='Précédente'
                        nextLabel='Prochaine'
                        numberOfPagesToShow={3}
                        currentPage={1}
                        perPageLabel='Items par page'
                        perPageNumbers={[2, 10, 25, 50]}
                    />
                </div>
            </div>
        );
    }
}
