import * as React from 'react';
import { ITableProps } from '../Table';
import { IBlankSlateProps, BlankSlate } from '../../blankSlate/BlankSlate';
import * as _ from 'underscore';

export const TableChildBlankSlate = (props: ITableProps): JSX.Element => {
  const { tableCompositeState } = props;
  const tableData = tableCompositeState.data || props.initialTableData;
  const {
      blankSlateDefault,
    blankSlateNoResultsOnAction,
    blankSlateOnError,
    } = props;

  let blankSlatePropsToUse: IBlankSlateProps;

  if (tableData.displayedIds.length
    || props.tableCompositeState.isLoading) {
    return null;
  }

  if (tableCompositeState.filter || _.some(tableCompositeState.predicates, (value: any) => !_.isUndefined(value))) {
    blankSlatePropsToUse = blankSlateNoResultsOnAction || blankSlateDefault;
  } else if (tableCompositeState.isInError) {
    blankSlatePropsToUse = blankSlateOnError || blankSlateDefault;
  } else {
    blankSlatePropsToUse = blankSlateDefault;
  }

  return <BlankSlate {...blankSlatePropsToUse} />;
};
