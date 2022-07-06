import {shallow} from 'enzyme';
import * as React from 'react';
import {mocked} from 'ts-jest/utils';

import {XGrid} from '../XGrid';
import {XYChartContextMock} from './XYChartContextMock';

vi.mock('react', () => {
    const originReact = vi.requireActual('react');
    return {
        ...originReact,
        useContext: vi.fn(),
    };
});

const mockedReact = mocked(React);

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
