import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {IBaseActionOptions} from '../actions/Action';
import {Tooltip} from '../tooltip/Tooltip';

export interface IButtonProps extends IBaseActionOptions {
    small?: boolean;
    classes?: string[];
}

export class Button extends React.Component<IButtonProps> {

    static defaultProps: Partial<IButtonProps> = {
        enabled: true,
        name: '',
        tooltip: '',
        primary: false,
        small: false,
        tooltipPlacement: 'right',
        target: '',
    };

    private onClick() {
        if (this.props.onClick && this.props.enabled) {
            this.props.onClick();
        }
    }

    getTemplate(buttonClass: string): JSX.Element {
        let buttonElement: JSX.Element;

        let buttonAttrs = {
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
                <a className={`${buttonClass} btn-container`}
                    {...buttonAttrs}>
                    {this.props.name}
                </a>);
        } else {
            buttonElement = (
                <button className={buttonClass}
                    {...buttonAttrs}>
                    {this.props.name}
                    {this.props.children}
                </button>);
        }

        return !_.isEmpty(this.props.tooltip)
            ? <Tooltip title={this.props.tooltip} placement={this.props.tooltipPlacement} className='btn-container'>
                {buttonElement}
            </Tooltip>
            : buttonElement;
    }

    private getClasses() {
        return classNames('btn', {
            'mod-primary': this.props.primary,
            'mod-small': this.props.small,
            'state-disabled disabled text-medium-grey': !this.props.enabled,
        }, this.props.classes);
    }

    render() {
        return this.getTemplate(this.getClasses());
    }
}
