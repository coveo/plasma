import {Alert} from '@coveord/plasma-mantine';
import {TipSize16Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <Alert title="Tip" withCloseButton color="gray" icon={<TipSize16Px height={16} />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
    </Alert>
);
export default Demo;
