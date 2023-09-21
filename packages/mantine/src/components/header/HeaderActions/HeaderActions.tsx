import {DefaultProps, Group, GroupProps, Selectors, useComponentDefaultProps} from '@mantine/core';
import {FunctionComponent} from 'react';
import {HeaderActionsStylesParams, useStyles} from './HeaderActions.styles';

export type HeaderActionsStylesNames = Selectors<typeof useStyles>;

export type HeaderActionsProps = GroupProps & DefaultProps<HeaderActionsStylesNames, HeaderActionsStylesParams>;

const defaultProps: Partial<HeaderActionsProps> = {
    spacing: 'sm',
};

export const HeaderActions: FunctionComponent<HeaderActionsProps> = (props: HeaderActionsProps) => {
    const {classNames, styles, unstyled, className, children, ...others} = useComponentDefaultProps(
        'PlasmaHeaderActions',
        defaultProps,
        props,
    );
    const {classes, cx} = useStyles({}, {name: 'PlasmaHeaderActions', classNames, styles, unstyled});

    return (
        <Group className={cx(className, classes.root)} {...others}>
            {children}
        </Group>
    );
};
