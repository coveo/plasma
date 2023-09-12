import {createStyles} from '@mantine/core';

export default createStyles((theme) => ({
    root: {
        flexDirection: 'row-reverse',
        flexWrap: 'wrap-reverse',
        background: `repeating-linear-gradient(${theme.colors.gray[1]}, ${theme.colors.gray[1]} 68px, ${theme.colors.gray[3]} 68px, ${theme.colors.gray[3]} 69px)`,
        borderBottom: `1px solid ${theme.colors.gray[3]}`,
    },
    multiSelectInfo: {
        display: 'flex',
    },
}));
