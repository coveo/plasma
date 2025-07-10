import {ActionIcon, Group, Stack} from '@coveord/plasma-mantine';
import {IconClipboardCheck} from '@coveord/plasma-react-icons';

const Icon = () => <IconClipboardCheck size={20} />;

const Demo = () => {
    const onClick = () => alert("This won't work because the button is disabled");
    return (
        <Stack gap="sm">
            <Group gap="sm">
                <ActionIcon.Primary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    <Icon />
                </ActionIcon.Primary>
                <ActionIcon.Secondary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    <Icon />
                </ActionIcon.Secondary>
                <ActionIcon.Tertiary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    <Icon />
                </ActionIcon.Tertiary>
                <ActionIcon.Quaternary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    <Icon />
                </ActionIcon.Quaternary>
            </Group>
            <Group gap="sm">
                <ActionIcon.DestructivePrimary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    <Icon />
                </ActionIcon.DestructivePrimary>
                <ActionIcon.DestructiveSecondary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    <Icon />
                </ActionIcon.DestructiveSecondary>
                <ActionIcon.DestructiveTertiary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    <Icon />
                </ActionIcon.DestructiveTertiary>
                <ActionIcon.DestructiveQuaternary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    <Icon />
                </ActionIcon.DestructiveQuaternary>
            </Group>
        </Stack>
    );
};
export default Demo;
