import {Alert, Header} from '@coveord/plasma-mantine';
import {List, Stack, Table, Text, Title} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {FoundationWrapper} from '../FoundationWrapper.js';

const meta: Meta = {
    title: '@foundation/Content/Product Vocabulary',
    id: 'content-product-vocabulary',
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
            title="Product Names & Vocabulary"
            description="Terminology standards for Coveo products, features, and concepts."
        >
            <Stack gap="xl">
                <Alert.Advice title="Note">
                    Vocabulary isn't standardized across all Coveo sources or documentation. Always refer to this list
                    when writing for the UI.
                </Alert.Advice>

                <Stack gap="sm">
                    <Header variant="secondary">Vocabulary</Header>
                    <Text>
                        Use this list to see the acceptable spelling, capitalization, and punctuation for Coveo product
                        terminology in the UI.
                    </Text>
                    <Text>
                        The vocabulary is listed in alphabetical order. However, terms starting with the words{' '}
                        <Text component="span" fs="italic">
                            Coveo
                        </Text>
                        ,{' '}
                        <Text component="span" fs="italic">
                            for
                        </Text>
                        , or{' '}
                        <Text component="span" fs="italic">
                            on
                        </Text>{' '}
                        are alphabetized by the next distinguishing word (company, feature, or product name). For
                        example,{' '}
                        <Text component="span" fs="italic">
                            Coveo for Salesforce
                        </Text>{' '}
                        is listed under S for{' '}
                        <Text component="span" fs="italic">
                            Salesforce
                        </Text>
                        .
                    </Text>

                    <Title order={4}>A, B, C</Title>
                    <List spacing="xs">
                        <List.Item>Administration Console</List.Item>
                        <List.Item>Coveo Customer Success</List.Item>
                    </List>

                    <Title order={4}>D, E, F</Title>
                    <List spacing="xs">
                        <List.Item>Coveo on Elasticsearch</List.Item>
                    </List>

                    <Title order={4}>G, H, I</Title>

                    <Title order={4}>J, K, L, M</Title>
                    <List spacing="xs">
                        <List.Item>Coveo JavaScript Search Framework</List.Item>
                        <List.Item>Coveo Machine Learning</List.Item>
                        <List.Item>Coveo for Microsoft Dynamics 365</List.Item>
                    </List>

                    <Title order={4}>N, O, P</Title>
                    <List spacing="xs">
                        <List.Item>Coveo On-Premises Crawling Module</List.Item>
                        <List.Item>Coveo Platform</List.Item>
                        <List.Item>Coveo Professional Services</List.Item>
                    </List>

                    <Title order={4}>Q, R, S</Title>
                    <List spacing="xs">
                        <List.Item>Coveo QuickView</List.Item>
                        <List.Item>Coveo for Salesforce</List.Item>
                        <List.Item>Coveo for Shopify</List.Item>
                        <List.Item>Coveo for Sitecore</List.Item>
                        <List.Item>Coveo Support</List.Item>
                    </List>

                    <Title order={4}>T, U, V</Title>
                    <List spacing="xs">
                        <List.Item>Coveo Usage Analytics</List.Item>
                    </List>

                    <Title order={4}>W, X, Y, Z</Title>
                </Stack>

                <Stack gap="sm">
                    <Header variant="secondary">Banned terminology</Header>
                    <Text>
                        Use this list to see which words you can't use when writing for the UI. Swap them for their
                        proper counterpart instead.
                    </Text>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Banned term</Table.Th>
                                <Table.Th>Replace with</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {[
                                ['Auth', 'Authentication'],
                                ['Admin console, Admin UI, Admin portal', 'Administration Console'],
                                ['c4sf, cfsf', 'Coveo for Salesforce'],
                                ['c4sc, cfsc', 'Coveo for Sitecore'],
                                ['Custom login', 'Custom authentication'],
                                ['HIP', 'Hosted Insight Panel'],
                                ['HSP', 'Hosted Search Page'],
                                ['KB content', 'Knowledge Base content'],
                                ['Log in, Log out', 'Sign in, Sign out'],
                                ['Meta data', 'Metadata'],
                                ['NPM', 'Node Package Manager'],
                                ['Pop up, Popup, Pop-up', 'Modal'],
                                ['UID, User ID', 'Client ID'],
                            ].map(([banned, replace]) => (
                                <Table.Tr key={banned}>
                                    <Table.Td>
                                        <Text size="sm">{banned}</Text>
                                    </Table.Td>
                                    <Table.Td>
                                        <Text size="sm">{replace}</Text>
                                    </Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </Stack>
            </Stack>
        </FoundationWrapper>
    ),
};
