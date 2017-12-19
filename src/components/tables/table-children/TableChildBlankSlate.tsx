import * as React from 'react';
import { ITableProps } from '../Table';
import { IBlankSlateProps, BlankSlate } from '../../blankSlate/BlankSlate';
import * as _ from 'underscore';
import { TABLE_PREDICATE_DEFAULT_VALUE } from '../TableConstants';

export const TableChildBlankSlate = (props: ITableProps): JSX.Element => {
  const {
    blankSlateDefault,
    blankSlateNoResultsOnAction,
    blankSlateOnError,
    tableCompositeState,
    initialTableData,
  } = props;
  const tableData = tableCompositeState.data || initialTableData;

  let blankSlatePropsToUse: IBlankSlateProps;

  if (tableData.displayedIds.length || tableCompositeState.isLoading) {
    return null;
  }

  if (tableCompositeState.filter
    || _.some(tableCompositeState.predicates, (value: any) => !_.isUndefined(value) || value !== TABLE_PREDICATE_DEFAULT_VALUE)) {
    blankSlatePropsToUse = blankSlateNoResultsOnAction || blankSlateDefault;
  } else if (tableCompositeState.isInError) {
    blankSlatePropsToUse = blankSlateOnError || blankSlateDefault;
  } else {
    blankSlatePropsToUse = blankSlateDefault;
  }

  return <BlankSlate {...blankSlatePropsToUse} />;
};
