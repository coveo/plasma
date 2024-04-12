import {Button, InlineConfirm, showNotification, Text} from '@coveord/plasma-mantine';
import {DeleteSize24Px, CrossSize24Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <InlineConfirm>
        <InlineConfirm.Target id="delete" variant="subtle" color="critical">
            <DeleteSize24Px />
        </InlineConfirm.Target>

        <InlineConfirm.Prompt
            id="delete"
            label={
                <Text c="critical" fw={500}>
                    Delete?
                </Text>
            }
            confirm={
                <Button variant="outline" color="critical" leftSection={<DeleteSize24Px />}>
                    Yes
                </Button>
            }
            cancel={
                <Button variant="outline" leftSection={<CrossSize24Px />}>
                    No
                </Button>
            }
            onConfirm={() => showNotification({message: 'Confirm clicked', autoClose: true})}
            onCancel={() => showNotification({message: 'Cancel clicked', autoClose: true})}
        />
    </InlineConfirm>
);
export default Demo;
