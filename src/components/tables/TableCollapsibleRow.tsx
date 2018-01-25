import { IErrorSection, TableError } from './TableError';
import { SlideY } from '../../animations/SlideY';
import * as React from 'react';
// import * as $ from 'jquery';

export interface ITableCollapsibleRowOwnProps extends React.ClassAttributes<TableCollapsibleRow> {
  id: string;
  isInError?: boolean;
  nbColumns: number;
}

export interface ITableCollapsibleRowStateProps {
  opened?: boolean;
}

export interface ITableCollapsibleRowChildrenProps {
  error?: IErrorSection;
  descriptionLabel?: string;
  troubleshootingLabel?: string;
  errorCodeLabel?: string;
}

export interface ITableCollapsibleRowProps extends ITableCollapsibleRowOwnProps, ITableCollapsibleRowStateProps,
  ITableCollapsibleRowChildrenProps { }

export class TableCollapsibleRow extends React.Component<ITableCollapsibleRowProps, any> {

  // private toggleRow(opened: boolean) {
  //   let animationTime: number = 400;
  //   let $e: JQuery = $('.' + this.props.id);
  //   let $container: JQuery = $e.find('.container');

  //   if (opened) {
  //     $container.slideDown(animationTime);
  //   } else {
  //     $container.slideUp(animationTime);
  //   }
  // }

  // componentDidMount() {
  //   this.toggleRow(this.props.opened);
  // }

  // componentWillReceiveProps(nextProps: ITableCollapsibleRowProps) {
  //   this.toggleRow(nextProps.opened);
  // }

  render() {
    let rowClasses: string = 'collapsible-row ' + this.props.id + (this.props.opened ? ' in' : '');
    let error: JSX.Element = this.props.isInError ?
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
          <SlideY in={this.props.opened} timeout={400}>
            <div className='container'>
              {error}
              <div className='clearfix'></div>
              <section className='columns'>
                {this.props.children}
              </section>
            </div>
          </SlideY>
        </td>
      </tr>
    );
  }
}
