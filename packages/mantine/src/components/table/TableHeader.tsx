import {createStyles, DefaultProps, Group, Selectors} from '@mantine/core';
import {FunctionComponent, ReactNode} from 'react';

const useStyles = createStyles((theme) => ({
    root: {
        position: 'sticky',
        top: 0,
        zIndex: 13, // skeleton is 11
        backgroundColor: theme.colors.gray[1],
        borderBottom: `1px solid ${theme.colors.gray[4]}`,
    },
}));

type TableHeaderStylesNames = Selectors<typeof useStyles>;
interface TableHeaderProps extends DefaultProps<TableHeaderStylesNames> {
    /* Children of header (ie: actions, datepicker, etc.) */
    children?: ReactNode;
}
export const TableHeader: FunctionComponent<TableHeaderProps> = ({
    classNames,
    styles,
    unstyled,
    children,
    ...others
}) => {
    const {classes} = useStyles(null, {name: 'TableHeader', classNames, styles, unstyled});
    return (
        <Group position="right" spacing="lg" className={classes.root} px="md" py="sm" {...others}>
            {children}
        </Group>
    );
};
