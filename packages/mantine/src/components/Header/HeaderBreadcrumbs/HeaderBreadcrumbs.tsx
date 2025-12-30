import {Breadcrumbs, BreadcrumbsProps, CompoundStylesApiProps, Factory, factory} from '@mantine/core';
import {useHeaderContext} from '../Header.context.js';

export type HeaderBreadcrumbsStyleNames = 'breadcrumbsRoot' | 'breadcrumbsSeparator';
export interface HeaderBreadcrumbsProps
    extends
        Omit<BreadcrumbsProps, 'classNames' | 'styles' | 'vars'>,
        CompoundStylesApiProps<HeaderBreadcrumbsFactory> {}

export type HeaderBreadcrumbsFactory = Factory<{
    props: HeaderBreadcrumbsProps;
    ref: HTMLDivElement;
    stylesNames: HeaderBreadcrumbsStyleNames;
    compound: true;
}>;

export const HeaderBreadcrumbs = factory<HeaderBreadcrumbsFactory>((props, ref) => {
    const {children, className, classNames, styles, style, vars: _vars, ...others} = props;
    const ctx = useHeaderContext();

    return (
        <Breadcrumbs
            ref={ref}
            classNames={{
                breadcrumb: ctx.getStyles('breadcrumbsRoot', {className, classNames, styles, style, props}).className,
                separator: ctx.getStyles('breadcrumbsSeparator', {classNames, styles, props}).className,
            }}
            {...others}
        >
            {children}
        </Breadcrumbs>
    );
});

HeaderBreadcrumbs.displayName = 'Header.Breadcrumbs';
