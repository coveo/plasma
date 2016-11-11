import * as React from 'react';
import { Navigation, INavigationProps } from '../Navigation';

export class NavigationExamples extends React.Component<any, any> {

  render() {
    let navigationProps: INavigationProps = {
      totalPages: 10,
      totalEntries: 50,
      currentPage: 0
    };
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'> navigation</label>
          <Navigation {...navigationProps} />
        </div>
        <div className='form-group'>
          <label className='form-control-label'> navigation with loading</label>
          <Navigation {...navigationProps} isLoading={true} />
        </div>
      </div>
    );
  };
}
