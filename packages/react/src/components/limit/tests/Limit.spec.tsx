import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {Limit} from '../Limit.js';

describe('Limit', () => {
    it('renders Limit component with default values', () => {
        render(<Limit id="🆔" title="My limit" limit={100} />);

        expect(screen.getByText(/100/i)).toBeInTheDocument();
        expect(screen.getByText(/my limit/i)).toBeInTheDocument();
    });

    it('renders Limit component with custom values', async () => {
        render(<Limit id="🆔" title="My limit" usage={33} limit={130} limitLabel="Threshold" isHistoryIncluded />);

        expect(screen.getByText(/usage/i)).toBeInTheDocument();
        expect(screen.getByText(/threshold/i)).toBeInTheDocument();
        expect(screen.getByText(/130/i)).toBeInTheDocument();
        expect(screen.getByText(/33/i)).toBeInTheDocument();
        expect(await screen.findByRole('button', {name: /chart/i})).toBeInTheDocument();
    });

    it('renders an editable Limit component when editable', () => {
        render(<Limit id="🆔" title="My limit" limit={100} usage={33} isLimitEditable />);
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

    it('calls the onClick method on history icon onClick', async () => {
        const clickSpy = jest.fn();
        render(<Limit id="🆔" title="My limit" limit={100} isHistoryIncluded onHistoryIconClick={clickSpy} />);
        const historyIcon = await screen.findByRole('button', {name: /chartpie/i});
        await userEvent.click(historyIcon);

        expect(clickSpy).toHaveBeenCalled();
    });

    it('shows thousands separators on big numbers', () => {
        render(<Limit id="🆔" title="My limit" usage={42000000.5} limit={100000000.5} />);

        expect(screen.getByText('42,000,000.5')).toBeInTheDocument();
        expect(screen.getByText('100,000,000.5')).toBeInTheDocument();
    });

    it('shows the limit label even if the limit value is zero', () => {
        render(<Limit id="🆔" title="My limit" limit={0} limitLabel="abcde" />);

        expect(screen.getByText(/abcde/i)).toBeInTheDocument();
    });

    it('hides the limit label when the limit value is undefined', () => {
        render(<Limit id="🆔" title="My limit" limit={undefined} limitLabel="abcde" />);

        expect(screen.queryByText(/abcde/i)).not.toBeInTheDocument();
    });

    it('hides the usage label when the usage value is undefined', () => {
        render(<Limit id="🆔" title="My limit" usage={undefined} />);

        expect(screen.queryByText(/usage/i)).not.toBeInTheDocument();
    });

    it('hides both the usage and the limit when they are undefined', () => {
        const {container} = render(<Limit id="🆔" title="My limit" />);

        expect(container).toMatchInlineSnapshot(`
            <div
              id="app"
            >
              <div
                class="limit-box mb2"
              >
                <div
                  class="limit-box-main p2 pb1"
                >
                  <div
                    class="flex space-between"
                  >
                    <label
                      class="form-control-label"
                    >
                       
                      My limit
                    </label>
                  </div>
                  <div
                    class="limit-box-numbers pt1 flex"
                  />
                </div>
                <div
                  class="limit-box-footer no-limit"
                >
                  <div
                    class=""
                  />
                </div>
              </div>
            </div>
        `);
    });
});
