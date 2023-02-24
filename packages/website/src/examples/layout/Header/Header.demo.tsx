import {Anchor, Button, Header} from '@coveord/plasma-mantine';

export default () => (
    <Header
        description="The header description"
        docLink="https://about:blank"
        docLinkTooltipLabel="Tooltip text"
        borderBottom
        actions={
            <>
                <Button>Primary</Button>
                <Button variant="outline">Secondary</Button>
            </>
        }
    >
        Title
        <Header.Breadcrumbs>
            <Anchor>One</Anchor>
            <Anchor>Two</Anchor>
            <Anchor>Three</Anchor>
        </Header.Breadcrumbs>
    </Header>
);
