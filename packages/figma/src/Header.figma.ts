// url=https://www.figma.com/design/FIkUthFdwxiJKSBE06qjY0/Plasma-3.0---Components?node-id=7-51764
// component=Header

import figma from 'figma';

const title = figma.selectedInstance.getString('Title');
const description = figma.selectedInstance.getString('Description');
const withDocAnchor = figma.selectedInstance.getBoolean('Show InfoToken');
const withBreadcrumbs = figma.selectedInstance.getBoolean('Show Breadcrumbs');
const withActions = figma.selectedInstance.getBoolean('Show Actions');
const withBorder = figma.selectedInstance.getEnum('Property', {
    Default: true,
    Borderless: false,
});
export default {
    id: 'Header',
    imports: ["import { Button, Header } from '@coveord/plasma-mantine';"],
    example: figma.code`<Header${figma.helpers.react.renderProp('description', description)}${figma.helpers.react.renderProp('borderBottom', withBorder)}>
            ${
                withBreadcrumbs
                    ? figma.code`<Header.Breadcrumbs>
                <Header.BreadcrumbAnchor single>Parent</Header.BreadcrumbAnchor>
            </Header.Breadcrumbs>`
                    : ''
            }
            ${figma.helpers.react.renderChildren(title)}
            ${withDocAnchor ? figma.code`<Header.DocAnchor label="Documentation Link" href=""/>` : ''}
            ${
                withActions
                    ? figma.code`<Header.Right>
                <Button.Primary>Button</Button.Primary>
                <Button.Secondary>Button</Button.Secondary>
            </Header.Right>`
                    : ''
            }
        </Header>`,
    metadata: {nestable: true},
};
