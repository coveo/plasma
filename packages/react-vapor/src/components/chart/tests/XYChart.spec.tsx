import {shallow} from 'enzyme';
import * as React from 'react';

import {XYChart, XYChartContext} from '../XYChart';
import {XYChartContextMock} from './XYChartContextMock';

describe('<XYChart />', () => {
    it('should not throw', () => {
        expect(() => {
            shallow(<XYChart height={10} width={50} series={[]} />);
            shallow(<XYChart height={10} width={50} series={XYChartContextMock.series} />);
            shallow(<XYChart height={10} width={50} series={XYChartContextMock.series} padding={10} />);
            shallow(
                <XYChart
                    height={10}
                    width={50}
                    series={XYChartContextMock.series.concat({label: 'name', data: []})}
                    padding={{top: 10}}
                />
            );
            shallow(
                <XYChart
                    height={10}
                    width={50}
                    series={XYChartContextMock.series}
                    colorPattern={['red', 'rgba(255,0,0,0.4)', '#abc']}
                    xFormat={(value: number) => value.toFixed(2)}
                    yFormat={(value: number) => value * 10 + '%'}
                    xTicksCount={5}
                    yTicksCount={10}
                />
            );
        }).not.toThrow();
    });

    it('should render a context provider', () => {
        const component = shallow(<XYChart height={100} width={100} series={XYChartContextMock.series} />);

        const provider = component.find(XYChartContext.Provider);
        expect(provider.exists()).toBe(true);
    });

    it('should render a context provider', () => {
        const colorPattern = ['red', 'blue', 'green'];
        const component = shallow(
            <XYChart height={100} width={100} series={XYChartContextMock.series} colorPattern={colorPattern} />
        );

        const provider = component.find(XYChartContext.Provider);
        const context = provider.prop('value');
        expect(context.color(0, colorPattern)).toBe(colorPattern[0]);
    });

    it('should render a svg with the width and height', () => {
        const expectedWidth = 10;
        const expectedHeight = 50;
        const component = shallow(
            <XYChart height={expectedHeight} width={expectedWidth} series={XYChartContextMock.series} padding={0} />
        );

        const svg = component.find('svg');
        expect(svg.exists()).toBe(true);
        expect(svg.prop('height')).toBe(expectedHeight);
        expect(svg.prop('width')).toBe(expectedWidth);
    });

    it('should substract the padding from the width and height', () => {
        const initialWidth = 10;
        const initialHeight = 50;
        const padding = 5;
        const component = shallow(
            <XYChart height={initialHeight} width={initialWidth} series={XYChartContextMock.series} padding={padding} />
        );

        const svg = component.find('svg');
        expect(svg.prop('height')).toBe(initialHeight - 2 * padding);
        expect(svg.prop('width')).toBe(initialWidth - 2 * padding);
    });

    it('should render a g with the top and left padding transform', () => {
        const expectedLeftPadding = 10;
        const expectedTopPadding = 50;
        const component = shallow(
            <XYChart
                height={100}
                width={200}
                series={XYChartContextMock.series}
                padding={{left: expectedLeftPadding, top: expectedTopPadding}}
            />
        );

        const g = component.find('g');
        expect(g.exists()).toBe(true);
        expect(g.prop('transform')).toBe(`translate(${expectedLeftPadding},${expectedTopPadding})`);
    });
});
