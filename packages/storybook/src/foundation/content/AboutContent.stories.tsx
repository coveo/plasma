import {Header} from '@coveord/plasma-mantine';
import {List, Stack, Text} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {FoundationWrapper} from '../FoundationWrapper.js';

const meta: Meta = {
    title: '@foundation/Content/About',
    id: 'content-about',
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
            title="About Content"
            description='"Content" is the information in the UX, like text, that works alongside the visual design. It helps shape how users understand and navigate the product.'
        >
            <Stack gap="xl">
                <Stack gap="sm">
                    <Header variant="secondary">In this style guide</Header>
                    <List spacing="xs">
                        <List.Item>
                            <Text component="span" fw={700}>
                                Target audience
                            </Text>
                            {': An analysis of the primary audience, including two end-user personas.'}
                        </List.Item>
                        <List.Item>
                            <Text component="span" fw={700}>
                                Voice
                            </Text>
                            {': The tone and personality behind all UX content.'}
                        </List.Item>
                        <List.Item>
                            <Text component="span" fw={700}>
                                Product vocabulary
                            </Text>
                            {': Terminology standards for Coveo products, features, and concepts.'}
                        </List.Item>
                        <List.Item>
                            <Text component="span" fw={700}>
                                Writing mechanics
                            </Text>
                            {': Grammar, structure, punctuation, spelling, and length guidelines.'}
                        </List.Item>
                    </List>
                </Stack>

                <Stack gap="sm">
                    <Header variant="secondary">Who is this for?</Header>
                    <Text>
                        This style guide is intended for anyone who contributes to the writing, editing, or reviewing of
                        UX content.
                    </Text>
                    <Text>This is most often:</Text>
                    <List spacing="xs">
                        <List.Item>Designers</List.Item>
                        <List.Item>Developers</List.Item>
                        <List.Item>Technical writers</List.Item>
                    </List>
                </Stack>

                <Stack gap="sm">
                    <Header variant="secondary">Glossary</Header>
                    <List spacing="md">
                        <List.Item>
                            <Text component="span" fw={700}>
                                UX copy
                            </Text>
                            {': Also called '}
                            <Text component="span" fs="italic">
                                UX writing
                            </Text>
                            {'. The language within an interface that guides users throughout their whole experience.'}
                        </List.Item>
                        <List.Item>
                            <Text component="span" fw={700}>
                                UI copy
                            </Text>
                            {': The text attached to UI components, such as labels, buttons, and status messages.'}
                        </List.Item>
                        <List.Item>
                            <Text component="span" fw={700}>
                                Content guidelines
                            </Text>
                            {': Rules established for content to keep the UX clear, consistent, and on brand.'}
                        </List.Item>
                        <List.Item>
                            <Text component="span" fw={700}>
                                Content strategy
                            </Text>
                            {
                                ": The planning, creation, and governance of content to meet user needs and business goals. It can define what content exists, why it exists, and how it's maintained over time."
                            }
                        </List.Item>
                        <List.Item>
                            <Text component="span" fw={700}>
                                Microcopy
                            </Text>
                            {
                                ': Concise, functional text that comes before or after user interactions. Many types of UI text are examples of microcopy, including button labels, links, error messages, tooltips, and placeholder text.'
                            }
                        </List.Item>
                        <List.Item>
                            <Text component="span" fw={700}>
                                Short-form copy
                            </Text>
                            {
                                ': Brief, scannable text designed to communicate a single idea and reduce confusion. Short-form can be anywhere from a few words to a couple of paragraphs. This includes page titles, descriptive text for panels and pages, confirmation text, and banner text.'
                            }
                        </List.Item>
                        <List.Item>
                            <Text component="span" fw={700}>
                                Long-form copy
                            </Text>
                            {
                                ": Extended text that provides context, detail, or instruction in several paragraphs. Long-form doesn't appear in the Administration Console, but is typical for Product Documentation and Level Up+ content."
                            }
                        </List.Item>
                    </List>
                </Stack>
            </Stack>
        </FoundationWrapper>
    ),
};
