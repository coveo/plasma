import {Button, InlineConfirm, showNotification, Text} from '@coveord/plasma-mantine';
import {DeleteSize24Px, CrossSize24Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <InlineConfirm>
        <InlineConfirm.Target inlineConfirmId="delete" variant="subtle" color="critical">
            <DeleteSize24Px />
        </InlineConfirm.Target>

        <InlineConfirm.Prompt
            inlineConfirmId="delete"
            label={
                <Text c="critical" fw={500}>
                    Delete?
                </Text>
            }
            confirm={<Button.DestructiveTertiary leftSection={<DeleteSize24Px />}>Yes</Button.DestructiveTertiary>}
            cancel={<Button.Tertiary leftSection={<CrossSize24Px />}>No</Button.Tertiary>}
            onConfirm={() => showNotification({message: 'Confirm clicked', autoClose: true})}
            onCancel={() => showNotification({message: 'Cancel clicked', autoClose: true})}
        />
    </InlineConfirm>
);
export default Demo;
