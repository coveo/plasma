import {shallow} from 'enzyme';
import React from 'react';

import {ChartUtils} from '../ChartUtils';
import {ScatterSeries} from '../ScatterSeries';
import {XYChartContextMock} from './XYChartContextMock';

describe('<ScatterSeries />', () => {
    it('should not throw', () => {
        expect(() => {
            shallow(<ScatterSeries />);
            shallow(<ScatterSeries radius={1337} />);
        }).not.toThrow();
    });

    it('should render a <g>', () => {
        const component = shallow(<ScatterSeries />);
        expect(component.find('g').exists()).toBe(true);
    });

    it('should render a circle per point in every series', () => {
        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);

        const {series} = XYChartContextMock;
        const component = shallow(<ScatterSeries />);

        expect(component.find('circle').length).toBe(ChartUtils.getXValues(series).length * series.length);
    });
});
