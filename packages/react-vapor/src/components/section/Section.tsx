import classNames from 'classnames';
import * as React from 'react';

type SectionMods = 'mod-header-padding' | 'mod-form-top-bottom-padding' | 'material-card';

export interface ISectionProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    className?: string;
    mods?: SectionMods | SectionMods[];
    level?: 1 | 2 | 3;
}

export const Section: React.FunctionComponent<ISectionProps> = ({
    children,
    title,
    description,
    className,
    mods,
    level = 1,
}) => {
    const titleProps: React.HTMLProps<HTMLElement> = {
        className: 'text-medium-blue mb1',
        children: title,
    };
    const H = `h${level + 1}`;
    return (
        <fieldset className={classNames(className, mods, `level-${level} form-group mod-padding-children`)}>
            {title && <H {...titleProps} />}
            {description && <p className="description">{description}</p>}
            {children}
        </fieldset>
    );
};
