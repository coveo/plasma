import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import {Defaults} from '../../Defaults';
import {DomPositionVisibilityValidator, IBoundingLimit} from './DomPositionVisibilityValidator';

export const DropPodPosition = {
    bottom: 'bottom',
    top: 'top',
    left: 'left',
    right: 'right',
};

export interface IDropPodProps {
    isOpen?: boolean;
    positions?: string[];
    renderDrop: (style: React.CSSProperties, dropRef: React.RefObject<HTMLElement>) => React.ReactNode;
    selector?: string;
    minWidth?: number;
    minHeight?: number;
}

export interface IRDropPodProps extends IDropPodProps {
    buttonRef?: React.RefObject<HTMLElement>;
}

export interface IDropPodState {
    offset: ClientRect | DOMRect;
    style: React.CSSProperties;
}

class RDropPod extends React.PureComponent<IRDropPodProps, IDropPodState> {
    readonly dropRef: React.RefObject<HTMLElement>;

    private currentStyle: React.CSSProperties;

    static defaultProps: Partial<IDropPodProps> = {
        isOpen: false,
        positions: [DropPodPosition.right, DropPodPosition.bottom, DropPodPosition.top, DropPodPosition.left],
    };

    constructor(props: IDropPodProps, state: IDropPodState) {
        super(props, state);

        this.dropRef = React.createRef();
        this.state = {
            offset: undefined,
            style: undefined,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateOffset, true);
        window.addEventListener('scroll', this.updateOffset, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateOffset, true);
        window.removeEventListener('resize', this.updateOffset, true);
    }

    private updateOffset = () => {
        this.setState({
            offset: this.props.buttonRef.current.getBoundingClientRect(),
        });
    }

    private canRenderDrop() {
        return this.dropRef.current && this.props.isOpen && this.props.positions.length;
    }

    private calculateStyleOffset() {
        let style: React.CSSProperties = {};
        if (this.canRenderDrop()) {
            const buttonOffset: ClientRect | DOMRect = this.state && this.state.offset ||
                                                       this.props.buttonRef.current.getBoundingClientRect();
            const dropOffset: ClientRect | DOMRect = this.dropRef.current.getBoundingClientRect();

            const parentOffset = this.props.buttonRef.current.offsetParent.getBoundingClientRect();
            const boundingLimit: IBoundingLimit = {
                maxY: Math.min(parentOffset.bottom, window.innerHeight),
                minY: Math.max(parentOffset.top, 0),
                maxX: Math.min(parentOffset.right, window.innerWidth),
                minX: Math.max(parentOffset.left, 0),
            };

            // Calculate which side to render drop depending on the space available and the order set in the position array
            let index = 0;
            while (_.keys(style).length < 2 && index < this.props.positions.length) {
                const dropOffsetPrime = {
                    ...dropOffset,
                    width: Math.max(dropOffset.width && this.props.minWidth),
                    height: Math.max(dropOffset.height && this.props.minHeight),
                };
                const validator = DomPositionVisibilityValidator[this.props.positions[index]];
                style = validator &&
                        validator(buttonOffset, dropOffsetPrime, boundingLimit) || {};
                index += 1;
            }

            // Map each side of drop if the button offset is outside of the bounding limit
            if (buttonOffset.top <= boundingLimit.minY) {
                style.top = boundingLimit.minY;
            }
            if (buttonOffset.bottom >= boundingLimit.maxY) {
                style.top = boundingLimit.maxY - dropOffset.height;
            }
            if (buttonOffset.left <= boundingLimit.minX) {
                style.left = boundingLimit.minX;
            }
            if (buttonOffset.right >= boundingLimit.maxX) {
                style.left = boundingLimit.maxX - dropOffset.width;
            }

            // No space to render the drop target
            if (dropOffset.height >= boundingLimit.maxY - boundingLimit.minY || dropOffset.width >= boundingLimit.maxX -
                boundingLimit.minX) {
                this.currentStyle = {};
            } else {
                this.currentStyle = {
                    ...this.currentStyle,
                    ...style,
                };
            }
        }
    }

    render() {
        this.calculateStyleOffset();

        const selector: any = this.props.selector || Defaults.DROP_ROOT;
        const drop: React.ReactNode = this.props.renderDrop({
            position: 'absolute',
            display: 'inline-block',
            ...{
                ...this.currentStyle,
                visibility: this.canRenderDrop() ? 'visible' : 'hidden',
            },
        }, this.dropRef);

        return ReactDOM.createPortal(drop, document.querySelector(selector));
    }
}

export const DropPod: React.ForwardRefExoticComponent<IDropPodProps & React.RefAttributes<HTMLElement>> =
    React.forwardRef((props: IDropPodProps, ref: React.RefObject<HTMLElement>) =>
        <RDropPod {...props} buttonRef={ref}/>,
    );
