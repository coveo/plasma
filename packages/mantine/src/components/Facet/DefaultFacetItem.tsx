import {Checkbox, Text} from '@mantine/core';
import {memo} from 'react';
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
                        <>
                            <Text span c="gray.6" ml="xs" style={{whiteSpace: 'nowrap'}}>
                                ({countFormatter?.(data.count) ?? data.count})
                            </Text>
                        </>
                    ) : null}
                </>
            }
            tabIndex={-1}
            style={{pointerEvents: 'none', display: 'flex'}}
        />
    ),
);
