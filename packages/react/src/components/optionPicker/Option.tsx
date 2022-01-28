import * as React from 'react';
import classNames from 'classnames';

export interface IOption {
    label: string;
    value: () => string;
    disabled?: boolean;
    [key: string]: any;
}

export interface IOptionProps extends React.ClassAttributes<Option> {
    option: IOption;
    isActive: boolean;
    onClick: (value: string, label: string) => void;
}

export class Option extends React.Component<IOptionProps, any> {
    render() {
        const buttonClass = this.props.isActive ? 'active' : '';

        return (
            <button
                type="button"
                className={classNames(buttonClass, {disabled: this.props.option?.disabled})}
                disabled={this.props.option?.disabled}
                onClick={() => this.props.onClick(this.props.option.value(), this.props.option.label)}
            >
                {this.props.option.label}
            </button>
        );
    }
}
