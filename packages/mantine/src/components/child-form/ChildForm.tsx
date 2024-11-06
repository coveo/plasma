import {
    Collapse,
    CollapseProps,
    Factory,
    Paper,
    polymorphicFactory,
    Stack,
    StylesApiProps,
    Text,
    Title,
    useProps,
    useStyles,
} from '@mantine/core';
import classes from './ChildForm.module.css';

export type ChildFormStylesNames = 'root' | 'paper';

export interface ChildFormProps extends CollapseProps, StylesApiProps<ChildFormFactory> {
    title?: string;
    description?: string;
}

type ChildFormFactory = Factory<{
    props: ChildFormProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: ChildFormStylesNames;
}>;

const defaultProps: Partial<ChildFormProps> = {};

export const ChildForm = polymorphicFactory<ChildFormFactory>((props, ref) => {
    const {className, children, style, classNames, styles, unstyled, vars, title, description, ...others} = useProps(
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
            <Paper bg="gray.0" p="md" {...getStyles('paper')}>
                {(title || description) && (
                    <Stack gap={0} mb="md">
                        {title && <Title order={5}>{title}</Title>}
                        {description && <Text c="gray.7">{description}</Text>}
                    </Stack>
                )}
                <Stack gap="md">{children}</Stack>
            </Paper>
        </Collapse>
    );
});
