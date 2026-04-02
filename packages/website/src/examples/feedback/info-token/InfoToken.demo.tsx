import {InfoToken, Stack} from '@coveord/plasma-mantine';

const Demo = () => (
    <Stack gap="sm">
        <InfoToken.Information />
        <InfoToken.Advice />
        <InfoToken.Success />
        <InfoToken.Warning />
        <InfoToken.Error />
        <InfoToken.Question />
    </Stack>
);
export default Demo;
