import * as React from 'react';
import { ITableProps } from '../Table';
import { IBlankSlateProps, BlankSlate } from '../../blankSlate/BlankSlate';
import * as _ from 'underscore';
import { TABLE_PREDICATE_DEFAULT_VALUE } from '../TableConstants';

export interface ITableChildBlankSlateProps extends ITableProps {
  isInitialLoad?: boolean;
}

export const TableChildBlankSlate = (props: ITableChildBlankSlateProps): JSX.Element => {
  const {
    blankSlateDefault,
    blankSlateNoResultsOnAction,
    blankSlateOnError,
    tableCompositeState,
    initialTableData,
    isInitialLoad,
  } = props;
  const tableData = tableCompositeState.data || initialTableData;

  let blankSlatePropsToUse: IBlankSlateProps;

  if (tableData.displayedIds.length || tableCompositeState.isLoading || isInitialLoad) {
    return null;
  }

  if (tableCompositeState.isInError) {
    blankSlatePropsToUse = blankSlateOnError || blankSlateDefault;
  } else if (tableCompositeState.filter
    || _.some(tableCompositeState.predicates, (value: any) => !_.isUndefined(value) && value !== TABLE_PREDICATE_DEFAULT_VALUE)
    || tableCompositeState.from
    || tableCompositeState.to) {
    blankSlatePropsToUse = blankSlateNoResultsOnAction || blankSlateDefault;
  } else {
    blankSlatePropsToUse = blankSlateDefault;
  }

  return <BlankSlate {...blankSlatePropsToUse} />;
};
