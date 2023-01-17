import classNames from 'clsx';
import {FunctionComponent, FormEvent, PropsWithChildren, FormHTMLAttributes} from 'react';

type FormMods = 'mod-header-padding' | 'mod-form-top-bottom-padding' | 'material-card';

export interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
    title?: string;
    className?: string;
    mods?: FormMods | FormMods[];
    noMargin?: boolean;
}

/**
 * @deprecated Use Mantine use-form instead: https://mantine.dev/form/use-form/
 */
export const Form: FunctionComponent<PropsWithChildren<IFormProps>> = ({
    children,
    className,
    title,
    mods,
    noMargin,
    ...props
}) => {
    const onSubmit = (submitEvent: FormEvent) => {
        submitEvent.preventDefault();
    };
    return (
        <form onSubmit={onSubmit} className="full-content" {...props}>
            <fieldset className={classNames('coveo-form mod-padding-children', {my2: !noMargin}, mods, className)}>
                {title && <h2 className="mb2">{title}</h2>}
                {children}
            </fieldset>
        </form>
    );
};
