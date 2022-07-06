import {shallow} from 'enzyme';
import * as React from 'react';
import {mocked} from 'ts-jest/utils';

import {ChartTooltipContent} from '../ChartTooltipContent';
import {XYChartContextMock} from './XYChartContextMock';

vi.mock('react', () => {
    const originReact = vi.requireActual('react');
    return {
        ...originReact,
        useContext: vi.fn(),
    };
});

const mockedReact = mocked(React);

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
