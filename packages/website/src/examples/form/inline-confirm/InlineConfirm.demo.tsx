import {Button, Group, InlineConfirm, showNotification} from '@coveord/plasma-mantine';

const Demo = () => (
    <InlineConfirm>
        <Group gap="sm">
            <Button.Primary disabled>I will hide</Button.Primary>
            <InlineConfirm.Target inlineConfirmId="delete">Delete</InlineConfirm.Target>
        </Group>
        <InlineConfirm.Prompt
            inlineConfirmId="delete"
            onConfirm={() => showNotification({message: 'Confirm clicked', autoClose: true})}
            onCancel={() => showNotification({message: 'Cancel clicked', autoClose: true})}
        />
    </InlineConfirm>
);
export default Demo;
