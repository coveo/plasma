import {Tooltip} from '@coveord/plasma-mantine';
import {IconCurrencyDollar} from '@coveord/plasma-react-icons';

// The icon takes the same color as the text around it

const Demo = () => (
    <div style={{color: 'green'}}>
        <Tooltip label="Dollar" position="left">
            <IconCurrencyDollar size={64} />
        </Tooltip>
    </div>
);
export default Demo;
