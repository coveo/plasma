import classNames from 'classnames';
import {ReactElement} from 'react';
import {ITextAreaProps} from './TextArea.js';

export interface ITextAreaLabelProps {
    children: ReactElement<ITextAreaProps>;
    label: string;
    containerClassName?: string;
}

/**
 * @deprecated Use Mantine Textarea instead: https://mantine.dev/core/textarea/
 */
export const TextAreaLabel = (props: ITextAreaLabelProps) => (
    <div className={classNames('input-field form-group', props.containerClassName)}>
        {props.children}
        <label htmlFor={props.children.props.id}>{props.label}</label>
    </div>
);
