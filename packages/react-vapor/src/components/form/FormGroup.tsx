import * as classNames from 'classnames';
import * as React from 'react';

type FormGroupMods = 'mod-header-padding' | 'mod-form-top-bottom-padding' | 'material-card';

export interface IFormGroupProps {
    title?: string;
    description?: React.ReactNode;
    className?: string;
    mods?: FormGroupMods | FormGroupMods[];
    level?: 1 | 2 | 3;
}

export const FormGroup: React.FunctionComponent<IFormGroupProps> = ({
    children,
    title,
    description,
    className,
    mods,
    level,
}) => {
    const titleProps: React.HTMLProps<HTMLElement> = {
        className: 'text-medium-blue mb2',
        children: title,
    };
    const H = `h${(level || 1) + 1}`;
    return (
        <fieldset className={classNames(className, mods, 'form-group mod-padding-children')}>
            {title && <H {...titleProps} />}
            {description && <p className="description">{description}</p>}
            {children}
        </fieldset>
    );
};
