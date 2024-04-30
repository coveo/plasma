import {DollarsSize64Px} from '@coveord/plasma-react-icons';
import {Tooltip} from '@coveord/plasma-mantine';

// Control the size using "height" or "width" attributes (defaults to 1em)
// The icon takes the same color as the text around it

const Demo = () => (
    <div style={{color: 'green'}}>
        <Tooltip label="Dollar" position="left">
            <DollarsSize64Px height={64} />
        </Tooltip>
    </div>
);
export default Demo;
