import {shallow} from 'enzyme';
import React from 'react';

import {ChartTooltipContent} from '../ChartTooltipContent';
import {XYChartContextMock} from './XYChartContextMock';

describe('<ChartTooltipContent />', () => {
    beforeEach(() => {
        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);
    });

    it('should not throw', () => {
        expect(() => {
            shallow(<ChartTooltipContent x={0} sort={true} />);
            shallow(<ChartTooltipContent x={1} sort={false} />);
        }).not.toThrow();
    });

    it('should render a div for the title', () => {
        const component = shallow(<ChartTooltipContent x={0} sort={true} />);
        expect(component.find('.tooltip-serie-title').exists()).toBe(true);
    });

    it('should render a div for every serie', () => {
        const component = shallow(<ChartTooltipContent x={0} sort={true} />);
        expect(component.find('.tooltip-serie-row').length).toBe(XYChartContextMock.series.length);
    });
});
