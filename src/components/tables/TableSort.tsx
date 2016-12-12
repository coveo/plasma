// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { ITableHeaderCellProps } from './TableHeaderCell';
import { Svg } from '../svg/Svg';

export enum SortTypes {
  Ascending,
  Descending,
  None
}

export interface ITableSortProps extends ITableHeaderCellProps {
  sortType: SortTypes;
  isFixedHeader: boolean;
}

export abstract class TableSort implements ITableHeaderCellProps {
  title: string;
  className: string;
  cellContent: JSX.Element;
  onClick: () => void;

  constructor(props: ITableSortProps) {
    this.title = props.title;
    this.onClick = props.onClick;
    this.className = props.className ? props.className + ' ' + this.computeClassName(props.sortType)
      : this.computeClassName(props.sortType);

    this.cellContent = this.getCellContent(props.isFixedHeader);
  }

  private computeClassName(sortType: SortTypes): string {
    let className: string;
    switch (sortType) {
      case SortTypes.Ascending:
        className = 'admin-sort admin-sort-ascending';
      case SortTypes.Descending:
        className = 'admin-sort admin-sort-descending';
      default:
        className = 'admin-sort';
    }

    return className;
  }

  private getCellContent(isFixedHeader: boolean): JSX.Element {
    let content = <div className='admin-sort-icon'>
      {isFixedHeader ? this.title : ''}
      <Svg svgName='asc-desc' className='icon tables-sort ' />
    </div>;
    if (isFixedHeader) {
      content = <div className='fixed-header-container'>
        {content}
      </div>;
    }
    return content;
  }
}
