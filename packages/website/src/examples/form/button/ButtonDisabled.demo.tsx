import {Button, Group, Stack} from '@coveord/plasma-mantine';

const Demo = () => {
    const onClick = () => alert("This won't work because the button is disabled");
    return (
        <Stack gap="sm">
            <Group gap="sm">
                <Button.Primary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    Button
                </Button.Primary>
                <Button.Secondary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    Button
                </Button.Secondary>
                <Button.Tertiary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    Button
                </Button.Tertiary>
                <Button.Quaternary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    Button
                </Button.Quaternary>
            </Group>
            <Group gap="sm">
                <Button.DestructivePrimary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    Button
                </Button.DestructivePrimary>
                <Button.DestructiveSecondary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    Button
                </Button.DestructiveSecondary>
                <Button.DestructiveTertiary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    Button
                </Button.DestructiveTertiary>
                <Button.DestructiveQuaternary disabled disabledTooltip="This button is disabled" onClick={onClick}>
                    Button
                </Button.DestructiveQuaternary>
            </Group>
        </Stack>
    );
};
export default Demo;
