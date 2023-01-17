import {DeleteSize24Px} from '@coveord/plasma-react-icons';
import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {Action, IActionOptions} from '../Action.js';

describe('Actions', () => {
    it('should have a defaultProp hideDisabled set to true', () => {
        expect(Action.defaultProps.hideDisabled).toBe(true);
    });

    it('should add the iconClass on the icon', async () => {
        const iconClass = 'bloup';
        const action: IActionOptions = {
            name: 'action',
            trigger: jest.fn(),
            enabled: true,
            icon: DeleteSize24Px,
            iconClass: iconClass,
        };

        render(<Action action={action} />);

        await screen.findByRole('img', {name: 'delete'});

        expect(screen.getByRole('img', {name: 'delete'})).toHaveClass(iconClass);
    });

    it('should have icon more if no icon is defined', async () => {
        const action: IActionOptions = {
            name: 'action',
            trigger: jest.fn(),
            enabled: true,
        };
        render(<Action action={action} />);

        await screen.findByRole('img', {name: 'more'});
        expect(screen.getByRole('img', {name: 'more'})).toBeInTheDocument();
    });

    it('should display the action name', () => {
        const action: IActionOptions = {
            name: 'action',
            trigger: jest.fn(),
            enabled: true,
            icon: DeleteSize24Px,
            iconClass: null,
        };
        render(<Action action={action} />);

        expect(screen.getByText('action')).toBeInTheDocument();
    });

    it('display a <Tooltip /> if the action has a tooltip', async () => {
        const actionWithToolip = {
            name: 'action',
            trigger: jest.fn(),
            enabled: true,
            tooltip: 'A useful tooltip',
        };

        render(<Action action={actionWithToolip} />);

        await userEvent.hover(screen.getByText(/action/i));

        expect(screen.getByText('A useful tooltip')).toBeInTheDocument();
    });
});
