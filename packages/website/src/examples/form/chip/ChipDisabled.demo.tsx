import {Chip, Group, Stack, Text, Tooltip} from '@coveord/plasma-mantine';
const Demo = () => (
    <Stack gap="sm">
        <Group gap="sm">
            <Tooltip label="Disabled chip">
                <Chip disabled>
                    <Text>Chip</Text>
                </Chip>
            </Tooltip>
            <Chip checked disabled>
                <Text>Chip</Text>
            </Chip>
        </Group>
    </Stack>
);

export default Demo;
