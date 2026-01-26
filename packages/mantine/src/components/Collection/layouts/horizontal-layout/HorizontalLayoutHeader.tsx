import {Box, useProps} from '@mantine/core';
import {ForwardedRef} from 'react';
import {useCollectionContext} from '../../CollectionContext.js';
import {getColumnSizeStyles} from '../shared/columnUtils.js';
import {renderColumnHeader} from '../shared/headerUtils.js';
import {LAYOUT_HEADER_DEFAULT_PROPS, LayoutHeaderProps} from '../shared/layoutConstants.js';
import classes from './HorizontalLayout.module.css';

const defaultProps: Partial<LayoutHeaderProps> = LAYOUT_HEADER_DEFAULT_PROPS;

export const HorizontalLayoutHeader = (props: LayoutHeaderProps & {ref?: ForwardedRef<HTMLDivElement>}) => {
    const collectionCtx = useCollectionContext();
    const {draggable, removable, style, ref, ...others} = useProps(
        'HorizontalLayoutHeader',
        defaultProps as LayoutHeaderProps,
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
