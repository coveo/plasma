import { IActionOptions } from './Action';
import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { PrimaryActionConnected } from './PrimaryActionConnected';
import { PrimaryAction } from './PrimaryAction';
import { SecondaryActionsConnected } from './SecondaryActionsConnected';
import { SecondaryActions } from './SecondaryActions';
import * as React from 'react';
import * as _ from 'underscore';
import { ItemFilter } from './filters/ItemFilter';

export interface IActionBarOwnProps extends React.ClassAttributes<ActionBar> {
  id?: string;
  itemFilterLabel?: string;
  onClearItemFilter?: () => void;
}

export interface IActionBarStateProps extends IReduxStatePossibleProps {
  actions?: IActionOptions[];
  prompt?: JSX.Element;
  itemFilter?: string;
}

export interface IActionBarDispatchProps {
  onRender?: () => void;
  onDestroy?: () => void;
  clearItemFilter?: () => void;
}

export interface IActionBarChildrenProps {
  moreLabel?: string;
}

export interface IActionBarProps extends IActionBarOwnProps, IActionBarStateProps, IActionBarDispatchProps,
  IActionBarChildrenProps { }

export class ActionBar extends React.Component<IActionBarProps, any> {

  private handleClear() {
    if (this.props.clearItemFilter) {
      this.props.clearItemFilter();
    }
  }

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
    let itemFilter: JSX.Element = this.props.itemFilter
      ? <ItemFilter label={this.props.itemFilterLabel} item={this.props.itemFilter} onClear={() => this.handleClear()} />
      : null;

    let primaryActions: JSX.Element[] = !this.props.prompt && _.map(this.props.actions, (action: IActionOptions, index: number): JSX.Element => {
      if (action.primary) {
        let primaryAction = this.props.withReduxState
          ? <PrimaryActionConnected action={action} parentId={this.props.id} />
          : <PrimaryAction action={action} />;
        return <div className='dropdown action primary-action' key={'primary-' + index}>{primaryAction}</div>;
      }
    });

    let secondaryActions: IActionOptions[] = !this.props.prompt && _.map(this.props.actions, (action: IActionOptions) => {
      if (!action.primary) {
        return action;
      }
    }).filter(Boolean);

    let secondaryActionsView: JSX.Element = secondaryActions.length
      ? (this.props.withReduxState
        ? <SecondaryActionsConnected moreLabel={this.props.moreLabel} actions={secondaryActions} id={this.props.id} />
        : <SecondaryActions moreLabel={this.props.moreLabel} actions={secondaryActions} />
      )
      : null;

    let actions = primaryActions.length || secondaryActionsView || this.props.prompt
      ? (<div className='coveo-table-actions'>
        {primaryActions}
        {secondaryActionsView}
        {this.props.prompt}
      </div>)
      : null;

    return (
      <div className='coveo-table-actions-container mod-cancel-header-padding mod-border-bottom mod-align-header'>
        {itemFilter}
        {actions}
		{this.props.children}
      </div>
    );
  }
}
