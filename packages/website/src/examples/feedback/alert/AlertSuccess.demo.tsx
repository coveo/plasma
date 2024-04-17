import {Alert} from '@coveord/plasma-mantine';
import {CheckmarkSize16Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <Alert title="Congrats!" withCloseButton color="success" icon={<CheckmarkSize16Px height={16} />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
    </Alert>
);
export default Demo;
