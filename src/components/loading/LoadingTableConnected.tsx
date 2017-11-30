import * as React from 'react';
import { LoadingConnected } from './LoadingConnected';
import { Loading } from './Loading';
import * as _ from 'underscore';

export class LoadingTableConnected extends LoadingConnected {
  render() {
    if (this.props.hide) {
      return null;
    }

    return (
      <table className='mod-collapsible-rows'>
        {_.range(this.props.numberOfRows).map((num: number) => {
          return (
            <tbody key={`loading-row${num}`} className='loading-row'>
              <tr>
                <td colSpan={this.props.columnsPerRow}>
                  <Loading />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    );
  }
}
