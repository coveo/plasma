import {render, screen, userEvent} from '@test-utils';

import {Input, InputLabelInfo} from '../Input.js';

describe('Input', () => {
    it('exposes InputLabelInfo as a compound component', () => {
        expect(Input.LabelInfo).toBe(InputLabelInfo);
    });

    it('renders LabelInfo inside the label prop and shows its tooltip content on hover', async () => {
        const user = userEvent.setup();
        render(
            <Input.Wrapper
                label={
                    <>
                        <span>Field label</span>
                        <Input.LabelInfo>Helpful tooltip</Input.LabelInfo>
                    </>
                }
            >
                <Input />
            </Input.Wrapper>,
        );

        expect(screen.getByText('Field label')).toBeVisible();
        const infoToken = screen.getByRole('img', {name: 'information'});
        expect(infoToken).toBeVisible();

        await user.hover(infoToken);

        expect(await screen.findByRole('tooltip')).toHaveTextContent('Helpful tooltip');
    });
});
