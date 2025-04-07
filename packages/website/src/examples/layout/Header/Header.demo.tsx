import {Anchor, Button, Header} from '@coveord/plasma-mantine';

const Demo = () => (
    <Header description="The header description" borderBottom>
        <Header.Breadcrumbs>
            <Anchor>One</Anchor>
            <Anchor>Two</Anchor>
            <Anchor>Three</Anchor>
        </Header.Breadcrumbs>
        Title
        <Header.DocAnchor href="https://about:blank" label="Tooltip text" />
        <Header.Right wrap="nowrap">
            <Button>Primary</Button>
            <Button variant="outline">Secondary</Button>
        </Header.Right>
    </Header>
);
export default Demo;
