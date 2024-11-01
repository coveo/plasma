import {Chip, EllipsisText, Stack, Title} from '@coveord/plasma-mantine';

const Demo = () => (
    <>
        <Stack gap="xs">
            <Title order={5}>Default</Title>
            <EllipsisText maw={250}>This is a very long text that is truncated with an ellipsis.</EllipsisText>
            <EllipsisText maw={250}>This short text is not truncated.</EllipsisText>
            <Chip>
                <EllipsisText maw={250}>
                    This is a very long text within a special container is truncated with an ellipsis.
                </EllipsisText>
            </Chip>
        </Stack>
        <Stack gap="xs">
            <Title order={5}>Line clamp</Title>
            <EllipsisText maw={250} lineClamp={2}>
                This is a very long text that is truncated with an ellipsis since clamp limit is not enough to display
                the full text.
            </EllipsisText>
            <EllipsisText maw={250} lineClamp={2}>
                This is a very long text that is not truncated since clamp limit is not reached.
            </EllipsisText>
        </Stack>
    </>
);
export default Demo;
