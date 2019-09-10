import * as classNames from 'classnames';
import * as React from 'react';

type FormMods = 'mod-header-padding' | 'mod-form-top-bottom-padding';

export interface IFormProps {
    title?: string;
    className?: string;
    asCard?: boolean;
    mods?: FormMods | FormMods[];
}

export const Form: React.FunctionComponent<IFormProps> = ({children, className, title, asCard, mods}) => {
    return (
        <fieldset className={classNames(className, mods, 'pt2')}>
            {title && <h2 className="text-medium-blue mb2">{title}</h2>}
            <div
                className={classNames(
                    {
                        'material-card': asCard,
                    },
                    'coveo-form',
                    'mr2',
                    'mb2'
                )}
            >
                {children}
            </div>
        </fieldset>
    );
};
