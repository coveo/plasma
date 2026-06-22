import {BoxProps, ElementProps, factory, Factory, List, StylesApiProps, useProps, useStyles} from '@mantine/core';
import {ReactNode} from 'react';
import classes from './PrerequisitesList.module.css';
import {PrerequisitesListItem, PrerequisitesListItemStylesNames} from './PrerequisitesListItem.js';
import {PrerequisitesListProvider} from './PrerequisitesListContext';
import {PrerequisitesListIconStylesNames} from './PrerequisitesListIcon';

export type PrerequisitesListStylesName = 'root' | PrerequisitesListItemStylesNames | PrerequisitesListIconStylesNames;

export interface PrerequisitesListProps extends BoxProps, StylesApiProps<PrerequisitesListFactory>, ElementProps<'ul'> {
    /**
     * The content to display as a prerequisite.
     */
    children: ReactNode;
}

export type PrerequisitesListFactory = Factory<{
    props: PrerequisitesListProps;
    ref: HTMLUListElement;
    stylesNames: PrerequisitesListStylesName;
    vars: never;
    staticComponents: {
        Item: typeof PrerequisitesListItem;
    };
}>;

const defaultProps = {} satisfies Partial<PrerequisitesListProps>;

export const PrerequisitesList = factory<PrerequisitesListFactory>((_props, ref) => {
    const props = useProps('PrerequisitesList', defaultProps, _props);
    const {children, classNames, className, styles, style, unstyled, vars: _vars, ...others} = props;
    const getStyles = useStyles<PrerequisitesListFactory>({
        name: 'PrerequisitesList',
        classes,
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
    });

    return (
        <PrerequisitesListProvider value={{getStyles}}>
            <List
                ref={ref}
                {...getStyles('root')}
                spacing="sm"
                size="sm"
                classNames={{itemIcon: getStyles('itemIcon').className}}
                {...others}
            >
                {children}
            </List>
        </PrerequisitesListProvider>
    );
});

PrerequisitesList.displayName = 'PrerequisitesList';
PrerequisitesList.Item = PrerequisitesListItem;
