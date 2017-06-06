import * as React from 'React';

export class AddInputAction extends React.Component<any, any> {
  render() {
    return (
      <div className='input-actions'>
        <button className='js-add-value-button'>
          <i className='add-action' title='Add a new entry'></i>
        </button>
      </div>
    );
  }
}
