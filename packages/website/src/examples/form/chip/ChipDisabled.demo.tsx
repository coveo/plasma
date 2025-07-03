import {Chip, Group, Stack, Text} from '@coveord/plasma-mantine';
const Demo = () => (
    <Stack gap="sm">
        <Group gap="sm">
            <Chip disabled>
                <Text>Chip</Text>
            </Chip>
            <Chip checked disabled>
                <Text>Chip</Text>
            </Chip>
        </Group>
    </Stack>
);

export default Demo;
