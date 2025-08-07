import {BoxProps, CompoundStylesApiProps, factory, Factory} from '@mantine/core';
import {LastUpdated, LastUpdatedProps} from '../../last-updated/LastUpdated';
import {useTableContext} from '../TableContext';

export type TableLastUpdatedStylesNames = 'lastUpdatedRoot' | 'lastUpdatedLabel';

export interface TableLastUpdatedProps
    extends BoxProps,
        CompoundStylesApiProps<TableLastUpdatedFactory>,
        Pick<LastUpdatedProps, 'label'> {}

export type TableLastUpdatedFactory = Factory<{
    props: TableLastUpdatedProps;
    ref: HTMLDivElement;
    stylesNames: TableLastUpdatedStylesNames;
    compound: true;
}>;

export const TableLastUpdated = factory<TableLastUpdatedFactory>((props, ref) => {
    const {table} = useTableContext();
    const {classNames: _classNames, styles: _styles, vars: _vars, ...lastUpdatedProps} = props;

    return <LastUpdated justify="center" data={table.options.data} ref={ref} {...lastUpdatedProps} />;
});
