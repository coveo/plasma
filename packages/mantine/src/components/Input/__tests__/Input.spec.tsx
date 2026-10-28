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
        const infoToken = screen.getByRole('img', {name: 'question'});
        expect(infoToken).toBeVisible();

        await user.hover(infoToken);

        expect(await screen.findByRole('tooltip')).toHaveTextContent('Helpful tooltip');
    });

    it('lets keyboard users open the LabelInfo tooltip from a "More information" button', async () => {
        const user = userEvent.setup();
        render(<Input.LabelInfo>Helpful tooltip</Input.LabelInfo>);

        await user.tab();

        expect(screen.getByRole('button', {name: 'More information'})).toHaveFocus();
        expect(await screen.findByRole('tooltip')).toHaveTextContent('Helpful tooltip');
    });

    it('ignores the deprecated Tooltip props of LabelInfo', () => {
        render(<Input.LabelInfo opened>Helpful tooltip</Input.LabelInfo>);

        expect(screen.getByRole('button', {name: 'More information'})).toBeVisible();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
});
