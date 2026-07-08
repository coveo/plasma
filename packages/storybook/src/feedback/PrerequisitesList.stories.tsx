import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {PrerequisitesList} from '@coveord/plasma-mantine/components/PrerequisitesList';

const meta: Meta<typeof PrerequisitesList> = {
    title: '@components/feedback/PrerequisitesList',
    id: 'PrerequisitesList',
    component: PrerequisitesList,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type PrerequisitesListStoryArgs = ComponentProps<typeof PrerequisitesList>;

export const Demo: StoryObj<PrerequisitesListStoryArgs> = {
    render: (args) => (
        <PrerequisitesList {...args}>
            <PrerequisitesList.Item label="Completed Prerequisite" status="complete" description="Description" />
            <PrerequisitesList.Item label="Incomplete Prerequisite" status="incomplete" description="Description" />
        </PrerequisitesList>
    ),
};

export const PrerequisiteListItem = {
    args: {
        label: 'Prerequisite item',
        description: 'Optional description of the item.',
        status: 'complete',
    },
    argTypes: {
        status: {control: 'select', options: ['complete', 'incomplete']},
    },
    render: (args: ComponentProps<typeof PrerequisitesList.Item>) => (
        <PrerequisitesList>
            <PrerequisitesList.Item {...args} />
        </PrerequisitesList>
    ),
};
