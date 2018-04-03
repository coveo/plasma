import * as classNames from 'classnames';
import * as React from 'react';
import {ITextAreaProps} from './TextArea';

export interface ITextAreaLabelProps {
    children: React.ReactElement<ITextAreaProps>;
    label: string;
    containerClassName?: string;
}

export class TextAreaLabel extends React.PureComponent<ITextAreaLabelProps, {}> {
    render() {
        return (
            <div className={classNames('input-field form-group', this.props.containerClassName)}>
                {this.props.children}
                <label htmlFor={this.props.children.props.id}>
                    {this.props.label}
                </label>
            </div>
        );
    }
}
