import {render, screen, userEvent} from '@test-utils';

import {Input} from '../../Input/Input.js';
import {Switch} from '../Switch.js';

describe('Switch', () => {
    it('shows Input.LabelInfo tooltip content when hovering the info token in the label', async () => {
        const user = userEvent.setup();

        render(
            <Switch
                label={
                    <>
                        <span>Switch label</span>
                        <Input.LabelInfo>Helpful tooltip</Input.LabelInfo>
                    </>
                }
            />,
        );

        const infoToken = screen.getByRole('img', {name: 'information'});

        await user.hover(infoToken);

        expect(await screen.findByRole('tooltip')).toHaveTextContent('Helpful tooltip');
    });
});
