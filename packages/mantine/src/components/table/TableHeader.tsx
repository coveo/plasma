import {createStyles, Group} from '@mantine/core';
import {FunctionComponent, PropsWithChildren} from 'react';

const useStyles = createStyles((theme) => ({
    header: {
        position: 'sticky',
        top: 0,
        zIndex: 13, // skeleton is 11
        backgroundColor: theme.colors.gray[1],
        borderBottom: `1px solid ${theme.colors.gray[4]}`,
    },
}));

export const TableHeader: FunctionComponent<PropsWithChildren> = ({children}) => {
    const {classes} = useStyles();
    return (
        <Group position="right" spacing="lg" className={classes.header} px="md" py="sm">
            {children}
        </Group>
    );
};
