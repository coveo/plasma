import { IActionOptions } from './Action';
import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { PrimaryActionConnected } from './PrimaryActionConnected';
import { PrimaryAction } from './PrimaryAction';
import { SecondaryActionsConnected } from './SecondaryActionsConnected';
import { SecondaryActions } from './SecondaryActions';
import * as React from 'react';
import * as _ from 'underscore';

export interface IActionBarOwnProps extends React.ClassAttributes<ActionBar> {
  id?: string;
}

export interface IActionBarStateProps extends IReduxStatePossibleProps {
  actions?: IActionOptions[];
  prompt?: JSX.Element;
}

export interface IActionBarDispatchProps {
  onRender?: () => void;
  onDestroy?: () => void;
}

export interface IActionBarProps extends IActionBarOwnProps, IActionBarStateProps, IActionBarDispatchProps { }

export class ActionBar extends React.Component<IActionBarProps, any> {

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
    let primaryActionNo = 0;
    let primaryActions = !this.props.prompt && _.map(this.props.actions, (action: IActionOptions) => {
      if (action.primary) {
        primaryActionNo++;
        let primaryAction = this.props.withReduxState ?
          <PrimaryActionConnected action={action} parentId={this.props.id} /> :
          <PrimaryAction action={action} />;
        return <div className='dropdown action primary-action' key={'primary-' + primaryActionNo}>{primaryAction}</div>;
      }
    });
    let secondaryActions = !this.props.prompt && _.map(this.props.actions, (action: IActionOptions) => {
      if (!action.primary) {
        return action;
      }
    }).filter(Boolean);
    let secondaryActionsView = secondaryActions.length ?
      (this.props.withReduxState ?
        <SecondaryActionsConnected actions={secondaryActions} id={this.props.id} /> :
        <SecondaryActions actions={secondaryActions} />
      ) :
      null;

    return (
      <div className='coveo-table-actions-container mod-cancel-header-padding mod-border-bottom mod-align-header'>
        <div className='coveo-table-actions'>
          {primaryActions}
          {secondaryActionsView}
          {this.props.prompt}
        </div>
      </div>
    );
  }
}
