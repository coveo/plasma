import {Alert} from '@mantine/core';
import {InfoToken} from '../info-token/InfoToken';

export const AlertInformation = Alert.withProps({
    color: 'gray',
    icon: <InfoToken variant="information" />,
    vars: () => ({
        root: {
            '--alert-color': 'var(--mantine-color-text)',
            '--alert-bg': 'var(--mantine-color-gray-light)',
        },
    }),
});
/**
 * @deprecated use AlertInformation instead
 */
export const AlertTip = AlertInformation;
export const AlertAdvice = Alert.withProps({
    icon: <InfoToken variant="advice" />,
    vars: () => ({
        root: {
            '--alert-color': 'var(--mantine-primary-color-filled)',
            '--alert-bg': 'var(--mantine-primary-color-light)',
        },
    }),
});
/**
 * @deprecated use AlertAdvice instead
 */
export const AlertSuccess = AlertAdvice;
export const AlertWarning = Alert.withProps({
    color: 'warning',
    icon: <InfoToken variant="warning" />,
    vars: () => ({
        root: {
            '--alert-color': 'var(--mantine-color-warning-filled)',
            '--alert-bg': 'var(--mantine-color-warning-light)',
        },
    }),
});
export const AlertCritical = Alert.withProps({
    icon: <InfoToken variant="error" />,
    vars: () => ({
        root: {
            '--alert-color': 'var(--mantine-color-error)',
            '--alert-bg': 'var(--mantine-color-red-light)',
        },
    }),
});
