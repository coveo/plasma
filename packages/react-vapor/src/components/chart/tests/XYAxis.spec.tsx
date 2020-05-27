import * as d3 from 'd3';
import {shallow} from 'enzyme';
import React from 'react';

import {XYAxis} from '../XYAxis';
import {XYChartContext} from '../XYChart';
import {XYChartContextMock} from './XYChartContextMock';

describe('<XYAxis />', () => {
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

    it('should reduce the width and height in the context provider', () => {
        const component = shallow(<XYAxis />);

        const context = component.find(XYChartContext.Provider).prop('value');
        expect(context.width).toBeLessThan(XYChartContextMock.width);
        expect(context.height).toBeLessThan(XYChartContextMock.height);
    });

    it('should render as many x ticks as there are points in the scale from the context', () => {
        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);
        const component = shallow(<XYAxis x={{show: true}} y={{show: false}} />);

        expect(component.find('.x-axis-tick').length).toBe(XYChartContextMock.xScale.domain().length);
    });

    it('should render as many x ticks labels as d3 determine', () => {
        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);
        const component = shallow(<XYAxis x={{show: true}} y={{show: false}} />);

        // D3 doesn't enforce a strict tick count
        const linearScale = d3.scale
            .linear()
            .range(XYChartContextMock.xScale.range())
            .domain(XYChartContextMock.xDomain);

        expect(component.find('.x-axis-tick text').length).toBe(
            linearScale.ticks(XYChartContextMock.xTicksCount).length
        );
    });

    it('should render as many y ticks as defined in the context', () => {
        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);
        const component = shallow(<XYAxis x={{show: false}} y={{show: true}} />);

        // D3 doesn't enforce a strict tick count
        expect(component.find('.y-axis-tick').length).toBe(
            XYChartContextMock.yScale.ticks(XYChartContextMock.yTicksCount).length
        );
    });
});
