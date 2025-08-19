import {Group, InfoToken, Stack} from '@coveord/plasma-mantine';

const Demo = () => (
    <Stack gap="sm">
        <Group>
            <InfoToken.Information />
            <InfoToken.InformationOutline />
        </Group>
        <InfoToken.Advice />
        <InfoToken.Warning />
        <InfoToken.Error />
        <InfoToken.Question />
    </Stack>
);
export default Demo;
