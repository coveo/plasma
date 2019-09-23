import * as classNames from 'classnames';
import * as React from 'react';

type FormMods = 'mod-header-padding' | 'mod-form-top-bottom-padding' | 'material-card';

export interface IFormProps {
    title?: string;
    className?: string;
    mods?: FormMods | FormMods[];
}

export const Form: React.FunctionComponent<IFormProps> = ({children, className, title, mods}) => {
    return (
        <fieldset className={classNames(className, mods, 'coveo-form mb2 mt2 mod-padding-children')}>
            {title && <h2 className="text-medium-blue mb2">{title}</h2>}
            {children}
        </fieldset>
    );
};
