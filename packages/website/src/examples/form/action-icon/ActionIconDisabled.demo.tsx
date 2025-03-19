import {ActionIcon, showNotification} from '@coveord/plasma-mantine';
import {ZombieSize16Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <ActionIcon
        onClick={() => showNotification({message: 'Button clicked'})}
        disabled
        disabledTooltip="This button is disabled"
        variant="outline"
        size="lg"
    >
        <ZombieSize16Px height={16} />
    </ActionIcon>
);
export default Demo;
