import {EllipsisText} from '@coveord/plasma-mantine';
import {Chip} from '@mantine/core';

const Demo = () => (
    <Chip>
        <EllipsisText maw={250}>
            This is a very long text within a special container is truncated with an ellipsis.
        </EllipsisText>
    </Chip>
);
export default Demo;
