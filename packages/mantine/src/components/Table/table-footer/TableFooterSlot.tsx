import {Box} from '@mantine/core';
import {ReactNode} from 'react';
import {useTableContext} from '../TableContext.js';
import {useIsInFooter} from './TableFooterContext.js';

export type TableFooterSlotStylesNames = 'footerStart' | 'footerCenter' | 'footerEnd';

interface TableFooterSlotProps {
    position: 'start' | 'center' | 'end';
    children: ReactNode;
}

const stylesNames: Record<TableFooterSlotProps['position'], TableFooterSlotStylesNames> = {
    start: 'footerStart',
    center: 'footerCenter',
    end: 'footerEnd',
};

/**
 * Places its children in the given area of the `Table.Footer` grid, renders them as is outside of the footer
 */
export const TableFooterSlot = ({position, children}: TableFooterSlotProps) => {
    const {getStyles} = useTableContext();
    const isInFooter = useIsInFooter();

    if (!isInFooter) {
        return children;
    }

    return <Box {...getStyles(stylesNames[position])}>{children}</Box>;
};
