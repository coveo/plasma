import * as React from 'react';

export interface IModalBodyProps {
  classes?: string[];
}

export class ModalBody extends React.Component<IModalBodyProps, any> {

  render() {
    let classes = ['modal-body'].concat(this.props.classes);

    return (
      <div className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}
