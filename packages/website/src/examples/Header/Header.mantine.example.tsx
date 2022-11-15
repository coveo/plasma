import {Button, Header} from '@coveord/plasma-mantine';

export default () => (
    <Header
        description="The header description"
        docLink="https://about:blank"
        docLinkTooltipLabel="Tooltip text"
        borderBottom
        actions={
            <>
                <Button variant="outline">Action 2</Button>
                <Button>Action 1</Button>
            </>
        }
    >
        <span>One</span>
        <span>Two</span>
        <span>Three</span>
    </Header>
);
