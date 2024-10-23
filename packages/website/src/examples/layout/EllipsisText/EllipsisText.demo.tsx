import {EllipsisText} from '@coveord/plasma-mantine';

const Demo = () => (
    <>
        <EllipsisText maw={250}>
            This is a very long text that is truncated with an ellipsis. The rest is shown on hover.
        </EllipsisText>
        <EllipsisText maw={250}>This short text is not truncated.</EllipsisText>
    </>
);
export default Demo;
