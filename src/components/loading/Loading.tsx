import * as React from 'react';

export interface ILoadingOwnProps extends React.ClassAttributes<Loading> {
  id?: string;
  rowStyle?: {
    nbColumns: number;
  };
  shouldHide?: boolean;
}

export interface ILoadingDispatchProps {
  onRender?: () => void;
  onDestroy?: () => void;
}

export interface ILoadingProps extends ILoadingOwnProps, ILoadingDispatchProps { }

export class Loading extends React.Component<ILoadingProps, any> {

  componentWillMount() {
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
    const spinner: JSX.Element = (
      <div className='spinner'>
        <div className='bounce1'></div>
        <div className='bounce2'></div>
        <div className='bounce3'></div>
      </div>
    );

    if (this.props.shouldHide) {
      return null;
    }

    return this.props.rowStyle
      ? (
        <tbody className='loading-row'>
          <tr>
            <td colSpan={this.props.rowStyle.nbColumns}>{spinner}</td>
          </tr>
        </tbody>
      )
      : spinner;
  }
}
