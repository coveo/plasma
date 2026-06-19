import {Alert, Header} from '@coveord/plasma-mantine';
import {Anchor, Image, List, Stack, Table, Text, Title} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {FoundationWrapper} from '../FoundationWrapper.js';

const meta: Meta = {
    title: '@foundation/Content/Voice',
    id: 'content-voice',
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
        <FoundationWrapper title="Voice" description="The tone and personality behind all UX content.">
            <Stack gap="xl">
                <Stack gap="sm">
                    <Header variant="secondary">Understanding voice and tone</Header>
                    <Text>
                        <Text component="span" fw={700}>
                            Voice
                        </Text>
                        {
                            " is constant. It's Coveo's personality, staying consistent no matter where copy appears in the product."
                        }
                    </Text>
                    <Text>
                        <Text component="span" fw={700}>
                            Tone
                        </Text>
                        {', also called '}
                        <Text component="span" fs="italic">
                            tone of voice
                        </Text>
                        {
                            ', is situational. It shifts to match the UI context and emotional state of the user in that moment.'
                        }
                    </Text>
                    <Text>
                        {
                            "Think of it this way—whether you're explaining a complex idea or celebrating an achievement, you're still you. Your voice doesn't change, but you adapt your tone to fit the situation."
                        }
                    </Text>
                    <Text>Examples of applying voice:</Text>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Scenario</Table.Th>
                                <Table.Th>Coveo voice</Table.Th>
                                <Table.Th>Non-Coveo voice</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">A user is deleting a query pipeline association</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">
                                        You're about to delete "association-123". This action can't be undone.
                                    </Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Say goodbye to "association-123"? It'll be gone for good!</Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">A user checks their watchtower for errors</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Nothing to report. If something comes up, it'll appear here.</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm" fs="italic">
                                        Crickets...
                                    </Text>
                                    <Text size="sm">
                                        {' '}
                                        No news is good news. If something breaks, we'll post it right here.
                                    </Text>
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                </Stack>

                <Stack gap="sm">
                    <Header variant="secondary">{"What is Coveo's voice?"}</Header>
                    <Text>
                        {"Coveo's voice can be described with three main qualities present in every piece of copy: "}
                        <Text component="span" fw={700}>
                            clear, human,
                        </Text>
                        {' and '}
                        <Text component="span" fw={700}>
                            helpful.
                        </Text>
                    </Text>

                    <Title order={4}>Clear</Title>
                    <Text>
                        {
                            'When something is complex, clear copy breaks it down. UX copy should sound like a knowledgeable colleague explaining something, not a technical or academic manual.'
                        }
                    </Text>
                    <Text>This looks like:</Text>
                    <List spacing="xs">
                        <List.Item>Using plain words</List.Item>
                        <List.Item>{"Respecting the user's time by keeping it short"}</List.Item>
                        <List.Item>Saying exactly what to do or where to go</List.Item>
                        <List.Item>Making it easy to understand on the first read</List.Item>
                    </List>
                    <Text>Examples:</Text>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Scenario</Table.Th>
                                <Table.Th
                                    style={{
                                        backgroundColor:
                                            'light-dark(var(--mantine-color-green-1), var(--mantine-color-green-8))',
                                    }}
                                >
                                    Do
                                </Table.Th>
                                <Table.Th
                                    style={{
                                        backgroundColor:
                                            'light-dark(var(--mantine-color-red-2), var(--mantine-color-red-8))',
                                    }}
                                >
                                    {"Don't"}
                                </Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">A user hovers over an unfamiliar setting</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Controls how often your source checks for new content.</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Defines the crawling interval for content ingestion.</Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">A user is about to delete in bulk</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">This will remove all selected items. You can't undo this.</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Are you sure you want to proceed with this action?</Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">A user hovers over a disabled button</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Save your changes before sharing.</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">This action is unavailable in the current state.</Text>
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>

                    <Title order={4}>Human</Title>
                    <Text>
                        {
                            'The goal is a natural and intuitive user experience. Copy should be respectful, purposeful, and treat the user like a capable adult. This requires stepping out of the objective or technical mindset and imagining the real person on the other side of the screen.'
                        }
                    </Text>
                    <Text>This looks like:</Text>
                    <List spacing="xs">
                        <List.Item>Speaking directly to the user</List.Item>
                        <List.Item>Using natural language</List.Item>
                        <List.Item>Giving guidance in frustrating UI contexts</List.Item>
                        <List.Item>Prioritizing problem-solving</List.Item>
                        <List.Item>Not embellishing with technical language</List.Item>
                    </List>
                    <Alert.Advice title="Note">
                        {
                            'Conversational doesn\u2019t automatically mean \u201chuman.\u201d AI-generated copy can be human-like without considering the user\u2019s needs and emotional state. The intent is what matters.'
                        }
                    </Alert.Advice>
                    <Text>Examples:</Text>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Scenario</Table.Th>
                                <Table.Th
                                    style={{
                                        backgroundColor:
                                            'light-dark(var(--mantine-color-green-1), var(--mantine-color-green-8))',
                                    }}
                                >
                                    Do
                                </Table.Th>
                                <Table.Th
                                    style={{
                                        backgroundColor:
                                            'light-dark(var(--mantine-color-red-2), var(--mantine-color-red-8))',
                                    }}
                                >
                                    {"Don't"}
                                </Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">{"A user's source fails to rebuild"}</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">
                                        Something went wrong. Check your source settings and try again.
                                    </Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">An error was encountered during the source rebuild operation.</Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">A user leaves a required field empty</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Add a name to continue.</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">This field is required.</Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">{"A user's search returns no results"}</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">No results. Try different keywords or clear your filters.</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">
                                        The query returned no matching results. Modify your search parameters and
                                        resubmit.
                                    </Text>
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>

                    <Title order={4}>Helpful</Title>
                    <Text>
                        {
                            'Helpful copy means focusing on what the user needs to do and why it matters to them. It should answer a question before the user has to ask it, and guide the user forward without being overbearing.'
                        }
                    </Text>
                    <Text>This looks like:</Text>
                    <List spacing="xs">
                        <List.Item>Guiding without overwhelming</List.Item>
                        <List.Item>Explaining what the user can do, not what the system did</List.Item>
                        <List.Item>Giving next steps when something goes wrong</List.Item>
                        <List.Item>Working in harmony with visual design elements</List.Item>
                    </List>
                    <Text>Examples:</Text>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Scenario</Table.Th>
                                <Table.Th
                                    style={{
                                        backgroundColor:
                                            'light-dark(var(--mantine-color-green-1), var(--mantine-color-green-8))',
                                    }}
                                >
                                    Do
                                </Table.Th>
                                <Table.Th
                                    style={{
                                        backgroundColor:
                                            'light-dark(var(--mantine-color-red-2), var(--mantine-color-red-8))',
                                    }}
                                >
                                    {"Don't"}
                                </Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">A source finishes rebuilding</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Your source is ready. Content is now searchable.</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Operation completed successfully.</Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">{"A user's action is blocked by missing permissions"}</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">
                                        You don't have permission to do this. Contact your administrator to request
                                        access.
                                    </Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Access denied.</Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">A user enables a feature for the first time</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">
                                        Query suggestions are on. They will start appearing as users type in your search
                                        box.
                                    </Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Feature enabled.</Text>
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                </Stack>

                <Stack gap="sm">
                    <Header variant="secondary">Choosing the right tone</Header>
                    <Text>
                        {
                            "The tone of UX copy should adapt to the user's current mood, goals, and needs in their journey."
                        }
                    </Text>
                    <Text>
                        {'The following "dimensions" are like the four pillars of tone and can help in understanding.'}
                    </Text>
                    <Image
                        src="/content/dimensions-of-tone.png"
                        alt="Four Dimensions of Tone of Voice: formal to casual, serious to funny, respectful to irreverent, matter-of-fact to enthusiastic"
                        maw={700}
                    />
                    <Text>
                        {
                            "Considering Coveo's product and voice, the tone should never fall on any extreme end. When you're writing copy, aim for the midpoint on all four scales, and based on the context, shift the tone marginally to accommodate."
                        }
                    </Text>
                    <Text>Examples:</Text>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>UX scenarios</Table.Th>
                                <Table.Th>{"User's mood"}</Table.Th>
                                <Table.Th>Tone of voice</Table.Th>
                                <Table.Th>Text</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr>
                                <Table.Td>
                                    <List size="sm" spacing={4}>
                                        <List.Item>Errors and failures</List.Item>
                                        <List.Item>Complex features</List.Item>
                                        <List.Item>Empty states</List.Item>
                                    </List>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Frustrated, impatient, confused</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Slightly left (matter-of-fact and respectful)</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">
                                        No query pipelines found. Try changing or clearing your filters.
                                    </Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <List size="sm" spacing={4}>
                                        <List.Item>Notifications and warnings</List.Item>
                                        <List.Item>Descriptions</List.Item>
                                        <List.Item>Confirmation for actions</List.Item>
                                    </List>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Neutral</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Neutral</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">
                                        You're about to delete "pipeline-123". This action can't be undone.
                                    </Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <List size="sm" spacing={4}>
                                        <List.Item>Completed setups</List.Item>
                                        <List.Item>Upgrades</List.Item>
                                    </List>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Pleased, encouraged</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Slightly right (enthusiastic and casual)</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Success! Your query pipeline "pipeline-123" has been saved.</Text>
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                    <Alert.Warning title="Important">
                        {'See the guidelines for '}
                        <Anchor href="/?path=/docs/content-writing-mechanics--docs">writing mechanics</Anchor>.
                    </Alert.Warning>
                </Stack>
            </Stack>
        </FoundationWrapper>
    ),
};
