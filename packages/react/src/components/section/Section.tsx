import classNames from 'clsx';
import {ReactNode, FunctionComponent, PropsWithChildren} from 'react';

type SectionMods = 'mod-header-padding' | 'mod-form-top-bottom-padding' | 'material-card';

export interface ISectionProps {
    /**
     * The text or custom JSX content to the title of the Section
     */
    title?: ReactNode;
    /**
     * The text or custom JSX content to the description of the Section
     */
    description?: ReactNode;
    /**
     * Additionnal CSS class to set on the Section
     */
    className?: string;
    /**
     * Visual modifiers to apply on the component
     */
    mods?: SectionMods | SectionMods[];
    /**
     * Determines the level of importance of the section. Smaller number means bigger title, think of it as heading levels.
     *
     * @default 1
     */
    level?: 1 | 2 | 3;
}

/**
 * @deprecated Use Mantine instead
 */
export const Section: FunctionComponent<PropsWithChildren<ISectionProps>> = ({
    children,
    title,
    description,
    className,
    mods,
    level = 1,
}) => {
    const Heading = `h${level + 3}` as keyof JSX.IntrinsicElements;
    return (
        <fieldset className={classNames(className, mods, `level-${level} form-group mod-padding-children`)}>
            {title && <Heading className={classNames({'h4-book': level === 1})}>{title}</Heading>}
            {description && <p>{description}</p>}
            {children}
        </fieldset>
    );
};
