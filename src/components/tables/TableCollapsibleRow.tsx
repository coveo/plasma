import { IErrorSection, TableError } from './TableError';
import * as React from 'react';

export interface ITableCollapsibleRowOwnProps extends React.ClassAttributes<TableCollapsibleRow> {
  id?: string;
  isInError?: boolean;
  nbColumns: number;
}

export interface ITableCollapsibleRowStateProps {
  opened?: boolean;
}

export interface ITableCollapsibleRowChildrenProps {
  error: IErrorSection;
  descriptionLabel?: string;
  troubleshootingLabel?: string;
  errorCodeLabel?: string;
}

export interface ITableCollapsibleRowProps extends ITableCollapsibleRowOwnProps, ITableCollapsibleRowStateProps,
  ITableCollapsibleRowChildrenProps { }

export class TableCollapsibleRow extends React.Component<ITableCollapsibleRowProps, any> {

  componentWillReceiveProps(nextProps: ITableCollapsibleRowProps) {
    let animationTime = 400;
    let $e = $('.' + this.props.id);
    let $container = $e.find('.container');

    if ($e) {
      if (nextProps.opened) {
        $container.slideDown(animationTime);
      } else {
        $container.slideUp(animationTime);
      }
    }
  }

  render() {
    let rowClasses = 'collapsible-row ' + this.props.id + (this.props.opened ? ' in' : '');
    let error = this.props.isInError ?
      <TableError
        error={this.props.error}
        descriptionLabel={this.props.descriptionLabel}
        troubleshootingLabel={this.props.troubleshootingLabel}
        errorCodeLabel={this.props.errorCodeLabel}
        /> :
      null;

    return (
      <tr className={rowClasses}>
        <td colSpan={this.props.nbColumns}>
          <div className='container'>
            {error}
            <div className='clearfix'></div>
            <section className='columns'>
              {this.props.children}
            </section>
          </div>
        </td>
      </tr>
    );
  }
}
