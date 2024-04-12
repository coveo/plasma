import {Button, Group, InlineConfirm, showNotification} from '@coveord/plasma-mantine';

const Demo = () => (
    <InlineConfirm>
        <Group gap="sm">
            <Button disabled>I will hide</Button>
            <InlineConfirm.Target id="delete">Delete</InlineConfirm.Target>
        </Group>
        <InlineConfirm.Prompt
            id="delete"
            onConfirm={() => showNotification({message: 'Confirm clicked', autoClose: true})}
            onCancel={() => showNotification({message: 'Cancel clicked', autoClose: true})}
        />
    </InlineConfirm>
);
export default Demo;
