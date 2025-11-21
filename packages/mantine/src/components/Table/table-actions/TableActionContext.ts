import {createSafeContext} from '@mantine/core';

export interface TableActionContextValue {
    primary: boolean;
}

export const [TableActionProvider, useTableActionContext] = createSafeContext<TableActionContextValue>(
    'TableActionProvider component was not found in the tree',
);
