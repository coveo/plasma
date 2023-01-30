import {Button} from '@coveord/plasma-mantine';

export default () => (
    <Button disabled disabledTooltip="This button is disabled" onClick={() => alert('button clicked')}>
        Disabled button
    </Button>
);
