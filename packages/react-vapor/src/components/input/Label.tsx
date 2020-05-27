import classNames from 'classnames';
import * as React from 'react';

export interface ILabelProps {
    type?: string;
    classes?: string[];
    validMessage?: string;
    invalidMessage?: string;
}

export class Label extends React.Component<ILabelProps & React.HTMLProps<HTMLLabelElement>, any> {
    render() {
        const classes = classNames(this.props.classes);
        const {validMessage, invalidMessage, children, ...attributes} = this.props;
        return (
            <label
                className={classes}
                data-valid-message={validMessage}
                data-invalid-message={invalidMessage}
                {...attributes}
            >
                {children}
            </label>
        );
    }
}
