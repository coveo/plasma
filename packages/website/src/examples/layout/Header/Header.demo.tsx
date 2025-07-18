import {Anchor, Button, Header, Text} from '@coveord/plasma-mantine';

const Demo = () => (
    <Header description="The header description" borderBottom>
        <Header.Breadcrumbs>
            <Anchor>Back</Anchor>
            <Anchor>Two</Anchor>
            <Text>This</Text>
        </Header.Breadcrumbs>
        Title
        <Header.DocAnchor href="https://about:blank" label="Tooltip text" />
        <Header.Right wrap="nowrap">
            <Button.Primary>Primary</Button.Primary>
            <Button.Secondary>Secondary</Button.Secondary>
        </Header.Right>
    </Header>
);
export default Demo;
