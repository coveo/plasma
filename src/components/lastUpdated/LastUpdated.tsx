import * as React from 'react';
import * as moment from 'moment';

export interface ILastUpdatedOwnProps extends React.ClassAttributes<LastUpdated> {
  id: string;
}

export interface ILastUpdatedStateProps {
  label?: string;
  time?: Date;
}

export interface ILastUpdatedDispatchProps {
  onRender?: () => void;
  onDestroy?: () => void;
}

export interface ILastUpdatedProps extends ILastUpdatedOwnProps, ILastUpdatedStateProps, ILastUpdatedDispatchProps {
}

export const defaultLastUpdateLabel: string = 'Last update:';

export class LastUpdated extends React.Component<ILastUpdatedProps, any> {

  componentDidMount() {
    if (this.props.onRender) {
      this.props.onRender();
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  render() {
    let label = this.props.label || defaultLastUpdateLabel;
    let time = this.props.time || new Date();
    let lastUpdateTime = moment(time).format('LTS');

    return (
      <div className='table-last-update'>{label} {lastUpdateTime}</div>
    );
  }
}
