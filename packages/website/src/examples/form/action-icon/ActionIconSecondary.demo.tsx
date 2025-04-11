import {ActionIcon, showNotification} from '@coveord/plasma-mantine';
import {SettingsSize16Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <ActionIcon onClick={() => showNotification({message: 'Button clicked'})} variant="outline" size="lg">
        <SettingsSize16Px height={16} />
    </ActionIcon>
);
export default Demo;
