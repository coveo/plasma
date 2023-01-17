import {shallow} from 'enzyme';
import * as React from 'react';

import {ChartTooltipContent} from '../ChartTooltipContent.js';
import {XYChartContextMock} from './XYChartContextMock.js';

jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    return {
        ...originReact,
        useContext: jest.fn(),
    };
});

const mockedReact = jest.mocked(React);

describe('<ChartTooltipContent />', () => {
    beforeEach(() => {
        mockedReact.useContext.mockReturnValue(XYChartContextMock);
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
});
