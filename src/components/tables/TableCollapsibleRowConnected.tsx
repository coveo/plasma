import { ReduxUtils } from '../../utils/ReduxUtils';
import { IReactVaporState } from '../../ReactVapor';
import { ITableCollapsibleRowOwnProps, TableCollapsibleRow, ITableCollapsibleRowProps } from './TableCollapsibleRow';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'underscore';

const mapStateToProps = (state: IReactVaporState, ownProps: ITableCollapsibleRowOwnProps) => {
  let item = _.findWhere(state.rows, { id: ownProps.id });

  return {
    opened: item ? item.opened : false
  };
};

const mapDispatchToProps = () => {
  return {};
};

export const TableCollapsibleRowConnected: React.ComponentClass<ITableCollapsibleRowProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(TableCollapsibleRow);
