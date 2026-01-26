import {BoxProps, MantineSpacing} from '@mantine/core';
import {ReactNode} from 'react';

/**
 * Common props shared across all layout wrapper components.
 */
export interface LayoutProps {
    children: ReactNode;
}

/**
 * Common props shared across all layout header components.
 */
export interface LayoutHeaderProps extends BoxProps {
    draggable?: boolean;
    removable?: boolean;
}

/**
 * Common default props shared across all layout header components.
 */
export const LAYOUT_HEADER_DEFAULT_PROPS: Partial<LayoutHeaderProps> = {
    draggable: false,
    removable: true,
};

/**
 * Common props shared across all layout body components.
 */
export interface LayoutBodyProps<T = unknown> extends BoxProps {
    items: T[];
    onRemove?: (index: number) => void;
    removable?: boolean;
    draggable?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    getItemId?: (item: T, index: number) => string;
    gap?: MantineSpacing;
}

/**
 * Common default props shared across all layout body components.
 * This ensures consistent defaults and reduces duplication.
 */
export const LAYOUT_BODY_DEFAULT_PROPS: Partial<LayoutBodyProps> = {
    removable: true,
    draggable: false,
    disabled: false,
    readOnly: false,
    gap: 'md' as MantineSpacing,
} as const;
