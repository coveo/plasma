import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

export interface IFlippableOwnProps {
    id?: string;
    front?: React.ReactNode;
    back?: React.ReactNode;
    className?: string;
    allowUnflip?: (e: EventTarget) => boolean;
}

export interface IFlippableDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onFlip?: () => void;
    onUnflip?: () => void;
}

export interface IFlippableStateProps {
    isFlipped?: boolean;
}

export interface IFlippableProps extends IFlippableOwnProps, IFlippableDispatchProps,
    IFlippableStateProps {}

const FlippablePropsToOmit = keys<IFlippableProps>();

export class Flippable extends React.Component<IFlippableProps & React.HTMLProps<HTMLDivElement>, any> {
    static CONTAINER_CLASSNAME: string = 'flippable';
    static FLIPPER_CLASSNAME: string = 'flipper';
    static sides = {
        FRONT: 'flipper-front',
        BACK: 'flipper-back',
    };
    static triggers = {
        FRONT: 'show-front',
        BACK: 'show-back',
    };
    static defaults: Partial<IFlippableProps> = {
        isFlipped: false,
    };

    private backside: HTMLDivElement;
    private frontside: HTMLDivElement;

    componentWillMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }

        document.addEventListener('click', this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);

        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    render() {
        const containerClassName = classNames(
            Flippable.CONTAINER_CLASSNAME,
            this.props.isFlipped ? 'show-on-top' : '',
            this.props.className,
        );
        const flipperClassName = classNames(
            Flippable.FLIPPER_CLASSNAME,
            this.props.isFlipped ? Flippable.triggers.BACK : Flippable.triggers.FRONT,
        );

        return (
            <div className={containerClassName} {..._.omit(this.props, FlippablePropsToOmit)}>
                <div className={flipperClassName}>
                    <div
                        className={Flippable.sides.FRONT}
                        onClick={this.handleClickOnFront}
                        ref={(frontside: HTMLDivElement) => this.frontside = frontside}
                    >
                        {this.props.front}
                    </div>
                    <div
                        className={Flippable.sides.BACK}
                        ref={(backside: HTMLDivElement) => this.backside = backside}
                    >
                        {this.props.back}
                    </div>
                </div>
            </div>
        );
    }

    private handleClickOnFront = () => {
        if (this.props.onFlip && !this.props.isFlipped) {
            this.props.onFlip();
        }
    }

    private handleOutsideClick = (e: MouseEvent) => {
        if (this.props.isFlipped) {
            const frontside: Element | Text = ReactDOM.findDOMNode(this.frontside);
            const backside: Element | Text = ReactDOM.findDOMNode(this.backside);
            const target: Node = e.target as Node;

            if (!backside.contains(target) && !frontside.contains(target) && (!this.props.allowUnflip || this.props.allowUnflip(target))) {
                this.handleUnflip();
                e.preventDefault();
            }
        }
    }

    private handleUnflip() {
        if (this.props.onUnflip) {
            this.props.onUnflip();
        }
    }
}
