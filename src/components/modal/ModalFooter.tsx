import * as React from 'react';

export interface IModalFooterProps {
  classes?: string[];
}

export class ModalFooter extends React.Component<IModalFooterProps, any> {

  render() {
    let classes = ['modal-footer'].concat(this.props.classes);

    return (
      <div className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  };
}
