import * as classNames from 'classnames';
import * as React from 'react';
import {findDOMNode} from 'react-dom';
import * as ReactTether from 'react-tether';
import * as _ from 'underscore';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
// This is a hack since the tether definition file doesn't match the code
// See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16909
const TetherComponent = (ReactTether as any) as () => JSX.Element;

export interface ITetherComponentCopiedProps {
    renderElementTag?: string;
    renderElementTo?: Element | string;
    attachment: string;
    targetAttachment?: string;
    offset?: string;
    targetOffset?: string;
    targetModifier?: string;
    enabled?: boolean;
    classes?: any;
    style?: {[key: string]: any;};
    classPrefix?: string;
    optimizations?: {[key: string]: any;};
    constraints?: any[];
    onUpdate?: (...args: any[]) => void;
    onRepositioned?: (...args: any[]) => void;
}

export interface IPopoverDispatchProps {
    onToggle?: (isOpen: boolean) => void;
    onMount?: (isOpen: boolean) => void;
    onUnmount?: () => void;
}

export interface IPopoverProps extends IPopoverDispatchProps, ITetherComponentCopiedProps {
    id?: string;
    /**
     * Optionnal, use it to specify the isOpen state of the Popover.
     * @default: false
     */
    isOpen?: boolean;
    isOpenOnMount?: boolean;

    /**
     * Optionnal, a callback fired when the Popover wishes to change visibility. Called with the requested `isOpen` value. Use this prop if
     * you want to control the Popover state. Let it undefined if you want the Popover to control his state itself.
     */
    onToggle?: (isOpen: boolean) => void;

    /**
     * Optionnal, use it to prevent default when the Popover isOpen and the user clicks outside.
     * @default: false
     */
    isModal?: boolean;
}

export interface IPopoverState {
    isOpen?: boolean;
}

export class Popover extends React.Component<IPopoverProps, IPopoverState> {
    private tetherToggle: HTMLElement;
    private tetherElement: HTMLElement;

    constructor(props: IPopoverProps, state: IPopoverState) {
        super(props, state);

        // If onToggle wasn't passed, Popover is uncontrolled and we set an initial state.
        if (!_.isFunction(this.props.onToggle)) {
            this.state = {
                isOpen: !!this.props.isOpen,
            };
        }
    }

    componentDidMount() {
        callIfDefined(this.props.onMount, this.props.isOpenOnMount);
        document.addEventListener('click', this.handleDocumentClick, true);
    }

    componentWillUnmount() {
        callIfDefined(this.props.onUnmount);
        document.removeEventListener('click', this.handleDocumentClick, true);
    }

    render() {
        const tetherToggle = !!this.props.children && (this.props.children as JSX.Element[])[0];
        const tetherElement = !!this.props.children && (this.props.children as JSX.Element[])[1];

        const isOpen: boolean = this.state && this.state.isOpen || this.props.isOpen;

        return (
            <TetherComponent {..._.omit(this.props, 'children')} >
                <div ref={(toggle: HTMLElement) => this.tetherToggle = toggle} onClick={() => this.toggleOpened(!isOpen)}>
                    {tetherToggle}
                </div>
                <div className={classNames({hide: !isOpen})} ref={(element: HTMLElement) => this.tetherElement = element}>
                    {tetherElement}
                </div>
            </TetherComponent>
        );
    }

    toggleOpened(isOpen: boolean) {
        if (_.isFunction(this.props.onToggle)) {
            this.props.onToggle(isOpen);
        } else {
            this.setState({
                isOpen: isOpen,
            });
        }
    }

    // Using a fat arrow function instead of a method here to bind it to context and to make sure we have the same listener for both
    // addEventListener and removeEventListener and therefore prevent leaking listeners.
    private handleDocumentClick: EventListener = (event: Event) => {
        if (this.props.isOpen) {
            const tetherToggle: Element | Text = findDOMNode(this.tetherToggle);
            const tetherElement: Element | Text = findDOMNode(this.tetherElement);

            const outsideTetherToggle = !tetherToggle.contains(event.target as Node);
            const outsideTetherElement = tetherElement ? !tetherElement.contains(event.target as Node) : true;

            if (outsideTetherElement && outsideTetherToggle) {
                if (this.props.isModal) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                }

                this.toggleOpened(false);
            }
        }
    }
}
