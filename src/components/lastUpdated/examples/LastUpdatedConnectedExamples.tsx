import * as React from 'react';
import { LastUpdatedConnected } from '../LastUpdatedConnected';
import { changeLastUpdated, ILastUpdatedAction } from '../LastUpdatedActions';
import { ReduxUtils } from '../../../utils/ReduxUtils';
import { connect } from 'react-redux';

export interface ILastUpdateConnectedExamplesProps {
  onRefresh?: () => void;
}

export class LastUpdatedConnectedExamples extends React.Component<ILastUpdateConnectedExamplesProps, any> {

  componentDidMount() {
    setInterval(() => {
      this.props.onRefresh();
    }, 5000);
  }

  render() {
    return (
      <div className='form-group' style={{ width: 400 }}>
        <div>
          <label className='form-control-label'>Last update updating with Redux (every 5 seconds here with the changeLastUpdated action with the id)</label>
          <LastUpdatedConnected id='LastUpdatedConnectedExampleComponent' />
        </div>
      </div>
    );
  };
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: (action: ILastUpdatedAction) => void): ILastUpdateConnectedExamplesProps => {
  return {
    onRefresh: () => {
      dispatch(changeLastUpdated('LastUpdatedConnectedExampleComponent'));
    }
  };
};

export const LastUpdatedExamplesConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(LastUpdatedConnectedExamples);
