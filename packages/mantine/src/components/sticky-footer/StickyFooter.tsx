import {Box, Divider, Group, GroupProps, MantineSpacing, useProps} from '@mantine/core';
import cx from 'clsx';
import {ReactNode, forwardRef} from 'react';
import StickyFooterClasses from './StickyFooter.module.css';

export interface StickyFooterProps extends GroupProps {
    /**
     * Whether a border is render on top of the footer
     */
    borderTop?: boolean;
    /**
     * Position of the children within the footer
     *
     * @default 'right'
     */
    justify?: 'right' | 'left' | 'center' | 'apart';
    /**
     * Defines the spacing between footer children
     *
     * @default 'sm'
     */
    gap?: MantineSpacing;
    /**
     * Footer's children, usually buttons
     */
    children?: ReactNode;
}

const defaultProps: Partial<StickyFooterProps> = {
    gap: 'sm',
    justify: 'right',
};

export const StickyFooter = forwardRef<HTMLDivElement, StickyFooterProps>((props, ref) => {
    const {borderTop, justify, gap, children, className, ...others} = useProps('StickyFooter', defaultProps, props);
    return (
        <Box ref={ref} className={cx(StickyFooterClasses.root, className)}>
            {borderTop ? <Divider size="xs" className={StickyFooterClasses.divider} /> : null}
            <Group justify={justify} gap={gap} className={StickyFooterClasses.footer} {...others}>
                {children}
            </Group>
        </Box>
    );
});
