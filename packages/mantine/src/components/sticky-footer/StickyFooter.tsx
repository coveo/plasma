import {
    Box,
    createStyles,
    DefaultProps,
    Divider,
    Group,
    GroupPosition,
    MantineNumberSize,
    Selectors,
    useComponentDefaultProps,
} from '@mantine/core';
import {forwardRef, ReactNode} from 'react';

export interface StickyFooterProps extends DefaultProps<Selectors<typeof useStyles>> {
    /**
     * Whether a border is render on top of the footer
     */
    borderTop?: boolean;
    /**
     * Position of the children within the footer
     *
     * @default 'right'
     */
    position?: GroupPosition;
    /**
     * Defines the spacing between footer children
     *
     * @default 'sm'
     */
    spacing?: MantineNumberSize;
    /**
     * Footer's children, usually buttons
     */
    children?: ReactNode;
}

const useStyles = createStyles((theme) => ({
    root: {
        position: 'sticky',
        bottom: 0,
        zIndex: 10,
        backgroundColor: 'white',
    },
    footer: {
        paddingLeft: theme.spacing.lg,
        paddingRight: theme.spacing.lg,
        paddingTop: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },
    divider: {},
}));

const defaultProps: Partial<StickyFooterProps> = {
    spacing: 'sm',
    position: 'right',
};

export const StickyFooter = forwardRef<HTMLDivElement, StickyFooterProps>((props, ref) => {
    const {borderTop, spacing, position, children, className, classNames, styles, unstyled, ...others} =
        useComponentDefaultProps('StickyFooter', defaultProps, props);
    const {classes, cx} = useStyles(null, {name: 'StickyFooter', classNames, styles, unstyled});

    return (
        <Box ref={ref} className={cx(classes.root, className)}>
            {borderTop ? <Divider size="xs" className={classes.divider} /> : null}
            <Group position={position} spacing={spacing} className={classes.footer} {...others}>
                {children}
            </Group>
        </Box>
    );
});
