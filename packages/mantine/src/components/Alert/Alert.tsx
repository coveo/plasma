import {
    AlertCssVariables,
    AlertProps,
    AlertStylesNames,
    AlertVariant,
    Factory,
    Alert as MantineAlert,
    polymorphicFactory,
} from '@mantine/core';
import {type ComponentType} from 'react';
import {InfoToken} from '../InfoToken/InfoToken.js';

type AlertOverloadFactory = Factory<{
    props: AlertProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: AlertStylesNames;
    vars: AlertCssVariables;
    variant: AlertVariant;
    staticComponents: {
        Information: typeof AlertInformation;
        Advice: typeof AlertAdvice;
        Warning: typeof AlertWarning;
        Critical: typeof AlertCritical;
        Success: typeof AlertSuccess;
    };
}>;

export const Alert = polymorphicFactory<AlertOverloadFactory>((props, ref) => <MantineAlert {...props} ref={ref} />);
Alert.displayName = 'Alert';

const AlertInformation = Alert.withProps({
    color: 'gray',
    icon: <InfoToken.Information size="md" />,
    vars: () => ({
        root: {
            '--alert-color': 'var(--mantine-color-text)',
            '--alert-bg': 'var(--mantine-color-gray-light)',
            '--alert-bd': '2px solid var(--mantine-color-gray-light)',
        },
    }),
});
(AlertInformation as ComponentType).displayName = 'Alert.Information';

const AlertAdvice = Alert.withProps({
    icon: <InfoToken.Advice size="md" />,
    vars: () => ({
        root: {
            '--alert-color': 'var(--mantine-primary-color-filled)',
            '--alert-bg': 'var(--mantine-primary-color-light)',
            '--alert-bd': '2px solid var(--mantine-primary-color-light)',
        },
    }),
});
(AlertAdvice as ComponentType).displayName = 'Alert.Advice';

const AlertSuccess = Alert.withProps({
    icon: <InfoToken.Success size="md" />,
    vars: () => ({
        root: {
            '--alert-color': 'var(--mantine-color-green-filled)',
            '--alert-bg': 'var(--mantine-color-green-light)',
            '--alert-bd': '2px solid var(--mantine-color-green-light)',
        },
    }),
});
(AlertSuccess as ComponentType).displayName = 'Alert.Success';

const AlertWarning = Alert.withProps({
    color: 'warning',
    icon: <InfoToken.Warning size="md" />,
    vars: () => ({
        root: {
            '--alert-color': 'var(--mantine-color-yellow-text)',
            '--alert-bg': 'var(--mantine-color-yellow-light)',
            '--alert-bd': '2px solid var(--mantine-color-yellow-light)',
        },
    }),
});
(AlertWarning as ComponentType).displayName = 'Alert.Warning';

const AlertCritical = Alert.withProps({
    icon: <InfoToken.Error size="md" />,
    vars: () => ({
        root: {
            '--alert-color': 'var(--mantine-color-error)',
            '--alert-bg': 'var(--mantine-color-red-light)',
            '--alert-bd': '2px solid var(--mantine-color-red-light)',
        },
    }),
});
(AlertCritical as ComponentType).displayName = 'Alert.Critical';

Alert.Information = AlertInformation;
Alert.Advice = AlertAdvice;
Alert.Warning = AlertWarning;
Alert.Critical = AlertCritical;
Alert.Success = AlertSuccess;
