import {Badge, Center, Code, Grid} from '@coveord/plasma-mantine';
import {FunctionComponent, ReactNode} from 'react';

const Demo = () => (
    <Grid gutter={0}>
        <Cell>
            <Code>Default</Code>
        </Cell>
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
            <Badge.Primary on="light">Primary</Badge.Primary>
        </Cell>
        <Cell>
            <Badge.Primary on="light" size="large">
                Primary
            </Badge.Primary>
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
            <Badge.Secondary on="light">Secondary</Badge.Secondary>
        </Cell>
        <Cell>
            <Badge.Secondary on="light" size="large">
                Secondary
            </Badge.Secondary>
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
            <Badge.Warning on="light">Warning</Badge.Warning>
        </Cell>
        <Cell>
            <Badge.Warning on="light" size="large">
                Warning
            </Badge.Warning>
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
            <Badge.Critical on="light">Critical</Badge.Critical>
        </Cell>
        <Cell>
            <Badge.Critical on="light" size="large">
                Critical
            </Badge.Critical>
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
            <Badge.Disabled on="light">Disabled</Badge.Disabled>
        </Cell>
        <Cell>
            <Badge.Disabled on="light" size="large">
                Disabled
            </Badge.Disabled>
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
