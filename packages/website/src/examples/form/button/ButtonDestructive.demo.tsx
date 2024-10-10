import {Button, showNotification} from '@coveord/plasma-mantine';

const Demo = () => (
    <Button color="critical" onClick={() => showNotification({message: 'Button clicked', autoClose: false})}>
        Destructive button
    </Button>
);
export default Demo;
