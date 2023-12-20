import {Button, showNotification} from '@coveord/plasma-mantine';

const Demo = () => (
    <Button onClick={() => showNotification({message: 'Button clicked', autoClose: false})}>Default button</Button>
);
export default Demo;
