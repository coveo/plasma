import {Button, showNotification} from '@coveord/plasma-mantine';
import '@mantine/core/styles/Button.css';
import '@mantine/core/styles/UnstyledButton.css';
import './Button.css';

const Demo = () => (
    <Button onClick={() => showNotification({message: 'Button clicked', autoClose: false})}>Default button</Button>
);
export default Demo;
