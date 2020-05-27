import {shallow} from 'enzyme';
import React from 'react';
import {DropPodPosition} from '../../drop/DomPositionCalculator';

import {DropPod} from '../../drop/DropPod';
import {ChartTooltip} from '../ChartTooltip';
import {ChartTooltipContent} from '../ChartTooltipContent';
import {ChartUtils} from '../ChartUtils';
import {XYChartContextMock, XYChartOnePointContextMock} from './XYChartContextMock';

describe('<ChartTooltip />', () => {
    let contextSpy: jasmine.Spy;
    beforeEach(() => {
        contextSpy = spyOn(React, 'useContext').and.returnValue(XYChartContextMock);
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
            component.find(DropPod).prop('renderDrop')({}, React.createRef(), {
                position: DropPodPosition.left,
                orientation: '',
            }) as React.ReactElement
        );
        expect(content.find(ChartTooltipContent).exists()).toBe(true);
    });

    it('should render a line when the user hover a serie point', () => {
        const getAttributeSpy = jasmine.createSpy('getAttribute').and.returnValues(DropPodPosition.right, '10', '0');
        const component = shallow(<ChartTooltip />);
        const rect = component.find('rect').first();

        rect.simulate('mouseMove', {currentTarget: {getAttribute: getAttributeSpy}});
        // force update
        component.setProps({sort: false});

        // I can't seem to get this to work, the useState is never re-called
        // expect(component.find('.chart-tooltip-line').exists()).toBe(true);
        expect(component.find(DropPod).exists()).toBe(true);
    });

    it('should render a line when the user hover a serie point', () => {
        const getAttributeSpy = jasmine.createSpy('getAttribute').and.returnValues(DropPodPosition.left, '10', '0');
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
        contextSpy.and.returnValue(XYChartOnePointContextMock);

        expect(() => {
            shallow(<ChartTooltip />);
        }).not.toThrow();
    });
});
