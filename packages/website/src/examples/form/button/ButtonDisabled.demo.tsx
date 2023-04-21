import {Button} from '@coveord/plasma-mantine';

const Demo = () => (
    <Button disabled disabledTooltip="This button is disabled" onClick={() => alert('button clicked')}>
        Disabled button
    </Button>
);
export default Demo;
