import {shallow} from 'enzyme';
import * as React from 'react';

import {BarSeries} from '../components/BarSeries';
import {ChartUtils} from '../components/ChartUtils';
import {XYChartContextMock, XYChartOnePointContextMock} from './XYChartContextMock';

jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    return {
        ...originReact,
        useContext: jest.fn(),
    };
});

const mockedReact = jest.mocked(React);

describe('<BarSeries />', () => {
    it('should not throw', () => {
        mockedReact.useContext.mockReturnValue(XYChartContextMock);
        expect(() => {
            shallow(<BarSeries />);
            shallow(<BarSeries barRatio={0.5} />);
        }).not.toThrow();
    });

    it('should render a <g>', () => {
        mockedReact.useContext.mockReturnValue(XYChartContextMock);
        const component = shallow(<BarSeries />);

        expect(component.find('g').exists()).toBe(true);
    });

    it('should render a rect for every point in every serie', () => {
        mockedReact.useContext.mockReturnValue(XYChartContextMock);

        const {series} = XYChartContextMock;
        const component = shallow(<BarSeries />);

        expect(component.find('rect').length).toBe(ChartUtils.getXValues(series).length * series.length);
    });

    it('should not throw when there is only one point in a serie', () => {
        mockedReact.useContext.mockReturnValue(XYChartOnePointContextMock);

        expect(() => {
            shallow(<BarSeries />);
        }).not.toThrow();
    });
});
