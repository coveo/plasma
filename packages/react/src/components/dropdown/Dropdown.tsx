import classNames from 'clsx';
import {ClassAttributes, KeyboardEvent, Component} from 'react';
import * as ReactDOM from 'react-dom';

import {keyCode} from '../../utils';

export interface IDropdownOwnProps extends ClassAttributes<Dropdown> {
    id?: string;
    toggleContent: JSX.Element[];
    dropdownItems: JSX.Element[];
    className?: string;
    disabled?: boolean;
    ariaLabel?: string;
}

export interface IDropdownStateProps {
    isOpened?: boolean;
}

export interface IDropdownDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onClick?: () => void;
    onDocumentClick?: () => void;
}

export interface IDropdownProps extends IDropdownOwnProps, IDropdownStateProps, IDropdownDispatchProps {}

/**
 * @deprecated Use Mantine Menu instead https://mantine.dev/core/menu/
 */
export class Dropdown extends Component<IDropdownProps, any> {
    private dropdown: HTMLDivElement;

    private handleClick = () => {
        if (!this.props.disabled) {
            this.props.onClick?.();
        }
    };

    private handleDocumentClick = (e: MouseEvent) => {
        if (this.props.isOpened) {
            const facetSearch: Element | Text = ReactDOM.findDOMNode(this.dropdown);

            if (!facetSearch.contains(e.target as Node)) {
                this.props.onDocumentClick();
            }
        }
    };

    private handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
        if (!this.props.disabled && (event.keyCode === keyCode.enter || event.keyCode === keyCode.space)) {
            // Prevent the default action to stop scrolling when space is pressed
            event.preventDefault();
            this.props.onClick?.();
        }
    };

    componentDidMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }

        if (this.props.onDocumentClick) {
            document.addEventListener('click', this.handleDocumentClick);
        }
    }

    componentWillUnmount() {
        if (this.props.onDocumentClick) {
            document.removeEventListener('click', this.handleDocumentClick);
        }

        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    render() {
        const dropdownClasses = classNames(
            'dropdown',
            {
                open: this.props.isOpened,
                'cursor-default': this.props.disabled,
            },
            this.props.className,
        );

        return (
            <div className={dropdownClasses} ref={(dropdown: HTMLDivElement) => (this.dropdown = dropdown)}>
                <span
                    className={classNames('dropdown-toggle inline-flex flex-center', {
                        'disabled transparency-4 cursor-default': this.props.disabled,
                    })}
                    onClick={() => this.handleClick()}
                    onKeyDown={this.handleKeyDown}
                    role="button"
                    tabIndex={0}
                    aria-label={this.props.ariaLabel}
                >
                    {this.props.toggleContent}
                </span>
                <ul className="dropdown-menu normal-height" aria-hidden={!this.props.isOpened}>
                    {this.props.dropdownItems}
                </ul>
            </div>
        );
    }
}
