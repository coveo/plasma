import {EllipsisText} from '@coveord/plasma-mantine';

const Demo = () => (
    <EllipsisText maw={300} lineClamp={2}>
        This is a very long text that is not truncated since clamp limit is not reached.
    </EllipsisText>
);
export default Demo;
