import {ActionIcon, Group, showNotification, Stack} from '@coveord/plasma-mantine';
import {IconBell} from '@coveord/plasma-react-icons';

const Icon = () => <IconBell size={16} />;

const Demo = () => {
    const onClick = () => showNotification({message: 'ActionIcon clicked', autoClose: false});
    return (
        <Stack gap="sm">
            <Group gap="sm">
                <ActionIcon.Primary onClick={onClick}>
                    <Icon />
                </ActionIcon.Primary>
                <ActionIcon.Secondary onClick={onClick}>
                    <Icon />
                </ActionIcon.Secondary>
                <ActionIcon.Tertiary onClick={onClick}>
                    <Icon />
                </ActionIcon.Tertiary>
                <ActionIcon.Quaternary onClick={onClick}>
                    <Icon />
                </ActionIcon.Quaternary>
            </Group>
            <Group gap="sm">
                <ActionIcon.DestructivePrimary onClick={onClick}>
                    <Icon />
                </ActionIcon.DestructivePrimary>
                <ActionIcon.DestructiveSecondary onClick={onClick}>
                    <Icon />
                </ActionIcon.DestructiveSecondary>
                <ActionIcon.DestructiveTertiary onClick={onClick}>
                    <Icon />
                </ActionIcon.DestructiveTertiary>
                <ActionIcon.DestructiveQuaternary onClick={onClick}>
                    <Icon />
                </ActionIcon.DestructiveQuaternary>
            </Group>
        </Stack>
    );
};
export default Demo;
