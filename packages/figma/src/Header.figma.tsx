import {Button, Header} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const headerProps = {
    title: figma.string('Title'),
    description: figma.string('Description'),
    withDocAnchor: figma.boolean('Show InfoToken'),
    withBreadcrumbs: figma.boolean('Show Breadcrumbs'),
    withActions: figma.boolean('Show Actions'),
    withBorder: figma.enum('Property', {
        Default: true,
        Borderless: false,
    }),
};

figma.connect(Header, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51764', {
    props: headerProps,
    example: (props) => (
        <Header description={props.description} borderBottom>
            <Header.Breadcrumbs>
                <Header.BreadcrumbAnchor>Parent</Header.BreadcrumbAnchor>
            </Header.Breadcrumbs>
            {props.title}
            <Header.DocAnchor label="Documentation Link" href="" />
            <Header.Right>
                <Button.Primary>Button</Button.Primary>
                <Button.Secondary>Button</Button.Secondary>
            </Header.Right>
        </Header>
    ),
});
