import userEvent from '@testing-library/user-event';
import {render, screen} from '../../../../jest/utils';
import {ChartTooltip} from '../ChartTooltip';
import {XYChartContext} from '../XYChart';
import {XYChartContextMock} from './XYChartContextMock';

describe('<ChartTooltip />', () => {
    it('renders a tooltip when the user hover rectangles', async () => {
        const user = userEvent.setup();
        const {container} = render(
            <XYChartContext.Provider value={XYChartContextMock}>
                <svg role="application" width={XYChartContextMock.width} height={XYChartContextMock.height}>
                    <ChartTooltip />
                </svg>
            </XYChartContext.Provider>
        );

        expect(screen.getByRole('application')).toMatchSnapshot();

        // eslint-disable-next-line
        await user.hover(container.querySelectorAll('rect')[0]);

        expect(screen.getByText('First')).toBeVisible();

        // eslint-disable-next-line
        await user.unhover(container.querySelectorAll('rect')[0]);

        expect(screen.queryByText('First')).not.toBeVisible();
    });
});
