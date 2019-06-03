import {shallow} from 'enzyme';
import * as React from 'react';

import {BarSeries} from '../BarSeries';
import {ChartUtils} from '../ChartUtils';
import {XYChartContextMock} from './XYChartContextMock';

describe('<BarSeries />', () => {
    it('should not throw', () => {
        expect(() => {
            shallow(<BarSeries />);
            shallow(<BarSeries barRatio={0.5} />);
        }).not.toThrow();
    });

    it('should render a <g>', () => {
        const component = shallow(<BarSeries />);
        expect(component.find('g').exists()).toBe(true);
    });

    it('should render a rect for every point in every serie', () => {
        spyOn(React, 'useContext').and.returnValue(XYChartContextMock);

        const {series} = XYChartContextMock;
        const component = shallow(<BarSeries />);

        expect(component.find('rect').length).toBe(ChartUtils.getXValues(series).length * series.length);
    });
});
