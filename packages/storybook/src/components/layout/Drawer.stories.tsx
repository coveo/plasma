import {Button, Drawer, Text} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {useArgs} from 'storybook/preview-api';

type DrawerStoryArgs = ComponentProps<typeof Drawer> & {
    withClose: boolean;
};

const meta = {
    title: '@components/Layout/Drawer',
    id: 'Drawer',
    component: Drawer,
    args: {
        help: {href: 'https://docs.coveo.com', label: 'Open documentation'},
        opened: true,
        withClose: true,
    },
    argTypes: {
        help: {
            control: 'object',
            description: 'Configures the documentation link shown next to the drawer title.',
            table: {
                type: {summary: 'HeaderDocAnchorProps'},
                defaultValue: {summary: 'undefined'},
            },
        },
        withClose: {
            control: 'boolean',
            description: 'Controls whether the example shows the drawer close button.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'true'},
            },
        },
    },
    parameters: {
        controls: {
            include: ['withClose', 'help'],
        },
    },
} satisfies Meta<DrawerStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({help, opened, withClose}) => {
        const [, updateArgs] = useArgs<DrawerStoryArgs>();
        const close = () => updateArgs({opened: false});

        return (
            <>
                <Drawer
                    title="Drawer title"
                    description="Drawer header description"
                    help={help}
                    opened={opened}
                    onClose={close}
                    withCloseButton={withClose}
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
                {!opened && <Button.Primary onClick={() => updateArgs({opened: true})}>Open drawer</Button.Primary>}
            </>
        );
    },
};
