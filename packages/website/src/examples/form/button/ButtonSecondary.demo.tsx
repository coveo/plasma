import {ButtonSecondary, showNotification} from '@coveord/plasma-mantine';

const Demo = () => (
    <ButtonSecondary onClick={() => showNotification({message: 'Button clicked'})}>Secondary button</ButtonSecondary>
);
export default Demo;
