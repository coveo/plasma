import {IconCheck, TablerIcon} from '@coveord/plasma-react-icons';
import {
    BoxProps,
    ElementProps,
    MantineColor,
    ThemeIcon,
    ThemeIconVariant,
    useMantineTheme,
    useProps,
} from '@mantine/core';
import {forwardRef} from 'react';
import {usePrerequisitesListContext} from './PrerequisitesListContext';

export type PrerequisitesListIconStylesNames = 'icon';
export type PrerequisitesListIconVariant = 'completed' | 'current' | 'next';

interface PrerequisitesListIconProps extends BoxProps, ElementProps<'div'> {
    variant: PrerequisitesListIconVariant;
}

const defaultProps = {} satisfies Partial<PrerequisitesListIconProps>;

const iconMapping = {
    completed: IconCheck,
    current: IconCheck,
    next: IconCheck,
} satisfies Record<PrerequisitesListIconVariant, TablerIcon>;

const colorMapping = {
    completed: 'primary',
    current: 'primary',
    next: 'gray',
} satisfies Record<PrerequisitesListIconVariant, MantineColor>;

const variantMapping = {
    completed: 'filled',
    current: 'light',
    next: 'light',
} satisfies Record<PrerequisitesListIconVariant, ThemeIconVariant>;

export const PrerequisitesListIcon = forwardRef<HTMLDivElement, PrerequisitesListIconProps>((_props, ref) => {
    const props = useProps('PrerequisitesListIcon', defaultProps, _props);
    const {className, style, variant, ...others} = props;
    const ctx = usePrerequisitesListContext();
    const IconComponent = iconMapping[variant];
    const {primaryColor} = useMantineTheme();

    return (
        <ThemeIcon
            ref={ref}
            {...ctx.getStyles('icon', {className, style})}
            {...others}
            variant={variantMapping[variant]}
            color={colorMapping[variant] === 'primary' ? primaryColor : colorMapping[variant]}
            radius="xl"
            p="xxs"
            bd="none"
            size={24}
        >
            <IconComponent size={16} role="img" aria-label={variant} />
        </ThemeIcon>
    );
});
