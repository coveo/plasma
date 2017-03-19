import * as React from 'react';

export interface IModalFooterProps {
}

export class ModalFooter extends React.Component<IModalFooterProps, any> {

  render() {

    return (
      <div className='modal-footer'>
        {this.props.children}
      </div>
    );
  };
}
