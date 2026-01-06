import {ChildForm, type ChildFormProps} from '@coveord/plasma-mantine/components/ChildForm';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {FunctionComponent, ReactNode} from 'react';

const meta: Meta<typeof ChildForm> = {
    title: '@components/form/ChildForm',
    component: ChildForm,
    parameters: {
        layout: 'centered',
    },
    args: {
        in: true,
    },
    argTypes: {
        title: {control: 'text'},
        description: {control: 'text'},
    },
};
export default meta;
type Story = StoryObj<typeof ChildForm>;

const Inside = () => (
    <div
        style={{
            height: 72,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-blue-2)',
        }}
    >
        Inside
    </div>
);
Inside.displayName = 'Inside';

const Text: FunctionComponent<{children: ReactNode}> = ({children}) => <div style={{width: 300}}>{children}</div>;
Text.displayName = 'Text';

export const Demo: Story = {
    render: (props: ChildFormProps) => (
        <>
            <Text>Above</Text>
            <ChildForm {...props}>
                <Inside />
            </ChildForm>
            <Text>Below</Text>
        </>
    ),
};
