import {ActionIcon, showNotification} from '@coveord/plasma-mantine';
import {EditSize16Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <ActionIcon onClick={() => showNotification({message: 'Button clicked'})} variant="filled" color="action" size="lg">
        <EditSize16Px height={16} />
    </ActionIcon>
);
export default Demo;
