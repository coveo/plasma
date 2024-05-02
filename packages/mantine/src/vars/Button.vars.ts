import {ButtonFactory, PartialVarsResolver} from '@mantine/core';

export const ButtonVars: PartialVarsResolver<ButtonFactory> = (theme, props) => {
    if (props.variant === 'primary' || !props.variant) {
        return {
            root: {
                '--button-bg': '#0D5CC0',
                '--button-hover': '#074390',
                '--button-color': '#F5F7FF',
                '--button-hover-color': '#F5F7FF',
            },
        };
    }
    if (props.variant === 'outline') {
        return {
            root: {
                '--button-bg': '#FFFFFF',
                '--button-hover': '#F7F7F8',
                '--button-color': '#0D5CC0',
                '--button-hover-color': '#074390',
                '--button-bd': '1px solid #6E99FD',
            },
        };
    }
    if (props.variant === 'subtle') {
        return {
            root: {
                '--button-bg': '#F5F7FF',
                '--button-hover': '#F7F7F8',
                '--button-color': '#0D5CC0',
                '--button-hover-color': '#074390',
                '--button-bd': '1px solid #0D5CC0',
            },
        };
    }
    if (props.variant === 'destructive') {
        return {
            root: {
                '--button-bg': '#AF3226',
                '--button-hover': '#83231A',
                '--button-color': '#FEF5F5',
                '--button-hover-color': '#FEF5F5',
            },
        };
    }
    return {root: {}};
};
