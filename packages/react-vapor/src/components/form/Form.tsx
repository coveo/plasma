import classNames from 'classnames';
import * as React from 'react';

type FormMods = 'mod-header-padding' | 'mod-form-top-bottom-padding' | 'material-card';

export interface IFormProps {
    title?: string;
    className?: string;
    mods?: FormMods | FormMods[];
    noMargin?: boolean;
}

export const Form: React.FunctionComponent<IFormProps> = ({children, className, title, mods, noMargin}) => {
    return (
        <fieldset className={classNames('coveo-form mod-padding-children', {my2: !noMargin}, mods, className)}>
            {title && <h2 className="text-medium-blue mb2">{title}</h2>}
            {children}
        </fieldset>
    );
};
