import {MantineSpacing} from '@mantine/core';

/**
 * Common default props shared across all layout body components.
 * This ensures consistent defaults and reduces duplication.
 */
export const LAYOUT_BODY_DEFAULT_PROPS = {
    removable: true,
    draggable: false,
    disabled: false,
    gap: 'md' as MantineSpacing,
} as const;
