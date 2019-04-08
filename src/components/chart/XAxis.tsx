import * as d3 from 'd3';
import * as React from 'react';

export interface XAxisProps<T = number> {
    xScale: d3.scale.Linear<number, T>;
    width: number;
    height?: number;
}

const tickSize = 7;

export class XAxis extends React.PureComponent<XAxisProps> {
    static defaultProps: Partial<XAxisProps> = {
        height: 20,
    };

    render() {
        const {xScale, width, height} = this.props;
        const xTicks = xScale.ticks(6).map((tick: number) => (
            xScale(tick) > width && xScale(tick) < width
                ? (
                    <g transform={`translate(${xScale(tick)},0)`}>
                        <line stroke='black' x1='0' x2='0' y1='0' y2={tickSize} />
                        <text textAnchor='middle' y={height}>{tick}</text>
                    </g>
                )
                : null
        ));

        return (
            <g className='x-axis'>
                <line
                    className='axis-line'
                    stroke='black'
                    x1='0'
                    x2={width}
                    y1={height}
                    y2={height}
                />
                {xTicks}
            </g>
        );
    }
}
