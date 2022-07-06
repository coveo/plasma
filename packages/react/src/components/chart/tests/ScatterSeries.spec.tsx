import {shallow} from 'enzyme';
import * as React from 'react';
import {mocked} from 'ts-jest/utils';

import {ChartUtils} from '../ChartUtils';
import {ScatterSeries} from '../ScatterSeries';
import {XYChartContextMock} from './XYChartContextMock';

vi.mock('react', () => {
    const originReact = vi.requireActual('react');
    return {
        ...originReact,
        useContext: vi.fn(),
    };
});

const mockedReact = mocked(React);

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
