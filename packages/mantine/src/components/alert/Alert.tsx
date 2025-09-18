import {
    AlertCssVariables,
    AlertProps,
    AlertStylesNames,
    AlertVariant,
    Factory,
    Alert as MantineAlert,
    polymorphicFactory,
} from '@mantine/core';
import {InfoToken} from '../info-token/InfoToken.js';

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
    };
}>;

export const Alert = polymorphicFactory<AlertOverloadFactory>((props, ref) => <MantineAlert {...props} ref={ref} />);

const AlertInformation = Alert.withProps({
    color: 'gray',
    icon: <InfoToken variant="information" />,
    vars: () => ({
        root: {
            '--alert-color': 'var(--mantine-color-text)',
            '--alert-bg': 'var(--mantine-color-gray-light)',
        },
    }),
});

const AlertAdvice = Alert.withProps({
    icon: <InfoToken variant="advice" />,
    vars: () => ({
        root: {
            '--alert-color': 'var(--mantine-primary-color-filled)',
            '--alert-bg': 'var(--mantine-primary-color-light)',
        },
    }),
});

const AlertWarning = Alert.withProps({
    color: 'warning',
    icon: <InfoToken variant="warning" />,
    vars: () => ({
        root: {
            '--alert-color': 'var(--mantine-color-warning-filled)',
            '--alert-bg': 'var(--mantine-color-warning-light)',
        },
    }),
});
const AlertCritical = Alert.withProps({
    icon: <InfoToken variant="error" />,
    vars: () => ({
        root: {
            '--alert-color': 'var(--mantine-color-error)',
            '--alert-bg': 'var(--mantine-color-red-light)',
        },
    }),
});

Alert.Information = AlertInformation;
Alert.Advice = AlertAdvice;
Alert.Warning = AlertWarning;
Alert.Critical = AlertCritical;
