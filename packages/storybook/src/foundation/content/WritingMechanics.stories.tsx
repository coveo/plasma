import {Alert, Header} from '@coveord/plasma-mantine';
import {Anchor, List, Stack, Table, Text, Title} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {FoundationWrapper} from '../FoundationWrapper.js';

const meta: Meta = {
    title: '@foundation/Content/Writing Mechanics',
    id: 'content-writing-mechanics',
    tags: ['!dev'],
    parameters: {
        layout: 'padded',
        controls: {disable: true},
    },
};

export default meta;
type Story = StoryObj;

const DoTable = ({rows}: {rows: Array<[string, string]>}) => (
    <Table withTableBorder withColumnBorders layout="auto">
        <Table.Thead>
            <Table.Tr>
                <Table.Th
                    style={{backgroundColor: 'light-dark(var(--mantine-color-green-1), var(--mantine-color-green-8))'}}
                >
                    Do
                </Table.Th>
                <Table.Th
                    style={{backgroundColor: 'light-dark(var(--mantine-color-red-2), var(--mantine-color-red-8))'}}
                >
                    {"Don't"}
                </Table.Th>
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {rows.map(([doText, dontText]) => (
                <Table.Tr key={doText}>
                    <Table.Td>
                        <Text size="sm">{doText}</Text>
                    </Table.Td>
                    <Table.Td>
                        <Text size="sm">{dontText}</Text>
                    </Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
    </Table>
);

export const Overview: Story = {
    render: () => (
        <FoundationWrapper
            title="Writing Mechanics"
            description="The technical rules behind UX copy. Consult this page when you need to verify grammar, capitalization, punctuation, or syntax. It covers the mechanics that keep text consistent and readable across the entire product."
        >
            <Stack gap="xl">
                <Stack gap="sm">
                    <Header variant="secondary">In this page</Header>
                    <List spacing="xs">
                        <List.Item>
                            <Text fw={700}>Vocabulary</Text> — Coveo-specific terms, acronyms & initialisms, third-party
                            terms
                        </List.Item>
                        <List.Item>
                            <Text fw={700}>Capitalization</Text> — Sentence case, title case, when to capitalize,
                            referring to UI elements
                        </List.Item>
                        <List.Item>
                            <Text fw={700}>Punctuation</Text> — Periods, colons, exclamation marks, apostrophes,
                            spacing, ellipses
                        </List.Item>
                        <List.Item>
                            <Text fw={700}>Grammar</Text> — Voice, tense, person, contractions, sentence length
                        </List.Item>
                        <List.Item>
                            <Text fw={700}>Syntax & structure</Text> — Frontloading, instructions, plain language,
                            reducing jargon
                        </List.Item>
                    </List>
                </Stack>

                {/* VOCABULARY */}
                <Stack gap="sm">
                    <Header variant="secondary">Vocabulary</Header>
                    <Text>Guidelines:</Text>
                    <List spacing="xs">
                        <List.Item>{"Only use shortened forms when they're more common than the full term"}</List.Item>
                        <List.Item>{"Don't include customer jargon that isn't an official Coveo term"}</List.Item>
                    </List>

                    <Title order={4}>Coveo-specific terms</Title>
                    <Text>
                        Each time you reference an official Coveo product, feature, or function, follow the spelling and
                        capitalization defined in the{' '}
                        <Anchor href="/?path=/docs/content-product-vocabulary--docs">list of product names</Anchor>.
                    </Text>

                    <Title order={4}>Acronyms & initialisms</Title>
                    <Text>
                        Acronyms and initialisms are essentially the same concept, other than the way they're read
                        aloud. Acronyms are read as one word (for example, "SaaS" or "NASA"), while initialisms are read
                        letter by letter (for example, "VPN" or "API").
                    </Text>
                    <Text>Guidelines:</Text>
                    <List spacing="xs">
                        <List.Item>Use all capitals</List.Item>
                        <List.Item>{"Don't use periods, hyphens, or spaces"}</List.Item>
                        <List.Item>{"Don't use italics or quotation marks"}</List.Item>
                    </List>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
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
                                    <Text size="sm">RGA</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">rga</Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">RGA</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">R.G.A.</Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">RGA</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm" fs="italic">
                                        RGA
                                    </Text>
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>

                    <Title order={4}>Third-party terms</Title>
                    <Text>
                        When using names, words, or acronyms not specific to Coveo, always use the official or original
                        spelling, capitalization, and formatting. Do this even if it contradicts a rule listed in
                        Coveo's content guidelines.
                    </Text>
                    <Text>Examples:</Text>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Vocabulary</Table.Th>
                                <Table.Th>Formatting</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">Universal acronyms and abbreviations</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">a.m., etc., mL, Aug</Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">Industry-wide terminology</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">SaaS, WiFi, A/B test</Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">Third-party products, objects, and fields</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">sObject, PnP</Text>
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                </Stack>

                {/* CAPITALIZATION */}
                <Stack gap="sm">
                    <Header variant="secondary">Capitalization</Header>

                    <Title order={4}>Sentence case</Title>
                    <Text>
                        {
                            "Sentence case means only the first word and proper nouns are capitalized. It's the default for all UI text: headings, labels, buttons, descriptions, tooltips, and placeholder text."
                        }
                    </Text>
                    <DoTable rows={[['Save changes', 'Save Changes']]} />

                    <Title order={4}>Title case</Title>
                    <Text>
                        Title case means every major word is capitalized: nouns, verbs, adjectives, and adverbs.
                        Articles (a, an, the), coordinating conjunctions (and, but, or), and short prepositions (in, on,
                        of) are lowercase unless they're the first word.
                    </Text>

                    <Title order={4}>When to capitalize</Title>
                    <Text fw={700}>Always capitalize:</Text>
                    <List spacing="xs">
                        <List.Item>The first word of a sentence, label, or heading</List.Item>
                        <List.Item>Proper nouns (people, places, or company names)</List.Item>
                        <List.Item>Official Coveo product and feature names</List.Item>
                        <List.Item>
                            {
                                'Third-party product or company names that use capitalization, even non-standard ones (for example, SharePoint, sObject, GitHub)'
                            }
                        </List.Item>
                    </List>
                    <Text fw={700}>Never capitalize:</Text>
                    <List spacing="xs">
                        <List.Item>{`Common nouns used as general terms (for example, "source," "pipeline," "user")`}</List.Item>
                        <List.Item>
                            {"Feature or UI element names that aren't trademarked or sold separately"}
                        </List.Item>
                        <List.Item>
                            Words for emphasis (use{' '}
                            <Text component="span" fw={700}>
                                bold
                            </Text>{' '}
                            or{' '}
                            <Text component="span" fs="italic">
                                italic
                            </Text>{' '}
                            text instead)
                        </List.Item>
                    </List>

                    <Title order={4}>Referring to UI elements in copy</Title>
                    <Text>Guidelines:</Text>
                    <List spacing="xs">
                        <List.Item>
                            Match the capitalization of any UI element exactly as it appears in the UI
                        </List.Item>
                        <List.Item>{"Don't use quotation marks"}</List.Item>
                        <List.Item>
                            Use{' '}
                            <Text component="span" fw={700}>
                                bold
                            </Text>{' '}
                            formatting for the element name
                        </List.Item>
                    </List>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
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
                                    <Text size="sm">
                                        Select{' '}
                                        <Text component="span" fw={700}>
                                            Save
                                        </Text>
                                    </Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Select "save"</Text>
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                </Stack>

                {/* PUNCTUATION */}
                <Stack gap="sm">
                    <Header variant="secondary">Punctuation</Header>

                    <Title order={4}>Periods</Title>
                    <Text>
                        In writing, sentences are either full or fragment. A full sentence is grammatically complete on
                        its own. A fragment isn't, but it's often the better choice for concise UI text.
                    </Text>
                    <Text>Add periods after full sentences, but not after fragments.</Text>
                    <Text fw={700}>Add a period after:</Text>
                    <List spacing="xs">
                        <List.Item>Body copy</List.Item>
                        <List.Item>Descriptions</List.Item>
                        <List.Item>Tooltips</List.Item>
                        <List.Item>Help text</List.Item>
                        <List.Item>Toast notifications, only if the message is a full sentence</List.Item>
                    </List>
                    <Text fw={700}>No period after:</Text>
                    <List spacing="xs">
                        <List.Item>Labels</List.Item>
                        <List.Item>Headings</List.Item>
                        <List.Item>Button text</List.Item>
                        <List.Item>Standalone UI strings</List.Item>
                    </List>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Type</Table.Th>
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
                                    <Text size="sm">Full sentence</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Your changes have been saved.</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Your changes have been saved</Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">Fragment sentence</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Changes saved</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Changes saved.</Text>
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>

                    <Title order={4}>Colons</Title>
                    <Text>Guidelines:</Text>
                    <List spacing="xs">
                        <List.Item>{"Don't use colons in titles"}</List.Item>
                        <List.Item>
                            {
                                "Don't use colons in labels. The UI layout provides the visual relationship between the label and its field."
                            }
                        </List.Item>
                    </List>
                    <DoTable rows={[['Email [input field]', 'Email: [input field]']]} />

                    <Title order={4}>Exclamation marks</Title>
                    <Text>Guidelines:</Text>
                    <List spacing="xs">
                        <List.Item>Use exclamation marks (!) sparingly</List.Item>
                        <List.Item>Limit it to one per context (a single page, modal, or notification)</List.Item>
                        <List.Item>Only use them for positive moments where enthusiasm is appropriate</List.Item>
                        <List.Item>
                            Never use them for neutral states, errors, warnings, or any context where the user could be
                            frustrated or confused
                        </List.Item>
                        <List.Item>{"Don't use them for instructional or CTA copy"}</List.Item>
                    </List>
                    <DoTable rows={[['Success! Your query pipeline has been created.', 'An error occurred!']]} />

                    <Title order={4}>Apostrophes</Title>
                    <Text>Avoid using the possessive form for objects and UI elements. Use "of" phrasing instead.</Text>
                    <DoTable rows={[['On the left side of the screen', "On the screen's left side"]]} />

                    <Title order={4}>Spacing</Title>
                    <Text>
                        Never add a space before a punctuation mark. This is a common mistake because French punctuation
                        standards require a space before exclamation and question marks.
                    </Text>
                    <DoTable rows={[['Are you sure?', 'Are you sure ?']]} />

                    <Title order={4}>Ellipses</Title>
                    <Text>Guidelines:</Text>
                    <List spacing="xs">
                        <List.Item>
                            Use an ellipsis (...) only to indicate that a process is in progress or that content is
                            truncated
                        </List.Item>
                        <List.Item>Never use ellipses to trail off in instructions or labels</List.Item>
                    </List>
                    <DoTable rows={[['Loading...', 'You can configure this later...']]} />
                </Stack>

                {/* GRAMMAR */}
                <Stack gap="sm">
                    <Header variant="secondary">Grammar</Header>

                    <Title order={4}>Voice</Title>
                    <Text>
                        Use active voice as much as possible. Active voice is clearer, more direct, and easier to scan.
                    </Text>
                    <Text>
                        Use passive voice only when the action shouldn't be attributed to a person or an object. This is
                        common in confirmations because attributing the action to the user often feels awkward and
                        inaccurate.
                    </Text>
                    <DoTable
                        rows={[
                            ['Your query pipeline has been saved.', 'You saved your query pipeline.'],
                            ['The source could not be found.', "We couldn't find the source."],
                        ]}
                    />

                    <Title order={4}>Tense</Title>
                    <Text>
                        Use present tense for instructions, labels, and questions. Use past tense for confirmations.
                    </Text>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Context</Table.Th>
                                <Table.Th>Tense</Table.Th>
                                <Table.Th>Example</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">Instructions</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Present</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Select a file to upload.</Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">Questions</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Present</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Are you sure you want to delete this?</Text>
                                </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>
                                    <Text size="sm">Confirmations</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Past</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">Your changes have been saved.</Text>
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>

                    <Title order={4}>Person</Title>
                    <Text>
                        Speak directly to the user by addressing them as "you." Don't use "we" or refer to Coveo as a
                        person performing actions—when the subject can be omitted entirely, omit it. Let the system or
                        the product be the subject instead, or restructure the sentence to remove the subject.
                    </Text>
                    <Text>Guidelines:</Text>
                    <List spacing="xs">
                        <List.Item>Use "you" and "your" to refer to the user</List.Item>
                        <List.Item>Never use "we," "our," or "us"</List.Item>
                        <List.Item>Avoid "Coveo" as a subject performing an action.</List.Item>
                    </List>
                    <DoTable
                        rows={[
                            ['Your session has expired.', 'We ended your session.'],
                            ['No results found.', "Coveo couldn't find any results."],
                            ["You don't have permission to access this.", "We can't let you access this."],
                        ]}
                    />

                    <Title order={4}>Contractions</Title>
                    <Text>
                        Contractions make UX copy more natural, but some can make a sentence overly casual and hard to
                        read. If the second word in the contraction is "would," "have," or "had," write the words out
                        instead.
                    </Text>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Use</Table.Th>
                                <Table.Th>Avoid</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {[
                                ["aren't", 'are not'],
                                ["can't", 'cannot'],
                                ["couldn't", 'could not'],
                                ["didn't", 'did not'],
                                ["doesn't", 'does not'],
                                ["don't", 'do not'],
                                ["hasn't", 'has not'],
                                ["haven't", 'have not'],
                                ["how's", 'how is'],
                                ["isn't", 'is not'],
                                ["it's", 'it is / it has'],
                                ["shouldn't", 'should not'],
                                ["that's", 'that is'],
                                ["there's", 'there is'],
                                ["they're", 'they are'],
                                ["what's", 'what is'],
                                ["where's", 'where is'],
                                ["won't", 'will not'],
                                ["wouldn't", 'would not'],
                                ["you're", 'you are'],
                                ["you've", 'you have'],
                                ['it will', "it'll"],
                                ['would have', "would've"],
                                ['could have', "could've"],
                                ['should have', "should've"],
                                ['you would', "you'd"],
                                ['you had', "you'd"],
                                ['it would', "it'd"],
                                ['it had', "it'd"],
                                ['there would', "there'd"],
                                ['there will', "there'll"],
                                ['they will', "they'll"],
                                ['they have', "they've"],
                                ['who is', "who's"],
                            ].map(([use, avoid]) => (
                                <Table.Tr key={`${use}-${avoid}`}>
                                    <Table.Td>
                                        <Text size="sm">{use}</Text>
                                    </Table.Td>
                                    <Table.Td>
                                        <Text size="sm">{avoid}</Text>
                                    </Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table>

                    <Title order={4}>Sentence length</Title>
                    <Text>
                        As a rule of thumb, keep your sentences under 20 words when writing for the UX. The best length
                        for each sentence depends on the context, so some UI elements have tighter limits.
                    </Text>
                    <Text>
                        Use the table to see the absolute maximum number of words per UI context, not as a target word
                        count. Shorter is better!
                    </Text>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>UI element</Table.Th>
                                <Table.Th>Word limit</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {[
                                ['Any sentence', '20 words'],
                                ['Button labels', '3 words'],
                                ['Tooltips', '20 words'],
                                ['Error messages', '25 words'],
                                ['Empty states', '25 words'],
                                ['Field validation', '10 words'],
                                ['Modals', '25 words'],
                                ['Toast notifications', '15 words'],
                            ].map(([element, limit]) => (
                                <Table.Tr key={element}>
                                    <Table.Td>
                                        <Text size="sm">{element}</Text>
                                    </Table.Td>
                                    <Table.Td>
                                        <Text size="sm">{limit}</Text>
                                    </Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </Stack>

                {/* SYNTAX & STRUCTURE */}
                <Stack gap="sm">
                    <Header variant="secondary">Syntax & structure</Header>
                    <Text>
                        In almost all UX contexts, frontloading is the best way to provide clarity. Frontloading means
                        stating the most important information and key message first, at the beginning of the text.
                        After that, more context, details, or reasoning can be given. This technique is used to
                        structure sentences, paragraphs, pages, and even entire books.
                    </Text>
                    <DoTable
                        rows={[
                            [
                                'No results found. Try adjusting your filters.',
                                "Your current filter selection didn't return any results. Try adjusting them.",
                            ],
                            [
                                'Access denied. Contact your administrator to request permission.',
                                "You're trying to access a page that requires additional permissions. Contact your administrator.",
                            ],
                        ]}
                    />

                    <Title order={4}>Instructions</Title>
                    <Text>
                        When writing guidance or instructions, state the result before the required action. Frontloading
                        in this situation helps the user understand why they're doing something{' '}
                        <Text component="span" fs="italic">
                            before
                        </Text>{' '}
                        they do it.
                    </Text>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
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
                                    <Text size="sm">
                                        To add a source, select{' '}
                                        <Text component="span" fw={700}>
                                            Add source
                                        </Text>
                                        .
                                    </Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">
                                        Select{' '}
                                        <Text component="span" fw={700}>
                                            Add source
                                        </Text>{' '}
                                        to add a source.
                                    </Text>
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                    <Alert.Advice title="Note">
                        Always prioritize clarity and readability. If breaking this rule makes the message easier to
                        understand, then do it.
                    </Alert.Advice>

                    <Title order={4}>Plain language</Title>
                    <Text>
                        Write in plain language so the copy is easy to understand for all users, including non-native
                        English speakers. Avoid idiomatic phrases, sayings, and metaphorical language. The only
                        exception is well-known industry terms or verbs that users likely know (for example, "crawl,"
                        "index," "query").
                    </Text>
                    <Text>Guidelines:</Text>
                    <List spacing="xs">
                        <List.Item>Use common, everyday words over formal or technical alternatives</List.Item>
                        <List.Item>If a shorter word works, use it</List.Item>
                        <List.Item>{"Don't use idioms or expressions"}</List.Item>
                    </List>
                    <DoTable
                        rows={[
                            ['This may take a few minutes.', "This won't happen at the speed of light."],
                            ['This is quick to set up.', 'This is a piece of cake to set up.'],
                        ]}
                    />

                    <Title order={4}>Reducing jargon</Title>
                    <Text>
                        Use this table to see what unnecessary words you can replace with everyday ones instead.
                    </Text>
                    <Table withTableBorder withColumnBorders layout="auto">
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Jargon</Table.Th>
                                <Table.Th>Replace with</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {[
                                ['able to', 'can'],
                                ['to be able to', 'to'],
                                ['additional', 'more / other / different'],
                                ['administer', 'manage'],
                                ['allows you to', 'you can use [x] to [y] / with [x], you can [y]'],
                                ['alternative', 'other'],
                                ['append', 'add'],
                                ['assist', 'help'],
                                ['begin', 'start'],
                                ['be of interest to them', 'interest them'],
                                ['complete', 'finish'],
                                ['conversely', 'but / however'],
                                ['credentials', 'username and password'],
                                ['currently', 'now'],
                                ['deactivate (a feature)', 'disable'],
                                ['display', 'show'],
                                ['due to the fact that', 'because / since'],
                                ['e.g.', 'for example / like / such as'],
                                ['enable', 'allow / let'],
                                ['enable (a feature)', 'activate / turn on'],
                                ['ensure', 'make sure (or just state the action)'],
                                ['fashion (as in a secured fashion)', 'way (as in a secured way)'],
                                ['following', 'after / next'],
                                ['furthermore', 'then / so'],
                                ['future-proof', 'lasting / reliable / adaptable'],
                                ['gives you the ability', 'you can use [x] to [y] / with [x], you can [y]'],
                                ['illustrate', 'show'],
                                ['in cases where', 'when'],
                                ['initial', 'first'],
                                ['in order to', 'to'],
                                ['in order to [verb], you must [verb]', 'to [verb], [verb]'],
                                ['input (verb)', 'enter'],
                                ['is able to provide', 'provides'],
                                ['leverage', 'use'],
                                ['make a modification', 'edit'],
                                ['manner', 'way'],
                                ['methods', 'ways'],
                                ['modify', 'edit'],
                                ['moreover', 'then / so'],
                                ['nor', 'or'],
                                ['obtain', 'get'],
                                ['on the subject of', 'about'],
                                ['pertaining', 'related'],
                                ['preceding', 'before'],
                                ['prior to', 'before'],
                                ['provided [x], [y] will...', 'if'],
                                ['purchase', 'buy'],
                                ['rather', 'instead'],
                                ['regarding', 'on / about / for'],
                                ['related to', 'about'],
                                ['remedy', 'fix'],
                                ['required to', 'need to'],
                                ['resolve', 'fix'],
                                ['retain', 'keep'],
                                ['should [x] + [verb] / should you [verb]', 'if'],
                                ['simultaneously', 'at the same time'],
                                ['submit (in certain contexts)', 'send'],
                                ['sub-second', 'under one second'],
                                ['subsequent', 'future / later / upcoming'],
                                ['thereafter', 'after / after that'],
                                ['therefore', 'so'],
                                ['to ensure', 'to / to make sure'],
                                ['to surface', 'to display / to promote'],
                                ['unable to', "can't"],
                                ['utilize', 'use'],
                                ['wish to', 'want to'],
                                ['with the use of', 'with'],
                                ['would like', 'want to'],
                            ].map(([jargon, replace]) => (
                                <Table.Tr key={jargon}>
                                    <Table.Td>
                                        <Text size="sm">{jargon}</Text>
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
