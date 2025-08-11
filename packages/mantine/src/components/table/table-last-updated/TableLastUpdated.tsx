import {BoxProps, CompoundStylesApiProps, factory, Factory} from '@mantine/core';
import {useDidUpdate} from '@mantine/hooks';
import {useState} from 'react';
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
    const {table, getStyles} = useTableContext();
    const {classNames: _classNames, styles: _styles, vars: _vars, ...lastUpdatedProps} = props;
    const [time, setTime] = useState(new Date());

    const {className: rootClassName, style: rootStyle} = getStyles('lastUpdatedRoot', {
        classNames: _classNames,
        styles: _styles,
    });

    const {className: labelClassName, style: labelStyle} = getStyles('lastUpdatedLabel', {
        classNames: _classNames,
        styles: _styles,
    });

    useDidUpdate(() => {
        setTime(new Date());
    }, [table.options.data]);

    return (
        <LastUpdated
            time={time}
            ref={ref}
            justify="right"
            px="lg"
            classNames={{root: rootClassName, label: labelClassName}}
            styles={{root: rootStyle, label: labelStyle}}
            {...lastUpdatedProps}
        />
    );
});
