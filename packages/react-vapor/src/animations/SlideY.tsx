// inspired from https://github.com/frankwallis/react-slidedown
// implemented with the new react-transition-group https://github.com/reactjs/react-transition-group

import * as React from 'react';
import Transition from 'react-transition-group/Transition';

export interface SlideYProps {
    id?: string;
    duration?: number;
    in?: boolean;
    timeout?: number | {enter?: number; exit?: number};
}

export class SlideY extends React.PureComponent<SlideYProps> {
    private el: HTMLElement;

    static defaultTimeout: number = 200;
    static defaultDuration: number = 200;

    static defaultProps: Partial<SlideYProps> = {
        timeout: SlideY.defaultTimeout,
        duration: SlideY.defaultDuration,
    };

    componentDidMount() {
        if (this.props.in) {
            this.el.classList.remove('slide-y-closed');
            this.el.style.height = 'auto';
        }
    }

    componentDidUpdate(prevProps: SlideYProps) {
        if (prevProps.in !== this.props.in) {
            this.el.style.height = this.getCurrentHeight();

            if (this.props.in) {
                this.onEntering();
            } else {
                this.onExiting();
            }
        }
    }

    render() {
        const style = this.props.duration && {
            style: {transitionDuration: `${this.props.duration}ms`, transitionTimingFunction: 'ease-in-out'},
        };
        return (
            <Transition
                in={this.props.in}
                timeout={this.props.timeout}
                onEntering={() => this.onEntering()}
                onExiting={() => this.onExiting()}
                onTransitionEnd={() => this.handleTransitionEnd()}
            >
                <div className="slide-y slide-y-closed" ref={(el: HTMLElement) => (this.el = el)} {...style}>
                    {this.props.children}
                </div>
            </Transition>
        );
    }

    private onEntering() {
        const prevHeight = this.getCurrentHeight();

        this.el.classList.remove('slide-y-closed');
        this.el.style.height = 'auto';

        const endHeight = this.getCurrentHeight();

        if (parseFloat(endHeight).toFixed(2) !== parseFloat(prevHeight).toFixed(2)) {
            this.transitionHeight(prevHeight, endHeight);
        }
    }

    private onExiting() {
        this.transitionHeight(this.getCurrentHeight(), '0px');
    }

    private handleTransitionEnd() {
        this.el.classList.remove('slide-y-transition');
        this.el.style.transitionProperty = 'none';
        this.el.style.height = !this.props.in ? '0px' : 'auto';

        if (!this.props.in) {
            this.el.classList.add('slide-y-closed');
        }
    }

    private transitionHeight(from: string, to: string) {
        this.el.classList.add('slide-y-transition');
        this.el.style.height = from;
        this.el.offsetHeight; // force repaint
        this.el.style.transitionProperty = 'height';
        this.el.style.height = to;
    }

    private getCurrentHeight = (): string => `${this.el.getBoundingClientRect().height}px`;
}
