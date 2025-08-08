import {Button, Group, showNotification, Stack} from '@coveord/plasma-mantine';
import {IconAlertSquareFilled, IconAlertTriangleFilled, IconCircleCheckFilled} from '@coveord/plasma-react-icons';

const Demo = () => {
    const onClick = () => {
        showNotification({title: 'Title', message: 'Button clicked', autoClose: false});
        showNotification({
            message: 'Button clicked',
            autoClose: false,
            icon: <IconAlertSquareFilled height={20} color="var(--mantine-color-error-filled)" />,
        });
        showNotification({
            message: 'Button clicked',
            autoClose: false,
            icon: <IconCircleCheckFilled height={20} color="var(--mantine-color-success-filled)" />,
        });
        showNotification({
            message: 'Button clicked',
            autoClose: false,
            icon: <IconAlertTriangleFilled height={20} color="var(--mantine-color-warning-filled)" />,
        });
        showNotification({message: 'Button clicked', autoClose: false, loading: true});
    };
    return (
        <Stack gap="sm">
            <Group gap="sm">
                <Button.Primary onClick={onClick}>Button</Button.Primary>
                <Button.Secondary onClick={onClick}>Button</Button.Secondary>
                <Button.Tertiary onClick={onClick}>Button</Button.Tertiary>
                <Button.Quaternary onClick={onClick}>Button</Button.Quaternary>
            </Group>
            <Group gap="sm">
                <Button.DestructivePrimary onClick={onClick}>Button</Button.DestructivePrimary>
                <Button.DestructiveSecondary onClick={onClick}>Button</Button.DestructiveSecondary>
                <Button.DestructiveTertiary onClick={onClick}>Button</Button.DestructiveTertiary>
                <Button.DestructiveQuaternary onClick={onClick}>Button</Button.DestructiveQuaternary>
            </Group>
        </Stack>
    );
};
export default Demo;
