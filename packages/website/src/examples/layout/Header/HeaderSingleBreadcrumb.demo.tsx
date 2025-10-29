import {Header} from '@coveord/plasma-mantine';

const Demo = () => (
    <Header description="The header description" borderBottom>
        <Header.Breadcrumbs>
            <Header.BreadcrumbAnchor single>Parent</Header.BreadcrumbAnchor>
        </Header.Breadcrumbs>
        Title
    </Header>
);
export default Demo;
