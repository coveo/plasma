import {EllipsisText, Space} from '@coveord/plasma-mantine';

const Demo = () => (
    <>
        <EllipsisText maw={250}>
            This is a very long text that is truncated with an ellipsis with default clamp.
        </EllipsisText>
        <Space h={10} />
        <EllipsisText maw={250} lineClamp={2}>
            This is a very long text that is truncated with an ellipsis since clamp limit is not enough to display the
            full text.
        </EllipsisText>
        <Space h={10} />
        <EllipsisText maw={250} lineClamp={2}>
            This is a very long text that is not truncated since clamp limit is not reached.
        </EllipsisText>
        <Space h={10} />
        <EllipsisText maw={250}>This short text is not truncated.</EllipsisText>
    </>
);
export default Demo;
