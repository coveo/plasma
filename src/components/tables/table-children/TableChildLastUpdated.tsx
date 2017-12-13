import * as React from 'react';
import { ITableProps } from '../Table';
import { LastUpdatedConnected } from '../../lastUpdated/LastUpdatedConnected';
import { getTableChildComponentId } from '../TableUtils';
import { TableChildComponent } from '../TableConstants';

export const TableChildLastUpdated = (props: ITableProps): JSX.Element =>
  <LastUpdatedConnected
    label={props.lastUpdatedLabel}
    id={getTableChildComponentId(props.id, TableChildComponent.LAST_UPDATED)}
  />;

