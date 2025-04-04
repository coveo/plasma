import {Anchor, Button, Group, Header, Stack, Text} from '@coveord/plasma-mantine';

const Demo = () => (
    <Header description="The header description" borderBottom>
        <Header.Breadcrumbs>
            <Anchor>One</Anchor>
            <Anchor>Two</Anchor>
            <Anchor>Three</Anchor>
        </Header.Breadcrumbs>
        Title
        <Header.DocAnchor href="https://about:blank" label="Tooltip text" />
        <Header.Right wrap="nowrap">
            <Stack gap="sm" bg="gray.3" p="sm">
                <Text>Some content</Text>
                <Text>Some more content</Text>
            </Stack>
            <Group gap="sm">
                <Button>Primary</Button>
                <Button variant="outline">Secondary</Button>
            </Group>
        </Header.Right>
    </Header>
);
export default Demo;
