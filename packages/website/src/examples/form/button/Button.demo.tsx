import {
    ButtonDestructive,
    ButtonDestructiveSecondary,
    ButtonPrimary,
    ButtonSecondary,
    ButtonTertiary,
    Group,
    showNotification,
    Stack,
} from '@coveord/plasma-mantine';

const Demo = () => {
    const onClick = () => showNotification({message: 'Button clicked', autoClose: false});
    return (
        <Stack gap="sm">
            <Group gap="sm">
                <ButtonPrimary onClick={onClick}>Primary</ButtonPrimary>
                <ButtonSecondary onClick={onClick}>Secondary</ButtonSecondary>
                <ButtonTertiary onClick={onClick}>Tertiary</ButtonTertiary>
            </Group>
            <Group gap="sm">
                <ButtonDestructive onClick={onClick}>Destructive</ButtonDestructive>
                <ButtonDestructiveSecondary onClick={onClick}>Destructive secondary</ButtonDestructiveSecondary>
            </Group>
        </Stack>
    );
};
export default Demo;
