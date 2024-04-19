import {Alert} from '@coveord/plasma-mantine';
import {CriticalSize16Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <Alert title="Attention!" withCloseButton color="critical" icon={<CriticalSize16Px height={16} />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
    </Alert>
);
export default Demo;
