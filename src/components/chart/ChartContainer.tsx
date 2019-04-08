import * as React from 'react';
import * as _ from 'underscore';

export interface ChartContainerProps {
    id: string;
    renderChart: (width: number, height: number) => React.ReactNode;
}

export interface ChartBaseProps {
    width: number;
    height: number;
}

export class ChartContainer extends React.PureComponent<ChartContainerProps> {
    private debouncedResize: () => void;
    private static DebounceTime = 100;
    private readonly container: React.RefObject<HTMLDivElement>;

    constructor(props: ChartContainerProps) {
        super(props);
        this.container = React.createRef<HTMLDivElement>();
    }

    componentDidMount() {
        this.debouncedResize = _.debounce(() => this.forceUpdate(), ChartContainer.DebounceTime);
        window.addEventListener('resize', this.debouncedResize);

        this.forceUpdate();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.debouncedResize);
    }

    render() {
        this.toggleSvgs(false);
        const {width, height} = this.container.current && this.container.current.getBoundingClientRect() || {width: 0, height: 0};
        this.toggleSvgs(true);

        return (
            <div className='full-content' {..._.omit(this.props, 'renderChart')} ref={this.container}>
                {width + height > 0 ? this.props.renderChart(width, height) : null}
            </div>
        );
    }

    private toggleSvgs(show: boolean) {
        if (this.container.current) {
            const svgs = this.container.current.querySelectorAll('svg');
            _.each(svgs, (svg: SVGElement) => svg.style.display = show ? 'block' : 'none');
        }
    }
}
