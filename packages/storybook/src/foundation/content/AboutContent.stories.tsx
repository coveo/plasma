import {Header} from '@coveord/plasma-mantine';
import {Anchor, List, Stack, Text} from '@mantine/core';
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
            description='"Content" is the information in the UX working alongside the visual design. It includes any text, images or videos in the Administration Console interface that help shape how users navigate the product.'
        >
            <Stack gap="xl">
                <Stack gap="sm">
                    <Header variant="secondary">In this section</Header>
                    <Stack gap="md">
                        <Stack gap={4}>
                            <Anchor href="/?path=/docs/content-target-audience--docs" fw={700}>
                                Audience
                            </Anchor>
                            <Text>
                                An analysis of the primary audience for Coveo's Administration Console, including two
                                end-user personas. Use this section to understand who you're writing for before you start.
                            </Text>
                        </Stack>
                        <Stack gap={4}>
                            <Anchor href="/?path=/docs/content-voice--docs" fw={700}>
                                Voice
                            </Anchor>
                            <Text>
                                The tone and personality behind all UX content. Covers the distinction between voice and
                                tone, defines Coveo's three core voice qualities, and provides guidance on adapting tone 
                                to different UX contexts.
                            </Text>
                        </Stack>
                        <Stack gap={4}>
                            <Anchor href="/?path=/docs/content-product-vocabulary--docs" fw={700}>
                                Product vocabulary
                            </Anchor>
                            <Text>
                                Terminology standards for Coveo products, features, and concepts. Includes an
                                alphabetical reference list of official product names and a banned terminology list with
                                approved replacements.
                            </Text>
                        </Stack>
                        <Stack gap={4}>
                            <Anchor href="/?path=/docs/content-writing-mechanics--docs" fw={700}>
                                Writing mechanics
                            </Anchor>
                            <Text>
                                Technical guidelines for UX copy. Covers rules for capitalization, punctuation, verb tense, 
                                contractions, syntax, and length with examples.
                            </Text>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack gap="sm">
                    <Header variant="secondary">Who is this for?</Header>
                    <Text>
                        This style guide is intended for anyone who contributes to the writing, editing, or reviewing of
                        UX content.
                    </Text>
                    <Text>This is often:</Text>
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
                                Content guidelines
                            </Text>
                            {': Rules established for content to keep the UX clear, consistent, and on brand.'}
                        </List.Item>
                        <List.Item>
                            <Text component="span" fw={700}>
                                Long-form copy
                            </Text>
                            {
                                ": Extended text that provides context, detail, or instruction in several paragraphs. Long-form doesn't appear in the Administration Console, but is typical for product documentation and Level Up+ content."
                            }
                        </List.Item>
                        <List.Item>
                            <Text component="span" fw={700}>
                                Microcopy
                            </Text>
                            {
                                ': The broader category of short, functional text that guides users at decision points, including UI copy and supporting text like tooltips, placeholder text, error messages, and helper text.'
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
                                UI copy
                            </Text>
                            {': The text rendered as part of a UI component itself, such as button labels, menu items, field labels, and status messages.'}
                        </List.Item>
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
                    </List>
                </Stack>
            </Stack>
        </FoundationWrapper>
    ),
};
