import {Anchor} from '@mantine/core';
import {expect, test} from '@playwright/experimental-ct-react';

import {Button} from '../../button';
import {Header} from '../Header';

test.use({viewport: {width: 800, height: 500}});

test.describe('CopyToClipboard', () => {
    test('default', async ({mount}) => {
        const component = await mount(
            <Header description="The header description" borderBottom>
                <Header.Breadcrumbs>
                    <Anchor>One</Anchor>
                    <Anchor>Two</Anchor>
                    <Anchor>Three</Anchor>
                </Header.Breadcrumbs>
                Title
                <Header.DocAnchor href="https://about:blank" label="Tooltip text" />
                <Header.Actions>
                    <Button>Primary</Button>
                    <Button variant="outline">Secondary</Button>
                </Header.Actions>
            </Header>
        );
        await expect(component).toHaveScreenshot();
    });
});
