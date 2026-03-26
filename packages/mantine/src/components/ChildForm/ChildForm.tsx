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
import {ReactNode} from 'react';
import classes from './ChildForm.module.css';

export type ChildFormStylesNames = 'root' | 'paper';

export interface ChildFormProps extends CollapseProps, StylesApiProps<ChildFormFactory> {
    /**
     * Title of the child form.
     */
    title?: string;
    /**
     * Description of the child form.
     */
    description?: ReactNode;
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
    const hasDescription =
        description !== null && description !== undefined && description !== '' && typeof description !== 'boolean';

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
            <Paper p="md" {...getStyles('paper')}>
                {(title || hasDescription) && (
                    <Stack gap={0} mb="md">
                        {title && <Title order={5}>{title}</Title>}
                        {hasDescription && (
                            <Text component="div" c="gray.7">
                                {description}
                            </Text>
                        )}
                    </Stack>
                )}
                <Stack gap="md">{children}</Stack>
            </Paper>
        </Collapse>
    );
});

ChildForm.displayName = 'ChildForm';
