import classNames from 'clsx';
import {ButtonHTMLAttributes, Component} from 'react';
import * as _ from 'underscore';
import {TooltipPlacement} from '../../utils/TooltipUtils';

import {IBaseActionOptions} from '../actions';
import {LoadingSpinner} from '../loading';
import {Tooltip} from '../tooltip';

export interface IButtonProps extends IBaseActionOptions {
    /**
     * If set to true, forces the button to display a spinner to the left of the text
     */
    isLoading?: boolean;
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
    'isLoading',
    'link',
    'name',
    'onClick',
    'primary',
    'small',
    'target',
    'tooltip',
    'tooltipPlacement',
];

/**
 * @deprecated Use Mantine Button instead: https://mantine.dev/core/button/
 */
export class Button extends Component<IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> {
    static defaultProps: Partial<IButtonProps> = {
        enabled: true,
        isLoading: false,
        name: '',
        tooltip: '',
        primary: false,
        small: false,
        tooltipPlacement: TooltipPlacement.Right,
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
                    {this.props.isLoading && !this.props.enabled && (
                        <LoadingSpinner size={this.props.small ? 16 : undefined} />
                    )}
                    {this.props.name}
                    {this.props.children}
                </a>
            );
        } else {
            buttonElement = (
                <button className={this.className} {...buttonAttrs}>
                    {this.props.isLoading && !this.props.enabled && (
                        <LoadingSpinner size={this.props.small ? 16 : undefined} />
                    )}
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
                'mod-loading': this.props.isLoading && !this.props.enabled,
                'mod-small': this.props.small,
                'state-disabled disabled': !this.props.enabled,
            },
            this.props.classes
        );
    }
}
