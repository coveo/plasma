import {DollarsSize64Px} from '@coveord/plasma-react-icons';
import {Tooltip} from '@mantine/core';

// Control the size using "height" or "width" attributes (defaults to 1em)
// The icon takes the same color as the text around it

export default () => (
    <div style={{color: 'green'}}>
        <Tooltip label="Dollar" position="left">
            <DollarsSize64Px height={64} />
        </Tooltip>
    </div>
);
