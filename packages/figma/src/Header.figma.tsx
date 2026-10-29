import {Button, Header} from '@coveord/plasma-mantine';
import {figma} from '@figma/code-connect';

const headerProps = {
    title: figma.string('title'),
    description: figma.string('description'),
    withDocAnchor: figma.boolean('withInfoToken'),
    withBreadcrumbs: figma.boolean('withBreadcrumbs'),
    withActions: figma.boolean('withActions'),
    withBorder: figma.boolean('withBorder'),
};

figma.connect(Header, 'https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51764', {
    props: headerProps,
    example: (props) => (
        <Header description={props.description} borderBottom>
            <Header.Breadcrumbs>
                <Header.BreadcrumbAnchor single>Parent</Header.BreadcrumbAnchor>
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
