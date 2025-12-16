import {Tabs} from '@coveord/plasma-mantine/components/Tabs';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {forwardRef, ReactNode} from 'react';

const meta: Meta<typeof Tabs> = {
    title: '@components/layout/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    args: {
        orientation: undefined,
    },
    argTypes: {
        orientation: {
            control: 'select',
            options: ['horizontal', 'vertical'],
            table: {
                defaultValue: {summary: 'horizontal'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

const ExampleContainer = forwardRef<HTMLDivElement, {children: ReactNode}>((props, ref) => (
    <div
        ref={ref}
        style={{
            width: 324,
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-blue-2)',
        }}
    >
        {props.children}
    </div>
));
ExampleContainer.displayName = 'ExampleContainer';

export const Demo: Story = {
    render: (props: any) => (
        <Tabs defaultValue="tab1" {...props}>
            <Tabs.List>
                <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
                <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
                <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="tab1">
                <ExampleContainer>Content for Tab 1</ExampleContainer>
            </Tabs.Panel>
            <Tabs.Panel value="tab2">
                <ExampleContainer>Content for Tab 2</ExampleContainer>
            </Tabs.Panel>
            <Tabs.Panel value="tab3">
                <ExampleContainer>Content for Tab 3</ExampleContainer>
            </Tabs.Panel>
        </Tabs>
    ),
};
