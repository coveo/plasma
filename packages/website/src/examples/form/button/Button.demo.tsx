import {Button, Group, showNotification, Stack} from '@coveord/plasma-mantine';

const Demo = () => {
    const onClick = () => showNotification({message: 'Button clicked', autoClose: false});
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
