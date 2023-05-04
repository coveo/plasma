import {render, screen} from '../../../../jest/utils';
import {LineSeries} from '../LineSeries';
import {XYChartContext} from '../XYChart';
import {XYChartContextMock} from './XYChartContextMock';

describe('<LineSeries />', () => {
    it('should render a graph', () => {
        render(
            <XYChartContext.Provider value={XYChartContextMock}>
                <svg role="application" width={XYChartContextMock.width} height={XYChartContextMock.height}>
                    <LineSeries />
                </svg>
            </XYChartContext.Provider>
        );

        expect(screen.getByRole('application')).toMatchInlineSnapshot(`
            <svg
              height="50"
              role="application"
              width="10"
            >
              <g
                class="line-series"
              >
                <path
                  d="M0,1.5L2,1.5L4,3L6,1L8,6L10,4"
                  fill="none"
                  stroke="blue"
                  stroke-width="2"
                />
                <path
                  d="M0,2.5L2,2L4,0L6,3L8,3.5L10,2"
                  fill="none"
                  stroke="green"
                  stroke-width="2"
                />
              </g>
            </svg>
        `);
    });
});
