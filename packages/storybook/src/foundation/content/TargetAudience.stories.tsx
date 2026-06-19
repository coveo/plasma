import {Header} from '@coveord/plasma-mantine';
import {Image, List, Stack, Table, Text, Title} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {FoundationWrapper} from '../FoundationWrapper.js';

const meta: Meta = {
    title: '@foundation/Content/Audience',
    id: 'content-target-audience',
    tags: ['!dev'],
    parameters: {
        layout: 'padded',
        controls: {disable: true},
    },
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
    render: () => (
        <FoundationWrapper
            title="Target Audience"
            description="An analysis of the content's primary audience with end-user personas."
        >
            <Stack gap="xl">
                <Text>
                    Coveo end users can be technical or non-technical—the goal is to tailor UX writing to the least
                    experienced members of the audience. Copy should make the next step obvious, use plain language, and
                    help all users act without having to learn the product first.
                </Text>
                <Stack gap="md">
                    <Header variant="secondary">User personas</Header>

                    <Stack gap="sm">
                        <Title order={4}>Nadia, the Technical Platform Admin</Title>
                        <Image
                            src="/content/nadia-user-persona.png"
                            alt="Corporate headshot of woman with glasses"
                            w={400}
                        />
                        <Text fs="italic">"Just tell me what broke, where, and what to do next."</Text>
                        <Table withTableBorder withColumnBorders layout="auto">
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>Role and responsibilities</Table.Th>
                                    <Table.Th>Skills</Table.Th>
                                    <Table.Th>Struggles</Table.Th>
                                    <Table.Th>Needs and wants</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                <Table.Tr>
                                    <Table.Td>
                                        <List size="sm" spacing={4}>
                                            <List.Item>
                                                Owns implementation setup and ongoing console maintenance
                                            </List.Item>
                                            <List.Item>Configures, validates, and troubleshoots the platform</List.Item>
                                            <List.Item>
                                                Works across indexing, permissions, and operational fixes
                                            </List.Item>
                                        </List>
                                    </Table.Td>
                                    <Table.Td>
                                        <List size="sm" spacing={4}>
                                            <List.Item>Technically comfortable</List.Item>
                                            <List.Item>Can follow complex workflows</List.Item>
                                            <List.Item>Strong at diagnosing issues and keeping things moving</List.Item>
                                        </List>
                                    </Table.Td>
                                    <Table.Td>
                                        <List size="sm" spacing={4}>
                                            <List.Item>Needs more context to interpret errors and outcomes</List.Item>
                                            <List.Item>
                                                Friction from permissions and unclear steps slows her down
                                            </List.Item>
                                            <List.Item>Finds the UI and workflows harder than they should be</List.Item>
                                        </List>
                                    </Table.Td>
                                    <Table.Td>
                                        <List size="sm" spacing={4}>
                                            <List.Item>Helpful and scannable copy</List.Item>
                                            <List.Item>Faster navigation</List.Item>
                                            <List.Item>Clear next steps for errors</List.Item>
                                            <List.Item>The ability to self-serve without support</List.Item>
                                        </List>
                                    </Table.Td>
                                </Table.Tr>
                            </Table.Tbody>
                        </Table>
                    </Stack>

                    <Stack gap="sm">
                        <Title order={4}>Louise, the Business Operations Owner</Title>
                        <Image
                            src="/content/louise-user-persona.png"
                            alt="Corporate headshot of woman in blazer"
                            w={400}
                        />
                        <Text fs="italic">
                            "I need to know whether this is worthwhile without becoming a platform expert."
                        </Text>
                        <Table withTableBorder withColumnBorders layout="auto">
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>Role and responsibilities</Table.Th>
                                    <Table.Th>Skills</Table.Th>
                                    <Table.Th>Struggles</Table.Th>
                                    <Table.Th>Needs and wants</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                <Table.Tr>
                                    <Table.Td>
                                        <List size="sm" spacing={4}>
                                            <List.Item>
                                                Coordinates stakeholders during buying, implementation, and ongoing
                                                operations
                                            </List.Item>
                                            <List.Item>Tracks adoption, value, and ROI</List.Item>
                                            <List.Item>
                                                Uses the console to check progress, status, and business impact
                                            </List.Item>
                                        </List>
                                    </Table.Td>
                                    <Table.Td>
                                        <List size="sm" spacing={4}>
                                            <List.Item>
                                                Comfortable with dashboards and high-level decision-making
                                            </List.Item>
                                            <List.Item>Cross-functional communicator</List.Item>
                                            <List.Item>Good at prioritizing and translating business goals</List.Item>
                                        </List>
                                    </Table.Td>
                                    <Table.Td>
                                        <List size="sm" spacing={4}>
                                            <List.Item>Technical language and dense screens are intimidating</List.Item>
                                            <List.Item>
                                                Hard to see whether the platform is healthy or delivering value
                                            </List.Item>
                                        </List>
                                    </Table.Td>
                                    <Table.Td>
                                        <List size="sm" spacing={4}>
                                            <List.Item>Plain-language copy</List.Item>
                                            <List.Item>Knowing exactly where to find what she needs</List.Item>
                                            <List.Item>Clear status and value signals</List.Item>
                                        </List>
                                    </Table.Td>
                                </Table.Tr>
                            </Table.Tbody>
                        </Table>
                    </Stack>
                </Stack>
            </Stack>
        </FoundationWrapper>
    ),
};
