import {IconCircleCheckFilled, IconCircleDotFilled, TablerIcon} from '@coveord/plasma-react-icons';
import {Box, BoxProps, ElementProps, MantineColor, useProps} from '@mantine/core';
import {forwardRef} from 'react';
import {usePrerequisitesListContext} from './PrerequisitesListContext.js';

export type PrerequisitesListIconStylesNames = 'icon';
export type PrerequisitesListIconVariant = 'complete' | 'incomplete';

interface PrerequisitesListIconProps extends BoxProps, ElementProps<'div'> {
    variant: PrerequisitesListIconVariant;
}

const defaultProps = {} satisfies Partial<PrerequisitesListIconProps>;

const iconMapping = {
    complete: IconCircleCheckFilled,
    incomplete: IconCircleDotFilled,
} satisfies Record<PrerequisitesListIconVariant, TablerIcon>;

const colorMapping = {
    complete: 'green',
    incomplete: 'var(--mantine-color-placeholder)',
} satisfies Record<PrerequisitesListIconVariant, MantineColor>;

export const PrerequisitesListIcon = forwardRef<HTMLDivElement, PrerequisitesListIconProps>((_props, ref) => {
    const props = useProps('PrerequisitesListIcon', defaultProps, _props);
    const {className, style, variant, ...others} = props;
    const ctx = usePrerequisitesListContext();
    const IconComponent = iconMapping[variant];

    return (
        <Box ref={ref} {...ctx.getStyles('icon', {className, style})} {...others} c={colorMapping[variant]}>
            <IconComponent size={24} role="img" aria-label={variant} />
        </Box>
    );
});
