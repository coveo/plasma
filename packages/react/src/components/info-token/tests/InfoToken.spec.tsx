/* eslint-disable testing-library/no-container */
import {render, screen} from '@test-utils';

import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType} from '../InfoToken.js';

describe('InfoToken', () => {
    it('renders the info icon if the specified size and type are Small and Information', async () => {
        render(<InfoToken type={InfoTokenType.Information} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Small} />);

        const smallToken = await screen.findByRole('img', {name: 'info'});
        expect(smallToken).toBeInTheDocument();
        expect(smallToken).toHaveAttribute('height', '16');
        expect(smallToken).toHaveClass('mod-info');
        expect(smallToken).toHaveClass('stroked');
    });

    it('renders the info icon if the specified size and type are Medium and Information', async () => {
        render(<InfoToken type={InfoTokenType.Information} mode={InfoTokenMode.Filled} size={InfoTokenSize.Medium} />);

        const mediumToken = await screen.findByRole('img', {name: 'info'});
        expect(mediumToken).toBeInTheDocument();
        expect(mediumToken).toHaveAttribute('height', '24');
        expect(mediumToken).toHaveClass('mod-info');
        expect(mediumToken).toHaveClass('filled');
    });

    it('renders the info icon if the specified size and type are Large and Information', async () => {
        render(<InfoToken type={InfoTokenType.Information} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Large} />);

        const largeToken = await screen.findByRole('img', {name: 'info'});
        expect(largeToken).toBeInTheDocument();
        expect(largeToken).toHaveAttribute('height', '32');
        expect(largeToken).toHaveClass('mod-info');
        expect(largeToken).toHaveClass('stroked');
    });

    it('renders the checkmark icon if the specified size and type are Small and Success', async () => {
        render(<InfoToken type={InfoTokenType.Success} mode={InfoTokenMode.Filled} size={InfoTokenSize.Small} />);

        const smallToken = await screen.findByRole('img', {name: 'checkmark'});
        expect(smallToken).toBeInTheDocument();
        expect(smallToken).toHaveAttribute('height', '16');
        expect(smallToken).toHaveClass('mod-success');
        expect(smallToken).toHaveClass('filled');
    });

    it('renders the checkmark icon if the specified size and type are Medium and Success', async () => {
        render(<InfoToken type={InfoTokenType.Success} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Medium} />);

        const mediumToken = await screen.findByRole('img', {name: 'checkmark'});
        expect(mediumToken).toBeInTheDocument();
        expect(mediumToken).toHaveAttribute('height', '24');
        expect(mediumToken).toHaveClass('mod-success');
        expect(mediumToken).toHaveClass('stroked');
    });

    it('renders the checkmark icon if the specified size and type are Large and Success', async () => {
        render(<InfoToken type={InfoTokenType.Success} mode={InfoTokenMode.Filled} size={InfoTokenSize.Large} />);

        const largeToken = await screen.findByRole('img', {name: 'checkmark'});
        expect(largeToken).toBeInTheDocument();
        expect(largeToken).toHaveAttribute('height', '32');
        expect(largeToken).toHaveClass('mod-success');
        expect(largeToken).toHaveClass('filled');
    });

    it('renders the warning icon if the specified size and type are Small and Warning', async () => {
        render(<InfoToken type={InfoTokenType.Warning} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Small} />);

        const smallToken = await screen.findByRole('img', {name: 'warning'});
        expect(smallToken).toBeInTheDocument();
        expect(smallToken).toHaveAttribute('height', '16');
        expect(smallToken).toHaveClass('mod-warning');
        expect(smallToken).toHaveClass('stroked');
    });

    it('renders the warning icon if the specified size and type are Medium and Warning', async () => {
        render(<InfoToken type={InfoTokenType.Warning} mode={InfoTokenMode.Filled} size={InfoTokenSize.Medium} />);

        const mediumToken = await screen.findByRole('img', {name: 'warning'});
        expect(mediumToken).toBeInTheDocument();
        expect(mediumToken).toHaveAttribute('height', '24');
        expect(mediumToken).toHaveClass('mod-warning');
        expect(mediumToken).toHaveClass('filled');
    });

    it('renders the warning icon if the specified size and type are Large and Warning', async () => {
        render(<InfoToken type={InfoTokenType.Warning} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Large} />);

        const largeToken = await screen.findByRole('img', {name: 'warning'});
        expect(largeToken).toBeInTheDocument();
        expect(largeToken).toHaveAttribute('height', '32');
        expect(largeToken).toHaveClass('mod-warning');
        expect(largeToken).toHaveClass('stroked');
    });

    it('renders the critical icon if the specified size and type are Small and Critical', async () => {
        render(<InfoToken type={InfoTokenType.Critical} mode={InfoTokenMode.Filled} size={InfoTokenSize.Small} />);

        const smallToken = await screen.findByRole('img', {name: 'critical'});
        expect(smallToken).toBeInTheDocument();
        expect(smallToken).toHaveAttribute('height', '16');
        expect(smallToken).toHaveClass('mod-error');
        expect(smallToken).toHaveClass('filled');
    });

    it('renders the critical icon if the specified size and type are Medium and Critical', async () => {
        render(<InfoToken type={InfoTokenType.Critical} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Medium} />);

        const mediumToken = await screen.findByRole('img', {name: 'critical'});
        expect(mediumToken).toBeInTheDocument();
        expect(mediumToken).toHaveAttribute('height', '24');
        expect(mediumToken).toHaveClass('mod-error');
        expect(mediumToken).toHaveClass('stroked');
    });

    it('renders the critical icon if the specified size and type are Large and Critical', async () => {
        render(<InfoToken type={InfoTokenType.Critical} mode={InfoTokenMode.Filled} size={InfoTokenSize.Large} />);

        const largeToken = await screen.findByRole('img', {name: 'critical'});
        expect(largeToken).toBeInTheDocument();
        expect(largeToken).toHaveAttribute('height', '32');
        expect(largeToken).toHaveClass('mod-error');
        expect(largeToken).toHaveClass('filled');
    });

    it('renders the tip icon if the specified size and type are Small and Tip', async () => {
        render(<InfoToken type={InfoTokenType.Tip} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Small} />);

        const smallToken = await screen.findByRole('img', {name: 'tip'});
        expect(smallToken).toBeInTheDocument();
        expect(smallToken).toHaveAttribute('height', '16');
        expect(smallToken).toHaveClass('mod-success');
        expect(smallToken).toHaveClass('stroked');
    });

    it('renders the tip icon if the specified size and type are Medium and Tip', async () => {
        render(<InfoToken type={InfoTokenType.Tip} mode={InfoTokenMode.Filled} size={InfoTokenSize.Medium} />);

        const mediumToken = await screen.findByRole('img', {name: 'tip'});
        expect(mediumToken).toBeInTheDocument();
        expect(mediumToken).toHaveAttribute('height', '24');
        expect(mediumToken).toHaveClass('mod-success');
        expect(mediumToken).toHaveClass('filled');
    });

    it('renders the tip icon if the specified size and type are Large and Tip', async () => {
        render(<InfoToken type={InfoTokenType.Tip} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Large} />);

        const largeToken = await screen.findByRole('img', {name: 'tip'});
        expect(largeToken).toBeInTheDocument();
        expect(largeToken).toHaveAttribute('height', '32');
        expect(largeToken).toHaveClass('mod-success');
        expect(largeToken).toHaveClass('stroked');
    });

    it('renders the question icon if the specified size and type are Small and Question', async () => {
        render(<InfoToken type={InfoTokenType.Question} mode={InfoTokenMode.Filled} size={InfoTokenSize.Small} />);

        const smallToken = await screen.findByRole('img', {name: 'question'});
        expect(smallToken).toBeInTheDocument();
        expect(smallToken).toHaveAttribute('height', '16');
        expect(smallToken).toHaveClass('mod-info');
        expect(smallToken).toHaveClass('filled');
    });

    it('renders the question icon if the specified size and type are Medium and Question', async () => {
        render(<InfoToken type={InfoTokenType.Question} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Medium} />);

        const mediumToken = await screen.findByRole('img', {name: 'question'});
        expect(mediumToken).toBeInTheDocument();
        expect(mediumToken).toHaveAttribute('height', '24');
        expect(mediumToken).toHaveClass('mod-info');
        expect(mediumToken).toHaveClass('stroked');
    });

    it('renders the question icon if the specified size and type are Large and Question', async () => {
        render(<InfoToken type={InfoTokenType.Question} mode={InfoTokenMode.Filled} size={InfoTokenSize.Large} />);

        const largeToken = await screen.findByRole('img', {name: 'question'});
        expect(largeToken).toBeInTheDocument();
        expect(largeToken).toHaveAttribute('height', '32');
        expect(largeToken).toHaveClass('mod-info');
        expect(largeToken).toHaveClass('filled');
    });

    it('allows additional classes to be passed down to the token through classnam', async () => {
        render(
            <InfoToken
                type={InfoTokenType.Tip}
                mode={InfoTokenMode.Stroked}
                size={InfoTokenSize.Large}
                className="my-class"
            />
        );

        const largeToken = await screen.findByRole('img', {name: 'tip'});
        expect(largeToken).toBeInTheDocument();
        expect(largeToken).toHaveClass('my-class');
    });
});
