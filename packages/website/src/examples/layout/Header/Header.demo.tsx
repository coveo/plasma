import {Button, Header} from '@coveord/plasma-mantine';

const Demo = () => (
    <Header description="The header description" borderBottom>
        <Header.Breadcrumbs>
            <Header.BreadcrumbAnchor>Grand Parent</Header.BreadcrumbAnchor>
            <Header.BreadcrumbAnchor>Parent</Header.BreadcrumbAnchor>
            <Header.BreadcrumbText>Current</Header.BreadcrumbText>
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
