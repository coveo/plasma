import {Checkbox, Text} from '@mantine/core';
import {memo} from 'react';
import classes from './DefaultFacetItem.module.css';
import {FacetItemComponent, FacetItemComponentProps} from './FacetTypes.js';

export const DefaultFacetItem: FacetItemComponent = memo(
    ({data, selected, countFormatter}: FacetItemComponentProps) => (
        <Checkbox
            checked={selected}
            onChange={() => undefined} // add an onChange handler to fix react warning
            aria-hidden
            label={
                <>
                    {data.label}
                    {data.count !== undefined ? (
                        <Text span c="dimmed" ml="xs" className={classes.count}>
                            ({countFormatter?.(data.count) ?? data.count})
                        </Text>
                    ) : null}
                </>
            }
            tabIndex={-1}
            className={classes.root}
        />
    ),
);
