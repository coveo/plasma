import {render, screen} from '../../../../jest/utils';
import {XGrid} from '../XGrid';
import {XYChartContext} from '../XYChart';
import {XYChartContextMock} from './XYChartContextMock';

describe('<XGrid />', () => {
    it('should render a line', () => {
        render(
            <XYChartContext.Provider value={XYChartContextMock}>
                <svg role="application" width={XYChartContextMock.width} height={XYChartContextMock.height}>
                    <XGrid />
                </svg>
            </XYChartContext.Provider>,
        );

        expect(screen.getByRole('application')).toMatchInlineSnapshot(`
            <svg
              height="50"
              role="application"
              width="10"
            >
              <line
                stroke="rgba(0,0,0,0.2)"
                x1="0"
                x2="0"
                y1="50"
                y2="0"
              />
              <line
                stroke="rgba(0,0,0,0.2)"
                y1="50"
                y2="0"
              />
            </svg>
        `);
    });
});
