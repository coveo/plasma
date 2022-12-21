import {shallow} from 'enzyme';
import * as React from 'react';

import {LineSeries} from '../components/LineSeries';
import {XYChartContextMock} from './XYChartContextMock';

jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    return {
        ...originReact,
        useContext: jest.fn(),
    };
});

const mockedReact = jest.mocked(React);

describe('<LineSeries />', () => {
    beforeAll(() => {
        mockedReact.useContext.mockReturnValue(XYChartContextMock);
    });

    it('should not throw', () => {
        expect(() => {
            shallow(<LineSeries />);
            shallow(<LineSeries interpolate="monotone" strokeWith={2} />);
        }).not.toThrow();
    });

    it('should render a <g>', () => {
        const component = shallow(<LineSeries />);

        expect(component.find('g').exists()).toBe(true);
    });

    it('should render a path for every serie', () => {
        const {series} = XYChartContextMock;
        const component = shallow(<LineSeries />);

        expect(component.find('path').length).toBe(series.length);
    });
});
