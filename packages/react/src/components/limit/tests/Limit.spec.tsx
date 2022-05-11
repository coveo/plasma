import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {Limit} from '../Limit';

describe('Limit', () => {
    const anyId = 'limit1';
    const anyTitle = 'test limit';
    const anyUsage = 33;
    const customLimit = 130;
    const customLimitLabel: string = 'La Soudane';

    it('renders Limit component with default values', () => {
        render(<Limit id={anyId} title={anyTitle} limit={100} />);

        expect(screen.getByText(/100/i)).toBeInTheDocument();
        expect(screen.getByText(/test limit/i)).toBeInTheDocument();
    });

    it('renders Limit component with custom values', async () => {
        render(
            <Limit
                id={anyId}
                title={anyTitle}
                usage={anyUsage}
                limit={customLimit}
                limitLabel={customLimitLabel}
                isHistoryIncluded={true}
            />
        );

        expect(screen.getByText(/usage/i)).toBeInTheDocument();
        expect(screen.getByText(/la soudane/i)).toBeInTheDocument();
        expect(screen.getByText(/130/i)).toBeInTheDocument();
        expect(screen.getByText(/33/i)).toBeInTheDocument();
        expect(await screen.findByRole('button', {name: /chart/i})).toBeInTheDocument();
    });

    it('renders an editable Limit component when editable', () => {
        render(<Limit id={anyId} title={anyTitle} limit={100} usage={anyUsage} isLimitEditable={true} />);
        expect(
            screen.getByRole('spinbutton', {
                name: /limit/i,
            })
        ).toBeInTheDocument();
    });

    it('renders a limit with no limit and with usage', () => {
        render(<Limit id={anyId} title={anyTitle} usage={anyUsage} />);

        expect(screen.getByText(/33/i)).toBeInTheDocument();
        expect(screen.queryByText(/130/i)).not.toBeInTheDocument();
    });

    it('calls the onClick method on history icon onClick', async () => {
        const clickSpy = jest.fn();
        render(
            <Limit id={anyId} title={anyTitle} limit={100} isHistoryIncluded={true} onHistoryIconClick={clickSpy} />
        );
        const historyIcon = await screen.findByRole('button', {name: /chart/i});
        userEvent.click(historyIcon);

        expect(clickSpy).toHaveBeenCalled();
    });
});
