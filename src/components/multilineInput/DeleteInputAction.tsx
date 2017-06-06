import * as React from 'React';

export interface IDeleteActionProps {
  onClick: () => void;
}

export class DeleteInputAction extends React.Component<IDeleteActionProps, any> {
  render() {
    return (
      <div className='input-actions' onClick={() => this.props.onClick()}>
        <button className='js-add-value-button' type='button'>
          <i className='delete-action' title='Delete this entry'></i>
        </button>
      </div>
    );
  }
}
