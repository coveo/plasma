import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {TooltipPlacement} from '../../../utils';
import {Tooltip} from '../Tooltip';

describe('Tooltip', () => {
    it('displays the title only when hovering over the children', async () => {
        render(<Tooltip title="the title">hover me</Tooltip>);

        expect(screen.queryByText(/the title/i)).not.toBeInTheDocument();
        await userEvent.hover(screen.getByText(/hover me/i));
        expect(await screen.findByText(/the title/i)).toBeInTheDocument();
    });

    it('renders just the children when no title is specified', async () => {
        const {container} = render(<Tooltip>hover me</Tooltip>);
        expect(screen.getByText(/hover me/i)).toBeInTheDocument();
        await userEvent.hover(screen.getByText(/hover me/i));
        expect(container).toHaveTextContent('hover me');
    });

    it('render the tooltip on the top by default', async () => {
        render(<Tooltip title="the title">hover me</Tooltip>);

        await userEvent.hover(screen.getByText(/hover me/i));
        const tooltipContent = await screen.findByText(/the title/i);
        expect(tooltipContent.parentElement).toHaveAttribute('data-popper-placement', 'top');
    });

    it('render the tooltip on the right when placement is "right"', async () => {
        render(
            <Tooltip title="the title" placement={TooltipPlacement.Right}>
                hover me
            </Tooltip>,
        );

        await userEvent.hover(screen.getByText(/hover me/i));
        const tooltipContent = await screen.findByText(/the title/i);
        expect(tooltipContent.parentElement).toHaveAttribute('data-popper-placement', 'right');
    });

    it('render the tooltip on the bottom when placement is "bottom"', async () => {
        render(
            <Tooltip title="the title" placement={TooltipPlacement.Bottom}>
                hover me
            </Tooltip>,
        );

        await userEvent.hover(screen.getByText(/hover me/i));
        const tooltipContent = await screen.findByText(/the title/i);
        expect(tooltipContent.parentElement).toHaveAttribute('data-popper-placement', 'bottom');
    });

    it('render the tooltip on the left when placement is "left"', async () => {
        render(
            <Tooltip title="the title" placement={TooltipPlacement.Left}>
                hover me
            </Tooltip>,
        );

        await userEvent.hover(screen.getByText(/hover me/i));
        const tooltipContent = await screen.findByText(/the title/i);
        expect(tooltipContent.parentElement).toHaveAttribute('data-popper-placement', 'left');
    });

    it('render the tooltip on the top when placement is "top"', async () => {
        render(
            <Tooltip title="the title" placement={TooltipPlacement.Top}>
                hover me
            </Tooltip>,
        );

        await userEvent.hover(screen.getByText(/hover me/i));
        const tooltipContent = await screen.findByText(/the title/i);
        expect(tooltipContent.parentElement).toHaveAttribute('data-popper-placement', 'top');
    });
});
