import {render, screen} from '../../../../jest/utils';
import {ScatterSeries} from '../ScatterSeries';
import {XYChartContext} from '../XYChart';
import {XYChartContextMock} from './XYChartContextMock';

describe('<ScatterSeries />', () => {
    it('should render a circle per point in every series', () => {
        render(
            <XYChartContext.Provider value={XYChartContextMock}>
                <svg role="application" width={XYChartContextMock.width} height={XYChartContextMock.height}>
                    <ScatterSeries />
                </svg>
            </XYChartContext.Provider>
        );

        expect(screen.getByRole('application')).toMatchSnapshot();
    });
});
