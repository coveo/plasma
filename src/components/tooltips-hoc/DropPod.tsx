import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import {positionValidator} from './positionValidation';

export const DropPodPosition = {
    bottom: 'bottom',
    top: 'top',
    left: 'left',
    right: 'right',
};

export interface IDropPodProps {
    isOpen: boolean;
    positions?: string[];
    buttonRef: React.RefObject<HTMLElement>;
    renderTooltip: (style: React.CSSProperties, containerRef: React.RefObject<HTMLElement>) => React.ReactNode;
    selector: string;
}

export interface IDropPodState {
    offset: ClientRect | DOMRect;
}

export class DropPod extends React.PureComponent<IDropPodProps, IDropPodState> {
    readonly tooltip: React.RefObject<HTMLElement>;

    static defaultProps: Partial<IDropPodProps> = {
        selector: '#App',
        isOpen: false,
        positions: [DropPodPosition.right, DropPodPosition.bottom, DropPodPosition.top, DropPodPosition.left],
    };

    constructor(props: IDropPodProps, state: IDropPodState) {
        super(props, state);

        this.tooltip = React.createRef();
        this.state = {
            offset: undefined,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateOffset as any);
        this.updateOffset();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateOffset as any);
    }

    private updateOffset = () => {
        this.setState({
            offset: this.props.buttonRef.current.getBoundingClientRect(),
        });
    }

    private getStyle(): React.CSSProperties {
        let style: Partial<React.CSSProperties> = {};
        if (this.tooltip.current && this.state.offset) {
            const tooltipOffset: ClientRect | DOMRect = this.tooltip.current.getBoundingClientRect();

            let index = 0;
            while (_.isEmpty(style) && index < this.props.positions.length) {
                style = positionValidator[this.props.positions[index]](this.state.offset, tooltipOffset, window) || {};
                index += 1;
            }
        }

        const visibility = !_.isEmpty(style) && this.props.isOpen ? 'visible' : 'hidden';
        return {
            ...style,
            visibility,
        };
    }

    render() {
        const tooltip: React.ReactNode = this.props.renderTooltip({
            position: 'absolute',
            display: 'inline-block',
            ...this.getStyle(),
        }, this.tooltip);

        return ReactDOM.createPortal((
            <>
                {tooltip}
            </>
        ), document.querySelector(this.props.selector));
    }
}
