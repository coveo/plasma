import {createStyles} from '@mantine/core';

export interface HeaderBreadcrumbsStylesParams {}

export const useStyles = createStyles((theme, {}: HeaderBreadcrumbsStylesParams) => ({
    breadcrumb: {fontSize: theme.fontSizes.sm, fontWeight: 300},
    separator: {color: theme.colors.gray[5]},
}));
