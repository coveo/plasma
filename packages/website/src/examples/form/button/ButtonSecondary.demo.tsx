import {Button, showNotification} from '@coveord/plasma-mantine';

export default () => (
    <Button variant="outline" onClick={() => showNotification({message: 'Button clicked'})}>
        Secondary button
    </Button>
);
