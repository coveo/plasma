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
    render: () => (
        <PrerequisitesList>
            <PrerequisitesList.Item label="Completed prerequisite" status="completed" />
            <PrerequisitesList.Item label="Current prerequisite" status="current" />
            <PrerequisitesList.Item label="Next prerequisite" status="next" />
        </PrerequisitesList>
    ),
};
