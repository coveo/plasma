import {InfoToken, Stack} from '@coveord/plasma-mantine';

const Demo = () => (
    <Stack gap="sm">
        <InfoToken variant="information" />
        <InfoToken variant="advice" />
        <InfoToken variant="warning" />
        <InfoToken variant="error" />
        <InfoToken variant="question" />
    </Stack>
);
export default Demo;
