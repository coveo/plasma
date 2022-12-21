import {shallow} from 'enzyme';
import * as React from 'react';

import {ChartUtils} from '../components/ChartUtils';
import {ScatterSeries} from '../components/ScatterSeries';
import {XYChartContextMock} from './XYChartContextMock';

jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    return {
        ...originReact,
        useContext: jest.fn(),
    };
});

const mockedReact = jest.mocked(React);

describe('<ScatterSeries />', () => {
    beforeAll(() => {
        mockedReact.useContext.mockReturnValue(XYChartContextMock);
    });

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
        const {series} = XYChartContextMock;
        const component = shallow(<ScatterSeries />);

        expect(component.find('circle').length).toBe(ChartUtils.getXValues(series).length * series.length);
    });
});
