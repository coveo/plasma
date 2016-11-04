import * as React from 'react';

export class Loading extends React.Component<any, any> {

  render() {
    return (
      <div className='spinner'>
        <div className='bounce1'></div>
        <div className='bounce2'></div>
        <div className='bounce3'></div>
      </div>
    );
  }
}
