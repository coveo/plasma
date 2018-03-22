import * as classNames from 'classnames';
import * as React from 'react';

export interface ILabelProps {
    htmlFor?: string;
    type?: string;
    classes?: string[];
    validMessage?: string;
    invalidMessage?: string;
}

export class Label extends React.Component<ILabelProps, any> {
    render() {
        const classes = classNames(this.props.classes);

        return (
            <label className={classes}
                data-valid-message={this.props.validMessage}
                data-invalid-message={this.props.invalidMessage}
                htmlFor={this.props.htmlFor}>
                {this.props.children}
            </label>
        );
    }
}
