import {NotificationFactory, PartialVarsResolver} from '@mantine/core';

export const NotificationVars: PartialVarsResolver<NotificationFactory> = (theme, props) => {
    if (props.color === 'success') {
        return {root: {}, icon: {color: theme.colors.success[6]}};
    }
    if (props.color === 'warning') {
        return {root: {}, icon: {color: theme.colors.warning[6]}};
    }
    if (props.color === 'critical') {
        return {root: {}, icon: {color: theme.colors.critical[6]}};
    }
    return {root: {}, icon: {color: theme.colors.info[6]}};
};
