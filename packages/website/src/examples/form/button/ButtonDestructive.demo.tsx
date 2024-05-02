import {Button, showNotification} from '@coveord/plasma-mantine';
import {CrossSize16Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <Button
        variant="destructive"
        // loading
        // loaderProps={{type: 'oval'}}
        disabled
        onClick={() => showNotification({message: 'Button clicked', autoClose: false})}
        leftSection={<CrossSize16Px />}
    >
        Destructive button
    </Button>
);
export default Demo;
