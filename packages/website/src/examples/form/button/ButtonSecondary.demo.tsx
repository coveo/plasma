import {Button, showNotification} from '@coveord/plasma-mantine';

const Demo = () => (
    <Button variant="outline" onClick={() => showNotification({message: 'Button clicked'})}>
        Secondary button
    </Button>
);
export default Demo;
