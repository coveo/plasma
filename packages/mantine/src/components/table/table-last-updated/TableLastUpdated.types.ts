import {TextProps} from '@mantine/core';

export interface TableLastUpdatedProps extends TextProps {
    /**
     * Label to contextualize the date
     *
     * @default "Last update:"
     */
    label?: string;
}
