import * as React from 'react';

export const DEFAULT_TITLE = 'Add a new entry';

export interface IAddInputActionProps {
  title?: string;
}

export class AddInputAction extends React.Component<IAddInputActionProps, any> {
  render() {
    const title = this.props.title ? this.props.title : DEFAULT_TITLE;
    return (
      <div className='input-actions'>
        <button className='js-add-value-button'>
          <i className='add-action' title={title}></i>
        </button>
      </div>
    );
  }
}
