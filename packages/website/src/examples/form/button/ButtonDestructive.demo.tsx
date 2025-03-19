import {ButtonDestructive, showNotification} from '@coveord/plasma-mantine';

const Demo = () => (
    <ButtonDestructive onClick={() => showNotification({message: 'Button clicked', autoClose: false})}>
        Destructive button
    </ButtonDestructive>
);
export default Demo;
