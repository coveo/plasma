import {
    Collapse,
    CollapseProps,
    Factory,
    Paper,
    polymorphicFactory,
    StylesApiProps,
    useProps,
    useStyles,
} from '@mantine/core';
import classes from './ChildForm.module.css';

export type ChildFormStylesNames = 'root' | 'paper';

export interface ChildFormProps extends CollapseProps, StylesApiProps<ChildFormFactory> {}

type ChildFormFactory = Factory<{
    props: ChildFormProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: ChildFormStylesNames;
}>;

const defaultProps: Partial<ChildFormProps> = {};

export const ChildForm = polymorphicFactory<ChildFormFactory>((props, ref) => {
    const {className, children, style, classNames, styles, unstyled, vars, ...others} = useProps(
        'ChildForm',
        defaultProps,
        props,
    );

    const getStyles = useStyles<ChildFormFactory>({
        name: 'ChildForm',
        classes,
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
    });

    return (
        <Collapse ref={ref} {...others} {...getStyles('root')}>
            <Paper bg="gray.1" shadow="sm" p="lg" {...getStyles('paper')}>
                {children}
            </Paper>
        </Collapse>
    );
});
