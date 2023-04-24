import {expect, test} from '@playwright/experimental-ct-react';

import {CopyToClipboard} from '../CopyToClipboard';

test.use({viewport: {width: 500, height: 500}});

test.describe('CopyToClipboard', () => {
    test('default', async ({mount}) => {
        const component = await mount(<CopyToClipboard value="value" />);
        await expect(component).toHaveScreenshot();
        await component.click();
        await expect(component).toHaveScreenshot();
    });
    test('withLabel', async ({mount}) => {
        const component = await mount(<CopyToClipboard value="value" withLabel />);
        await expect(component).toHaveScreenshot();
        await component.getByRole('button').click();
        await expect(component).toHaveScreenshot();
    });
});
