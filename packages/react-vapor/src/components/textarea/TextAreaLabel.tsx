import classNames from 'classnames';
import * as React from 'react';
import {ITextAreaProps} from './TextArea';

export interface ITextAreaLabelProps {
    children: React.ReactElement<ITextAreaProps>;
    label: string;
    containerClassName?: string;
}

export const TextAreaLabel = (props: ITextAreaLabelProps) => (
    <div className={classNames('input-field form-group', props.containerClassName)}>
        {props.children}
        <label htmlFor={props.children.props.id}>{props.label}</label>
    </div>
);
