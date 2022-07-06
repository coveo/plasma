import {shallow} from 'enzyme';
import * as React from 'react';
import {mocked} from 'ts-jest/utils';

import {BarSeries} from '../BarSeries';
import {ChartUtils} from '../ChartUtils';
import {XYChartContextMock, XYChartOnePointContextMock} from './XYChartContextMock';

vi.mock('react', () => {
    const originReact = vi.requireActual('react');
    return {
        ...originReact,
        useContext: vi.fn(),
    };
});

const mockedReact = mocked(React);

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
