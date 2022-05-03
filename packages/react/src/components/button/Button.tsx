import classNames from 'classnames';
import {ButtonHTMLAttributes, Component} from 'react';
import * as _ from 'underscore';

import {IBaseActionOptions} from '../actions/Action';
import {Tooltip} from '../tooltip/Tooltip';
export interface IButtonProps extends IBaseActionOptions {
    /**
     * If set to true, forces the button to have a smaller size
     */
    small?: boolean;
    /**
     * Additional CSS classes to set on the button element
     */
    classes?: string[] | string;
}

const ButtonPropsToOmit = [
    'classes',
    'enabled',
    'hideDisabled',
    'link',
    'name',
    'onClick',
    'primary',
    'small',
    'target',
    'tooltip',
    'tooltipPlacement',
];

export class Button extends Component<IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> {
    static defaultProps: Partial<IButtonProps> = {
        enabled: true,
        name: '',
        tooltip: '',
        primary: false,
        small: false,
        tooltipPlacement: 'right',
        target: '',
    };

    render() {
        let buttonElement: JSX.Element;

        let buttonAttrs = {
            ..._.omit(this.props, ButtonPropsToOmit),
            disabled: !this.props.enabled,
            onClick: () => this.onClick(),
        };

        if (this.props.link) {
            buttonAttrs = _.extend(buttonAttrs, {
                target: this.props.target,
                rel: 'noopener noreferrer',
                href: this.props.link,
            });

            buttonElement = (
                <a className={`${this.className}`} {...buttonAttrs}>
                    {this.props.name}
                    {this.props.children}
                </a>
            );
        } else {
            buttonElement = (
                <button className={this.className} {...buttonAttrs}>
                    {this.props.name}
                    {this.props.children}
                </button>
            );
        }

        return !_.isEmpty(this.props.tooltip) ? (
            <Tooltip title={this.props.tooltip} placement={this.props.tooltipPlacement} className="btn-container">
                {buttonElement}
            </Tooltip>
        ) : (
            buttonElement
        );
    }

    private onClick() {
        if (this.props.enabled) {
            this.props.onClick?.();
        }
    }

    private get className(): string {
        return classNames(
            'btn',
            {
                'mod-primary': this.props.primary,
                'mod-small': this.props.small,
                'state-disabled disabled': !this.props.enabled,
            },
            this.props.classes
        );
    }
}
