import {Button, Drawer, Group, Text} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {useArgs} from 'storybook/preview-api';

type DrawerStoryArgs = ComponentProps<typeof Drawer> & {
    withCloseButton: boolean;
};

const meta = {
    title: '@components/Layout/Drawer',
    id: 'Drawer',
    component: Drawer,
    args: {
        title: 'Drawer title',
        description: 'Drawer header description',
        help: {href: 'https://docs.coveo.com', label: 'Open documentation'},
        opened: false,
        position: 'left',
        withCloseButton: true,
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'Sets the drawer title.',
        },
        description: {
            control: 'text',
            description: 'Sets the description displayed below the drawer title.',
        },
        help: {
            control: 'object',
            description: 'Configures the documentation link shown next to the drawer title.',
            table: {
                type: {summary: 'HeaderDocAnchorProps'},
                defaultValue: {summary: 'undefined'},
            },
        },
        withCloseButton: {
            control: 'boolean',
            description: 'Controls whether the example shows the drawer close button.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'true'},
            },
        },
    },
    parameters: {
        layout: 'fullscreen',
        controls: {
            include: ['title', 'description', 'withCloseButton', 'help'],
        },
    },
} satisfies Meta<DrawerStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({description, help, opened, position, title, withCloseButton}) => {
        const [, updateArgs] = useArgs<DrawerStoryArgs>();
        const close = () => updateArgs({opened: false});
        const open = (nextPosition: NonNullable<DrawerStoryArgs['position']>) =>
            updateArgs({opened: true, position: nextPosition});

        return (
            <>
                <Drawer
                    title={title}
                    description={description}
                    help={help}
                    opened={opened}
                    onClose={close}
                    position={position}
                    withCloseButton={withCloseButton}
                >
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </Text>
                    <Drawer.Footer>
                        <Button.Tertiary onClick={close}>Cancel</Button.Tertiary>
                        <Button.Primary onClick={close}>Save</Button.Primary>
                    </Drawer.Footer>
                </Drawer>
                <Group justify="center">
                    <Button.Tertiary onClick={() => open('left')}>Left</Button.Tertiary>
                    <Button.Tertiary onClick={() => open('right')}>Right</Button.Tertiary>
                    <Button.Tertiary onClick={() => open('top')}>Top</Button.Tertiary>
                    <Button.Tertiary onClick={() => open('bottom')}>Bottom</Button.Tertiary>
                </Group>
            </>
        );
    },
};
