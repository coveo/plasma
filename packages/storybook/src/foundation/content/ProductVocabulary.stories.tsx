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
            description="Terminology standards for Coveo and third-party products, features, and concepts."
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
                        <List.Item>Action Bar</List.Item>
                        <List.Item>Activity Browser</List.Item>
                        <List.Item>Administration Console</List.Item>
                        <List.Item>Amazon S3</List.Item>
                        <List.Item>Coveo Analytics</List.Item>
                        <List.Item>Anthropic</List.Item>
                        <List.Item>Apex</List.Item>
                        <List.Item>AppDirect</List.Item>
                        <List.Item>Atlassian</List.Item>
                        <List.Item>Coveo Atomic library</List.Item>
                        <List.Item>Aura</List.Item>
                        <List.Item>Automatic Relevance Tuning (ART)</List.Item>
                        <List.Item>Box Business</List.Item>
                        <List.Item>Brightcove</List.Item>
                        <List.Item>Case Classification (CC)</List.Item>
                        <List.Item>Catalog Semantic Encoder (CSE)</List.Item>
                        <List.Item>Client ID</List.Item>
                        <List.Item>Coveo for Commerce</List.Item>
                        <List.Item>Confluence Cloud</List.Item>
                        <List.Item>Confluence Data Center</List.Item>
                        <List.Item>Confluence Server</List.Item>
                        <List.Item>Content Browser</List.Item>
                        <List.Item>Content Recommendation model</List.Item>
                        <List.Item>Content Recommendations (CR)</List.Item>
                        <List.Item>Contentful</List.Item>
                        <List.Item>Coveo Crawling Module</List.Item>
                        <List.Item>Coveo Customer Success</List.Item>
                    </List>

                    <Title order={4}>D, E, F</Title>
                    <List spacing="xs">
                        <List.Item>Databricks</List.Item>
                        <List.Item>Dropbox</List.Item>
                        <List.Item>Dynamic Navigation Experience (DNE)</List.Item>
                        <List.Item>Coveo on Elasticsearch</List.Item>
                        <List.Item>Elasticsearch</List.Item>
                        <List.Item>Email Security Provider</List.Item>
                        <List.Item>Event Protocol (EP)</List.Item>
                        <List.Item>Coveo Explorer</List.Item>
                        <List.Item>Figma</List.Item>
                    </List>

                    <Title order={4}>G, H, I</Title>
                    <List spacing="xs">
                        <List.Item>Genesys</List.Item>
                        <List.Item>GitHub</List.Item>
                        <List.Item>Gmail</List.Item>
                        <List.Item>Google Drive</List.Item>
                        <List.Item>GraphQL</List.Item>
                        <List.Item>Coveo Headless library</List.Item>
                        <List.Item>Hosted Insight Panel</List.Item>
                        <List.Item>Hosted Search Page</List.Item>
                        <List.Item>In-Product Experience (IPX)</List.Item>
                        <List.Item>Insight Panel</List.Item>
                        <List.Item>Intelligent Term Detection (ITD)</List.Item>
                        <List.Item>Intent-Aware Product Ranking (IAPR)</List.Item>
                        <List.Item>Interface Editor</List.Item>
                    </List>

                    <Title order={4}>J, K, L</Title>
                    <List spacing="xs">
                        <List.Item>JavaScript</List.Item>
                        <List.Item>Coveo JavaScript Search Framework</List.Item>
                        <List.Item>Jira Software Cloud</List.Item>
                        <List.Item>Jira Software Data Center</List.Item>
                        <List.Item>Khoros</List.Item>
                        <List.Item>Knowledge Hub</List.Item>
                        <List.Item>Lightning Web Components (LWC)</List.Item>
                        <List.Item>Listing Page Optimizer (LPO)</List.Item>
                        <List.Item>Log Browser</List.Item>
                    </List>

                    <Title order={4}>M, N, O</Title>
                    <List spacing="xs">
                        <List.Item>Coveo Machine Learning</List.Item>
                        <List.Item>Mailchimp</List.Item>
                        <List.Item>Coveo Merchandising Hub (CMH)</List.Item>
                        <List.Item>Microsoft Dynamics 365</List.Item>
                        <List.Item>Coveo for Microsoft Dynamics 365</List.Item>
                        <List.Item>Node Package Manager</List.Item>
                        <List.Item>Coveo On-Premises Crawling Module</List.Item>
                        <List.Item>OneDrive for Business</List.Item>
                        <List.Item>OpenText Content Server</List.Item>
                        <List.Item>Optimizely</List.Item>
                    </List>

                    <Title order={4}>P, Q, R</Title>
                    <List spacing="xs">
                        <List.Item>Pendo</List.Item>
                        <List.Item>Coveo Personalization-as-you-go</List.Item>
                        <List.Item>Coveo Platform</List.Item>
                        <List.Item>PowerPoint</List.Item>
                        <List.Item>PowerShell</List.Item>
                        <List.Item>Predictive Query Suggestions (PQS)</List.Item>
                        <List.Item>Product Recommendation model</List.Item>
                        <List.Item>Product Recommendations (PR)</List.Item>
                        <List.Item>Coveo Professional Services</List.Item>
                        <List.Item>Coveo Quantic library</List.Item>
                        <List.Item>Coveo QuickView</List.Item>
                        <List.Item>Query Suggestion model</List.Item>
                        <List.Item>Query Suggestions (QS)</List.Item>
                        <List.Item>Relevance Generative Answering (RGA)</List.Item>
                        <List.Item>Coveo Relay library</List.Item>
                        <List.Item>REST API</List.Item>
                    </List>

                    <Title order={4}>S, T, U</Title>
                    <List spacing="xs">
                        <List.Item>Salesforce</List.Item>
                        <List.Item>Salesforce B2B Commerce</List.Item>
                        <List.Item>Salesforce Insight Panel</List.Item>
                        <List.Item>Coveo for Salesforce</List.Item>
                        <List.Item>SAP Commerce</List.Item>
                        <List.Item>Semantic Encoder (SE)</List.Item>
                        <List.Item>ServiceNow</List.Item>
                        <List.Item>Session-Based Product Recommendation model</List.Item>
                        <List.Item>Session-Based Product Recommendations (SBPR)</List.Item>
                        <List.Item>SharePoint</List.Item>
                        <List.Item>SharePoint Online</List.Item>
                        <List.Item>Coveo for Shopify</List.Item>
                        <List.Item>Shopify</List.Item>
                        <List.Item>Sitecore</List.Item>
                        <List.Item>Coveo for Sitecore</List.Item>
                        <List.Item>Smart Snippet model</List.Item>
                        <List.Item>Smart Snippets</List.Item>
                        <List.Item>Splunk</List.Item>
                        <List.Item>Coveo Support</List.Item>
                        <List.Item>Symantec</List.Item>
                        <List.Item>Tealium</List.Item>
                    </List>

                    <Title order={4}>V, W, X, Y, Z</Title>
                    <List spacing="xs">
                        <List.Item>Visualforce</List.Item>
                        <List.Item>YouTube</List.Item>
                        <List.Item>Zendesk</List.Item>
                        <List.Item>Coveo for Zendesk</List.Item>
                    </List>
                </Stack>

                <Stack gap="sm">
                    <Header variant="secondary">Banned terminology</Header>
                    <Text>
                        Use this list to see which words you can't use when writing for the UI. Swap them for their
                        correct counterpart instead.
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
