import {NotificationFactory, PartialVarsResolver} from '@mantine/core';

export const NotificationVars: PartialVarsResolver<NotificationFactory> = (theme, props) => {
    if (props.color === 'success') {
        return {root: {'--notification-color': theme.colors.success[6]}};
    }
    if (props.color === 'warning') {
        return {root: {'--notification-color': theme.colors.warning[6]}};
    }
    if (props.color === 'critical') {
        return {root: {'--notification-color': theme.colors.critical[6]}};
    }
    return {root: {}};
};
