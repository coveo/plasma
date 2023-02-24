import {Button, showNotification} from '@coveord/plasma-mantine';

export default () => <Button onClick={() => showNotification({message: 'Button clicked'})}>Default button</Button>;
