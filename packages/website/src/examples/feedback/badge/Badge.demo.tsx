import {Badge, Center, Code, Grid} from '@coveord/plasma-mantine';
import {FunctionComponent, ReactNode} from 'react';

const Demo = () => (
    <Grid gutter={0}>
        <Cell>Default</Cell>
        <Cell>
            <Code>size="large"</Code>
        </Cell>
        <Cell>
            <Code>on="dark"</Code>
        </Cell>
        <Cell>
            <Code>size="large" on="dark"</Code>
        </Cell>
        <Cell>
            <Badge.Primary>Primary</Badge.Primary>
        </Cell>
        <Cell>
            <Badge.Primary size="large">Primary</Badge.Primary>
        </Cell>
        <Cell dark>
            <Badge.Primary on="dark">Primary</Badge.Primary>
        </Cell>
        <Cell dark>
            <Badge.Primary on="dark" size="large">
                Primary
            </Badge.Primary>
        </Cell>
        <Cell>
            <Badge.Secondary>Secondary</Badge.Secondary>
        </Cell>
        <Cell>
            <Badge.Secondary size="large">Secondary</Badge.Secondary>
        </Cell>
        <Cell dark>
            <Badge.Secondary on="dark">Secondary</Badge.Secondary>
        </Cell>
        <Cell dark>
            <Badge.Secondary on="dark" size="large">
                Secondary
            </Badge.Secondary>
        </Cell>
        <Cell>
            <Badge.Warning>Warning</Badge.Warning>
        </Cell>
        <Cell>
            <Badge.Warning size="large">Warning</Badge.Warning>
        </Cell>
        <Cell dark>
            <Badge.Warning on="dark">Warning</Badge.Warning>
        </Cell>
        <Cell dark>
            <Badge.Warning on="dark" size="large">
                Warning
            </Badge.Warning>
        </Cell>
        <Cell>
            <Badge.Success>Success</Badge.Success>
        </Cell>
        <Cell>
            <Badge.Success size="large">Success</Badge.Success>
        </Cell>
        <Cell dark>
            <Badge.Success on="dark">Success</Badge.Success>
        </Cell>
        <Cell dark>
            <Badge.Success on="dark" size="large">
                Success
            </Badge.Success>
        </Cell>
        <Cell>
            <Badge.Critical>Critical</Badge.Critical>
        </Cell>
        <Cell>
            <Badge.Critical size="large">Critical</Badge.Critical>
        </Cell>
        <Cell dark>
            <Badge.Critical on="dark">Critical</Badge.Critical>
        </Cell>
        <Cell dark>
            <Badge.Critical on="dark" size="large">
                Critical
            </Badge.Critical>
        </Cell>
        <Cell>
            <Badge.Disabled>Disabled</Badge.Disabled>
        </Cell>
        <Cell>
            <Badge.Disabled size="large">Disabled</Badge.Disabled>
        </Cell>
        <Cell dark>
            <Badge.Disabled on="dark">Disabled</Badge.Disabled>
        </Cell>
        <Cell dark>
            <Badge.Disabled on="dark" size="large">
                Disabled
            </Badge.Disabled>
        </Cell>
    </Grid>
);

const Cell: FunctionComponent<{children: ReactNode; dark?: boolean}> = ({children, dark}) => (
    <Grid.Col span={3} bg={dark ? 'violet.9' : 'white'} p="sm">
        <Center h="100%">{children}</Center>
    </Grid.Col>
);

export default Demo;
