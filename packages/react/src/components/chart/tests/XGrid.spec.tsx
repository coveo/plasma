import {shallow} from 'enzyme';
import * as React from 'react';

import {XGrid} from '../XGrid.js';
import {XYChartContextMock} from './XYChartContextMock.js';

jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    return {
        ...originReact,
        useContext: jest.fn(),
    };
});

const mockedReact = jest.mocked(React);

describe('<XGrid />', () => {
    beforeAll(() => {
        mockedReact.useContext.mockReturnValue(XYChartContextMock);
    });

    it('should not throw with the default context', () => {
        expect(() => {
            shallow(<XGrid />);
            shallow(<XGrid padding={10} />);
            shallow(<XGrid padding={30} color="red" />);
        }).not.toThrow();
    });

    it('should not throw with a custom context', () => {
        expect(() => {
            shallow(<XGrid />);
            shallow(<XGrid padding={10} />);
            shallow(<XGrid padding={30} color="red" />);
        }).not.toThrow();
    });

    it('should render a line', () => {
        const component = shallow(<XGrid />);

        expect(component.find('line').exists()).toBe(true);
    });
});
