import {Alert} from '@coveord/plasma-mantine';
import {WarningSize16Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <Alert title="Warning!" withCloseButton color="warning" icon={<WarningSize16Px height={16} />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
    </Alert>
);
export default Demo;
