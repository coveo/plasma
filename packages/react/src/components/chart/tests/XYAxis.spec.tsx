import {render, screen} from '../../../../jest/utils';

import {XYAxis} from '../XYAxis';
import {XYChartContext} from '../XYChart';
import {XYChartContextMock} from './XYChartContextMock';

describe('<XYAxis />', () => {
    it('should render as many x ticks as there are points in the scale from the context', () => {
        render(
            <XYChartContext.Provider value={XYChartContextMock}>
                <svg role="application" width={XYChartContextMock.width} height={XYChartContextMock.height}>
                    <XYAxis x={{show: true}} y={{show: false}} />
                </svg>
            </XYChartContext.Provider>,
        );

        expect(screen.getByRole('application')).toMatchSnapshot();
    });

    it('should render as many y ticks as defined in the context', () => {
        render(
            <XYChartContext.Provider value={XYChartContextMock}>
                <svg role="application" width={XYChartContextMock.width} height={XYChartContextMock.height}>
                    <XYAxis x={{show: false}} y={{show: true}} />
                </svg>
            </XYChartContext.Provider>,
        );

        expect(screen.getByRole('application')).toMatchSnapshot();
    });
});
