import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {Limit} from '../Limit';

describe('Limit', () => {
    it('renders Limit component with default values', () => {
        render(<Limit id="🆔" title="My limit" limit={100} />);

        expect(screen.getByText(/100/i)).toBeInTheDocument();
        expect(screen.getByText(/my limit/i)).toBeInTheDocument();
    });

    it('renders Limit component with custom values', () => {
        render(
            <Limit id="🆔" title="My limit" usage={33} limit={130} limitLabel="Threshold" isHistoryIncluded={true} />
        );

        expect(screen.getByText(/usage/i)).toBeInTheDocument();
        expect(screen.getByText(/threshold/i)).toBeInTheDocument();
        expect(screen.getByText(/130/i)).toBeInTheDocument();
        expect(screen.getByText(/33/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/menuanalytics icon/i)).toBeInTheDocument();
    });

    it('renders an editable Limit component when editable', () => {
        render(<Limit id="🆔" title="My limit" limit={100} usage={33} isLimitEditable={true} />);
        expect(
            screen.getByRole('spinbutton', {
                name: /limit/i,
            })
        ).toBeInTheDocument();
    });

    it('renders a limit with no limit and with usage', () => {
        render(<Limit id="🆔" title="My limit" usage={33} />);

        expect(screen.getByText(/33/i)).toBeInTheDocument();
        expect(screen.queryByText(/130/i)).not.toBeInTheDocument();
    });

    it('calls the onClick method on history icon onClick', () => {
        const clickSpy = jest.fn();
        render(<Limit id="🆔" title="My limit" limit={100} isHistoryIncluded={true} onHistoryIconClick={clickSpy} />);
        const historyIcon = screen.getByLabelText(/menuanalytics icon/i);
        userEvent.click(historyIcon);

        expect(clickSpy).toHaveBeenCalled();
    });

    it('shows thousands separators on big numbers', () => {
        render(<Limit id="🆔" title="My limit" usage={42000000.5} limit={100000000.5} />);

        expect(screen.getByText('42,000,000.5')).toBeInTheDocument();
        expect(screen.getByText('100,000,000.5')).toBeInTheDocument();
    });
});
