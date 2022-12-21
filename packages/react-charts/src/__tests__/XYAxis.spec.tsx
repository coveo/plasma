import {scaleLinear} from 'd3-scale';
import {shallow} from 'enzyme';
import * as React from 'react';

import {XYAxis} from '../components/XYAxis';
import {XYChartContext} from '../components/XYChart';
import {XYChartContextMock} from './XYChartContextMock';

jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    return {
        ...originReact,
        useContext: jest.fn(),
    };
});

const mockedReact = jest.mocked(React);

describe('<XYAxis />', () => {
    beforeAll(() => {
        mockedReact.useContext.mockReturnValue(XYChartContextMock);
    });

    it('should not throw', () => {
        expect(() => {
            shallow(<XYAxis />);
            shallow(<XYAxis x={{show: false}} />);
            shallow(<XYAxis x={{size: 25}} y={{innerPadding: 30}} />);
            shallow(
                <XYAxis
                    x={{size: 25, innerPadding: 50, show: true, tickSize: 10}}
                    y={{size: 50, innerPadding: 10, show: false, tickSize: 5}}
                />
            );
        }).not.toThrow();
    });

    it('should render a context provider', () => {
        const component = shallow(<XYAxis />);

        const provider = component.find(XYChartContext.Provider);

        expect(provider.exists()).toBe(true);
    });

    it('should render as many x ticks as there are points in the scale from the context', () => {
        const component = shallow(<XYAxis x={{show: true}} y={{show: false}} />);

        expect(component.find('.x-axis-tick').length).toBe(XYChartContextMock.xScale.domain().length);
    });

    it('should render as many x ticks labels as d3 determine', () => {
        const component = shallow(<XYAxis x={{show: true}} y={{show: false}} />);

        // D3 doesn't enforce a strict tick count
        const linearScale = scaleLinear().range(XYChartContextMock.xScale.range()).domain(XYChartContextMock.xDomain);

        expect(component.find('.x-axis-tick text').length).toBe(
            linearScale.ticks(XYChartContextMock.xTicksCount).length
        );
    });

    it('should render as many y ticks as defined in the context', () => {
        const component = shallow(<XYAxis x={{show: false}} y={{show: true}} />);

        // D3 doesn't enforce a strict tick count
        expect(component.find('.y-axis-tick').length).toBe(
            XYChartContextMock.yScale.ticks(XYChartContextMock.yTicksCount).length
        );
    });
});
