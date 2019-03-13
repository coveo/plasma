import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import {DomPositionVisibilityValidator} from './DomPositionVisibilityValidator';

export const DropPodPosition = {
    bottom: 'bottom',
    top: 'top',
    left: 'left',
    right: 'right',
};

export interface IDropPodProps {
    isOpen: boolean;
    positions?: string[];
    renderDrop: (style: React.CSSProperties, dropRef: React.RefObject<HTMLElement>) => React.ReactNode;
    selector?: string;
}

export interface IRDropPodProps extends IDropPodProps {
    buttonRef?: React.RefObject<HTMLElement>;
}

export interface IDropPodState {
    offset: ClientRect | DOMRect;
}

class RDropPod extends React.PureComponent<IRDropPodProps, IDropPodState> {
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
                const validator = DomPositionVisibilityValidator[this.props.positions[index]];
                style = validator && validator(this.state.offset, tooltipOffset, window) || {};
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
        const tooltip: React.ReactNode = this.props.renderDrop({
            position: 'absolute',
            display: 'inline-block',
            ...this.getStyle(),
        }, this.tooltip);

        return ReactDOM.createPortal(tooltip, document.querySelector(this.props.selector));
    }
}

export const DropPod: React.ForwardRefExoticComponent<IDropPodProps & React.RefAttributes<HTMLElement>> =
    React.forwardRef((props: IDropPodProps, ref: React.RefObject<HTMLElement>) =>
        <RDropPod {...props} buttonRef={ref} />,
    );
