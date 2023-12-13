import {Button, showNotification} from '@coveord/plasma-mantine';

const Demo = () => (
    <Button onClick={() => showNotification({autoClose: false, message: 'Button clicked'})}>Default button</Button>
);
export default Demo;
