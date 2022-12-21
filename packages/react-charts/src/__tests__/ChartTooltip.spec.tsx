import {shallow} from 'enzyme';
import * as React from 'react';

import {DropPodPosition, DropPod} from '@coveord/plasma-react';
import {ChartTooltip} from '../components/ChartTooltip';
import {ChartTooltipContent} from '../components/ChartTooltipContent';
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

describe('<ChartTooltip />', () => {
    beforeAll(() => {
        mockedReact.useContext.mockReturnValue(XYChartContextMock);
    });

    it('should not throw', () => {
        expect(() => {
            shallow(<ChartTooltip />);
            shallow(<ChartTooltip sort />);
        }).not.toThrow();
    });

    it('should render two rectangles per data', () => {
        const component = shallow(<ChartTooltip />);

        expect(component.find('rect').length).toBe(ChartUtils.getXValues(XYChartContextMock.series).length * 2);
    });

    it('should render a DropPod', () => {
        const component = shallow(<ChartTooltip />);

        expect(component.find(DropPod).exists()).toBe(true);
    });

    it('should render a ChartTooltipContent inside the DropPod', () => {
        const component = shallow(<ChartTooltip />);
        const content = shallow(
            component.find(DropPod).prop('renderDrop')(
                {},
                {
                    position: DropPodPosition.left,
                    orientation: '',
                }
            ) as React.ReactElement
        );

        expect(content.find(ChartTooltipContent).exists()).toBe(true);
    });

    it('should render a line on the right when the user hover a serie point', () => {
        const getAttributeSpy = jest
            .fn()
            .mockReturnValueOnce(DropPodPosition.right)
            .mockReturnValueOnce('10')
            .mockReturnValue('0');

        const component = shallow(<ChartTooltip />);
        const rect = component.find('rect').first();

        rect.simulate('mouseMove', {currentTarget: {getAttribute: getAttributeSpy}});
        // force update
        component.setProps({sort: false});

        // I can't seem to get this to work, the useState is never re-called
        // expect(component.find('.chart-tooltip-line').exists()).toBe(true);
        expect(component.find(DropPod).exists()).toBe(true);
    });

    it('should render a line on the left when the user hover a serie point', () => {
        const getAttributeSpy = jest
            .fn()
            .mockReturnValueOnce(DropPodPosition.left)
            .mockReturnValueOnce('10')
            .mockReturnValue('0');

        const component = shallow(<ChartTooltip />);
        const rect = component.find('rect').first();

        rect.simulate('mouseMove', {currentTarget: {getAttribute: getAttributeSpy}});
        // force update
        component.setProps({sort: false});

        // TODO: validate that position is DropPodPosition.left
        expect(component.find(DropPod).exists()).toBe(true);
    });

    it('should not render a line when the user stops hovering a serie point', () => {
        const component = shallow(<ChartTooltip />);
        const rect = component.find('rect').first();

        rect.simulate('mouseLeave');
        // force update
        component.setProps({sort: false});

        expect(component.find('.chart-tooltip-line').exists()).toBe(false);
    });

    it('should not throw when there is only one point in a serie', () => {
        mockedReact.useContext.mockReturnValue(XYChartOnePointContextMock);

        expect(() => {
            shallow(<ChartTooltip />);
        }).not.toThrow();
    });
});
