import classNames from 'classnames';
import {RefObject, createRef, Children, Component, ReactNode} from 'react';
import {findDOMNode} from 'react-dom';
import TetherComponent from 'react-tether';
import * as _ from 'underscore';
import {Defaults} from '../../Defaults';

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
    className?: string;
    style?: {[key: string]: any};
    classPrefix?: string;
    optimizations?: {[key: string]: any};
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
     *
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
     *
     * @default: false
     */
    isModal?: boolean;
    children?: ReactNode;
}

export interface IPopoverState {
    isOpen?: boolean;
}

/**
 * @deprecated Use Mantine Popover instead: https://mantine.dev/core/popover/
 */
export class Popover extends Component<IPopoverProps, IPopoverState> {
    private tetherToggle: RefObject<HTMLDivElement>;
    private tetherElement: RefObject<HTMLDivElement>;

    constructor(props: IPopoverProps, state: IPopoverState) {
        super(props, state);

        this.tetherToggle = createRef();
        this.tetherElement = createRef();

        // If onToggle wasn't passed, Popover is uncontrolled and we set an initial state.
        if (!_.isFunction(this.props.onToggle)) {
            this.state = {
                isOpen: !!this.props.isOpen,
            };
        }
    }

    componentDidMount() {
        this.props.onMount?.(this.props.isOpenOnMount);
        document.addEventListener('click', this.handleDocumentClick, true);
    }

    componentWillUnmount() {
        this.props.onUnmount?.();
        document.removeEventListener('click', this.handleDocumentClick, true);
    }

    render() {
        const children = Children.toArray(this.props.children);

        const isOpen: boolean = (this.state && this.state.isOpen) || this.props.isOpen;

        return (
            <TetherComponent {..._.omit(this.props, 'children')}>
                <div ref={this.tetherToggle} onClick={() => this.toggleOpened(!isOpen)}>
                    {children[0]}
                </div>
                <div
                    ref={this.tetherElement}
                    className={classNames({hide: !isOpen}, 'shadow-2')}
                    aria-hidden={!this.props.isOpen}
                >
                    {children[1]}
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
            const tetherToggle: Element | Text = findDOMNode(this.tetherToggle.current);
            const tetherElement: Element | Text = findDOMNode(this.tetherElement.current);
            const target: Node = event.target as Node;
            const dropdownsContainer = document.querySelector(Defaults.DROP_ROOT);
            const clickedInsideADropdown = dropdownsContainer.contains(target);

            if (!tetherElement.contains(target) && !tetherToggle.contains(target) && !clickedInsideADropdown) {
                if (this.props.isModal) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                }

                this.toggleOpened(false);
            }
        }
    };
}
