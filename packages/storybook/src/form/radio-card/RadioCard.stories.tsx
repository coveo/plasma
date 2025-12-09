import {RadioCard} from '@coveord/plasma-mantine/components/RadioCard';
import {Box, List, Radio, Stack, Text} from '@mantine/core';
import {Meta, StoryFn} from '@storybook/react-vite';
import {useState} from 'react';

const meta: Meta<typeof RadioCard> = {
    title: '@components/form/RadioCard',
    component: RadioCard,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <Box maw={300}>
                <Story />
            </Box>
        ),
    ],
};
export default meta;

export const Default: StoryFn<any> = () => {
    const [checked, setChecked] = useState(false);
    return (
        <RadioCard
            checked={checked}
            onClick={() => setChecked((c: boolean) => !c)}
            label="Section Title"
            description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor lectus eu nunc luctus, sed viverra tellus euismod.'
            }
        />
    );
};
export const Disabled: StoryFn<any> = () => {
    const [checked, setChecked] = useState(false);
    return (
        <RadioCard
            checked={checked}
            onClick={() => setChecked((c: boolean) => !c)}
            label="Section Title"
            description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor lectus eu nunc luctus, sed viverra tellus euismod.'
            }
            disabled
        />
    );
};
export const SelectedDisabled: StoryFn<any> = () => {
    const [checked, setChecked] = useState(true);
    return (
        <RadioCard
            checked={checked}
            onClick={() => setChecked((c: boolean) => !c)}
            label="Section Title"
            description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor lectus eu nunc luctus, sed viverra tellus euismod.'
            }
            disabled
        />
    );
};
export const LongTitle: StoryFn<any> = () => {
    const [checked, setChecked] = useState(false);
    return (
        <RadioCard
            checked={checked}
            onClick={() => setChecked((c: boolean) => !c)}
            label="Section Longer Title That Wraps On Multiple Lines"
            description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor lectus eu nunc luctus, sed viverra tellus euismod.'
            }
        />
    );
};

export const LongTitleWithNoSpaces: StoryFn<any> = () => {
    const [checked, setChecked] = useState(false);
    return (
        <RadioCard
            checked={checked}
            onClick={() => setChecked((c: boolean) => !c)}
            label="SectionLongerTitleThatWrapsOnMultipleLines"
            description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor lectus eu nunc luctus, sed viverra tellus euismod.'
            }
        />
    );
};

export const LongDescription: StoryFn<any> = () => {
    const Description = () => (
        <Stack gap="md">
            <Text inherit>
                To generate search tokens and send usage analytics data. When logged in, search page users see the
                search results they’re allowed to access, in addition to public content.
            </Text>
            <Box>
                <Text inherit mb="xs">
                    Privileges
                </Text>
                <List title="Privileges" size="xs" spacing="sm">
                    <List.Item>Search - Impersonate: allowed</List.Item>
                    <List.Item>Analytics data: push</List.Item>
                </List>
            </Box>
            <Text inherit fw={500}>
                This key must remain private (server side).
            </Text>
        </Stack>
    );
    const [checked, setChecked] = useState(false);
    return (
        <RadioCard
            checked={checked}
            onClick={() => setChecked((c: boolean) => !c)}
            label="Section Title"
            description={<Description />}
        />
    );
};
export const RadioGroup: StoryFn<any> = () => {
    const [value, setValue] = useState<string | null>(null);

    return (
        <Stack gap="sm">
            <Radio.Group value={value} onChange={setValue}>
                <Stack gap="sm">
                    <RadioCard label="Option 1" description="This is the first option" value="option-1" />
                    <RadioCard label="Option 2" description="This is the second option" value="option-2" />
                    <RadioCard label="Option 3" description="This is the third option" value="option-3" />
                </Stack>
            </Radio.Group>
            <Text>Selected value: {value}</Text>
        </Stack>
    );
};
