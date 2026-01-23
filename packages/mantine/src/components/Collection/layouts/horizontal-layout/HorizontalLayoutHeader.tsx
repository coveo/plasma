import {Box, BoxProps, useProps} from '@mantine/core';
import {ForwardedRef} from 'react';
import {useCollectionContext} from '../../CollectionContext.js';
import {getColumnSizeStyles} from '../shared/columnUtils.js';
import {renderColumnHeader} from '../shared/headerUtils.js';
import classes from './HorizontalLayout.module.css';

export interface HorizontalLayoutHeaderProps extends BoxProps {
    draggable?: boolean;
    removable?: boolean;
}

const defaultProps: Partial<HorizontalLayoutHeaderProps> = {
    draggable: false,
    removable: true,
};

export const HorizontalLayoutHeader = <T,>(
    props: HorizontalLayoutHeaderProps & {ref?: ForwardedRef<HTMLDivElement>},
) => {
    const collectionCtx = useCollectionContext();
    const {draggable, removable, style, ref, ...others} = useProps(
        'HorizontalLayoutHeader',
        defaultProps as HorizontalLayoutHeaderProps,
        props,
    );

    return (
        <Box ref={ref} className={classes.headerRow} style={style} {...others}>
            {draggable && <div className={classes.dragHandleHeader} />}
            {collectionCtx.columns.map((column, index) => {
                const columnId = column.id ?? `column-${index}`;
                return (
                    <Box key={columnId} className={classes.headerCell} style={getColumnSizeStyles(column)}>
                        {renderColumnHeader(column.header, index)}
                    </Box>
                );
            })}
            {removable && <div className={classes.removeButtonHeader} />}
        </Box>
    );
};
