/* eslint-disable testing-library/no-container */
import {render, screen} from '@test-utils';

import {InfoTokenMode, InfoTokenSize, InfoTokenType} from '../InfoToken';

describe('InfoToken', () => {
    it('renders the infoStrokedSmall icon if the specified size and type are Small and Information', () => {
        render(<InfoToken type={InfoTokenType.Information} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Small} />);

        const smallToken = screen.getByRole('img', {name: 'infoStrokedSmall icon'});
        expect(smallToken).toBeInTheDocument();
        expect(smallToken).toHaveClass('mod-16');
        expect(smallToken).toHaveClass('mod-info');
    });

    it('renders the infoStrokedMedium icon if the specified size and type are Medium and Information', () => {
        render(<InfoToken type={InfoTokenType.Information} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Medium} />);

        const mediumToken = screen.getByRole('img', {name: 'infoStrokedMedium icon'});
        expect(mediumToken).toBeInTheDocument();
        expect(mediumToken).toHaveClass('mod-24');
        expect(mediumToken).toHaveClass('mod-info');
    });

    it('renders the infoStrokedLarge icon if the specified size and type are Large and Information', () => {
        render(<InfoToken type={InfoTokenType.Information} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Large} />);

        const largeToken = screen.getByRole('img', {name: 'infoStrokedLarge icon'});
        expect(largeToken).toBeInTheDocument();
        expect(largeToken).toHaveClass('mod-32');
        expect(largeToken).toHaveClass('mod-info');
    });

    it('renders the checkStrokedSmall icon if the specified size and type are Small and Success', () => {
        render(<InfoToken type={InfoTokenType.Success} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Small} />);

        const smallToken = screen.getByRole('img', {name: 'checkStrokedSmall icon'});
        expect(smallToken).toBeInTheDocument();
        expect(smallToken).toHaveClass('mod-16');
        expect(smallToken).toHaveClass('mod-success');
    });

    it('renders the checkStrokedMedium icon if the specified size and type are Medium and Success', () => {
        render(<InfoToken type={InfoTokenType.Success} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Medium} />);

        const mediumToken = screen.getByRole('img', {name: 'checkStrokedMedium icon'});
        expect(mediumToken).toBeInTheDocument();
        expect(mediumToken).toHaveClass('mod-24');
        expect(mediumToken).toHaveClass('mod-success');
    });

    it('renders the checkStrokedLarge icon if the specified size and type are Large and Success', () => {
        render(<InfoToken type={InfoTokenType.Success} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Large} />);

        const largeToken = screen.getByRole('img', {name: 'checkStrokedLarge icon'});
        expect(largeToken).toBeInTheDocument();
        expect(largeToken).toHaveClass('mod-32');
        expect(largeToken).toHaveClass('mod-success');
    });

    it('renders the warningStrokedSmall icon if the specified size and type are Small and Warning', () => {
        render(<InfoToken type={InfoTokenType.Warning} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Small} />);

        const smallToken = screen.getByRole('img', {name: 'warningStrokedSmall icon'});
        expect(smallToken).toBeInTheDocument();
        expect(smallToken).toHaveClass('mod-16');
        expect(smallToken).toHaveClass('mod-warning');
    });

    it('renders the warningStrokedMedium icon if the specified size and type are Medium and Warning', () => {
        render(<InfoToken type={InfoTokenType.Warning} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Medium} />);

        const mediumToken = screen.getByRole('img', {name: 'warningStrokedMedium icon'});
        expect(mediumToken).toBeInTheDocument();
        expect(mediumToken).toHaveClass('mod-24');
        expect(mediumToken).toHaveClass('mod-warning');
    });

    it('renders the warningStrokedLarge icon if the specified size and type are Large and Warning', () => {
        render(<InfoToken type={InfoTokenType.Warning} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Large} />);

        const largeToken = screen.getByRole('img', {name: 'warningStrokedLarge icon'});
        expect(largeToken).toBeInTheDocument();
        expect(largeToken).toHaveClass('mod-32');
        expect(largeToken).toHaveClass('mod-warning');
    });

    it('renders the criticalStrokedSmall icon if the specified size and type are Small and Critical', () => {
        render(<InfoToken type={InfoTokenType.Critical} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Small} />);

        const smallToken = screen.getByRole('img', {name: 'criticalStrokedSmall icon'});
        expect(smallToken).toBeInTheDocument();
        expect(smallToken).toHaveClass('mod-16');
        expect(smallToken).toHaveClass('mod-error');
    });

    it('renders the criticalStrokedMedium icon if the specified size and type are Medium and Critical', () => {
        render(<InfoToken type={InfoTokenType.Critical} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Medium} />);

        const mediumToken = screen.getByRole('img', {name: 'criticalStrokedMedium icon'});
        expect(mediumToken).toBeInTheDocument();
        expect(mediumToken).toHaveClass('mod-24');
        expect(mediumToken).toHaveClass('mod-error');
    });

    it('renders the criticalStrokedLarge icon if the specified size and type are Large and Critical', () => {
        render(<InfoToken type={InfoTokenType.Critical} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Large} />);

        const largeToken = screen.getByRole('img', {name: 'criticalStrokedLarge icon'});
        expect(largeToken).toBeInTheDocument();
        expect(largeToken).toHaveClass('mod-32');
        expect(largeToken).toHaveClass('mod-error');
    });

    it('renders the ideaStrokedSmall icon if the specified size and type are Small and Tip', () => {
        render(<InfoToken type={InfoTokenType.Tip} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Small} />);

        const smallToken = screen.getByRole('img', {name: 'ideaStrokedSmall icon'});
        expect(smallToken).toBeInTheDocument();
        expect(smallToken).toHaveClass('mod-16');
        expect(smallToken).toHaveClass('mod-success');
    });

    it('renders the ideaStrokedMedium icon if the specified size and type are Medium and Tip', () => {
        render(<InfoToken type={InfoTokenType.Tip} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Medium} />);

        const mediumToken = screen.getByRole('img', {name: 'ideaStrokedMedium icon'});
        expect(mediumToken).toBeInTheDocument();
        expect(mediumToken).toHaveClass('mod-24');
        expect(mediumToken).toHaveClass('mod-success');
    });

    it('renders the ideaStrokedLarge icon if the specified size and type are Large and Tip', () => {
        render(<InfoToken type={InfoTokenType.Tip} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Large} />);

        const largeToken = screen.getByRole('img', {name: 'ideaStrokedLarge icon'});
        expect(largeToken).toBeInTheDocument();
        expect(largeToken).toHaveClass('mod-32');
        expect(largeToken).toHaveClass('mod-success');
    });

    it('renders the questionStrokedSmall icon if the specified size and type are Small and Question', () => {
        render(<InfoToken type={InfoTokenType.Question} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Small} />);

        const smallToken = screen.getByRole('img', {name: 'questionStrokedSmall icon'});
        expect(smallToken).toBeInTheDocument();
        expect(smallToken).toHaveClass('mod-16');
        expect(smallToken).toHaveClass('mod-info');
    });

    it('renders the questionStrokedMedium icon if the specified size and type are Medium and Question', () => {
        render(<InfoToken type={InfoTokenType.Question} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Medium} />);

        const mediumToken = screen.getByRole('img', {name: 'questionStrokedMedium icon'});
        expect(mediumToken).toBeInTheDocument();
        expect(mediumToken).toHaveClass('mod-24');
        expect(mediumToken).toHaveClass('mod-info');
    });

    it('renders the questionStrokedLarge icon if the specified size and type are Large and Question', () => {
        render(<InfoToken type={InfoTokenType.Question} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Large} />);

        const largeToken = screen.getByRole('img', {name: 'questionStrokedLarge icon'});
        expect(largeToken).toBeInTheDocument();
        expect(largeToken).toHaveClass('mod-32');
        expect(largeToken).toHaveClass('mod-info');
    });

    it('renders with a "filled" class is mode is "Filled"', () => {
        const {container} = render(
            <InfoToken type={InfoTokenType.Information} mode={InfoTokenMode.Filled} size={InfoTokenSize.Large} />
        );

        expect(container.querySelector('.filled')).toBeInTheDocument();
    });

    it('does not render with a "filled" class is mode is "Stroked"', () => {
        const {container} = render(
            <InfoToken type={InfoTokenType.Information} mode={InfoTokenMode.Stroked} size={InfoTokenSize.Large} />
        );

        expect(container.querySelector('.filled')).not.toBeInTheDocument();
    });
});
