import {EllipsisText} from '@coveord/plasma-mantine';

const Demo = () => (
    <EllipsisText maw={250} lineClamp={2}>
        This is a very long text that is truncated with an ellipsis since clamp limit is not enough to display the full
        text.
    </EllipsisText>
);
export default Demo;
